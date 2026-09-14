import { Activity, Lightbulb, Users, BadgeIndianRupee, TrendingUp, Factory, Network, MessageCircle } from "lucide-react";

const cards = [
  ["AI Business Health","78/100","Healthy","Activity"],
  ["AI Insights","3 opportunities","Demand is rising for handloom products","Lightbulb"],
  ["Buyer Opportunities","12 matches","New buyers may fit your craft","Users"],
  ["Fair Price Intelligence","₹2.8K–₹3.4K","Protect your craft value","BadgeIndianRupee"],
  ["Demand Forecast","+18%","Expected demand next month","TrendingUp"],
  ["Production Capacity","72%","Good capacity for new orders","Factory"],
  ["Craft Network","24 artisans","Collaboration opportunities","Network"],
  ["AI HumSethu","5 leads","Bridge to markets and buyers","MessageCircle"]
];

const icons={Activity,Lightbulb,Users,BadgeIndianRupee,TrendingUp,Factory,Network,MessageCircle};

export default function Dashboard() {
  return (
    <div className="page pb-24">
      <div className="container">
        <span className="tag">BUSINESS COMMAND CENTER</span>
        <h1 className="text-3xl font-black mt-3">AI Business Dashboard</h1>
        <p className="text-gray-600 mt-2">Simple signals instead of complicated business software.</p>
        <div className="grid-cards mt-7">
          {cards.map(([title,value,sub,icon]) => {
            const Icon=icons[icon];
            return <div className="card p-5" key={title}>
              <Icon className="text-[#9b4325]"/>
              <div className="text-sm text-gray-500 mt-5">{title}</div>
              <div className="text-2xl font-black mt-1">{value}</div>
              <div className="text-sm text-gray-600 mt-2">{sub}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}