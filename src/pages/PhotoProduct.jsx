import { useRef, useState } from "react";

import {
  Camera,
  Upload,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Mic,
  Volume2
} from "lucide-react";

import { useApp } from "../context/AppContext";

export default function PhotoProduct() {

  const { language, t } = useApp();

  const [image, setImage] = useState(null);

  const [interviewStarted, setInterviewStarted] =
    useState(false);

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [answer, setAnswer] =
    useState("");

  const [isListening,setIsListening] = 
    useState(false)

  const [audioBlob, setAudioBlob] =
  useState(null);

  const mediaRecorderRef =
  useRef(null);

  const audioChunksRef =
  useRef([]);

  const [answers, setAnswers] =
    useState([]);

  const [generated, setGenerated] =
    useState(false);


  // --------------------------------
  // FIXED AI QUESTIONS
  // --------------------------------

  const questions = [
    "What is the name of this product?",
    "What material did you use to make it?",
    "How many days does it take to make?",
    "How much does it cost you to make one?",
    "How many pieces are ready?",
    "What is the size of the product?",
    "What is special about this product?",
    "Where is this product made?"
  ];


  // --------------------------------
  // IMAGE UPLOAD
  // --------------------------------

  const handleImage = (event) => {

  const file =
    event.target.files?.[0];

  if (!file) return;

  const imageUrl =
    URL.createObjectURL(file);

  setImage(imageUrl);

  setInterviewStarted(false);

  setQuestionIndex(0);

  setAnswer("");

  setAnswers([]);

  setAudioBlob(null);

  setIsListening(false);

  setGenerated(false);
};

const startInterview = () => {

  if (!image) return;

  setInterviewStarted(true);

  setQuestionIndex(0);

  setAnswer("");

};


  // --------------------------------
  // START AI INTERVIEW
  // --------------------------------

 const startVoice = async () => {

  try {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true
      });

    audioChunksRef.current = [];

    const mediaRecorder =
      new MediaRecorder(stream);

    mediaRecorderRef.current =
      mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {

      if (event.data.size > 0) {

        audioChunksRef.current.push(
          event.data
        );

      }

    };

    mediaRecorder.onstop = () => {

      const blob =
        new Blob(
          audioChunksRef.current,
          {
            type: "audio/webm"
          }
        );

      setAudioBlob(blob);

      stream
        .getTracks()
        .forEach((track) =>
          track.stop()
        );

    };

    mediaRecorder.start();

    setIsListening(true);

  } catch (error) {

    console.error(
      "Microphone error:",
      error
    );

    alert(
      "Microphone access was denied or unavailable."
    );

  }

};
  // --------------------------------
  // SAVE ANSWER + NEXT QUESTION
  // --------------------------------

  const nextQuestion = () => {

    if (!answer.trim()) return;

    const updatedAnswers = [
      ...answers,
      {
        question: questions[questionIndex],
        answer: answer.trim()
      }
    ];

    setAnswers(updatedAnswers);
    setAnswer("");

    if (
      questionIndex <
      questions.length - 1
    ) {

      setQuestionIndex(
        questionIndex + 1
      );

    } else {

      setInterviewStarted(false);
      setGenerated(true);

    }
  };


  // --------------------------------
  // GENERATE PRODUCT
  // --------------------------------

  const generateProduct = () => {

    if (!image) return;

    setGenerated(true);
  };


  return (

    <div className="page pb-24">

      <div className="container max-w-5xl">

        {/* HEADER */}

        <span className="tag">
          {t("photoProduct")}
        </span>

        <h1 className="text-3xl md:text-4xl font-black mt-4">

          {t("photoProduct")}

        </h1>

        <p className="text-gray-600 mt-3 text-lg">

          {t("photoDescription")}

        </p>


        {/* PHOTO CARD */}

        <div className="card p-7 mt-7">

          {!image ? (

            <label
              htmlFor="product-photo"
              className="border-2 border-dashed border-[#d8b9a8] rounded-3xl min-h-[330px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#fcf7f3] transition"
            >

              <div className="w-20 h-20 rounded-2xl bg-[#f4ded2] flex items-center justify-center">

                <Camera
                  size={42}
                  className="text-[#9b4325]"
                />

              </div>


              <h2 className="text-2xl font-black mt-6">

                {t("photoProduct")}

              </h2>


              <p className="text-gray-500 mt-2 text-center">

                {t("photoDescription")}

              </p>


              <div className="btn btn-primary mt-6">

                <Upload size={18} />

                {t("upload")}

              </div>


              <input
                id="product-photo"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImage}
                className="hidden"
              />

            </label>

          ) : (

            <div>

              {/* IMAGE */}

              <div className="relative rounded-3xl overflow-hidden bg-gray-100">

                <img
                  src={image}
                  alt="Product"
                  className="w-full max-h-[500px] object-contain"
                />

              </div>


              {/* PHOTO BUTTONS */}

              {!interviewStarted && !generated && (

                <div className="flex flex-wrap gap-3 mt-5">

                  <label
                    htmlFor="change-photo"
                    className="btn btn-light cursor-pointer"
                  >

                    <Camera size={18} />

                    {t("camera")}

                  </label>


                  <input
                    id="change-photo"
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleImage}
                    className="hidden"
                  />


                  <button
                    onClick={startInterview}
                    className="btn btn-primary"
                  >

                    <Mic size={18} />

                    Start AI Interview

                  </button>

                </div>

              )}

            </div>

          )}

        </div>


        {/* -------------------------------- */}
        {/* AI VOICE INTERVIEW */}
        {/* -------------------------------- */}

        {interviewStarted && (

          <div className="card p-7 mt-6">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-[#f4ded2] flex items-center justify-center">

                <Sparkles
                  className="text-[#9b4325]"
                  size={25}
                />

              </div>


              <div>

                <h2 className="text-xl font-black">

                  AI Saathi Interview

                </h2>

                <p className="text-sm text-gray-500">

                  Language: {language}

                </p>

              </div>

            </div>


            {/* PROGRESS */}

            <div className="mt-6">

              <div className="flex justify-between text-sm">

                <span>
                  Question {questionIndex + 1}
                </span>

                <span>
                  {questions.length} Questions
                </span>

              </div>


              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">

                <div
                  className="h-2 bg-[#9b4325] rounded-full transition-all"
                  style={{
                    width:
                      `${((questionIndex + 1) / questions.length) * 100}%`
                  }}
                />

              </div>

            </div>


            {/* QUESTION */}

            <div className="mt-7 rounded-3xl bg-[#f8f3ef] p-6">

              <div className="flex items-center gap-2 text-sm text-gray-500">

                <Volume2 size={18} />

                AI Saathi asks:

              </div>


              <h2 className="text-2xl font-black mt-3">

                {questions[questionIndex]}

              </h2>

            </div>


            {/* ANSWER */}

            <div className="mt-6">

              <label className="text-sm font-bold">

                Your Answer

              </label>


              <textarea
                value={answer}
                onChange={(event) =>
                  setAnswer(event.target.value)
                }
                placeholder="Speak or type your answer..."
                rows={4}
                className="w-full mt-2 border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#d8b9a8]"
              />

            </div>


            {/* MICROPHONE */}

            <button
  onClick={() => {

    if (isListening) {

      mediaRecorderRef.current?.stop();

      setIsListening(false);

    } else {

      startVoice();

    }

  }}
  className="w-full mt-4 border-2 border-dashed border-[#d8b9a8] rounded-2xl py-5 flex items-center justify-center gap-3 hover:bg-[#fcf7f3]"
>

  <Mic size={25} />

  {isListening
    ? "⏹️ Stop Recording"
    : "🎙️ Tap to Speak"
  }

</button>

            {/* NEXT */}

            <button
              onClick={nextQuestion}
              disabled={!answer.trim()}
              className="btn btn-primary mt-5 w-full justify-center disabled:opacity-50"
            >

              {questionIndex <
              questions.length - 1
                ? "Next Question"
                : "Finish Interview"
              }

              <ArrowRight size={18} />

            </button>

          </div>

        )}


        {/* -------------------------------- */}
        {/* AI RESULT */}
        {/* -------------------------------- */}

        {generated && (

          <div className="card p-7 mt-6">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-[#f4ded2] flex items-center justify-center">

                <Sparkles
                  className="text-[#9b4325]"
                />

              </div>


              <div>

                <h2 className="text-xl font-black">

                  AI Product Information

                </h2>

                <p className="text-sm text-gray-500">

                  Photo + Voice information collected successfully.

                </p>

              </div>

            </div>


            {/* DETAILS */}

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              <div className="rounded-2xl bg-[#f8f3ef] p-5">

                <div className="text-sm text-gray-500">
                  Product
                </div>

                <div className="font-black text-lg mt-1">
                  AI will generate this
                </div>

              </div>


              <div className="rounded-2xl bg-[#f8f3ef] p-5">

                <div className="text-sm text-gray-500">
                  Category
                </div>

                <div className="font-black text-lg mt-1">
                  AI will identify this
                </div>

              </div>


              <div className="rounded-2xl bg-[#f8f3ef] p-5">

                <div className="text-sm text-gray-500">
                  Craft
                </div>

                <div className="font-black text-lg mt-1">
                  AI will identify this
                </div>

              </div>


              <div className="rounded-2xl bg-[#f8f3ef] p-5">

                <div className="text-sm text-gray-500">
                  AI Status
                </div>

                <div className="font-black text-lg mt-1 flex items-center gap-2">

                  <CheckCircle
                    size={19}
                    className="text-green-600"
                  />

                  Information Collected

                </div>

              </div>

            </div>


            {/* ANSWERS */}

            <div className="mt-7">

              <h3 className="font-black text-lg">

                Artisan Information

              </h3>


              <div className="space-y-3 mt-4">

                {answers.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="rounded-2xl border border-gray-100 p-4"
                    >

                      <div className="text-sm text-gray-500">

                        {item.question}

                      </div>

                      <div className="font-semibold mt-1">

                        {item.answer}

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>


            <button
              onClick={generateProduct}
              className="btn btn-primary mt-7"
            >

              <Sparkles size={18} />

              Generate Professional Product

              <ArrowRight size={18} />

            </button>

          </div>

        )}

      </div>

    </div>

  );
}