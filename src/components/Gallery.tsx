
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Birthday celebration with friends",
      category: "birthday"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Anniversary celebration",
      category: "anniversary"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Bridal shower celebration",
      category: "bridal"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Promotion party",
      category: "promotion"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Baby shower celebration",
      category: "baby"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Romantic date night",
      category: "romantic"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Family get-together",
      category: "family"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Friends movie night",
      category: "friends"
    },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Gallery of Memories</h2>
        <p className="section-subtitle">
          Glimpses of magical moments created at Maja Takies
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-maja-primary/0 group-hover:bg-maja-primary/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Create Your Own Memories
          </a>
        </div>
      </div>
      
      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 z-10 p-2 bg-black/50 text-white rounded-full"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery enlarged view" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
