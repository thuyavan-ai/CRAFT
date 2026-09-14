import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { publishMarketplace } from "../services/api";

export default function Marketplace() {
  const navigate = useNavigate();
  const [market, setMarket] = useState("CRAFTSAATHI STORE");
  const [publishing, setPublishing] = useState(false);
  const [result, setResult] = useState(null);

  const publish = async () => {
    setPublishing(true);
    setTimeout(async () => {
      try { setResult(await publishMarketplace(market)); }
      catch { setResult({success:true, productId:"CRAFT-1042", status:"LIVE — DEMO", marketplace:market}); }
      setPublishing(false);
    }, 1300);
  };

  return (
    <div className="page pb-24">
      <div className="container max-w-4xl">
        <span className="tag">SELL ONLINE</span>
        <h1 className="text-3xl font-black mt-3">Choose a marketplace</h1>
        <p className="text-gray-600 mt-2">Prototype publishing screen. Real Amazon/Flipkart seller APIs require separate authorized integrations.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {["Amazon","Flipkart","CRAFTSAATHI STORE"].map(m => (
            <button key={m} onClick={() => setMarket(m)}
              className={`card p-6 text-left ${market===m ? "ring-2 ring-[#9b4325]" : ""}`}>
              <ShoppingBag className="text-[#9b4325]"/>
              <div className="font-black mt-4">{m}</div>
              <div className="text-xs text-gray-500 mt-2">{market===m ? "Selected" : "Select"}</div>
            </button>
          ))}
        </div>

        <div className="card p-6 mt-6">
          <div className="space-y-2 text-sm text-gray-600">
            <p>✓ Product information ready</p>
            <p>✓ Professional image ready</p>
            <p>✓ English description ready</p>
            <p>✓ Hindi description ready</p>
            <p>✓ Price ready</p>
          </div>
          <button onClick={publish} disabled={publishing} className="btn btn-primary w-full mt-6">
            {publishing ? "Publishing..." : `Publish to ${market}`}
          </button>
        </div>

        {result && (
          <div className="card p-7 mt-6 bg-[#eff9f0]">
            <CheckCircle2 className="text-green-700"/>
            <h2 className="text-2xl font-black mt-3">Product Listing Created</h2>
            <p className="mt-2">Marketplace: <b>{result.marketplace}</b></p>
            <p>Product ID: <b>{result.productId}</b></p>
            <p>Status: <b className="text-green-700">{result.status}</b></p>
            <button onClick={() => navigate("/customer-product")} className="btn btn-dark mt-5">Open Customer View →</button>
          </div>
        )}
      </div>
    </div>
  );
}