import { useState } from "react";
import {
  Mic,
  Square,
  CheckCircle,
  Languages,
  Sparkles,
  ArrowRight
} from "lucide-react";

import { useApp } from "../context/AppContext";

export default function VoiceProduct() {
  const { language, t } = useApp();

  const [recording, setRecording] = useState(false);
  const [processed, setProcessed] = useState(false);

  const startRecording = () => {
    setRecording(true);
    setProcessed(false);

    setTimeout(() => {
      setRecording(false);
      setProcessed(true);
    }, 2000);
  };

  return (
    <div className="page pb-24">

      <div className="container max-w-5xl">

        {/* PAGE HEADER */}

        <span className="tag">
          {t("voiceAssistant")}
        </span>

        <h1 className="text-3xl md:text-4xl font-black mt-4">
          {language === "English"
            ? "Talk to AI Saathi"
            : t("voiceAssistant")}
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          {t("voiceDescription")}
        </p>


        {/* VOICE AREA */}

        <div className="card p-8 mt-7 text-center">

          <div
            className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center ${
              recording
                ? "bg-red-100"
                : "bg-[#f4ded2]"
            }`}
          >

            {recording ? (
              <Square
                size={42}
                className="text-red-600"
              />
            ) : (
              <Mic
                size={48}
                className="text-[#9b4325]"
              />
            )}

          </div>


          <h2 className="text-2xl font-black mt-6">

            {recording
              ? "Listening..."
              : language === "English"
                ? "Tell AI Saathi about your craft"
                : t("startSpeaking")}

          </h2>


          <p className="text-gray-500 mt-2">
            {t("voiceDescription")}
          </p>


          <button
            onClick={startRecording}
            disabled={recording}
            className={`btn mt-7 ${
              recording
                ? "btn-light"
                : "btn-primary"
            }`}
          >

            {recording ? (
              <>
                <Square size={18} />
                Listening...
              </>
            ) : (
              <>
                <Mic size={18} />
                {t("startSpeaking")}
              </>
            )}

          </button>

        </div>


        {/* RESULT */}

        {processed && (

          <div className="mt-6">

            <div className="grid md:grid-cols-3 gap-5">

              {/* REGIONAL LANGUAGE */}

              <div className="card p-6">

                <div className="flex items-center gap-2">

                  <Languages
                    size={22}
                    className="text-[#9b4325]"
                  />

                  <h3 className="font-black">
                    {language}
                  </h3>

                </div>

                <p className="text-gray-600 mt-4">
                  {t("voiceDescription")}
                </p>

              </div>


              {/* ENGLISH */}

              <div className="card p-6">

                <div className="flex items-center gap-2">

                  <CheckCircle
                    size={22}
                    className="text-green-600"
                  />

                  <h3 className="font-black">
                    English
                  </h3>

                </div>

                <p className="text-gray-600 mt-4">
                  A beautifully handcrafted product
                  made using traditional artisan
                  techniques.
                </p>

              </div>


              {/* HINDI */}

              <div className="card p-6">

                <div className="flex items-center gap-2">

                  <CheckCircle
                    size={22}
                    className="text-green-600"
                  />

                  <h3 className="font-black">
                    हिंदी
                  </h3>

                </div>

                <p className="text-gray-600 mt-4">
                  पारंपरिक कारीगरी तकनीकों से बनाया
                  गया सुंदर हस्तनिर्मित उत्पाद।
                </p>

              </div>

            </div>


            {/* AI PRODUCT INFORMATION */}

            <div className="card p-7 mt-6">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-[#f4ded2] flex items-center justify-center">

                  <Sparkles
                    className="text-[#9b4325]"
                  />

                </div>

                <div>

                  <h2 className="text-xl font-black">
                    {t("createProduct")}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {t("voiceDescription")}
                  </p>

                </div>

              </div>


              <div className="grid md:grid-cols-2 gap-4 mt-6">

                <div className="rounded-2xl bg-[#f8f3ef] p-5">

                  <div className="text-sm text-gray-500">
                    Product
                  </div>

                  <div className="font-black text-lg mt-1">
                    Handcrafted Artisan Product
                  </div>

                </div>


                <div className="rounded-2xl bg-[#f8f3ef] p-5">

                  <div className="text-sm text-gray-500">
                    Craft
                  </div>

                  <div className="font-black text-lg mt-1">
                    Traditional Handcraft
                  </div>

                </div>


                <div className="rounded-2xl bg-[#f8f3ef] p-5">

                  <div className="text-sm text-gray-500">
                    Material
                  </div>

                  <div className="font-black text-lg mt-1">
                    Artisan Material
                  </div>

                </div>


                <div className="rounded-2xl bg-[#f8f3ef] p-5">

                  <div className="text-sm text-gray-500">
                    Location
                  </div>

                  <div className="font-black text-lg mt-1">
                    India
                  </div>

                </div>

              </div>


              <button className="btn btn-primary mt-7">

                {t("continue")}

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}