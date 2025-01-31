import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <section className="relative min-h-[90vh] pt-24 pb-20 container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Elevate your pricing strategy with Informed
            <span className="text-yellow-400">noon</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Repricing software that is powerful, not overpowering. Built for Professional Amazon and Walmart sellers.
          </p>
          <div className="space-y-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Contact Us</Button>
              </DialogTrigger>
              <DialogContent>
                <ContactForm />
              </DialogContent>
            </Dialog>

            <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium">Be the first and best in offers list</p>
                <p className="text-sm text-muted-foreground">Start your 7-day free trial today</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary/30 to-yellow-400/30 rounded-full blur-3xl opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-yellow-400/30 to-primary/30 rounded-full blur-2xl opacity-20 animate-pulse" />
          </div>

          <div className="relative w-[240px] h-[480px]">
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-black rounded-[3rem] shadow-xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-b-3xl" />
              {/* Inner Screen */}
              <div className="absolute top-2 right-2 bottom-2 left-2 bg-white rounded-[2.5rem] overflow-hidden">
                {!videoStarted ? (
                  <Button 
                    className="absolute inset-0 w-full h-full bg-black/5"
                    variant="ghost"
                    onClick={() => setVideoStarted(true)}
                  >
                    Click to Play Demo
                  </Button>
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/demo.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}