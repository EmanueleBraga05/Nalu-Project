// Saudação personalizada usando localStorage
const nomeUsuario = localStorage.getItem("nomeUsuario");

if (nomeUsuario) {
  console.log(`Bem-vindo de volta, ${nomeUsuario}! 🌊`);
} else {
  localStorage.setItem("nomeUsuario", "Visitante");
}
// Você pode alterar "Visitante" para o nome real do usuário quando disponível