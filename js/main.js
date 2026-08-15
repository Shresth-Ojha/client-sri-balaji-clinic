(() => {
  "use strict";

  // Google lists this as "087222 44765" (landline-style formatting), but
  // the digits are identical to the 10-digit mobile Tornique Clinic lists
  // as its own contact — treating it as a mobile number here too.
  const WHATSAPP_NUMBER = "918722244765";

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("contactSuccess");
    if (!form || !success) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      const text =
        `New enquiry from the Sri Balaji Clinic website:\nName: ${name}\nPhone: ${phone}\nMessage: ${message || "(none)"}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      form.classList.add("hidden");
      success.classList.remove("hidden");
    });
  }

  initContactForm();
})();

