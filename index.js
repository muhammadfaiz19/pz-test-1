document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-skills");
  const message = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const skill = document.getElementById("skill").value;
    const name = document.getElementById("name").value;

    message.textContent = `Hello, ${name}! You've selected ${skill}.`;

    switch (skill) {
      case "HTML":
        document.documentElement.style.setProperty("--primary-color", "#e44d26");
        break;
      case "CSS":
        document.documentElement.style.setProperty("--primary-color", "#329adf");
        break;
      case "JavaScript":
        document.documentElement.style.setProperty("--primary-color", "#f0db4f");
        break;
    }
  });
});
