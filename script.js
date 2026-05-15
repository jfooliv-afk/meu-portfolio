function toggle(btn) {
  const allContents = document.querySelectorAll(".content");
  const allButtons = document.querySelectorAll(".accordion button");
  const content = btn.parentElement.querySelector(".content");

  // fecha todos
  allContents.forEach((c) => {
    if (c !== content) c.classList.remove("active");
  });

  allButtons.forEach((b) => {
    if (b !== btn) b.classList.remove("active");
  });

  // abre o clicado
  btn.classList.toggle("active");
  content.classList.toggle("active");
}
// 🔥 CONFIG WHATSAPP
const msg = encodeURIComponent(
  "Olá João! Vi seu portfólio e gostaria de conversar.",
);

const link = `https://wa.me/5511941985528?text=${msg}`;

// aplica no botão
document.querySelector(".whatsapp-float").href = link;

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // DADOS PRINCIPAIS
    document.getElementById("nome").textContent = data.nome;
    document.getElementById("cargo").textContent = data.cargo;
    document.getElementById("local").textContent = data.local;
    document.getElementById("telefone").textContent = data.telefone;
    document.getElementById("email").textContent = data.email;

    // ÍCONES LOCAIS
    const icons = {
      HTML: "assets/icons/html.svg",
      CSS: "assets/icons/css.svg",
      JavaScript: "assets/icons/js.svg",
    };

    // IDIOMAS
    const idiomas = document.getElementById("idiomas");
    let htmlIdiomas = "";

    data.idiomas.forEach((i) => {
      htmlIdiomas += `<p>🌍 ${i}</p>`;
    });

    idiomas.innerHTML = htmlIdiomas;

    // PORTFÓLIO
    const port = document.getElementById("portfolio");
    let htmlPortfolio = "";

    data.portfolio.forEach((p) => {
      htmlPortfolio += `
        <div>
          <h3>💻 ${p.nome}</h3>
          <p>${p.descricao}</p>
          <a href="${p.link}" target="_blank">Ver projeto</a>
        </div>
      `;
    });

    port.innerHTML = htmlPortfolio;

    // EXPERIÊNCIA
    const exp = document.getElementById("experiencias");
    let htmlExp = "";

    data.experiencias.forEach((e) => {
      htmlExp += `
        <div>
          <p><strong>${e.cargo}</strong> - ${e.empresa}</p>
          <p>${e.periodo}</p>
          <p>${e.descricao}</p>
        </div>
      `;
    });

    exp.innerHTML = htmlExp;

    // CURSOS
    const cursos = document.getElementById("cursos");
    let htmlCursos = "";

    data.cursos.forEach((c) => {
      htmlCursos += `<p>🎓 ${c}</p>`;
    });

    cursos.innerHTML = htmlCursos;

    // COMPETÊNCIAS
    const comp = document.getElementById("competencias");
    let htmlComp = "";

    data.competencias.forEach((c) => {
      htmlComp += `<p>💻 ${c}</p>`;
    });

    comp.innerHTML = htmlComp;

    // CURSOS DIO
    const cursosDio = document.getElementById("cursos_dio");
    let htmlDio = "";

    data.cursos_dio.forEach((c) => {
      htmlDio += `<p>🚀 ${c}</p>`;
    });

    cursosDio.innerHTML = htmlDio;
  })
  .catch((err) => {
    console.error("Erro ao carregar JSON:", err);
  });
