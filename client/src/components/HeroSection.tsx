import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

export default function HeroSection() {
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <section className="min-h-screen pt-16 container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 items-center h-[calc(100vh-4rem)]">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Elevate your pricing strategy with Informed
            <span className="text-yellow-400">Noon</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Repricing software that is powerful, not overpowering. Built for Professional Amazon and Walmart sellers.
          </p>
          <div className="space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Contact Us</Button>
              </DialogTrigger>
              <DialogContent>
                <ContactForm />
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {!videoStarted ? (
            <Button 
              className="absolute inset-0 w-full h-full"
              variant="ghost"
              onClick={() => setVideoStarted(true)}
            >
              Click to Play Demo
            </Button>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/your_video_id?autoplay=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}