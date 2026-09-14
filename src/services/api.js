const API = "http://localhost:5000/api";

export async function processVoice(language) {
  const r = await fetch(`${API}/voice/process`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language })
  });
  return r.json();
}

export async function generateProduct() {
  const r = await fetch(`${API}/product/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });
  return r.json();
}

export async function checkPrice(offer) {
  const r = await fetch(`${API}/price/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ offer })
  });
  return r.json();
}

export async function publishMarketplace(marketplace) {
  const r = await fetch(`${API}/marketplace/publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ marketplace })
  });
  return r.json();
}
export async function transcribeAudio(audioBlob) {
  const formData = new FormData();

  formData.append("audio", audioBlob, "voice.webm");

  const r = await fetch(`${API}/voice/transcribe`, {
    method: "POST",
    body: formData
  });

  if (!r.ok) {
    throw new Error("Voice transcription failed");
  }

  return r.json();
}