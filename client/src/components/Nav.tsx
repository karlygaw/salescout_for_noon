import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "/logo1.png"; 
import { Menu, X, Zap, HelpCircle, Rocket } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="ml-4">
            <img src={Logo} alt="Informednoon Logo" className="h-8" />
          </Link>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="#benefits" className="flex items-center">
                <Zap className="h-4 w-4 mr-2" /> Benefits
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#faq" className="flex items-center">
                <HelpCircle className="h-4 w-4 mr-2" /> FAQ
              </Link>
            </Button>
            <Button className="flex items-center">
              <Rocket className="h-4 w-4 mr-2" /> Start Free Trial
            </Button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-16 right-0 h-full w-64 bg-white shadow-lg z-50">
            <div className="flex flex-col space-y-4 p-4">
              <Button variant="ghost" asChild className="flex items-center">
                <Link href="#benefits" onClick={() => setIsMenuOpen(false)}>
                  <Zap className="h-4 w-4 mr-2" /> Benefits
                </Link>
              </Button>
              <Button variant="ghost" asChild className="flex items-center">
                <Link href="#faq" onClick={() => setIsMenuOpen(false)}>
                  <HelpCircle className="h-4 w-4 mr-2" /> FAQ
                </Link>
              </Button>
              <Button onClick={() => setIsMenuOpen(false)} className="flex items-center">
                <Rocket className="h-4 w-4 mr-2" /> Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="pt-16">
      </div>
    </>
  );
}