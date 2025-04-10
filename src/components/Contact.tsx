
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Inquiry Sent!",
      description: "We've received your message and will get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      event: '',
      date: '',
      message: ''
    });
  };

  // WhatsApp contact info - replace with actual number
  const whatsappNumber = "+918888888888";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a celebration at Maja Takies.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Let us help you create the perfect celebration experience
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Book Your Experience</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you to discuss your event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="Your phone number" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="event">Event Type</Label>
                      <select 
                        id="event" 
                        name="event" 
                        value={formData.event} 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select Event Type</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="babyshower">Baby Shower</option>
                        <option value="bridalshower">Bridal Shower</option>
                        <option value="promotion">Promotion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input 
                        id="date" 
                        name="date" 
                        type="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Tell us about your event and any special requirements" 
                      rows={4} 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-maja-primary hover:bg-maja-secondary">
                    Send Inquiry
                  </Button>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">For faster response, contact us directly on WhatsApp</p>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp inline-flex"
                  >
                    <MessageSquare className="mr-2" size={20} />
                    Contact on WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-maja-primary mr-4" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+91 888 888 8888</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-maja-primary mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">bookings@majatakies.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-maja-primary mr-4" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">123 Celebration Avenue, Film City, Mumbai 400001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="text-maja-primary mr-4" />
                  <div>
                    <h4 className="font-medium">Operating Hours</h4>
                    <p className="text-gray-600">
                      Monday - Sunday: 11:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="flex-1">
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.372669435119!2d72.82319007557056!3d19.180298582044438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c457257e5d%3A0x8fdcc87e85e58c56!2sFilm%20City%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maja Takies location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
