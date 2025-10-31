import { Link } from "react-router";
import defaultImage from "../../assets/default_product.jpg";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={
              product.images.length > 0 ? product.images[0].image : defaultImage
            }
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <h3 className="font-bold text-xl text-red-500">${product.price}</h3>
          <p>{product.description}</p>
          <div className="card-actions mt-1">
            <button className="btn bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
