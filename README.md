# KW Explore — Agent Emergency Contacts (Front-end)

Static front-end for GitHub Pages/Netlify. Posts to your Google Apps Script Web App backend.

**Backend URL (change if you redeploy):**
```
https://script.google.com/macros/s/AKfycby5QSkUfm87XLYCkjBvC0zSFUYcdtEKT0-TFRpFSTNvM8x8b0nTMo0eqlwVyZrnYHGi/exec
```

## Deploy on GitHub Pages
1. Create a new repo and add the files in this folder.
2. Commit & push.
3. In **Settings → Pages**, set **Source** to **Deploy from a branch**, and choose **main / root**.
4. Open the Pages URL to use the form.

## Fields (all required)
- Agent Name, Surname, Number, Email
- Emergency Contact 1: Name, Number, Relation
- Emergency Contact 2: Name, Number, Relation
- Medical Aid: Yes/No

> Ensure your Apps Script backend allows CORS (e.g., `Access-Control-Allow-Origin: *`) and returns JSON.
