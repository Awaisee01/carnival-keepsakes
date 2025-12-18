import { Link } from "react-router-dom";
import { Heart, Users, Camera, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-carnival.jpg";
import bookMockup from "@/assets/book-mockup.jpg";
import bookCover from "@/assets/book-cover.jpg";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="font-handwritten text-xl md:text-2xl text-accent mb-2 animate-slide-up">
              15–16 February
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 text-shadow animate-slide-up animation-delay-100">
              WELCOME TO BACCHANAL
            </h1>
            <p className="font-handwritten text-2xl md:text-3xl text-primary-foreground/90 mb-4 animate-slide-up animation-delay-200">
              A celebration doesn't end when the music fades.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-slide-up animation-delay-300">
              Bacchanal is a customizable, curated photo book designed to preserve the energy, 
              color, and emotion of carnival—long after the last dance.
            </p>
            <Link 
              to="/customize" 
              className="btn-carnival animate-slide-up animation-delay-400 inline-block"
            >
              Customize Your Book
            </Link>
          </div>
        </div>
      </section>

      {/* Book Showcase Section */}
      <section className="py-20 bg-primary confetti-bg">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground text-center mb-4">
            YOUR MEMORIES, BEAUTIFULLY PRESERVED
          </h2>
          <p className="font-handwritten text-xl text-primary-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Every spread tells your story. Every page captures the vibes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={bookMockup} 
                alt="Bacchanal photo book open showing colorful carnival spreads" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-handwritten text-lg rotate-3">
                Modern binding
              </div>
            </div>
            <div className="relative">
              <img 
                src={bookCover} 
                alt="Bacchanal photo book cover with premium finish" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-handwritten text-lg -rotate-3">
                Premium quality
              </div>
            </div>
          </div>

          <p className="font-handwritten text-center text-primary-foreground/80 mt-12 text-lg">
            Your Bacchanal book will include your unique photos and stories.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-6xl text-secondary-foreground text-center mb-4">
            KEEP YOUR CARNIVAL MEMORIES ALIVE
          </h2>
          <p className="text-lg text-secondary-foreground/80 text-center mb-16 max-w-2xl mx-auto">
            From fleeting moments to unforgettable nights, Bacchanal transforms your carnival 
            experience into a tangible keepsake.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Heart className="w-10 h-10" />}
              title="Personal Storytelling"
              description="Curate your own narrative with photos and memories that matter most to you."
            />
            <FeatureCard 
              icon={<Users className="w-10 h-10" />}
              title="Collective Memory"
              description="Include photos from friends and crew to capture the full carnival experience."
            />
            <FeatureCard 
              icon={<Sparkles className="w-10 h-10" />}
              title="Aesthetic Preservation"
              description="Beautiful layouts and premium materials that honor your carnival vibes."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-olive">
        <div className="container mx-auto px-4 text-center">
          <Camera className="w-16 h-16 text-olive-foreground/60 mx-auto mb-6" />
          <blockquote className="font-handwritten text-2xl md:text-4xl text-olive-foreground max-w-3xl mx-auto mb-6">
            "Me and carnival have a contract. Every year we go hard like nail. 
            I on de roadway with truck bigger than humpback whale."
          </blockquote>
          <p className="text-olive-foreground/60">— The Greatest Show on Earth</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-accent-foreground mb-6">
            READY TO PRESERVE YOUR MEMORIES?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Start creating your personalized Bacchanal photo book today.
          </p>
          <Link to="/customize" className="btn-carnival">
            Start Customizing Your Book
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300">
    <div className="text-secondary-foreground mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="font-display text-2xl text-secondary-foreground mb-3">{title}</h3>
    <p className="text-secondary-foreground/80">{description}</p>
  </div>
);

export default Home;
