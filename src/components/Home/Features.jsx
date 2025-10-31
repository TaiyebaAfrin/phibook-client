import { FaTruck, FaLeaf, FaPercent, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruck className="text-green-500 text-4xl" />,
      title: "Fast Fresh Delivery",
      description: "Same-day delivery of fresh groceries from local farms to your kitchen.",
    },
    {
      icon: <FaLeaf className="text-green-500 text-4xl" />,
      title: "100% Organic",
      description: "Certified organic products with no pesticides or artificial additives.",
    },
    {
      icon: <FaPercent className="text-green-500 text-4xl" />,
      title: "Farm Fresh Deals",
      description: "Daily discounts on seasonal fruits, vegetables, and farm products.",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-4xl" />,
      title: "Quality Assured",
      description: "Every product is quality checked for freshness and proper packaging.",
    },
  ];

  return (
    <section className="px-8 py-15 bg-green-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <div className="bg-white rounded-full p-4 shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;