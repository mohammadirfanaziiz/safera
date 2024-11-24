function toggleOptions() {
  const category = document.getElementById("category").value;
  const umumOptions = document.getElementById("umumOptions");

  if (category === "umum") {
    umumOptions.classList.remove("hidden");
  } else {
    umumOptions.classList.add("hidden");
  }
}

document
  .getElementById("ticketForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const category = document.getElementById("category").value;
    let paymentLink;

    if (category === "siswa") {
      paymentLink =
        "https://app.sandbox.midtrans.com/payment-links/1732443816065";
    } else {
      const day = document.getElementById("day").value;
      switch (day) {
        case "hari1":
          paymentLink =
            "https://app.sandbox.midtrans.com/payment-links/1732445860949";
          break;
        case "hari2":
          paymentLink =
            "https://app.sandbox.midtrans.com/payment-links/1732445970306";
          break;
        case "hari3":
          paymentLink =
            "https://app.sandbox.midtrans.com/payment-links/1732445998619";
          break;
        case "fullDay":
          paymentLink =
            "https://app.sandbox.midtrans.com/payment-links/1732446025116";
          break;
      }
    }

    window.location.href = paymentLink;
  });
