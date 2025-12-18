import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is Bacchanal?",
      answer: "Bacchanal is a customizable photo book designed specifically for carnival lovers. It's a premium keepsake that transforms your carnival photos and memories into a beautifully curated book you can treasure forever."
    },
    {
      question: "How do I customize my book?",
      answer: "Start by collecting and organizing your favorite carnival photos. Then use our online tool to arrange them into pre-designed layouts. You can add captions, quotes, and personal touches to make it uniquely yours."
    },
    {
      question: "Can I include photos from friends?",
      answer: "Absolutely! We encourage you to gather photos from your crew, group chats, and anyone who shared in your carnival experience. The best memories are collective ones."
    },
    {
      question: "What is the delivery timeline?",
      answer: "Once you've finalized your book design, expect delivery within 2-3 weeks. We take care to ensure every book meets our premium quality standards."
    },
    {
      question: "What size is the photo book?",
      answer: "Our standard Bacchanal book is a generous 10\" x 10\" square format, perfect for showcasing your carnival memories with stunning full-page spreads."
    },
    {
      question: "Can I order multiple copies?",
      answer: "Yes! Many customers order extra copies as gifts for friends who shared in their carnival experience. Volume discounts are available for bulk orders."
    },
    {
      question: "What paper quality do you use?",
      answer: "We use premium 200gsm silk paper with a protective laminate coating. The cover features a hardback finish with your choice of matte or gloss."
    },
    {
      question: "Is there a minimum number of photos required?",
      answer: "We recommend at least 30-40 photos for a well-rounded 40-page book, but our layouts are flexible to accommodate various photo counts."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-secondary-foreground mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Everything you need to know about creating your Bacchanal photo book.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-sm border-none"
                >
                  <AccordionTrigger className="font-display text-lg text-card-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Ready to start preserving your carnival memories? We're here to help.
          </p>
          <Link to="/customize" className="btn-teal">
            Customize Your Book
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
