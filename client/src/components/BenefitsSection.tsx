import { ArrowUpRight, Zap, Shield } from "lucide-react";
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
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Increase your profits
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="mb-4 text-primary">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
