import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Informed<span className="text-yellow-400">noon</span>
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#benefits">Benefits</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#faq">FAQ</Link>
          </Button>
          <Button>Start Free Trial</Button>
        </div>
      </div>
    </nav>
  );
}