import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 14 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time through your account settings."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time, and you won't be charged for the next billing cycle."
  },
  {
    question: "How does support work?",
    answer: "We provide 24/7 support via email and live chat. Our typical response time is under 2 hours."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
