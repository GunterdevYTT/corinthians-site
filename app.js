console.log("corinthians site carregado");

function carregarJogos() {
  const jogos = [
    "2024-04-14 vs Atlético-MG - 0x0",
    "2024-04-20 vs RB Bragantino - 0x1",
    "2024-05-28 vs Racing - 3x0",
    "2024-06-16 vs São Paulo - 2x2",
    "2024-06-19 vs Internacional - 0x1",
    "2025-03-16 vs Palmeiras - 0x1",
    "2025-03-27 vs Palmeiras - 0x0",
    "2025-02-12 vs Santos - 2x1",
    "2025-02-23 vs Guarani - 2x2"
  ];

  const list = document.getElementById("lista-jogos");

  if (list) {
    jogos.forEach(j => {
      const li = document.createElement("li");
      li.innerText = j;
      list.appendChild(li);
    });
  }
}
