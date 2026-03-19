"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-2 px-4 w-full mt-10 mb-20 flex flex-col md:flex-row gap-10" id="contact">
      <div className="flex flex-col text-left items-start justify-center md:w-5/12">
        <h2 className="text-3xl font-semibold text-primary">Get in Touch</h2>
        <p className="text-primary/50 text-sm mt-3 max-w-sm">
          Have a question or want to work together? Let's connect!
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="mailto:adityarajwk@gmail.com" target="_blank" className="p-3 bg-primary/5 hover:bg-primary/10 border border-primary/10 rounded-full transition-all duration-300 hover:scale-110 text-primary/70 hover:text-primary">
            <Mail className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/adityyaraj" target="_blank" className="p-3 bg-primary/5 hover:bg-primary/10 border border-primary/10 rounded-full transition-all duration-300 hover:scale-110 text-primary/70 hover:text-primary">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/adityyaraj/" target="_blank" className="p-3 bg-primary/5 hover:bg-primary/10 border border-primary/10 rounded-full transition-all duration-300 hover:scale-110 text-primary/70 hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/adityxd" target="_blank" className="p-3 bg-primary/5 hover:bg-primary/10 border border-primary/10 rounded-full transition-all duration-300 hover:scale-110 text-primary/70 hover:text-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
        </div>
      </div>
      
      <div className="w-full md:w-7/12 mx-auto border border-primary/10 rounded-2xl p-6 md:p-8 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-sm font-medium text-primary/80">Name</label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
                className="bg-background border-primary/20 focus-visible:ring-primary/30"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-sm font-medium text-primary/80">Email</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="john@example.com" 
                required 
                className="bg-background border-primary/20 focus-visible:ring-primary/30"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-primary/80">Message</label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Hi Aditya, I'd like to talk about..." 
              required 
              rows={5}
              className="bg-background border-primary/20 focus-visible:ring-primary/30 resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-2 font-medium" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;