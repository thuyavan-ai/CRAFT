import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { generateProduct } from "../services/api";

export default function ProductListing() {
  const navigate = useNavigate();
  const { product, setProduct, productImage } = useApp();

  useEffect(() => {
    generateProduct().then(setProduct).catch(() => {});
  }, []);

  return (
    <div className="page pb-24">
      <div className="container max-w-5xl">
        <span className="tag">AI GENERATED LISTING</span>
        <h1 className="text-3xl font-black mt-3">Your product is ready</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card p-5">
            <div className="bg-white rounded-2xl min-h-[420px] flex items-center justify-center border">
              {productImage ? <img src={productImage} alt="Product" className="max-h-[410px] max-w-full object-contain"/> : <div className="text-7xl">🧵</div>}
            </div>
          </div>

          <div className="card p-6">
            <span className="tag">AI PRODUCT PROFILE</span>
            <h2 className="text-2xl font-black mt-4">{product.name}</h2>
            <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
              <Info label="Material" value={product.material}/>
              <Info label="Craft" value={product.craft}/>
              <Info label="Region" value={product.region}/>
              <Info label="Category" value={product.category}/>
              <Info label="Production" value={product.productionTime}/>
            </div>

            <h3 className="font-black mt-6">English description</h3>
            <p className="text-gray-600 mt-2">{product.englishDescription}</p>

            <h3 className="font-black mt-5">हिंदी विवरण</h3>
            <p className="text-gray-600 mt-2">{product.hindiDescription}</p>

            <h3 className="font-black mt-5">Craft Story</h3>
            <p className="text-gray-600 mt-2">{product.story}</p>

            <div className="mt-6 p-5 rounded-2xl bg-[#fff3e8]">
              <p className="text-sm text-gray-500">AI Fair Price</p>
              <p className="text-2xl font-black">₹{product.fairMin.toLocaleString()} – ₹{product.fairMax.toLocaleString()}</p>
              <p className="mt-1">Recommended: <b>₹{product.price.toLocaleString()}</b></p>
            </div>

            <button onClick={() => navigate("/marketplace")} className="btn btn-dark w-full mt-5">Looks Good → Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({label,value}) {
  return <div className="p-3 rounded-xl bg-[#f8f3ef]"><div className="text-xs text-gray-500">{label}</div><div className="font-bold mt-1">{value}</div></div>;
}