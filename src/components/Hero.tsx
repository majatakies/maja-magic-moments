
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-maja-dark/70 to-maja-primary/40 -z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center -z-20"
        aria-hidden="true"
      ></div>
      
      <div className="section-container flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Make Every Celebration <span className="text-maja-gold">Magical</span>
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl mb-10 animate-fade-in">
          Private theater spaces for all your surprise celebrations. Create unforgettable moments in a uniquely immersive atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <a href="#book-now" className="btn-primary text-center">
            Book Your Experience
          </a>
          <a href="#spaces" className="btn-secondary text-center">
            Explore Our Spaces
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a href="#spaces" className="text-white flex flex-col items-center">
          <span className="mb-2 text-sm">Discover More</span>
          <ChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
