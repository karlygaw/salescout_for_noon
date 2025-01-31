import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does SaleScout work?",
    answer: "SaleScout uses intelligent price automation to ensure your products remain at the top among sellers on Noon. The system analyzes competitor data and automatically adjusts your prices to maximize sales and profits."
  },
  {
    question: "Why does my company need SaleScout?",
    answer: "Over 80% of sales on Noon go to sellers who rank at the top. SaleScout guarantees that your store stays ahead, giving you a competitive edge and increasing your revenue."
  },
  {
    question: "Will anyone have access to my data?",
    answer: "We understand your concerns about security and privacy. That’s why all your data is encrypted and never shared with third parties. You also have full control and can revoke access to your store at any time through your Noon seller account."
  },
  {
    question: "Can I test the system before purchasing?",
    answer: "Yes, we offer a 3-day free trial. You’ll be able to see how SaleScout performs in real conditions and experience the benefits of our system firsthand."
  },
  {
    question: "Can I manage the system myself?",
    answer: "Absolutely! SaleScout has a simple and intuitive interface, allowing you to control pricing settings, choose strategies, and access sales analytics with ease."
  },
  {
    question: "How quickly will I see results?",
    answer: "SaleScout delivers results within hours—your store moves up the rankings, and order flow increases almost immediately."
  },
  {
    question: "What if I have questions?",
    answer: "Our support team is always available. You can reach us via WhatsApp or use the help section in the system."
  },
  {
    question: "What happens after the trial period ends?",
    answer: "You can choose a suitable plan and continue using SaleScout. If you decide not to continue, all settings and changes remain yours. You’ll only be billed if you choose to keep boosting your sales."
  },
  {
    question: "How is SaleScout better than other pricing systems?",
    answer: "SaleScout updates prices in real-time, making it faster than other solutions and keeping you ahead of the competition. Our smart algorithms don’t just lower prices to secure top rankings—they also strategically increase them to maximize your profits when competitors allow."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div className="animate-fadeIn">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
