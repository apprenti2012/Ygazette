//navbar
const nav = `
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color:#2b2b50; font-family: Arial, sans-serif;">
    <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">
            <img src="/favicon.png" width="30px" height="30px" style="border-radius: 6px;">
            Ygazette
        </a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav">
                <li class="nav-item"><a href="/index.html" class="nav-link">Accueil</a></li>
                <li class="nav-item"><a href="/article/déjà_paru.html" class="nav-link">Article</a></li>
                <li class="nav-item"><a href="/Plus d'information.html" class="nav-link">+d'infos</a></li>
            </ul>
        </div>
    </div>
</nav>
`;
document.addEventListener("DOMContentLoaded", function () {
  document.body.insertAdjacentHTML("afterbegin", nav);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
