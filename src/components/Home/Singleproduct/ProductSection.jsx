import { Link } from "react-router";
import productImg from "../../../assets/images/gptwo.png";

const ProductSection = ({ 
  image = productImg,
  title = "Fresh Organic Vegetables",
  description = "Get the freshest, farm-to-table organic vegetables delivered to your doorstep. Our vegetables are locally sourced, pesticide-free, and packed with natural nutrients for your healthy lifestyle.",
  currentPrice = "$12.99",
  originalPrice = "$16.99",
  features = [
    "100% Organic & Pesticide-Free",
    "Freshly Harvested Daily",
    "Free Delivery on Orders Above $30"
  ],
  reverse = false
}) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between px-4 md:px-8`}>
        
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img 
            className="w-full max-w-md rounded-lg shadow-lg" 
            src={image} 
            alt={title} 
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            {description}
          </p>
          
          <div className="mb-6">
            <span className="text-2xl font-bold text-green-600">{currentPrice}</span>
            <span className="text-lg text-gray-500 line-through ml-2">{originalPrice}</span>
            <span className="text-sm text-red-500 ml-2 bg-red-50 px-2 py-1 rounded">23% OFF</span>
          </div>

          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300">
             <Link to="/shop">Shop Product</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;