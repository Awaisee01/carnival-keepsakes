import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Users, Sparkles, BookOpen, ArrowRight, Calendar, Star, Zap, Camera } from "lucide-react";
import heroImage from "@/assets/hero-carnival.jpg";
import bookMockup from "@/assets/book-mockup.jpg";
import bookCover from "@/assets/book-cover.jpg";
import bookSpread1 from "@/assets/book-spread-1.jpg";
import bookSpread2 from "@/assets/book-spread-2.jpg";
import bookSpread3 from "@/assets/book-spread-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power3.out",
        stagger: 0.15,
      });

      // Floating orbs animation
      gsap.to(".orb-1", {
        x: 50,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-2", {
        x: -40,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-3", {
        x: 30,
        y: 50,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Stats counter animation
      if (statsRef.current) {
        gsap.from(".stat-item", {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      // Showcase section animations
      if (showcaseRef.current) {
        gsap.from(".showcase-title", {
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 70%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(".showcase-image", {
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 60%",
          },
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      // Bento grid animations
      if (bentoRef.current) {
        gsap.from(".bento-item", {
          scrollTrigger: {
            trigger: bentoRef.current,
            start: "top 70%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });
      }

      // Features section
      if (featuresRef.current) {
        gsap.from(".feature-card", {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      // CTA section
      if (ctaRef.current) {
        gsap.from(".cta-content", {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 70%",
          },
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Parallax effect on scroll
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        scale: 1.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-16">
        {/* Background */}
        <div className="hero-bg absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>

        {/* Floating orbs */}
        <div className="orb orb-1 w-[500px] h-[500px] -top-40 -right-40 bg-primary/20 animate-pulse-glow" />
        <div className="orb orb-2 w-[400px] h-[400px] top-1/2 -left-40 bg-secondary/20 animate-pulse-glow" />
        <div className="orb orb-3 w-[300px] h-[300px] bottom-20 right-1/4 bg-accent/15 animate-pulse-glow" />

        <div ref={heroContentRef} className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-title inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-8">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">15–16 February 2026</span>
            </div>

            <h1 className="hero-title font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none tracking-tight">
              WELCOME TO
              <span className="block gradient-text">BACCHANAL</span>
            </h1>

            <p className="hero-subtitle font-handwritten text-2xl md:text-3xl text-foreground/70 mb-4">
              A celebration doesn't end when the music fades.
            </p>

            <p className="hero-subtitle text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transform your carnival memories into a premium, customizable photo book 
              designed to preserve every moment of magic.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/customize" className="hero-cta btn-modern group">
                <span className="flex items-center gap-2">
                  Customize Your Book
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/faqs" className="hero-cta btn-outline-modern">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="40+" label="Premium Pages" icon={<BookOpen />} />
            <StatCard number="100+" label="Photo Slots" icon={<Camera />} />
            <StatCard number="2-3" label="Week Delivery" icon={<Zap />} />
            <StatCard number="∞" label="Memories Saved" icon={<Heart />} />
          </div>
        </div>
      </section>

      {/* Book Showcase */}
      <section ref={showcaseRef} className="py-32 relative">
        <div className="orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 bg-primary/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="showcase-title inline-block text-primary font-handwritten text-xl mb-4">Premium Quality</span>
            <h2 className="showcase-title font-display text-5xl md:text-7xl text-foreground mb-6">
              YOUR MEMORIES,
              <span className="block gradient-text-teal">BEAUTIFULLY PRESERVED</span>
            </h2>
          </div>

          <div className="showcase-image relative max-w-4xl mx-auto">
            <div className="gradient-border p-1">
              <img 
                src={bookMockup} 
                alt="Bacchanal photo book" 
                className="w-full rounded-2xl"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-6 -left-6 glass-card px-4 py-2 animate-float">
              <span className="font-handwritten text-lg text-foreground">✨ Lay-flat binding</span>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
              <span className="font-handwritten text-lg text-foreground">🎨 Premium paper</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section ref={bentoRef} className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              INSIDE YOUR BOOK
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every spread captures the energy and emotion of carnival
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Large card */}
            <div className="bento-item md:col-span-2 md:row-span-2">
              <div className="bento-card h-full p-2">
                <img 
                  src={bookSpread1} 
                  alt="Carnival dancers" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4">
                    <h3 className="font-display text-2xl text-foreground mb-1">Capture the Vibes</h3>
                    <p className="text-sm text-foreground/70">Every costume, every moment of joy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small cards */}
            <div className="bento-item">
              <div className="bento-card aspect-square p-2">
                <img 
                  src={bookSpread2} 
                  alt="Street celebration" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card px-3 py-2">
                    <p className="font-handwritten text-sm text-foreground">Roadway memories</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-item">
              <div className="bento-card aspect-square p-2">
                <img 
                  src={bookSpread3} 
                  alt="Festival hands" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card px-3 py-2">
                    <p className="font-handwritten text-sm text-foreground">Your crew, your story</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-secondary font-handwritten text-xl mb-4">Simple Process</span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProcessCard 
              number="01"
              title="Collect Photos"
              description="Gather all your carnival shots from friends and group chats."
              color="primary"
            />
            <ProcessCard 
              number="02"
              title="Choose Layout"
              description="Select from our curated templates designed for impact."
              color="secondary"
            />
            <ProcessCard 
              number="03"
              title="Receive Book"
              description="We print and deliver your premium keepsake in 2-3 weeks."
              color="accent"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 relative">
        <div className="orb w-[500px] h-[500px] bottom-0 right-0 bg-secondary/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              WHY <span className="gradient-text">BACCHANAL</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard 
              icon={<Heart className="w-8 h-8" />}
              title="Personal Stories"
              description="Your narrative, your memories, beautifully arranged."
              gradient="from-primary/20 to-pink/20"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Collective Memory"
              description="Include photos from your entire crew."
              gradient="from-secondary/20 to-olive/20"
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8" />}
              title="Premium Quality"
              description="Museum-grade materials that last forever."
              gradient="from-accent/20 to-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Book Cover Feature */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-primary font-handwritten text-xl mb-4 block">Premium Materials</span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 leading-tight">
                A COVER WORTH
                <span className="block gradient-text">KEEPING</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Each book features a stunning hardback cover with your choice of matte or gloss finish, 
                designed to protect your memories for generations.
              </p>
              
              <div className="space-y-4">
                <FeatureListItem text="10&quot; × 10&quot; square format" />
                <FeatureListItem text="Hardback with protective laminate" />
                <FeatureListItem text="200gsm premium silk paper" />
                <FeatureListItem text="Lay-flat binding for seamless spreads" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src={bookCover} 
                alt="Premium book cover" 
                className="relative rounded-3xl shadow-2xl transform hover:rotate-2 hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 relative noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-12 h-12 text-accent mx-auto mb-8" />
            <blockquote className="font-handwritten text-3xl md:text-5xl text-foreground mb-8 leading-relaxed">
              "Me and carnival have a contract. Every year we go hard like nail."
            </blockquote>
            <p className="text-muted-foreground">— The Greatest Show on Earth</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-32 relative">
        <div className="orb w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/15" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="cta-content max-w-4xl mx-auto text-center">
            <span className="font-handwritten text-2xl text-muted-foreground mb-6 block">
              Don't let the memories fade
            </span>
            <h2 className="font-display text-5xl md:text-8xl text-foreground mb-8 leading-none">
              READY TO
              <span className="block gradient-text">PRESERVE YOUR MEMORIES?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Start creating your personalized Bacchanal photo book today.
            </p>
            <Link to="/customize" className="btn-modern group text-2xl px-12 py-6">
              <span className="flex items-center gap-3">
                Start Customizing
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Component definitions
const StatCard = ({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) => (
  <div className="stat-item bento-card p-6 text-center">
    <div className="text-primary/60 mb-3 flex justify-center">{icon}</div>
    <div className="font-display text-4xl md:text-5xl gradient-text mb-2">{number}</div>
    <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
  </div>
);

const ProcessCard = ({ number, title, description, color }: { number: string; title: string; description: string; color: string }) => (
  <div className="bento-card p-8 text-center group">
    <div className={`text-${color} font-display text-6xl mb-4 opacity-30 group-hover:opacity-60 transition-opacity`}>
      {number}
    </div>
    <h3 className="font-display text-2xl text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description, gradient }: { icon: React.ReactNode; title: string; description: string; gradient: string }) => (
  <div className="feature-card bento-card p-8 relative overflow-hidden group">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative z-10">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="font-display text-2xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const FeatureListItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 group">
    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
      <Sparkles className="w-3 h-3 text-primary" />
    </div>
    <span className="text-foreground/80">{text}</span>
  </div>
);

export default Home;
