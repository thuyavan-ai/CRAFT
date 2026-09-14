import { useNavigate } from "react-router-dom";
import { Camera, Mic, BadgeIndianRupee, Users, Factory, Map, Megaphone, GraduationCap, ShieldAlert, Sparkles, Handshake, IdCard } from "lucide-react";
const tools=[
["AI Voice Assistant","Speak in your language","/voice-product",Mic],
["One Photo Product","Create a professional listing","/photo-product",Camera],
["Fair Price Engine","Estimate a fair selling price","#",BadgeIndianRupee],
["Don't Sell Cheap","Check a buyer's offer","#",ShieldAlert],
["Buyer Matching","Find suitable buyers","#",Users],
["Order Feasibility","Can I fulfill this order?","#",Factory],
["Craft Map of India","Discover craft regions","#",Map],
["AI Marketing Generator","Captions and promotion","#",Megaphone],
["AI Business Teacher","Learn business step by step","#",GraduationCap],
["AI Risk Radar","See business risks","#",ShieldAlert],
["AI Negotiation Assistant","Prepare a better response","#",Handshake],
["Craft Passport","Show product and craft identity","#",IdCard],
["AI HumSethu","Bridge craft to opportunities","#",Sparkles]
];
export default function Tools(){
 const nav=useNavigate();
 return <div className="page pb-24"><div className="container"><span className="tag">AI TOOLS</span><h1 className="text-3xl font-black mt-3">Your AI toolkit</h1><p className="text-gray-600 mt-2">More tools can be connected to real models and datasets later.</p><div className="grid-cards mt-7">{tools.map(([t,s,to,Icon])=><button key={t} onClick={()=>to!=="#"&&nav(to)} className="card p-5 text-left"><Icon className="text-[#9b4325]"/><h2 className="font-black mt-5">{t}</h2><p className="text-sm text-gray-600 mt-2">{s}</p></button>)}</div></div></div>
}