import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-card aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background"
          aria-label="Toggle wishlist"
        >
          <Heart size={16} className={isWishlisted ? "fill-accent text-accent" : "text-foreground"} />
        </button>
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground font-body text-[10px] tracking-wider uppercase px-2 py-1">
            Sale
          </span>
        )}
        {product.bestseller && !product.originalPrice && (
          <span className="absolute top-3 left-3 bg-gold text-primary-foreground font-body text-[10px] tracking-wider uppercase px-2 py-1">
            Bestseller
          </span>
        )}
        {/* View Details overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="block w-full text-center py-2.5 bg-foreground text-primary-foreground font-body text-xs tracking-widest uppercase">
            View Details
          </span>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-border"} />
          ))}
          <span className="font-body text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <h3 className="font-body text-sm font-medium text-foreground">{product.name}</h3>
        <p className="font-body text-[11px] text-muted-foreground">{product.material}</p>
        <div className="flex items-center gap-2">
          <span className="font-body text-sm font-semibold text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="font-body text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
