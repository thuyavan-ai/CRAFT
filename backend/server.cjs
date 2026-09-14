const express = require("express");
const cors = require("cors");
const multer = require("multer");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
});
app.use(cors());
app.use(express.json({ limit: "10mb" }));
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const product = {
  name: "Handwoven Kanchipuram Silk Saree",
  material: "Pure Silk",
  craft: "Handloom",
  region: "Tamil Nadu",
  productionTime: "10 days",
  category: "Sarees & Textiles",
  price: 3199,
  fairMin: 2800,
  fairMax: 3400,
  englishDescription:
    "A traditionally handwoven Kanchipuram silk saree created using traditional weaving techniques.",
  hindiDescription:
    "पारंपरिक बुनाई तकनीक से तैयार की गई हाथ से बुनी कांजीवरम रेशमी साड़ी।",
  story:
    "This product carries the skill and tradition of an artisan community. Each piece is prepared with careful handloom work and attention to detail.",
  caption:
    "Discover the story behind every thread. Handwoven with tradition, care and skill."
};

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "CRAFTSAATHI backend is running" });
});
app.post(
  "/api/voice/transcribe",
  upload.single("audio"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: "No audio file received",
        });
      }

      const transcription =
        await openai.audio.transcriptions.create({
          file: await OpenAI.toFile(
            req.file.buffer,
            "voice.webm"
          ),
          model: "gpt-4o-mini-transcribe",
        });

      res.json({
        success: true,
        text: transcription.text,
      });

    } catch (error) {
      console.error(
        "Transcription error:",
        error
      );

      res.status(500).json({
        success: false,
        error: "Voice transcription failed",
      });
    }
  }
);
app.post("/api/voice/process", (req, res) => {
  const language = req.body.language || "Tamil";
  res.json({
    language,
    regionalText:
      "இது காஞ்சிபுரம் பட்டு சேலை. இதை கையால் நெய்தேன். இதை செய்ய 10 நாட்கள் ஆகும்.",
    english:
      "This is a Kanchipuram silk saree. I handwoven it and it takes 10 days to make.",
    hindi:
      "यह कांजीवरम रेशमी साड़ी है। मैंने इसे हाथ से बुना है और इसे बनाने में 10 दिन लगते हैं।",
    assistant:
      "I understood your product. I prepared the product information in English and Hindi."
  });
});

app.post("/api/product/generate", (req, res) => {
  res.json(product);
});

app.post("/api/price/check", (req, res) => {
  const offer = Number(req.body.offer || 0);
  const fair = product.fairMin;
  const difference = fair > 0 ? Math.round(((fair - offer) / fair) * 100) : 0;
  res.json({
    fairMin: product.fairMin,
    fairMax: product.fairMax,
    recommended: product.price,
    offer,
    difference,
    warning: offer > 0 && difference >= 30
      ? "This offer is significantly below the estimated fair price. Consider negotiating."
      : "The offer is within a reasonable range."
  });
});

app.post("/api/marketplace/publish", (req, res) => {
  res.json({
    success: true,
    productId: "CRAFT-1042",
    status: "LIVE — DEMO",
    marketplace: req.body.marketplace || "CRAFTSAATHI STORE"
  });
});

app.listen(5000, () => {
  console.log("CRAFTSAATHI backend running at http://localhost:5000");
});