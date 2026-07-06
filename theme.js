/* ScamLingua theme toggle.
   Loaded synchronously in <head> so the stored theme applies before first paint.
   Order of precedence: saved choice > OS preference. */

(function () {
  "use strict";

  var KEY = "scamlingua-theme";

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || systemTheme();
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  // Pre-paint: apply saved choice if one exists (otherwise CSS media query handles it)
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* storage unavailable — OS preference still applies */ }
  if (saved === "light" || saved === "dark") apply(saved);

  // After DOM is ready: wire up the button
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* non-fatal */ }
    });
  });
})();
