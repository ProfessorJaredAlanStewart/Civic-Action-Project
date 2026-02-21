# Setting Up Your CAP GitHub Site — Step by Step

This guide walks you through creating a free, public website for the Civic Action Project using GitHub Pages. No coding required beyond copying files. Total time: about 20 minutes.

---

## What You're Building

GitHub gives you two things:

1. **A repository** — a folder in the cloud where your CAP files live (tracker, assignments, rubrics, etc.). You can update these files anytime from any computer.

2. **A free website** — GitHub Pages turns that folder into a live website at `https://yourusername.github.io/civic-action-project`. Other instructors can visit this URL, read about CAP, and download everything they need.

---

## Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com) and click **Sign up**
2. Use your professional email (your TCC email is fine, or a personal one you check regularly)
3. Choose a username that looks professional — other instructors will see this in your URL
   - Good: `profstew`, `jaredstewart-edu`, `stewart-govt`
   - Avoid: `xXgamer99Xx`
4. Complete the signup process (free tier is all you need)

---

## Step 2: Create the Repository

1. Once logged in, click the **+** button in the top-right corner → **New repository**
2. Fill in:
   - **Repository name:** `civic-action-project` (this becomes part of your URL)
   - **Description:** `Civic Action Project (CAP) — Experiential civic engagement resources for community college government courses`
   - **Visibility:** Select **Public** (required for free GitHub Pages hosting)
   - **Initialize this repository with:** Check ✅ **Add a README file**
3. Click **Create repository**

You now have an empty repository with a default README.

---

## Step 3: Upload Your Files

1. From your repository page, click **Add file** → **Upload files**
2. Drag and drop (or browse for) ALL of these files:

| File | What It Is |
|------|-----------|
| `index.html` | Your landing page (the website visitors see) |
| `README.md` | Replace the default one — this is what people see on the GitHub repo page |
| `CAP_Tracker.html` | The interactive student tracker (use your latest fixed version) |
| `Video_Introduction_Assignment.docx` | The Week 1 video icebreaker assignment |
| `CAP_Full_Assignment.pdf` | Complete assignment guide (convert your .md to PDF, or upload as-is) |
| `CAP_Rubrics.pdf` | Rubrics document |
| `Implementation_Guide.pdf` | Implementation guide for instructors |
| `Canvas_Setup_Instructions.pdf` | Canvas configuration walkthrough |
| `CAP_Reflection_Survey.pdf` | Pre/post civic engagement survey |

3. At the bottom, type a commit message: `Initial upload of CAP resources`
4. Click **Commit changes**

**Don't have PDFs of everything yet?** That's fine — upload what you have now. You can add more files later (see Step 6).

---

## Step 4: Enable GitHub Pages

This is the step that turns your folder into a live website.

1. Go to your repository page
2. Click **Settings** (gear icon in the top menu bar)
3. In the left sidebar, scroll down and click **Pages**
4. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**
6. Wait 1–3 minutes, then refresh the page
7. You'll see a green banner: **Your site is live at** `https://yourusername.github.io/civic-action-project`

Click that link. Your CAP landing page is now live on the internet.

---

## Step 5: Verify Everything Works

Visit your new site and check:

- [ ] The landing page loads with the navy header and CAP description
- [ ] Each resource link in the "Instructor Resources" section works
- [ ] The CAP Tracker opens in the browser when clicked
- [ ] The .docx and .pdf files download when clicked

**If a link is broken:** The file name in `index.html` must match the actual file name exactly (including capitalization). See Step 7 for how to fix this.

---

## Step 6: Updating Files Later

This is the best part — you can update any file anytime, and the website automatically reflects the changes within a few minutes.

### To replace an existing file:
1. Go to your repository on GitHub
2. Click on the file you want to update (e.g., `CAP_Tracker.html`)
3. Click the **pencil icon** (✏️) to edit, or click the **...** menu → **Delete file**, then re-upload the new version
4. For binary files like .docx or .pdf: Click **Add file** → **Upload files**, upload the new version with the **same file name**, and it will overwrite the old one

### To add a new file:
1. Click **Add file** → **Upload files**
2. Drag in your new file
3. Commit the change

### To edit index.html directly on GitHub:
1. Click on `index.html`
2. Click the pencil icon
3. Make your changes in the browser editor
4. Click **Commit changes**

Changes go live within 2–3 minutes after committing.

---

## Step 7: Customizing the Landing Page

The `index.html` file has placeholder values you should update:

### Your contact info
Search for `jared.stewart@tccd.edu` and replace with your actual email. Also update the TCC link if needed.

### Resource links
Each resource card has an `href` attribute pointing to a file name. Make sure these match your actual uploaded file names:

```html
<a href="CAP_Tracker.html" class="resource-card">
```

If your tracker file is named `CAP_Tracker_Fixed.html`, either:
- Rename the file to `CAP_Tracker.html` before uploading, or
- Change the href in index.html to match: `href="CAP_Tracker_Fixed.html"`

### Adding new resources
Copy an existing resource card block and modify the title, description, icon class, and href. The icon color classes available are:

| Class | Color |
|-------|-------|
| `icon-tracker` | Blue |
| `icon-assignments` | Green |
| `icon-rubrics` | Amber |
| `icon-guide` | Purple |
| `icon-canvas` | Red |
| `icon-video` | Indigo |
| `icon-survey` | Dark green |

---

## Step 8: Sharing Your Site

Once everything looks good, you can share your site URL anywhere:

- **Email signature:** Add the link to your faculty email signature
- **Conference presentations:** Include the URL on your slides
- **Dissertation:** Reference the URL as the distribution point for your intervention materials
- **Faculty workshops:** Share the link in chat or on a handout
- **Social media / LinkedIn:** Post about CAP with the link

The URL format is: `https://yourusername.github.io/civic-action-project`

---

## Folder Structure Reference

When everything is uploaded, your repository should look like this:

```
civic-action-project/
├── index.html                          ← Landing page (your website)
├── README.md                           ← GitHub repo description
├── CAP_Tracker.html                    ← Interactive student tracker
├── Video_Introduction_Assignment.docx  ← Week 1 video assignment
├── CAP_Full_Assignment.pdf             ← All 29 activities
├── CAP_Rubrics.pdf                     ← Complete/Incomplete rubrics
├── Implementation_Guide.pdf            ← Instructor setup guide
├── Canvas_Setup_Instructions.pdf       ← Canvas LMS configuration
└── CAP_Reflection_Survey.pdf           ← Pre/post survey instrument
```

You can add more files anytime — lesson plans, case studies, slides, data templates — and link to them from `index.html`.

---

## Troubleshooting

**"My site shows the README instead of the landing page"**
Make sure your file is named exactly `index.html` (lowercase). GitHub Pages looks for this specific file name.

**"My site says 404"**
GitHub Pages can take up to 10 minutes on first deploy. Wait and refresh. Also confirm in Settings → Pages that the source is set to `main` branch, `/ (root)` folder.

**"File downloads don't work"**
The `href` in your index.html must match the file name exactly, including capitalization. `CAP_Tracker.html` is different from `cap_tracker.html`.

**"I accidentally deleted something"**
GitHub keeps a history of every change. Go to your repository, click the clock icon ("Commits"), find the version before the deletion, and you can recover the file.

**"I want a custom domain like civicactionproject.org"**
GitHub Pages supports custom domains. Buy a domain from any registrar (Namecheap, Google Domains, etc.), then follow GitHub's [custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). This is optional — the github.io URL works perfectly fine.

---

## Why GitHub?

- **Free hosting** — no monthly fees, no ads, no expiration
- **Always available** — 99.9% uptime, hosted by Microsoft
- **Version history** — every change is tracked; you can always roll back
- **Professional** — used by millions of developers and academics; looks credible in a dissertation
- **Shareable** — anyone with the URL can access your materials instantly
- **No maintenance** — no server to manage, no software to update

For an EdD candidate distributing pedagogical innovations to community college faculty, this is the simplest, most sustainable distribution channel available.
