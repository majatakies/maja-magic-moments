
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
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

  // WhatsApp contact info with the updated number
  const whatsappNumber = "+918884447957";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a celebration at Maja Takies.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
                    <p className="text-gray-600">+91 8884447957</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-maja-primary mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">majatakies25@gmail.com</p>
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
                      Monday - Sunday: 11:00 AM - 1:00 AM
                    </p>
                  </div>
                </div>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp inline-flex w-full justify-center mt-4"
                >
                  Contact on WhatsApp
                </a>
              </CardContent>
            </Card>
            
            <Card className="flex-1">
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.069432684738!2d77.60713601513351!3d13.032350490811502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b7f46c1373%3A0x31fcb47ef1d4851!2sMaja%20Takies!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
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
