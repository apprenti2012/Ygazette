const menuBtn = document.getElementById("menuBtn");
const menuLinks = document.getElementById("menuLinks");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function() {
  const contenu = document.getElementById("main-content"); // wrapper du contenu
  const popup = document.getElementById("popup");
  const helloText = document.getElementById("hellow");

  // Vérifie les infos dans le localStorage
  const prenom = localStorage.getItem("prenom");
  const nom = localStorage.getItem("nom");

  if (!prenom || !nom) {
    popup.style.display = "flex"; // afficher le popup
    contenu.classList.add("flou"); // flouter uniquement le contenu
  } else {
    helloText.textContent = `Bonjour ${prenom} ${nom}`;
  }

  // Sauvegarde des données
  document.getElementById("saveBtn").addEventListener("click", function () {
    const prenomValue = document.getElementById("prenom").value.trim();
    const nomValue = document.getElementById("nom").value.trim();

    if (prenomValue && nomValue) {
      localStorage.setItem("prenom", prenomValue);
      localStorage.setItem("nom", nomValue);

      helloText.textContent = `Bonjour ${prenomValue} ${nomValue}`;
      popup.style.display = "none";
      contenu.classList.remove("flou");
    } else {
      alert("Merci de remplir les deux champs !");
    }
  });
});

document.getElementById("refresh").addEventListener("click", function() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const articles = document.querySelectorAll("#articles a"); // tous les liens d’articles  
  articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(input)) {
            article.style.display = "inline-block";
        } else {
            article.style.display = "none";
        }
    });
})
