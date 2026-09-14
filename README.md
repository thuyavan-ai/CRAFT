# CRAFTSAATHI AI — SIH Prototype

## What this prototype demonstrates

Login → Regional language → Home → One Photo → AI voice → Regional text → English + Hindi → Product listing → Fair price → Marketplace demo → Customer page.

It also includes a dashboard, AI Tools, Network, Profile and Settings.

## Requirements

- Node.js 18+ recommended
- VS Code
- Internet is not required for the mock AI workflow after dependencies are installed.

## Install

Open a terminal in this folder:

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Open the Vite URL shown in the terminal, normally:

http://localhost:5173

## Run backend

Open a SECOND terminal in the same folder:

```bash
npm run server
```

Backend:

http://localhost:5000

## Important prototype notes

1. The voice workflow uses a realistic mock response. It is designed so real speech-to-text, translation and LLM services can be connected later.
2. The photo workflow demonstrates the product-preparation journey. It does NOT claim to perform real AI background removal yet. Connect a real image-processing service for production.
3. Amazon/Flipkart buttons are DEMO marketplace publishing screens. Real seller/API integration requires authorized marketplace access and seller configuration.
4. No API keys are included. Never expose secret API keys in frontend code.
5. The demo product data is fictional and intended for presentation.

## Suggested 3-minute SIH demo

1. Login.
2. Select Tamil.
3. Home → One Photo.
4. Upload a product photo.
5. Click Make Product Ready.
6. Continue to AI Voice Assistant.
7. Click Start Speaking.
8. Show Tamil text.
9. Show English + Hindi.
10. Create Product Listing.
11. Show fair price ₹2,800–₹3,400 and recommended ₹3,199.
12. Publish to CRAFTSAATHI STORE / marketplace demo.
13. Open Customer View.
14. Finish with Buy Now.

## Next real-AI upgrades

Regional voice:
Regional Speech → Speech-to-Text → language identification → translation → LLM business reasoning → English/Hindi text → TTS.

Photo:
Image upload → object/background segmentation → pure white background → product vision model → listing generation.

Business intelligence:
Fair price regression model + buyer matching + demand forecast + order feasibility + risk scoring.

For a one-day prototype, do not train an LLM from scratch. Use mock responses first and replace modules one at a time.