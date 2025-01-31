import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
import ContactForm from "./ContactForm";

export default function HeroSection() {
  const [video1Started, setVideo1Started] = useState(false);
  const [video2Started, setVideo2Started] = useState(false);

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
                <DialogTitle>Contact Us</DialogTitle>
                <ContactForm />
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
        <div className="space-y-4">
          {/* First Video Section */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {!video1Started ? (
              <Button 
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30"
                variant="ghost"
                onClick={() => setVideo1Started(true)}
              >
                <Play className="h-12 w-12 text-white" />
              </Button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/your_video_id_1?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Second Video Section */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {!video2Started ? (
              <Button 
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30"
                variant="ghost"
                onClick={() => setVideo2Started(true)}
              >
                <Play className="h-12 w-12 text-white" />
              </Button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/your_video_id_2?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}