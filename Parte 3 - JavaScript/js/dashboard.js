const canvas = document.getElementById("graficoDoacoes");
if (canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#1e88e5";
  ctx.fillRect(50, 50, 100, 100);

  // Texto
  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText("Exemplo de Gráfico", 60, 180);
}
