
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Heart, Trophy } from 'lucide-react';

const Promotions = () => {
  const currentSeason = "ipl"; // This could be dynamic based on current date
  
  const promotions = {
    ipl: {
      title: "IPL Season Special",
      description: "Experience the thrill of IPL matches on the big screen with your friends and family!",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      offer: "15% off on Friend Den bookings for IPL match screenings",
      validity: "Valid during the IPL season",
      color: "bg-blue-600"
    },
    valentines: {
      title: "Valentine's Day Package",
      description: "Make this Valentine's Day unforgettable with our special romantic package for couples.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      offer: "Special price for Love Nest with complimentary champagne and roses",
      validity: "Available Feb 1-14",
      color: "bg-pink-600"
    },
    seasonal: {
      title: "Holiday Season Celebrations",
      description: "Celebrate the festive season with your loved ones in a unique setting at Maja Takies.",
      icon: CalendarDays,
      image: "https://images.unsplash.com/photo-1514446572498-157780430535?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      offer: "Book any room and get free holiday-themed decorations",
      validity: "November through January",
      color: "bg-emerald-600"
    }
  };

  return (
    <section id="promotions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <h2 className="section-title">Special Promotions</h2>
        <p className="section-subtitle">
          Exclusive offers to make your celebration even more special
        </p>
        
        <Tabs defaultValue={currentSeason} className="w-full max-w-4xl mx-auto mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ipl" className="text-sm sm:text-base">IPL Season</TabsTrigger>
            <TabsTrigger value="valentines" className="text-sm sm:text-base">Valentine's Day</TabsTrigger>
            <TabsTrigger value="seasonal" className="text-sm sm:text-base">Holiday Season</TabsTrigger>
          </TabsList>
          
          {Object.entries(promotions).map(([key, promo]) => {
            const Icon = promo.icon;
            
            return (
              <TabsContent key={key} value={key} className="mt-6">
                <Card>
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto">
                      <img 
                        src={promo.image} 
                        alt={promo.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader className={`${promo.color} text-white`}>
                        <div className="flex items-center">
                          <Icon className="mr-2" />
                          <CardTitle>{promo.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <CardDescription className="text-base mb-4">{promo.description}</CardDescription>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-semibold text-maja-primary">Special Offer:</h4>
                          <p className="mt-2">{promo.offer}</p>
                          <p className="text-sm text-gray-500 mt-2">
                            <span className="font-medium">Validity:</span> {promo.validity}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-maja-primary hover:bg-maja-secondary">
                          Book This Offer
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            *Offers cannot be combined with other promotions. Subject to availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
