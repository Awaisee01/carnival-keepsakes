import { Link } from "react-router-dom";
import { Heart, Users, Camera, Sparkles, BookOpen, Clock, CheckCircle2, Star, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-carnival.jpg";
import bookMockup from "@/assets/book-mockup.jpg";
import bookCover from "@/assets/book-cover.jpg";
import bookSpread1 from "@/assets/book-spread-1.jpg";
import bookSpread2 from "@/assets/book-spread-2.jpg";
import bookSpread3 from "@/assets/book-spread-3.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Calendar className="w-4 h-4 text-accent" />
              <span className="font-handwritten text-lg text-accent">15–16 February 2026</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 text-shadow leading-tight"
            >
              WELCOME TO<br />
              <span className="text-primary">BACCHANAL</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="font-handwritten text-2xl md:text-3xl text-primary-foreground/90 mb-4"
            >
              A celebration doesn't end when the music fades.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-primary-foreground/70 mb-8 max-w-xl"
            >
              Bacchanal is a customizable, curated photo book designed to preserve the energy, 
              color, and emotion of carnival—long after the last dance.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link 
                to="/customize" 
                className="btn-carnival group"
              >
                Customize Your Book
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/faqs" 
                className="inline-flex items-center justify-center px-8 py-4 font-display text-xl rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Countdown / Event Info */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <StatCard number="40+" label="Pages of Memories" />
            <StatCard number="100+" label="Photos Per Book" />
            <StatCard number="Premium" label="Quality Materials" />
            <StatCard number="Forever" label="Lasting Memories" />
          </motion.div>
        </div>
      </section>

      {/* Book Showcase Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 confetti-bg opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">
              YOUR MEMORIES, BEAUTIFULLY PRESERVED
            </h2>
            <p className="font-handwritten text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Every spread tells your story. Every page captures the vibes.
            </p>
          </motion.div>

          {/* Main book showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={bookMockup} 
                alt="Bacchanal photo book open showing colorful carnival spreads" 
                className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-handwritten text-xl shadow-lg"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                ✨ Modern binding
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-3xl text-primary-foreground">
                MORE THAN JUST PHOTOS
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                Your Bacchanal book will include your unique photos and stories, 
                carefully curated to capture the essence of your carnival experience.
              </p>
              <div className="space-y-4">
                <FeatureListItem text="Premium 200gsm silk paper" />
                <FeatureListItem text="Hardback cover with protective laminate" />
                <FeatureListItem text="Lay-flat binding for seamless spreads" />
                <FeatureListItem text="Curated layout templates" />
              </div>
            </motion.div>
          </div>

          {/* Gallery of spreads */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GalleryImage src={bookSpread1} alt="Carnival dancers spread" caption="Capture the vibes" />
            <GalleryImage src={bookSpread2} alt="Street celebration spread" caption="Roadway memories" />
            <GalleryImage src={bookSpread3} alt="Festival hands spread" caption="Your crew, your story" />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block font-handwritten text-xl text-primary mb-2">Simple Process</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              HOW IT WORKS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creating your Bacchanal photo book is easy. Follow these three simple steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProcessStep 
              number={1}
              icon={<Camera className="w-8 h-8" />}
              title="Collect Your Photos"
              description="Gather all your carnival photos and videos. Include shots from friends, group chats, and those late-night memories."
            />
            <ProcessStep 
              number={2}
              icon={<BookOpen className="w-8 h-8" />}
              title="Choose Your Layout"
              description="Select from our curated templates designed to showcase your carnival experience beautifully."
            />
            <ProcessStep 
              number={3}
              icon={<Sparkles className="w-8 h-8" />}
              title="Receive Your Book"
              description="We print and deliver your premium photo book within 2-3 weeks. Ready to treasure forever."
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-foreground/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl text-secondary-foreground mb-4">
              KEEP YOUR CARNIVAL MEMORIES ALIVE
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              From fleeting moments to unforgettable nights, Bacchanal transforms your carnival 
              experience into a tangible keepsake.
            </p>
          </motion.div>

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

      {/* Testimonials */}
      <section className="py-24 bg-olive">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-olive-foreground mb-4">
              THE GREATEST SHOW ON EARTH
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
              quote="Me and carnival have a contract. Every year we go hard like nail."
              author="Carnival Lover"
            />
            <TestimonialCard 
              quote="Bacchanal is not just a book. It's a ritual of remembering."
              author="Festival Regular"
            />
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-accent-foreground mb-4">
              WHAT'S INCLUDED
            </h2>
            <p className="text-accent-foreground/80 max-w-xl mx-auto">
              Every Bacchanal book comes packed with premium features
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <IncludedItem icon={<BookOpen />} text="40+ Pages" />
            <IncludedItem icon={<Star />} text="Premium Paper" />
            <IncludedItem icon={<Clock />} text="2-3 Week Delivery" />
            <IncludedItem icon={<Heart />} text="Made with Love" />
          </div>
        </div>
      </section>

      {/* Book Cover Feature */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-handwritten text-xl text-primary mb-2 block">Premium Quality</span>
              <h2 className="font-display text-4xl md:text-5xl text-background mb-6">
                A COVER WORTH KEEPING
              </h2>
              <p className="text-background/70 text-lg mb-8">
                Your Bacchanal book features a stunning hardback cover with premium materials 
                that will last a lifetime. Each book is crafted with attention to detail.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-background/80">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Hardback with matte or gloss finish</span>
                </li>
                <li className="flex items-center gap-3 text-background/80">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Protective laminate coating</span>
                </li>
                <li className="flex items-center gap-3 text-background/80">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>10" x 10" square format</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src={bookCover} 
                alt="Bacchanal premium book cover" 
                className="rounded-2xl shadow-2xl transform hover:rotate-2 transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-handwritten text-lg">
                ✨ Premium finish
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-handwritten text-2xl text-primary-foreground/80 mb-4 block">
              Don't let the memories fade
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6">
              READY TO PRESERVE YOUR MEMORIES?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10 max-w-xl mx-auto">
              Start creating your personalized Bacchanal photo book today.
            </p>
            <Link 
              to="/customize" 
              className="inline-flex items-center justify-center px-10 py-5 font-display text-2xl rounded-full bg-background text-foreground hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              Start Customizing Your Book
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Component definitions
const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="p-6">
    <div className="font-display text-4xl md:text-5xl text-primary mb-2">{number}</div>
    <div className="text-background/60 text-sm uppercase tracking-wider">{label}</div>
  </div>
);

const FeatureListItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
    <span className="text-primary-foreground/90">{text}</span>
  </div>
);

const GalleryImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-xl"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full aspect-square object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <span className="font-handwritten text-lg text-primary-foreground">{caption}</span>
    </div>
  </motion.div>
);

const ProcessStep = ({ 
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
  <motion.div 
    className="relative text-center group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: number * 0.1 }}
  >
    <div className="mb-6 relative">
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
        <span className="text-primary">{icon}</span>
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-display text-lg text-primary-foreground">
        {number}
      </div>
    </div>
    <h3 className="font-display text-2xl text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <motion.div 
    className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-secondary-foreground/15 transition-all duration-300 group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="text-secondary-foreground mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="font-display text-2xl text-secondary-foreground mb-3">{title}</h3>
    <p className="text-secondary-foreground/80">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, author }: { quote: string; author: string }) => (
  <motion.div 
    className="bg-olive-foreground/10 backdrop-blur-sm rounded-2xl p-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="text-olive-foreground/30 text-6xl font-serif leading-none mb-4">"</div>
    <p className="font-handwritten text-xl text-olive-foreground mb-4">{quote}</p>
    <p className="text-olive-foreground/60 text-sm">— {author}</p>
  </motion.div>
);

const IncludedItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <motion.div 
    className="bg-accent-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-accent-foreground/80 mb-3 flex justify-center">{icon}</div>
    <span className="font-display text-lg text-accent-foreground">{text}</span>
  </motion.div>
);

export default Home;
