
import { Users, Heart, Users2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Spaces = () => {
  const spaces = [
    {
      id: "fam-jam",
      name: "Fam Jam",
      capacity: 15,
      description: "The perfect space for family celebrations! This spacious theater accommodates up to 15 people with plenty of room for everyone to enjoy.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "bg-maja-primary"
    },
    {
      id: "friend-den",
      name: "Friend Den",
      capacity: 12,
      description: "Celebrate with your closest friends in this cozy yet spacious theater den, designed for groups of up to 12 people.",
      icon: Users2,
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "bg-maja-secondary"
    },
    {
      id: "love-nest",
      name: "Love Nest",
      capacity: 2,
      description: "An intimate theater experience for two. Perfect for anniversaries, proposals, or romantic date nights with a private cinematic experience.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "bg-maja-pink"
    }
  ];

  return (
    <section id="spaces" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Our Celebration Spaces</h2>
        <p className="section-subtitle">
          Choose the perfect setting for your special occasion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {spaces.map((space) => {
            const Icon = space.icon;
            
            return (
              <Card key={space.id} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={space.image} 
                    alt={space.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className={`${space.color} text-white`}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl md:text-2xl">{space.name}</CardTitle>
                    <div className="flex items-center">
                      <Icon size={20} className="mr-2" />
                      <span>{space.capacity} people</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base">{space.description}</CardDescription>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Inclusions:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-maja-primary rounded-full mr-2"></span>
                        Private screening for 2 hours
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-maja-primary rounded-full mr-2"></span>
                        Themed decoration
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-maja-primary rounded-full mr-2"></span>
                        Cake, sash & crown
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-maja-primary rounded-full mr-2"></span>
                        Fog entry & party lights
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-maja-primary hover:bg-maja-secondary">
                    Check Availability
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Add-on Services</h3>
          <p className="text-center mb-6">
            Customize your experience with our additional services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium mb-2">Food & Beverages</h4>
              <p className="text-sm text-gray-600">
                Access to our café with special group menus and packages
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium mb-2">Extended Hours</h4>
              <p className="text-sm text-gray-600">
                Additional screening time available per hour
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium mb-2">Special Decorations</h4>
              <p className="text-sm text-gray-600">
                Custom themed decorations for your specific event
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium mb-2">Photography</h4>
              <p className="text-sm text-gray-600">
                Professional photography to capture your special moments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
