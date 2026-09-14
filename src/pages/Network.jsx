import { Users, MapPin, Handshake } from "lucide-react";
const people=[
["Lakshmi","Kalamkari Artisan","Andhra Pradesh","Needs textile buyers"],
["Meena","Handloom Weaver","Tamil Nadu","Looking for fair-price markets"],
["Rafiq","Wood Craft Artisan","Karnataka","Open to cluster collaboration"],
["Sita","Embroidery Artisan","Rajasthan","Searching for bulk buyers"]
];
export default function Network(){
 return <div className="page pb-24"><div className="container"><span className="tag">CRAFT NETWORK</span><h1 className="text-3xl font-black mt-3">Connect, collaborate, grow</h1><p className="text-gray-600 mt-2">A simple network for artisans, clusters and buyer opportunities.</p><div className="grid-cards mt-7">{people.map(p=><div className="card p-5" key={p[0]}><div className="w-12 h-12 rounded-full bg-[#f3dfd3] flex items-center justify-center font-black">{p[0][0]}</div><h2 className="font-black mt-4">{p[0]}</h2><p className="text-sm">{p[1]}</p><p className="text-xs text-gray-500 mt-2 flex gap-1"><MapPin size={14}/>{p[2]}</p><p className="text-sm text-gray-600 mt-4">{p[3]}</p><button className="btn btn-light mt-5 w-full"><Handshake size={16} className="inline mr-2"/>Connect</button></div>)}</div></div></div>
}