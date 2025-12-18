import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Users, FolderOpen, Sparkles, Heart, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CustomizedRitual = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ritual-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".ritual-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      if (stepsRef.current) {
        gsap.from(".step-card", {
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative py-32">
        <div className="orb w-[600px] h-[600px] top-0 right-0 bg-primary/10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="ritual-title font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
            CUSTOMIZE YOUR
            <span className="block gradient-text">BACCHANAL BOOK</span>
          </h1>
          <p className="ritual-subtitle text-xl text-muted-foreground max-w-2xl mx-auto">
            Your memories deserve more than a camera roll. Create a book that reflects 
            your experience, your people, your version of Bacchanal.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-handwritten text-xl mb-4 block">Before You Start</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              PREPARE YOUR MEMORIES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepCard 
              number="01"
              icon={<Camera className="w-8 h-8" />}
              title="Collect All Photos"
              description="Gather every carnival photo from your phone, including those hidden gems from late nights."
            />
            <StepCard 
              number="02"
              icon={<Users className="w-8 h-8" />}
              title="Ask Your Crew"
              description="Save images from friends and group chats. The best memories are shared ones."
            />
            <StepCard 
              number="03"
              icon={<FolderOpen className="w-8 h-8" />}
              title="Organize Favorites"
              description="Create a folder with your top picks. Quality over quantity for the best book."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative noise-overlay">
        <div className="absolute inset-0 bg-muted/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              MAKE IT <span className="gradient-text">YOURS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureItem 
              icon={<Sparkles className="w-6 h-6" />}
              title="Choose Your Layout"
              description="Select from curated spread designs that showcase your photos beautifully."
            />
            <FeatureItem 
              icon={<Heart className="w-6 h-6" />}
              title="Add Personal Touches"
              description="Include captions, quotes, and memories that capture your carnival spirit."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="orb w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2 bg-secondary/10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-handwritten text-2xl md:text-3xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            "Bacchanal is not just a book. It's a ritual of remembering."
          </p>
          <Link to="/customize" className="btn-modern group">
            <span className="flex items-center gap-2">
              Start Customizing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <p className="mt-8 text-muted-foreground text-sm">
            Questions? Check our <Link to="/faqs" className="text-primary hover:underline">FAQs</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description 
}: { 
  number: string;
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="step-card bento-card p-8 relative">
    <div className="absolute top-6 right-6 font-display text-5xl text-foreground/5">
      {number}
    </div>
    <div className="text-primary mb-6">{icon}</div>
    <h3 className="font-display text-2xl text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeatureItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="bento-card p-8 flex gap-6">
    <div className="text-primary shrink-0">{icon}</div>
    <div>
      <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

export default CustomizedRitual;
