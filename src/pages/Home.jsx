import { useNavigate } from "react-router-dom";
import {
  Mic,
  Camera,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

import { useApp } from "../context/AppContext";

export default function Home() {

  const navigate = useNavigate();

  const { language, t } = useApp();

  return (
    <div className="page pb-24">

      <div className="container">

        {/* HERO */}

        <div className="card p-6 md:p-10 bg-gradient-to-br from-white to-[#f7e7db]">

          <span className="tag">
            {t("aiForArtisans")}
          </span>

          <h1 className="text-4xl md:text-5xl font-black mt-4 max-w-3xl">
            {t("homeTitle")}
          </h1>

          <p className="text-lg text-gray-600 mt-4 max-w-2xl">
            {t("homeSubtitle")}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">

            <span className="tag">
              {t("language")}: {language}
            </span>

            <span className="tag flex items-center gap-1">
              <ShieldCheck size={14} />
              {t("aiBusinessPartner")}
            </span>

          </div>

        </div>


        {/* MAIN FEATURES */}

        <div className="grid md:grid-cols-2 gap-5 mt-6">


          {/* VOICE */}

          <button
            onClick={() => navigate("/voice-product")}
            className="card p-7 text-left hover:-translate-y-1 transition"
          >

            <div className="w-14 h-14 rounded-2xl bg-[#f4ded2] flex items-center justify-center">

              <Mic size={28} />

            </div>

            <h2 className="text-2xl font-black mt-5">
              {t("voiceAssistant")}
            </h2>

            <p className="text-gray-600 mt-2">
              {t("voiceDescription")}
            </p>

            <div className="flex items-center gap-2 mt-6 font-bold text-[#8e3c21]">

              {t("startSpeaking")}

              <ArrowRight size={18} />

            </div>

          </button>


          {/* PHOTO */}

          <button
            onClick={() => navigate("/photo-product")}
            className="card p-7 text-left hover:-translate-y-1 transition"
          >

            <div className="w-14 h-14 rounded-2xl bg-[#f4ded2] flex items-center justify-center">

              <Camera size={28} />

            </div>

            <h2 className="text-2xl font-black mt-5">
              {t("photoProduct")}
            </h2>

            <p className="text-gray-600 mt-2">
              {t("photoDescription")}
            </p>

            <div className="flex items-center gap-2 mt-6 font-bold text-[#8e3c21]">

              {t("createProduct")}

              <ArrowRight size={18} />

            </div>

          </button>

        </div>

      </div>

    </div>
  );
}