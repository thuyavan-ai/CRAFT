import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const go = () => { localStorage.setItem("loggedIn", "true"); navigate("/language"); };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[#f4e9df]">
      <div className="card w-full max-w-md p-8 text-center">
        <div className="text-5xl mb-5">🧵</div>
        <h1 className="text-3xl font-black text-[#8e3c21]">CRAFTSAATHI AI</h1>
        <p className="mt-2 text-gray-600">Your Craft. Your Story. Your Market.</p>
        <p className="mt-6 text-sm text-gray-500">An AI business partner for Indian artisans.</p>
        <button onClick={go} className="btn btn-dark w-full mt-8">Continue with Google</button>
        <button onClick={go} className="btn btn-outline w-full mt-3">Continue with Mobile</button>
        <p className="text-xs text-gray-400 mt-5">Prototype login • Demo mode</p>
      </div>
    </div>
  );
}