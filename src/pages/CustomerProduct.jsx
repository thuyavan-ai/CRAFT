import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function CustomerProduct() {
  const { product, productImage } = useApp();
  const navigate = useNavigate();

  return (
    <div className="page pb-24">
      <div className="container max-w-5xl">
        <span className="tag">CUSTOMER VIEW</span>
        <div className="grid md:grid-cols-2 gap-6 mt-5">
          <div className="card p-5">
            <div className="bg-white border rounded-2xl min-h-[520px] flex items-center justify-center">
              {productImage ? <img src={productImage} alt="Product" className="max-h-[500px] max-w-full object-contain"/> : <div className="text-8xl">🧵</div>}
            </div>
          </div>
          <div className="card p-7">
            <span className="tag">HANDCRAFTED</span>
            <h1 className="text-3xl font-black mt-4">{product.name}</h1>
            <div className="text-yellow-600 font-bold mt-3">★★★★★ 4.8</div>
            <div className="text-3xl font-black mt-5">₹{product.price.toLocaleString()}</div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="tag">Handloom</span><span className="tag">Tamil Nadu</span><span className="tag">Artisan Made</span>
            </div>
            <h2 className="font-black mt-7">About this product</h2>
            <p className="text-gray-600 mt-2">{product.englishDescription}</p>
            <h2 className="font-black mt-6">Story Behind the Product</h2>
            <p className="text-gray-600 mt-2">{product.story}</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className="btn btn-outline">Add to Cart</button>
              <button className="btn btn-primary" onClick={() => alert("Demo purchase flow — order created successfully!")}>Buy Now</button>
            </div>
            <button onClick={() => navigate("/tools")} className="text-sm text-[#8e3c21] font-bold mt-5">Explore AI Tools →</button>
          </div>
        </div>
      </div>
    </div>
  );
}