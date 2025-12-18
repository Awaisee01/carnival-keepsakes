import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.3,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

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
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative py-32">
        <div className="orb w-[600px] h-[600px] top-0 left-0 bg-secondary/10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="faq-title font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
            FREQUENTLY ASKED
            <span className="block gradient-text-teal">QUESTIONS</span>
          </h1>
          <p className="faq-title text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about creating your Bacchanal photo book.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="faq-item bento-card border-none overflow-hidden"
                >
                  <AccordionTrigger className="font-display text-lg text-foreground hover:text-primary hover:no-underline px-6 py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="orb w-[500px] h-[500px] bottom-0 right-0 bg-primary/10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            STILL HAVE <span className="gradient-text">QUESTIONS?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to start preserving your carnival memories? We're here to help.
          </p>
          <Link to="/customize" className="btn-modern group">
            <span className="flex items-center gap-2">
              Customize Your Book
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
