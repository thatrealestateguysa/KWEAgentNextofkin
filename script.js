
const ENDPOINT = "https://script.google.com/macros/s/AKfycbyoXJ5JSiODkBQTfM4shuTSZmYnXEllxIZWOBENpOHi2qbjocmhYY8d1w7JaqqawPS4/exec";

// Basic helper to serialize form data as URL-encoded params
function toUrlEncoded(form) {
  const fd = new FormData(form);
  // Trim all values
  for (const [k, v] of fd.entries()) {
    if (typeof v === "string") {
      fd.set(k, v.trim());
    }
  }
  return new URLSearchParams(fd);
}

function setStatus(msg, type = "") {
  const el = document.getElementById("status");
  el.textContent = msg;
  el.className = type ? type : "";
}

document.getElementById("emergencyForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.currentTarget;

  // Simple client-side validation for required inputs
  const requiredNames = [
    "AgentName","AgentSurname","AgentNumber","AgentEmail",
    "EC1Name","EC1Number","EC1Relation",
    "EC2Name","EC2Number","EC2Relation"
  ];
  for (const name of requiredNames) {
    const field = form.elements[name];
    if (!field || !field.value || !String(field.value).trim()) {
      field && field.focus();
      setStatus(`Please complete the required field: ${name}`, "error");
      return;
    }
  }

  setStatus("Submitting…");

  try {
    const body = toUrlEncoded(form);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body
    });
    let data = null;
    try {
      data = await res.json();
    } catch (err) {
      // Apps Script might return text when misconfigured
      data = { success: res.ok, message: res.ok ? "Submitted" : "Submission failed" };
    }
    if (data && data.success) {
      setStatus("Thank you! Your details have been submitted.", "success");
      form.reset();
      // Reset selects placeholder
      for (const sel of form.querySelectorAll("select")) {
        sel.selectedIndex = 0;
      }
    } else {
      setStatus(data && data.message ? data.message : "Submission failed. Please try again.", "error");
    }
  } catch (err) {
    setStatus("Network error — please check your connection and try again.", "error");
  }
});
