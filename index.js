const BOT_TOKEN = "8070836362:AAEeScJaWTf00cxQeQKic09Xy6dIXOxpQok"; // Telegram bot tokeningizni kiriting
const CHAT_ID = "1369837006"; // Telegram chat ID'ngizni kiriting

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const full_name = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const subject = document.getElementById("subject").value;
    const messageValue = document.getElementById("message").value;

    const message = `
      🆕 Yangi xabar: 

    👤Ism: ${full_name}

    📧Email: ${email}

    📱Telefon: ${mobile}

    📝Mavzu: ${subject}

    💬Xabar: ${messageValue}
    
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      );

      if (response.ok) {
        alert("Xabar muvaffaqiyatli yuborildi!");
        document.getElementById("contactForm").reset();
      } else {
        alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
      }
    } catch (error) {
      console.error("Xato:", error);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  });
