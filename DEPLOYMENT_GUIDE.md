# CAP Mobile App — Deployment Guide

Complete instructions for getting the app live on your GitHub Pages CAP site, with the new install landing page that replaces direct app links from your homepage.

---

## What you're deploying (11 files)

| File | What it is |
|---|---|
| **`index.html`** | **Updated** — adds the new "CAP Mobile App for Students" card to your Resources grid, marked with a NEW badge |
| **`install-app.html`** | **New** — the landing page where the homepage card sends visitors. Has step-by-step iPhone and Android install instructions plus a QR code |
| `CAP_Mobile_App.html` | The actual app — all 39 assignments, rubrics, capture, share-to-Canvas |
| `manifest.json` | PWA manifest — tells phones this is an installable app |
| `sw.js` | Service worker — caches the app for offline use |
| `icon-192.png` | Standard app icon (Android home screen) |
| `icon-512.png` | High-res icon (Android splash) |
| `icon-maskable.png` | Adaptive icon (Android can crop to circles/squares) |
| `apple-touch-icon.png` | iOS home screen icon |
| `favicon.png` | Browser tab icon |
| `README_addition.md` | Snippet to paste into your existing README, if you keep one |

---

## How it all connects

```
Visitor lands on your CAP homepage (index.html)
  ↓ sees the new "CAP Mobile App for Students" card with NEW badge
  ↓ clicks the card
Lands on install-app.html
  ↓ scans QR with phone, OR clicks "Open the app now"
Phone loads CAP_Mobile_App.html
  ↓ taps Share → Add to Home Screen
App installs on phone with proper icon
```

---

## 1. Upload to GitHub

1. Open your repo: **https://github.com/ProfessorJaredAlanStewart/Civic-Action-Project**

2. Click **Add file → Upload files**.

3. Drag all 11 files in at once. **Important:** the new `index.html` will replace your current homepage. That's intentional — it adds the app card while leaving everything else exactly as it was.

4. Commit message:
   ```
   Add CAP Mobile App: new landing page, app card on homepage, all PWA assets
   ```

5. Click **Commit changes**. GitHub Pages takes 30–90 seconds to redeploy.

---

## 2. Verify the homepage update

After deploy completes, visit your CAP homepage:

**https://professorjaredalanstewart.github.io/Civic-Action-Project/**

In the **Instructor Resources** section you should now see a card at the top reading **"CAP Mobile App for Students"** with a phone emoji 📱 and a small **NEW** badge in the upper-left corner. Click it.

You should land on the install page (`install-app.html`) with the hero "Carry the project in your pocket," a QR code on the right, and step-by-step iPhone and Android instructions.

---

## 3. Test on your iPhone

1. Open Safari on your phone, go to the install page URL or scan the QR with your iPhone camera.
2. Tap the direct link "Open the app now" — the app loads.
3. Tap Safari's Share button → **Add to Home Screen** → confirm name "CAP" → Add.
4. The CAP icon appears on your home screen. Tap it. App opens in standalone (no browser bars).
5. Test the submission flow: open an assignment that needs video, tap Submit → Video → record → Send to Canvas → pick Files / Save to Files.
6. Open Canvas Student, navigate to the assignment, attach the saved file.

---

## 4. Test on Android

1. Open Chrome, go to the install page URL or scan the QR.
2. Tap "Open the app now."
3. Look for the install banner at the bottom, OR tap the three-dot menu → **Install app**.
4. The app installs with the proper icon. Run the same submission test as above.

---

## 5. Tell your students about it

A short Canvas announcement does the job:

> **CAP just got easier — install the app on your phone.**
>
> All 39 Civic Action Project assignments, every rubric, and a built-in camera for video reflections — now in your pocket.
>
> Visit https://professorjaredalanstewart.github.io/Civic-Action-Project/ and click the new **CAP Mobile App for Students** card at the top of the resources section. Or go straight to the [install page](https://professorjaredalanstewart.github.io/Civic-Action-Project/install-app.html).
>
> Open in Safari (iPhone) or Chrome (Android), then add to your home screen.

You can also project the install page in class on day one and have students scan the QR.

---

## 6. Updating the README (optional)

If you maintain a `README.md` in your repo, open `README_addition.md` and paste the section into your existing README, ideally near the top under your "Resources" or "What's included" list. If you don't have a README, the snippet itself works as a starting point.

---

## 7. Troubleshooting

### The new card doesn't appear on the homepage
You probably uploaded the new `index.html` to a subfolder by mistake. It needs to be at the root of your repo, replacing the existing one. Check that you're seeing today's date next to `index.html` in your repo's file list.

### The app card is there but clicking it 404s
The `install-app.html` file didn't upload correctly. Re-upload just that file.

### The QR code doesn't render on the install page
The QR is embedded as a base64 data URI inside the HTML, so it loads even with no network and without any image file dependency. If it doesn't show, the upload may have corrupted the file — re-upload `install-app.html` fresh.

### Cloudflare email obfuscation broke the mailto link
Your recurring issue. The install page has one `mailto:jared.stewart@tccd.edu` near the bottom of the FAQ section. After deploy, view-source on the install page and confirm the email is intact.

### "I uploaded everything but the app won't install on Android"
For Android's "Install app" prompt, all four conditions must be met:
1. Site served over HTTPS ✓ (GitHub Pages does this automatically)
2. Valid `manifest.json` accessible ✓
3. Service worker registered ✓
4. User has visited at least twice or spent some time on page

Easiest workaround: use Chrome's three-dot menu → Add to Home Screen, which works on first visit.

---

## File structure on GitHub after upload

```
Civic-Action-Project/
├── index.html                  ← UPDATED (homepage with new app card)
├── install-app.html            ← NEW (install landing page)
├── CAP_Mobile_App.html         ← NEW (the app)
├── manifest.json               ← NEW
├── sw.js                       ← NEW
├── icon-192.png                ← NEW
├── icon-512.png                ← NEW
├── icon-maskable.png           ← NEW
├── apple-touch-icon.png        ← NEW
├── favicon.png                 ← NEW
├── README.md                   ← optionally updated with README_addition.md content
├── CAP - Build and Track Activities and Points.html   ← unchanged
├── CAP Assignments Complete Guide.pdf                 ← unchanged
└── ... (your other existing files, all untouched)
```

The 10 deployable files (everything but `README_addition.md`, which is just notes for you) live at the root of your Pages site.

---

That's the whole flow. Upload, wait 60 seconds, test on your phone, send the announcement to students.
