// function sendWhatsApp() {

//   let person = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;
//   let phoneNumber = "07044816854"; // 🔹 Replace with your WhatsApp number

//   if (!person || !email || !message) {
//     alert("Please fill out all fields.");
//     return;
//   }

//   let url = `https://wa.me/${phoneNumber}?text=Hello, my name is ${person}}. My email is ${email}. Message: ${message}`;
//   window.open (url, "_blank");
// }

// function sendEmail() {
//   let person = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;

//   if (!person|| !email || !message) {
//     alert("Please fill out all fields.");
//     return;
//   }

//   let subject =` Contact from ${person}`;
//   let body = `person: ${person}%0AEmail: ${email}%0AMessage: ${message}`;
//   window.location.href = `mailto:dadamary577@gmail.com?subject=${subject}&body=${body}`;
function sendWhatsApp() {
  const username = document.getElementById("name").value;
  const  email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const phoneNumber ="+2347044816854"; // 🔹 Replace with your WhatsApp number

  if (!username|| !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  let url = `https://wa.me/${phoneNumber}?text=Hello, my name is ${username}. My email is ${email}. Message: ${message}`;
  window.open(url, "_blank");
}


function sendEmail() {
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!username|| !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  let subject = `Contact from ${username}`;
  let body = `Name: ${username}%0AEmail: ${email}%0AMessage: ${message}`;
  window.location.href = `mailto:dadamary577@gmail.com?subject=${subject}&body=${body}`;
}
