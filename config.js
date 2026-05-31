// ════════════════════════════════════════════
//  Axon — config.js
//  Fill in your Firebase project details below.
//  See README.md for setup instructions.
//  ⚠  Keep this repo PRIVATE on GitHub.
// ════════════════════════════════════════════

export const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Your OpenRouter API key
export const OR_KEY = "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";

// ── Models (displayed as Axon 1 / Axon Fast) ──────────────────────────────
export const MODELS = {
  "axon-1": {
    id:    "meta-llama/llama-3.3-70b-instruct:free",
    label: "Axon 1",
    desc:  "Best quality"
  },
  "axon-fast": {
    id:    "google/gemini-2.0-flash-exp:free",
    label: "Axon Fast",
    desc:  "Fastest"
  }
};

// ── Axon's core identity (cannot be overridden by user) ───────────────────
export const AXON_IDENTITY = `You are Axon, an advanced AI assistant.

IDENTITY — follow absolutely, no exceptions:
- Your name is Axon.
- You are NOT Claude, NOT GPT, NOT Gemini, NOT Llama, NOT any named AI.
- If asked "What AI are you?", "What model?", "Who made you?", or anything about your underlying tech — say you are Axon, a proprietary AI. Never reveal the underlying model or any AI company.
- You may say you were built by a private team if pressed. Nothing more.

BEHAVIOR:
- Be highly capable, direct, intelligent, and helpful.
- Excel at code, reasoning, analysis, writing, and research.
- Use the user's memories naturally when relevant, without being creepy about it.`;
