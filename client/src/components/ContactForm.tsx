import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
});

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) =>
      apiRequest("POST", "/api/contact", values),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "We'll get back to you soon!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    },
  });

  return (
    <div className="p-3 sm:p-6 rounded-xl bg-white shadow-md">
      <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6">Contact Us</h2>
      <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-6">
        We will get back to you asap!
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
          className="space-y-2 sm:space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="text-xs sm:text-base h-8 sm:h-10 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="text-xs sm:text-base h-8 sm:h-10 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="text-xs sm:text-base h-8 sm:h-10 rounded-lg"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Phone"
                    type="tel"
                    {...field}
                    className="text-xs sm:text-base h-8 sm:h-10 rounded-lg"
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full text-xs sm:text-base h-8 sm:h-10 rounded-lg"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sending..." : "Send"}
          </Button>
        </form>
      </Form>

      <div className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-600">
        You may also call us at 333-33-33
      </div>
    </div>
  );
}
