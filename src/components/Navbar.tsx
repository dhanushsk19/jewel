import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "Collections" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.jpeg"
              alt="Dwarika Naari Jewelry"
              className="h-12 lg:h-14 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl lg:text-2xl font-bold tracking-wider text-gold">
                DWARIKA NAARI
              </span>
              <span className="font-body text-[8px] lg:text-[9px] tracking-[0.35em] uppercase text-muted-foreground -mt-0.5">
                Echoes of Royal Elegance
              </span>
            </div>
          </Link>


          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-foreground hover:text-gold transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <Link to="/collections" className="p-2 text-foreground hover:text-gold transition-colors" aria-label="Wishlist">
              <Heart size={18} />
            </Link>
            <Link to="/cart" className="relative p-2 text-foreground hover:text-gold transition-colors" aria-label="Cart">
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-primary-foreground text-[10px] font-body font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
