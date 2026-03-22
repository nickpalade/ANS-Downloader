# ANS Downloader

![ANS Downloader preview](readme.png)

Browser extension (Firefox & Chrome) that adds a **Download** button to the ANS grading/review page, letting you save your exam PDFs directly.

Originally created by [Z3r0byte](https://github.com/Z3r0byte/ANS-Downloader). This is an updated fork that fixes compatibility with the current ANS platform and adds Chrome support.

To quote the original creator: **"Is this legal? I hope so."**

---

## Installing — Firefox / Zen Browser

Firefox requires extensions to be signed by Mozilla for permanent installation.

### Option A: Temporary install (works immediately)
1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on...**
3. Select `manifest.json` from the downloaded/cloned folder
> Resets on browser restart — just repeat steps 2–3 to reload.

### Option B: Disable signature check (permanent, developer only)
1. Go to `about:config` → search `xpinstall.signatures.required` → set to `false`
2. Download **[ANS-Downloader-firefox.xpi](ANS-Downloader-firefox.xpi)**
3. Go to **Add-ons & Themes** → cog wheel → **Install Add-on From File** → select the `.xpi`

---

## Installing — Chrome / Edge / Brave

1. Download **[ANS-Downloader-chrome.zip](ANS-Downloader-chrome.zip)** and unzip it
2. Go to `chrome://extensions` (or `edge://extensions`)
3. Enable **Developer mode** (toggle in top-right)
4. Click **Load unpacked** and select the unzipped folder

---

## Why download your exam?

Once you have your exam PDF, you can upload it directly to any AI (ChatGPT, Claude, Gemini, etc.) and ask it to explain the questions you got wrong, walk you through the model answers, or teach you the underlying concepts. It's a fast way to turn your graded exam into a personal study session.

---

## How it works

On any ANS grading review page (`/grading/view/...`), a **Download** button is injected into the toolbar. Clicking it:

- Finds all file tabs (Result, Formulas, etc.) and downloads each PDF directly using the presigned URLs embedded in the page

---

## FAQ

**Does this work on Chromium based browsers?**\
Yes, as of this fork. The extension uses Manifest V3 which is supported by both Firefox and Chrome.

---

## License

Licensed under the [Apache 2.0 License](LICENSE).
Original extension by [Z3r0byte](https://github.com/Z3r0byte/ANS-Downloader).
