import { Link } from "react-router-dom";
import { Camera, Users, FolderOpen, Sparkles, Heart } from "lucide-react";

const CustomizedRitual = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6">
            CUSTOMIZE YOUR BACCHANAL BOOK
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Your memories deserve more than a camera roll. Create a book that reflects 
            your experience, your people, your version of Bacchanal.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-4">
            PREPARE YOUR MEMORIES
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Before you begin customizing, gather all your carnival moments in one place.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard 
              number={1}
              icon={<Camera className="w-8 h-8" />}
              title="Collect All Photos"
              description="Gather every carnival photo from your phone, including those hidden gems from late nights."
            />
            <StepCard 
              number={2}
              icon={<Users className="w-8 h-8" />}
              title="Ask Your Crew"
              description="Save images from friends and group chats. The best memories are shared ones."
            />
            <StepCard 
              number={3}
              icon={<FolderOpen className="w-8 h-8" />}
              title="Organize Favorites"
              description="Create a folder with your top picks. Quality over quantity for the best book."
            />
          </div>
        </div>
      </section>

      {/* Customization Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-secondary-foreground text-center mb-12">
            MAKE IT YOURS
          </h2>

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
      <section className="py-20 bg-olive">
        <div className="container mx-auto px-4 text-center">
          <p className="font-handwritten text-2xl md:text-3xl text-olive-foreground mb-8 max-w-2xl mx-auto">
            "Bacchanal is not just a book. It's a ritual of remembering."
          </p>
          <Link to="/customize" className="btn-carnival">
            Start Customizing
          </Link>
          <p className="mt-8 text-olive-foreground/60 text-sm">
            Questions? Check our <Link to="/faqs" className="underline hover:text-olive-foreground">FAQs</Link>
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
  number: number;
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="relative bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-display text-xl text-primary-foreground">
      {number}
    </div>
    <div className="text-primary mb-4">
      {icon}
    </div>
    <h3 className="font-display text-xl text-card-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
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
  <div className="flex gap-4 bg-secondary-foreground/10 rounded-xl p-6">
    <div className="text-secondary-foreground shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-display text-xl text-secondary-foreground mb-1">{title}</h3>
      <p className="text-secondary-foreground/80 text-sm">{description}</p>
    </div>
  </div>
);

export default CustomizedRitual;
