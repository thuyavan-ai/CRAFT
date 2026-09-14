import React from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "as", name: "Assamese", native: "অসমীয়া" },
  { code: "ur", name: "Urdu", native: "اردو" },
  { code: "ks", name: "Kashmiri", native: "कॉशुर" },
  { code: "kok", name: "Konkani", native: "कोंकणी" },
  { code: "ne", name: "Nepali", native: "नेपाली" },
  { code: "mni", name: "Manipuri", native: "মৈতৈলোন্" },
  { code: "sa", name: "Sanskrit", native: "संस्कृतम्" },
  { code: "mai", name: "Maithili", native: "मैथिली" },
  { code: "sat", name: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { code: "sd", name: "Sindhi", native: "سنڌي" },
  { code: "doi", name: "Dogri", native: "डोगरी" },
  { code: "brx", name: "Bodo", native: "बड़ो" }
];

export default function Settings() {
  const { language, chooseLanguage } = useApp();
  const navigate = useNavigate();

  const currentLanguage =
    languages.find((item) => item.code === language) || languages[0];

  const handleLanguageChange = (code) => {
    chooseLanguage(code);
  };

  return (
    <div className="min-h-screen bg-[#f8f3e8] p-6 md:p-10">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="mb-8">

          <button
            onClick={() => navigate("/home")}
            className="mb-5 px-4 py-2 rounded-xl bg-white border border-[#e6dcc9] hover:bg-[#f2e6d2]"
          >
            ← Back
          </button>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#eadfce]">

            <p className="text-sm font-bold text-[#a34b2b] uppercase tracking-wide">
              CRAFTSAATHI AI
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[#29251f]">
              Language Settings
            </h1>

            <p className="mt-2 text-[#71695d]">
              Choose the language you want to use throughout CRAFTSAATHI AI.
            </p>

          </div>

        </div>

        {/* CURRENT LANGUAGE */}

        <div className="bg-[#fff8eb] border border-[#e8cda8] rounded-3xl p-6 mb-8">

          <p className="text-sm font-semibold text-[#8c5a30]">
            CURRENT LANGUAGE
          </p>

          <div className="flex items-center gap-4 mt-3">

            <div className="w-14 h-14 rounded-2xl bg-[#f2d7ad] flex items-center justify-center text-2xl">
              🌐
            </div>

            <div>

              <h2 className="text-xl font-bold text-[#29251f]">
                {currentLanguage.native}
              </h2>

              <p className="text-sm text-[#71695d]">
                {currentLanguage.name}
              </p>

            </div>

          </div>

        </div>

        {/* LANGUAGE LIST */}

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#eadfce]">

          <h2 className="text-2xl font-bold text-[#29251f] mb-2">
            Select Language
          </h2>

          <p className="text-[#71695d] mb-6">
            CRAFTSAATHI AI supports major Indian languages.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {languages.map((item) => {

              const selected = language === item.code;

              return (
                <button
                  key={item.code}
                  onClick={() => handleLanguageChange(item.code)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all ${
                    selected
                      ? "border-[#b85c38] bg-[#fff1dc]"
                      : "border-[#eee4d5] bg-white hover:border-[#d6b890] hover:bg-[#fffaf2]"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xl font-bold text-[#29251f]">
                        {item.native}
                      </p>

                      <p className="text-sm text-[#71695d] mt-1">
                        {item.name}
                      </p>

                    </div>

                    {selected && (
                      <div className="w-8 h-8 rounded-full bg-[#b85c38] text-white flex items-center justify-center font-bold">
                        ✓
                      </div>
                    )}

                  </div>

                </button>
              );
            })}

          </div>

        </div>

        {/* INFO */}

        <div className="mt-6 bg-white rounded-2xl p-5 border border-[#eadfce]">

          <div className="flex gap-3">

            <div className="text-2xl">
              💡
            </div>

            <div>

              <h3 className="font-bold text-[#29251f]">
                One language everywhere
              </h3>

              <p className="text-sm text-[#71695d] mt-1">
                Your selected language will be used across the CRAFTSAATHI AI
                dashboard, business tools, marketplace, profile, settings,
                voice assistant and product tools.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}