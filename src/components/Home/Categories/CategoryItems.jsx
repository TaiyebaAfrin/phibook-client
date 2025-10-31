import { FaAngleRight } from "react-icons/fa6";

const CategoryItems = ({ index, category }) => {
  const gradients = [
    "from-green-100 to-blue-100",
    "from-yellow-100 to-orange-100",
    "from-blue-100 to-cyan-100",
    "from-orange-100 to-red-100",
    "from-purple-100 to-pink-100",
    "from-cyan-100 to-teal-100",
  ];

  // Grocery category icons with different background colors
// More vibrant color scheme
const categoryIcons = {
  'Fruits & Vegetables': { icon: '🥬', bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600' },
  'Dairy & Eggs': { icon: '🥛', bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600' },
  'Meat & Poultry': { icon: '🍗', bgColor: 'bg-gradient-to-br from-red-500 to-rose-600' },
  'Bakery & Bread': { icon: '🍞', bgColor: 'bg-gradient-to-br from-amber-500 to-orange-500' },
  'Beverages': { icon: '🥤', bgColor: 'bg-gradient-to-br from-cyan-500 to-teal-600' },
  'Snacks': { icon: '🍿', bgColor: 'bg-gradient-to-br from-orange-500 to-amber-600' },
  'Frozen Foods': { icon: '🧊', bgColor: 'bg-gradient-to-br from-sky-400 to-blue-500' },
  'Organic': { icon: '🌱', bgColor: 'bg-gradient-to-br from-emerald-500 to-green-600' },
  'Seafood': { icon: '🐟', bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
  'Pantry': { icon: '🫙', bgColor: 'bg-gradient-to-br from-yellow-500 to-amber-500' }
};

  // Default descriptions for grocery categories
  const defaultDescriptions = {
    'Fruits & Vegetables': 'Fresh, organic produce delivered daily from local farms',
    'Dairy & Eggs': 'Farm-fresh milk, cheese, yogurt and free-range eggs',
    'Meat & Poultry': 'Premium quality meat, chicken and seafood products',
    'Bakery & Bread': 'Freshly baked bread, pastries and desserts made daily',
    'Beverages': 'Juices, soft drinks, coffee, tea and healthy drinks',
    'Snacks': 'Chips, cookies, nuts and other tasty treats',
    'Frozen Foods': 'Frozen vegetables, meals, ice cream and more',
    'Organic': '100% organic and natural products for healthy living',
    'Seafood': 'Fresh fish, shrimp, and other seafood delights',
    'Pantry': 'Rice, pasta, oils, spices and essential cooking items'
  };

  const getCategoryIcon = (categoryName) => {
    return categoryIcons[categoryName] || { icon: '🛒', bgColor: 'bg-gray-500' };
  };

  const getCategoryDescription = (categoryName) => {
    return defaultDescriptions[categoryName] || 'Fresh grocery products for your daily needs';
  };

  const categoryData = getCategoryIcon(category.name);

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer bg-gradient-to-br ${
        gradients[index % gradients.length]
      } hover:scale-105 transform transition duration-300`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className={`h-12 w-12 rounded-full ${categoryData.bgColor} text-white flex items-center justify-center font-bold text-2xl`}>
            {categoryData.icon}
          </div>
          <span className="text-sm text-gray-600 bg-white/70 px-2 py-1 rounded-full font-medium">
            {category.product_count || 45}+ Items
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {category.description || getCategoryDescription(category.name)}
        </p>
        <button className="text-green-600 font-bold hover:text-green-700 transition-colors flex items-center group">
          Shop Now
          <FaAngleRight className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CategoryItems;