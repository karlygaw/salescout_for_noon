import { ArrowUpRight, Zap, Shield, Box, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <ArrowUpRight className="h-6 w-6" />,
    title: "Reprice upwards",
    description: "Never leave money on the table, your prices need to go up to maximize margins whenever possible."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Grow your margins",
    description: "We don't increase sales by just driving down the price, our AI-powered repricer software is optimized to make you the most money possible."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Reset Price Wars and Protect Profit",
    description: "Our Price Reset and Smart Max features work together to prevent a race to the bottom and keep listings from getting removed."
  }
];
export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Strategies that work for you
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Video with Black Frame */}
          <div className="relative">
            <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden border-4 border-black shadow-lg">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/NonnLanding.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div>
            
            <p className="text-lg text-gray-600 mb-8">
              Let our AI-powered strategies take the wheel, or customize your own repricing strategy to optimize your prices exactly the way you want.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Win and keep the Buy Box
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our Get The Buy Box algorithm does all the work to keep your prices exactly where you want them, completely hands-off.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Find your optimal price regardless of competition
                  </h3>
                </div>
                <p className="text-gray-600">
                  The Optimal Price algorithm uses AI to optimize your prices, no matter what your competition landscape looks like.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Maintain sales velocity
                  </h3>
                </div>
                <p className="text-gray-600">
                  Use the Private Label algorithm to find the best price that will maximize your profits while still maintaining sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
