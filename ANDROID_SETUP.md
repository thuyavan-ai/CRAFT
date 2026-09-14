# CRAFTSAATHI AI — Android / Capacitor Setup

This project is prepared to be packaged as an Android app using Capacitor.

## 1. Install Node.js

Use Node.js 18+ (Node.js 20 LTS is recommended).

## 2. Install dependencies

From the project root:

```bash
npm install
```

## 3. Build the React app

```bash
npm run build
```

## 4. Add Android platform

```bash
npx cap add android
```

This creates the `android/` Android Studio project.

## 5. Sync the web app into Android

```bash
npx cap sync android
```

## 6. Open Android Studio

```bash
npx cap open android
```

In Android Studio:

- Wait for Gradle sync to finish.
- Select an emulator or connect an Android phone with USB debugging enabled.
- Press the green Run ▶ button.

## 7. Generate an APK

In Android Studio:

**Build → Build Bundle(s) / APK(s) → Build APK(s)**

The debug APK will normally be under:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Important backend note

The Android app currently calls:

```text
http://localhost:5000/api
```

That works from a desktop browser when the backend is running locally, but **inside an Android phone, localhost means the phone itself**.

For a real phone demo, either:

1. Run the backend on a reachable computer/server and change the API URL in `src/services/api.js`, or
2. For the simplest offline SIH demo, keep the mock fallback responses in the frontend.

For a same-PC Android emulator, `10.0.2.2` can be used to reach the host computer instead of `localhost`.

## Capacitor app flow

React/Vite
→ `npm run build`
→ `dist/`
→ Capacitor
→ Android project
→ Android Studio
→ APK

## Native features you can add later

- Camera
- Microphone
- Speech-to-text
- Text-to-speech
- GPS
- Push notifications
- Offline storage

The current prototype is intentionally mock/demo-first so it can be presented quickly.
