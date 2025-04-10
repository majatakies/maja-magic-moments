
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookingButton = () => {
  // WhatsApp contact info with updated number
  const whatsappNumber = "+918884447957";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a celebration at Maja Takies.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  return (
    <div id="book-now" className="fixed bottom-6 right-6 z-40">
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          className="bg-maja-primary hover:bg-maja-secondary transition-all duration-300 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <Calendar className="w-6 h-6" />
        </Button>
      </a>
    </div>
  );
};

export default BookingButton;
