import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-2">Reach Out</p>
          <h1 className="font-display text-4xl lg:text-6xl font-semibold text-foreground">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">We'd Love to Hear From You</h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
              Whether you're looking for the perfect bridal set, need customization help, or want to visit our store, we're here to assist you.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: "hello@dwarikanaari.com" },
                { icon: Phone, label: "+91 9632232166" },
                { icon: MapPin, label: "abcd" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <span className="font-body text-sm text-foreground">{label}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-all" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-all" aria-label="Facebook"><Facebook size={16} /></a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button type="submit" className="w-full bg-gold text-primary-foreground font-body text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
