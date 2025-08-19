import { useState } from 'react';
import { Mail, Send, MessageSquare, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSend = new FormData(event.target as HTMLFormElement);
    formDataToSend.append("access_key", "7d074ffc-6d49-48b5-b72a-fffda24e8527");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      // Reset the form after submission
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    // Clear form state
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get In <span className="neon-text-blue">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neonblue to-neonpurple rounded-full mx-auto"></div>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Have a project in mind or want to discuss new opportunities? 
          Feel free to reach out to me using the form below.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <MessageSquare size={20} className="text-neonblue mr-2" />
            Send a Message
          </h3>
          
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white/70">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/5 border-white/10 focus:border-neonblue"
                required
                placeholder="Your Name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white/70">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border-white/10 focus:border-neonblue"
                required
                placeholder="name@gmail.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-white/70">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white/5 border-white/10 focus:border-neonblue min-h-[120px]"
                required
                placeholder="Hello, I'd like to discuss a project..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-neonblue to-neonpurple hover:from-neonpurple hover:to-neonblue"
            >
              Send Message <Send size={16} className="ml-2" />
            </Button>
          </form>

          <span>{result}</span>
        </div>
        
        <div className="glass-card p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-8">
            Contact Information
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-neonblue/20 p-3 rounded-lg mr-4">
                <Mail className="text-neonblue" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a href="sumaiyakn28@gmail.com" className="text-white/70 hover:text-neonblue transition-colors">
                  sumaiyakn28@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neonpurple/20 p-3 rounded-lg mr-4">
                <Phone className="text-neonpurple" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <a href="tel:+91 7705033040" className="text-white/70 hover:text-neonpurple transition-colors">
                  +91 7705033040
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neonpink/20 p-3 rounded-lg mr-4">
                <MapPin className="text-neonpink" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-white/70">
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;