import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PageLayout } from "@/components/PageLayout";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: values,
      });

      if (error) throw error;

      setShowSuccess(true);
      
      toast({
        title: "Message sent!",
        description: "Your request has been sent to the learning director. They will contact you soon.",
      });
      
      form.reset();
      
      // Hide success animation after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Request pricing information or get in touch with your learning director"
      breadcrumbs={[{ label: "Contact Us" }]}
      containerSize="narrow"
      heroClassName="mb-12"
    >
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 max-w-xl mx-auto mb-8">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> If you've already been working with a StormWind learning director, 
          please reach out to them directly. This form is for new inquiries.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg shadow-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden">
        {/* Success Animation Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 bg-card/95 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
            <div className="text-center animate-scale-in">
              <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border-2 border-primary animate-pulse">
                <svg 
                  className="w-10 h-10 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground max-w-md">
                Your request has been received. A learning director will contact you soon.
              </p>
            </div>
          </div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-[#252b3d] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#4FD1C5]"
                      aria-required="true"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      className="bg-[#252b3d] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#4FD1C5]"
                      aria-required="true"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Company</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your company name" 
                      className="bg-[#252b3d] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#4FD1C5]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Your phone number" 
                      className="bg-[#252b3d] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#4FD1C5]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your training needs, pricing inquiry, or any questions you have..."
                      className="min-h-[150px] bg-[#252b3d] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#4FD1C5]"
                      aria-required="true"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-[#4FD1C5] hover:bg-[#3db8ac] text-white font-semibold transition-all duration-300" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </PageLayout>
  );
};

export default Contact;
