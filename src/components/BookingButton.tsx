
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const BookingButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // WhatsApp contact info - replace with actual number
  const whatsappNumber = "+918888888888";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a celebration at Maja Takies.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  return (
    <>
      <div id="book-now" className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="bg-maja-primary hover:bg-maja-secondary transition-all duration-300 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <Calendar className="w-6 h-6" />
        </Button>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book Your Experience</DialogTitle>
            <DialogDescription>
              Choose your preferred way to book your celebration at Maja Takies
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <a 
              href="#contact" 
              className="btn-primary block text-center"
              onClick={() => setIsDialogOpen(false)}
            >
              Inquiry Form
            </a>
            
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp"
            >
              Contact on WhatsApp
            </a>
            
            <a 
              href="tel:+918888888888" 
              className="bg-maja-secondary hover:bg-maja-primary text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              Call Us
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
