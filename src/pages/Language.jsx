import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const languages = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "हिंदी" },
  { value: "Tamil", label: "தமிழ்" },
  { value: "Telugu", label: "తెలుగు" },
  { value: "Kannada", label: "ಕನ್ನಡ" },
  { value: "Malayalam", label: "മലയാളം" },
  { value: "Marathi", label: "मराठी" },
  { value: "Gujarati", label: "ગુજરાતી" },
  { value: "Bengali", label: "বাংলা" },
  { value: "Punjabi", label: "ਪੰਜਾਬੀ" },
  { value: "Odia", label: "ଓଡ଼ିଆ" },
  { value: "Assamese", label: "অসমীয়া" },
  { value: "Urdu", label: "اردو" },
  { value: "Kashmiri", label: "کٲشُر" },
  { value: "Konkani", label: "कोंकणी" },
  { value: "Nepali", label: "नेपाली" },
  { value: "Manipuri", label: "মৈতৈলোন" },
  { value: "Sanskrit", label: "संस्कृतम्" },
  { value: "Maithili", label: "मैथिली" },
  { value: "Santali", label: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { value: "Sindhi", label: "سنڌي" },
  { value: "Dogri", label: "डोगरी" },
  { value: "Bodo", label: "बड़ो" }
];

export default function Language() {

  const navigate = useNavigate();

  const { chooseLanguage } = useApp();

  const selectLanguage = (language) => {

    // Store the English key internally
    // Example: Tamil instead of தமிழ்
    chooseLanguage(language);

    // Go to Home
    navigate("/home");
  };

  return (
    <div className="page min-h-screen">

      <div className="container">

        <div className="text-center">

          <span className="tag">
            STEP 1
          </span>

          <h1 className="text-3xl md:text-4xl font-black mt-4">
            Choose Your Language
          </h1>

          <p className="text-gray-600 mt-2">
            Select the language you are comfortable with
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          {languages.map((item) => (

            <button
              key={item.value}
              onClick={() => selectLanguage(item.value)}
              className="card p-5 text-left font-bold hover:-translate-y-1 transition"
            >
              {item.label}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}