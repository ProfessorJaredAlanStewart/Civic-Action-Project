# Civic Action Project (CAP)

**Experiential civic engagement for community college government courses.**

The Civic Action Project replaces traditional government exams with a menu of hands-on civic engagement activities. Students choose from 39 assignments across three effort tiers to earn 100 points (40% of the course grade), drawing from at least two categories. The framework is designed to connect abstract government concepts to students' lived experiences in their communities.

🌐 **Live site:** [professorjaredalanstewart.github.io/Civic-Action-Project](https://professorjaredalanstewart.github.io/Civic-Action-Project/)

📱 **Mobile app:** [Install on your phone](https://professorjaredalanstewart.github.io/Civic-Action-Project/install-app.html)

📚 **Course context:** GOVT 2305 (Federal Government) and GOVT 2306 (Texas Government) at Tarrant County College, Fort Worth, Texas

---

## What's in this repository

This repo is the open-source home of the Civic Action Project. Everything here is free for instructors at any institution to use, adapt, and remix. The goal is to make CAP easy to adopt as-is or fit to your own course.

### For instructors

| File | What it is |
|---|---|
| [`index.html`](index.html) | The main CAP website — overview, rationale, student outcomes |
| [`CAP - Build and Track Activities and Points.html`](https://professorjaredalanstewart.github.io/Civic-Action-Project/CAP%20-%20Build%20and%20Track%20Activities%20and%20Points.html) | Multi-section instructor tracker. Manages multiple class sections, imports rosters from Canvas, exports gradebook-ready CSV |
| `CAP Assignments Complete Guide.pdf` | Full assignment guide with all 39 activities, rubrics, and student-facing instructions |
| `CAP Path to 100 Points (With All 39 Assignments).html` | Interactive planning tool — helps students see how to combine activities to reach 100 points |
| `CAP_All_29_Assignments.imscc` | Canvas Common Cartridge — drop into your Canvas course to auto-create CAP assignments. *(Currently covers the original 29; a 39-assignment package is in progress.)* |
| `CAP_All_39_Assignments_COMPLETE.md` | Full markdown source of all 39 assignments — copy, edit, adapt for your context |
| `CAP_Safety_Focused_Assignments.md` | Ten safety-themed assignments grounded in Ballard et al. (2016), which found safety-focused civic projects produced the strongest civic engagement outcomes |
| `Video_Introduction_Assignment.docx` | Week-1 icebreaker — students record a "Government & Me" video reflection |

### Mobile app for students *(new)*

| File | What it is |
|---|---|
| [`install-app.html`](install-app.html) | Install landing page — step-by-step iPhone and Android instructions, plus a QR code |
| `CAP_Mobile_App.html` | The mobile app itself (single-file Progressive Web App) |
| `manifest.json` | PWA manifest |
| `sw.js` | Service worker for offline support |
| `icon-192.png`, `icon-512.png`, `icon-maskable.png`, `apple-touch-icon.png`, `favicon.png` | App icons for both platforms |

The app is a Progressive Web App — students install it directly from their browser to their home screen. No App Store, no Google Play, no account required. Updates push automatically.

---

## 📱 The Mobile App

The CAP mobile app puts every assignment, every rubric criterion, and progress tracking in students' pockets. It complements Canvas rather than replacing it: students plan and review work in the app, then hand off to Canvas for the actual submission.

### What students can do in the app

- **Browse all 39 assignments** organized by effort tier (Higher, Medium, Quick), with search and filters
- **Review full rubrics** for any assignment — every criterion the instructor will evaluate, organized by section
- **Check off requirements** as they work, with progress saved on their device
- **Attach work from their phone** — photos, videos, PDFs, documents, or written reflections (typed in the app)
- **Hand off to Canvas** in two ways:
  - *Open Canvas* — launches Canvas Student (or canvas.tccd.edu in browser). Written reflections are auto-copied to the clipboard for easy pasting.
  - *Share Files* — uses the phone's native share sheet for direct file delivery
- **Track progress** toward 100 points, with a multi-category requirement check

### Privacy and FERPA

Student work never touches a server controlled by this app. Files travel from the phone directly to Canvas through the operating system's native share or upload flow. Progress data lives only on the student's device in browser local storage. There is no backend, no telemetry, no analytics.

### How students install it

1. Visit [the install page](https://professorjaredalanstewart.github.io/Civic-Action-Project/install-app.html) (or scan the QR code)
2. **iPhone:** open in Safari → Share → Add to Home Screen
3. **Android:** open in Chrome → menu → Install app (or Add to Home Screen)
4. The CAP icon appears on the home screen and opens the app in standalone mode

### How to record a video for a video assignment

1. Open your phone's regular camera app and record the video. It saves to Photos as usual.
2. Open the CAP app and tap your assignment
3. Tap Submit → Add a video → pick the recording you just made from your gallery
4. Optionally type a written reflection
5. Tap Open Canvas → land in Canvas → Submit Assignment → Upload File → pick the video from Photos

This two-step flow (record first, attach second) is more reliable than recording inside a browser app, which Android's memory management often interrupts.

---

## Quick Start for Instructors

CAP is designed to be picked up and run as-is, then adapted as you learn what works for your students.

1. **Read the assignment guide** — `CAP Assignments Complete Guide.pdf` is the fastest way to understand what students will do and what each activity requires.
2. **Decide your point structure** — the standard is 100 points worth 40% of the course grade, but this is yours to adjust. Just communicate clearly to students.
3. **Set up Canvas** — either import the IMSCC file for one-click setup, or build assignments manually using the markdown source.
4. **Use the instructor tracker** — the multi-section HTML tracker handles roster import, point tracking, and gradebook export. Open it in any browser; no install required.
5. **Share the mobile app with students** — once you've reviewed it on your own phone, send the [install page link](https://professorjaredalanstewart.github.io/Civic-Action-Project/install-app.html) in a Canvas announcement on day one.

---

## Background and Research Context

CAP is the focus of Professor Stewart's EdD dissertation in Educational Technology Leadership at the Carnegie Project on the Education Doctorate (CPED) framework. Theoretical grounding includes:

- **Self-Determination Theory** (Ryan & Deci) — autonomy, competence, and relatedness as drivers of student motivation
- **Experiential Learning Theory** (Kolb) — knowledge created through transformation of experience
- **Action Civics literature** — civic engagement as practiced rather than memorized
- **Rogers' Diffusion of Innovations** — the framework guiding CAP's distribution to other community college instructors

The 10 safety-focused assignments are grounded in Ballard, Cohen, & Littenberg-Tobias (2016), who found that safety-themed civic projects produced the largest gains in civic commitment, self-efficacy, and action civics knowledge among the action categories they studied.

Pre/post measurement uses the Doolittle & Faul (2013) Civic Engagement Scale (14-item, 7-point Likert).

---

## Pedagogical principles

A few things shape every part of CAP:

- **Choice and autonomy.** Students pick which activities to complete from the menu. The same point total can be reached many ways.
- **Local and lived.** Activities require local engagement — attending an actual government meeting, interviewing a real community member, walking through real services. AI-generated responses don't pass the rubric.
- **Authentic assessment.** Complete/Incomplete rubrics with specific checkbox criteria. No partial credit games. Did the student do the thing or not?
- **Categories, not silos.** Higher Effort, Medium Effort, and Quick Engagement coexist. Students must draw from at least two tiers — encouraging both depth and breadth.
- **Scaffolding via reflection.** Most activities pair the doing with a written reflection that connects observation to course concepts.

---

## Adapting CAP for your course

CAP was built for federal and Texas government, but the bones generalize. Assignments overwhelmingly involve local civic action — meetings, interviews, services, reflections — which work equally well for any state government course or general American government class. The course-specific work is in the rubric overlays and concept connections, not in the activities themselves.

A companion document covers course-specific overlays for GOVT 2305 (Federal) and GOVT 2306 (Texas), plus six course-exclusive activities for each. The same overlay approach can extend CAP to any state.

For non-government courses, the model — replace exams with a menu of experiential activities, scored Complete/Incomplete against criterion-based rubrics — transfers cleanly. The activity content needs to be rebuilt from scratch for the new discipline, but the structure, the points-from-tiers logic, and the reflection-centric assessment all carry over.

---

## Contact and contribution

This project is maintained by **Professor Jared Alan Stewart**, government faculty at Tarrant County College.

- 📧 Professional: [jared.stewart@tccd.edu](mailto:jared.stewart@tccd.edu)
- 📧 Personal: [jared.a.stewart@gmail.com](mailto:jared.a.stewart@gmail.com)

Adopters using CAP at other institutions are welcome to email with questions, feedback, adaptation stories, or research collaboration interest. CAP's distribution to other community colleges is itself part of the dissertation work — your experience implementing it is genuinely valuable data, not just a courtesy report.

If you find a bug in the mobile app, a typo in an assignment description, or have a suggestion for a new activity, please open an issue on this repository.

---

## License and use

All materials in this repository are open educational resources. Instructors are free to use, adapt, distribute, and remix for educational purposes. Attribution is appreciated but not required. Commercial use requires permission.

The mobile app is a single-file Progressive Web App with no third-party tracking, no analytics, and no external dependencies beyond Google Fonts (Libre Baskerville and Source Sans 3). All assignment data is embedded in the file itself.

---

*Last meaningful update: includes the mobile app, install landing page, full PWA assets, and 39 assignments (29 original + 10 safety-focused).*
