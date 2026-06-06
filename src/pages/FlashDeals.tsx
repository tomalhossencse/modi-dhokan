import { useEffect, useState } from "react";
import type { Product } from "../types";
import { dummyProducts } from "../assets/assets";
import { Zap } from "lucide-react";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

const FlashDeals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setProducts(dummyProducts.filter((p) => p.stock > 0));
    setTimeout(() => setLoading(false), 200);
  }, []);

  return (
    <div className="min-h-screen bg-app-cream">
      {/* banner */}
      <div className="bg-linear-to-r from-app-orange to-app-orange-dark text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex-center gap-2 mb-3">
            <Zap className="size-6 fill-white" />
            <h1 className="text-3xl font-semibold">Flash Deals</h1>
            <Zap className="size-6 fill-white" />
          </div>
          <p className="text-white/80 max-w-md mx-auto">
            Limited-time offers on your favorite organic products. Grab them
            before they're gone!
          </p>
        </div>
      </div>

      {/* product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <div className="text-center py-18">
            <p className="text-lg font-semibold text-app-green mb-2">
              No deals right now
            </p>
            <p className="text-sm text-app-text-light">
              check back soon for amazing offers!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(
              (product) =>
                product.stock > 0 && (
                  <ProductCard key={product._id} product={product} />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashDeals;
