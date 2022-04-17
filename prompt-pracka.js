
let sirkaPracky = prompt('Zadej sirku pracky v cm', 62);
let vyskaPracky = prompt('Zadej vysku pracky v cm', 70);
let hloubkaPracky = prompt('Zadej hloubku pracky v cm', 80);

function vypocitejRozmery() {
  if (sirkaPracky < 62 && vyskaPracky < 70 && hloubkaPracky < 80) {
    alert('Pracka se vejde.')
  } else {
    alert('Pracka se nevejde.')
  }
}

vypocitejRozmery ();