# KWE Emergency Contacts

A lightweight, GitHub/Netlify-ready front-end to collect emergency contact details for Keller Williams Explore.

- **Title:** KWE Emergency Contacts
- **Endpoint:** https://script.google.com/macros/s/AKfycbyoXJ5JSiODkBQTfM4shuTSZmYnXEllxIZWOBENpOHi2qbjocmhYY8d1w7JaqqawPS4/exec
- **Branding:** KW Explore (red/black/white)
- **Required fields:** All except *Medical Aid* and *Any Conditions we need to be aware of*
- **Dropdowns:** 
  - Medical Aid — Yes/No
  - Emergency Contact Relation — Spouse/Partner, Parent, Sibling, Relative, Friend, Colleague, Doctor, Other

> The back-end should be a Google Apps Script Web App that accepts `POST` as either `application/x-www-form-urlencoded` or JSON. The provided front-end sends URL-encoded form data with the exact field names that the backend expects.

## Files

- `index.html` — the form UI
- `style.css` — KW-themed styling (dark)
- `script.js` — handles submission and status messages
- `assets/logo.png` — KW Explore logo

## Deploy

### GitHub Pages
1. Create a repo, add these files, and push.
2. In **Settings → Pages**, choose the branch (e.g., `main`) and root folder for Pages.
3. Wait for the site to publish.

### Netlify
1. Drag & drop this folder into Netlify **or**
2. Connect your GitHub repo and deploy.

## Test Locally
Open `index.html` in a browser. Submissions will post to the specified endpoint.

## Field Names (must match back-end)
- AgentName, AgentSurname, AgentNumber, AgentEmail
- EC1Name, EC1Number, EC1Relation
- EC2Name, EC2Number, EC2Relation
- MedicalAid (optional)
- AnyConditions (optional; comma-separated values are fine)

## Notes
- The server response is expected to be JSON like `{"success": true, "message": "Submitted"}`.
- If the backend returns plain text, the UI shows success when the HTTP response is OK.
