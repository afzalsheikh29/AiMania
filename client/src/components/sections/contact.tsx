import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Shield, Lock, Tag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const services = [
  { value: "cloud-architecture", label: "Cloud Architecture & Migration" },
  { value: "ai-ml", label: "AI & Machine Learning Solutions" },
  { value: "devops", label: "DevOps & Site Reliability" },
  { value: "app-development", label: "Application Development" },
  { value: "data-engineering", label: "Data Engineering & Analytics" },
  { value: "cybersecurity", label: "Cybersecurity & Compliance" },
  { value: "managed-services", label: "Managed Cloud Services" },
  { value: "digital-transformation", label: "Digital Transformation" },
];

const budgets = [
  { value: "under-50k", label: "Under $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k-500k", label: "$250,000 - $500,000" },
  { value: "over-500k", label: "Over $500,000" },
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 7017287746", color: "text-primary-blue" },
  { icon: Mail, label: "Email", value: "contact@aicloudmania.com", color: "text-accent-teal" },
  { icon: MapPin, label: "Location", value: "India", color: "text-success-green" },
  { icon: Clock, label: "Business Hours", value: "Mon - Fri: 9AM - 6PM IST", color: "text-warning-amber" },
];

const certifications = [
  { icon: Shield, name: "SOC 2", status: "Certified", color: "text-primary-blue" },
  { icon: Lock, name: "GDPR", status: "Compliant", color: "text-success-green" },
  { icon: Tag, name: "ISO 27001", status: "In Progress", color: "text-accent-teal" },
  { icon: Heart, name: "HIPAA", status: "Ready", color: "text-warning-amber" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We will get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Ready to transform your technology infrastructure? Let's discuss your project requirements.
          </p>
          <div className="mt-4 text-primary-blue font-semibold">
            <Clock className="inline mr-2" size={16} />
            We respond within 24 hours
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <Input
                    {...form.register("name")}
                    placeholder="Your full name"
                    className="w-full"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <Input
                    {...form.register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <Input
                    {...form.register("phone")}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                    Company Name
                  </label>
                  <Input
                    {...form.register("company")}
                    placeholder="Your company"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                  Service Interest
                </label>
                <Select onValueChange={(value) => form.setValue("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">
                  Project Budget Range
                </label>
                <Select onValueChange={(value) => form.setValue("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range..." />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.map((budget) => (
                      <SelectItem key={budget.value} value={budget.value}>
                        {budget.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Project Details *
                </label>
                <Textarea
                  {...form.register("message")}
                  rows={5}
                  placeholder="Tell us about your project requirements, challenges, and goals..."
                  className="w-full"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-blue hover:bg-blue-700 text-white py-4 text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-sm text-charcoal text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-dark-navy mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 bg-light-gray rounded-lg flex items-center justify-center mr-4`}>
                      <info.icon className={`${info.color} text-lg`} />
                    </div>
                    <div>
                      <div className="font-medium text-dark-navy">{info.label}</div>
                      <div className="text-charcoal">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-dark-navy mb-6">
                Certifications & Compliance
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="text-center p-4 bg-light-gray rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <cert.icon className={`${cert.color} text-2xl mb-2 mx-auto`} />
                    <div className="font-medium text-dark-navy text-sm">{cert.name}</div>
                    <div className="text-xs text-charcoal">{cert.status}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
