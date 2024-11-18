import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ProductDetail = () => {
  const productDetailItem = {
    images: [
      {
        original:
          "https://4.bp.blogspot.com/-LAMcP2zbjIQ/UHK_iZ5OauI/AAAAAAAAALA/x2Fau3cGGMQ/s1600/Bike+Racing.jpg",
        thumbnail:
          "https://4.bp.blogspot.com/-LAMcP2zbjIQ/UHK_iZ5OauI/AAAAAAAAALA/x2Fau3cGGMQ/s1600/Bike+Racing.jpg",
      },
      {
        original:
          "https://www.shutterstock.com/shutterstock/photos/270155639/display_1500/stock-photo-various-car-parts-and-accessories-isolated-on-black-background-270155639.jpg",
        thumbnail:
          "https://www.shutterstock.com/shutterstock/photos/270155639/display_1500/stock-photo-various-car-parts-and-accessories-isolated-on-black-background-270155639.jpg",
      },
      {
        original:
          "https://www.shutterstock.com/shutterstock/photos/534126484/display_1500/stock-photo-car-parts-on-background-d-rendering-534126484.jpg",
        thumbnail:
          "https://www.shutterstock.com/shutterstock/photos/534126484/display_1500/stock-photo-car-parts-on-background-d-rendering-534126484.jpg",
      },
      {
        original:
          "https://www.shutterstock.com/shutterstock/photos/534126484/display_1500/stock-photo-car-parts-on-background-d-rendering-534126484.jpg",
        thumbnail:
          "https://www.shutterstock.com/shutterstock/photos/534126484/display_1500/stock-photo-car-parts-on-background-d-rendering-534126484.jpg",
      },
      {
        original:
          "https://www.shutterstock.com/shutterstock/photos/270155639/display_1500/stock-photo-various-car-parts-and-accessories-isolated-on-black-background-270155639.jpg",
        thumbnail:
          "https://www.shutterstock.com/shutterstock/photos/270155639/display_1500/stock-photo-various-car-parts-and-accessories-isolated-on-black-background-270155639.jpg",
      },
    ],
    title: "Sample Product",
    reviews: "24",
    availability: true,
    brand: "BrandName",
    category: "CategoryName",
    price: "99.99",
    previousPrice: "129.99",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
    color: ["red", "blue", "green"],
  };

  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border border-gray-300 duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";

  return (
    <section className="container mx-auto max-w-[1200px] py-5 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-10">
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={productDetailItem.images}
        />
      </div>

      <div className="mx-auto px-5 lg:px-8">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {productDetailItem.title}
        </h2>
        <div className="mt-2 flex items-center">
          <Rater
            style={{ fontSize: "20px" }}
            total={5}
            interactive={false}
            rating={3.5}
          />
          <p className="ml-3 text-sm text-gray-400">
            ({productDetailItem.reviews} reviews)
          </p>
        </div>

        <p className="mt-5 font-bold">
          Availability:{" "}
          {productDetailItem.availability ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>

        <p className="font-bold mt-2">
          Brand: <span className="font-normal">{productDetailItem.brand}</span>
        </p>
        <p className="font-bold mt-1">
          Category:{" "}
          <span className="font-normal">{productDetailItem.category}</span>
        </p>

        <p className="mt-4 text-3xl font-bold text-violet-900">
          ${productDetailItem.price}{" "}
          <span className="text-xs text-gray-400 line-through">
            ${productDetailItem.previousPrice}
          </span>
        </p>

        <p className="pt-5 text-sm leading-5 text-gray-500">
          {productDetailItem.description}
        </p>

        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Color</p>
          <div className="flex gap-2">
            {productDetailItem.color.map((color, index) => (
              <div
                key={index}
                className={`h-8 w-8 cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 hover:border-${color}-500 focus:ring-2 focus:ring-${color}-500 active:ring-2 active:ring-${color}-500`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex items-center">
            <button
              className={`${plusMinuceButton}`}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              1
            </div>
            <button
              className={`${plusMinuceButton}`}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-7 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <button
            className="flex h-12 w-full lg:w-1/3 items-center justify-center bg-blue-400 text-white rounded-lg transition-all duration-300 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500"
            aria-label="Add to cart"
          >
            <BiShoppingBag className="mx-2 text-lg" />
            Add to Cart
          </button>
          <button
            className="flex h-12 w-full lg:w-1/3 items-center justify-center bg-black text-white rounded-lg transition-all duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-black"
            aria-label="Add to wishlist"
          >
            <AiOutlineHeart className="mx-2 text-lg" />
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
