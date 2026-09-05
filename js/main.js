// Mobile-Navigation
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.querySelector(".mobile-panel");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Cookie-Hinweis (rein informativ, keine Tracking-/Marketing-Cookies)
  var cookieBanner = document.querySelector("#cookie-banner");
  if (cookieBanner) {
    var dismissed = false;
    try {
      dismissed = localStorage.getItem("cookie-notice-dismissed") === "1";
    } catch (e) {
      dismissed = false;
    }
    if (!dismissed) {
      cookieBanner.hidden = false;
    }
    var dismissBtn = document.querySelector("#cookie-banner-dismiss");
    if (dismissBtn) {
      dismissBtn.addEventListener("click", function () {
        cookieBanner.hidden = true;
        try {
          localStorage.setItem("cookie-notice-dismissed", "1");
        } catch (e) {
          /* Local Storage nicht verfügbar – Hinweis wird beim nächsten Besuch erneut angezeigt */
        }
      });
    }
  }

  // Kontaktformular
  // Versand laeuft ueber FormSubmit (https://formsubmit.co) direkt aus dem
  // Browser der Besucherin/des Besuchers per fetch-Request. Es wird KEIN
  // API-Key benoetigt - die Ziel-E-Mail-Adresse steht im data-Attribut
  // "data-formsubmit-email" am Formular. Beim allerersten Versand schickt
  // FormSubmit einmalig eine Bestaetigungs-E-Mail an diese Adresse; erst nach
  // dem Klick auf den Bestaetigungslink darin werden weitere Anfragen
  // automatisch zugestellt.
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = form.querySelector(".form-note");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Wird gesendet …";

      var showNote = function (text, isError) {
        note.textContent = text;
        note.classList.toggle("error", !!isError);
        note.classList.add("visible");
        note.setAttribute("role", "status");
      };

      var zielEmail = form.getAttribute("data-formsubmit-email");

      fetch("https://formsubmit.co/ajax/" + encodeURIComponent(zielEmail), {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (response) {
          if (!response.ok) { throw new Error("Formular-Versand fehlgeschlagen"); }
          return response.json();
        })
        .then(function () {
          showNote(
            "Vielen Dank für Ihre Nachricht! Ich melde mich so schnell wie möglich persönlich bei Ihnen.",
            false
          );
          form.reset();
        })
        .catch(function () {
          showNote(
            "Leider ist beim Senden etwas schiefgegangen. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail oder WhatsApp (siehe unten).",
            true
          );
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  }
});
