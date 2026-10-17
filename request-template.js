/* ScamLingua request template.
   Single source for the pre-filled dataset-request email. Every link marked
   data-request-template gets this subject and body; the plain mailto in the
   HTML is the no-JS fallback.
   The terms line must match the statement in the .request-checklist card
   character for character. Change both together. */

(function () {
  "use strict";

  var ADDRESS = "requests@scamlingua.org";
  var SUBJECT = "COVA-X dataset access request";
  var BODY = [
    "Name: ",
    "Institution / affiliation: ",
    "Program and role (e.g., MS student, faculty, researcher): ",
    "Intended use (project, paper, or system): ",
    "Supervising professor (optional, CC welcome): ",
    "",
    "I confirm that I will use the COVA-X dataset for non-commercial defensive research use only, " +
      "that I will not redistribute it, and that any resulting work will cite: " +
      "Lochstampfor, C., & Roy, A. (2026). COVA-X. arXiv:2606.06879."
  ].join("\r\n");   // RFC 6068 section 5: line breaks in a mailto body must be CRLF

  var href = "mailto:" + ADDRESS +
    "?subject=" + encodeURIComponent(SUBJECT) +
    "&body=" + encodeURIComponent(BODY);

  document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a[data-request-template]");
    for (var i = 0; i < links.length; i++) links[i].href = href;
  });
})();
