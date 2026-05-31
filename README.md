# Axon AI

A polished AI chatbot with Gmail login, persistent conversations, and memory — built as a static site for GitHub Pages.

---

## Stack

| Layer | Tech |
|---|---|
| Hosting | GitHub Pages (free, static) |
| Auth | Firebase Authentication — Google / Gmail only |
| Database | Firebase Firestore — conversations, messages, memories |
| AI | OpenRouter — free models (Axon 1 & Axon Fast) |
| Frontend | Vanilla JS (ES modules), no build step |

---

## Setup Guide

### 1 — Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and click **Add project**
2. Give it a name (e.g. `axon-chat`), disable Analytics if you want, click **Create**

#### Enable Google sign-in
3. In the left sidebar → **Authentication** → **Get started**
4. Click **Google** under Sign-in providers → toggle **Enable** → add your support email → **Save**

#### Create Firestore database
5. Left sidebar → **Firestore Database** → **Create database**
6. Choose **Start in production mode** → pick any region → **Enable**
7. After it loads, click the **Rules** tab and replace everything with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
8. Click **Publish**

#### Get your web app config
9. Left sidebar → **Project settings** (gear icon) → scroll to **Your apps** → click **</>** (Web)
10. Register the app (any nickname) — **don't** enable Firebase Hosting
11. Copy the `firebaseConfig` object shown

### 2 — Fill in config.js

Open `config.js` and replace the placeholder values with your Firebase config:

```js
export const firebaseConfig = {
  apiKey:            "AIza...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project.firebasestorage.app",
  messagingSenderId: "123456789",
  appId:             "1:123...:web:abc..."
};
```

The OpenRouter API key is already filled in.

### 3 — Authorize your GitHub Pages domain

1. Firebase Console → **Authentication** → **Settings** → **Authorized domains**
2. Click **Add domain** and add your GitHub Pages URL:
   `your-username.github.io`

### 4 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial Axon setup"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

> ⚠️ **Keep this repo private** — your OpenRouter API key is in `config.js`

### 5 — Enable GitHub Pages

1. GitHub repo → **Settings** → **Pages**
2. Under **Source** → select **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)` → **Save**
4. Wait ~1 min, then visit `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## Features

- **Gmail-only login** via Google OAuth (Firebase Auth)
- **Persistent conversations** stored in Firestore, synced across devices
- **Real-time sidebar** — conversations update live with Firestore listeners
- **Axon Memory** — automatically learns facts about you from conversations; view and delete in Settings
- **Streaming responses** — text appears token by token
- **Axon identity** — always responds as Axon, never reveals the underlying model
- **Think mode** — extended reasoning toggle
- **Axon 1** (Llama 3.3 70B — best quality, free) and **Axon Fast** (Gemini 2.0 Flash — fastest, 1M ctx, free)
- **3 themes** — Dark, Light, Midnight
- **Settings panel** with Profile, Memory, Model, and Appearance tabs
- **Logout** from sidebar or Settings
- **Ctrl+K** → new chat

---

## File Structure

```
axon-chat/
├── config.js      ← Fill in your Firebase config here
├── login.html     ← Gmail login page
├── login.css
├── index.html     ← Main chat app
├── style.css
├── app.js         ← All app logic (Firebase + OpenRouter)
└── README.md
```

---

## Firestore Data Structure

```
users/
  {userId}/
    conversations/
      {convId}/
        - title
        - createdAt
        - updatedAt
        messages/
          {msgId}/
            - role (user | assistant)
            - content
            - thinking (optional)
            - createdAt
    memories/
      {memId}/
        - content
        - createdAt
```
