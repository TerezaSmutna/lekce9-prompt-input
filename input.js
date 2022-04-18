function vypisSoucet(prvniCislo, druheCislo) {
  let soucetCisel = prvniCislo + druheCislo;
  return soucetCisel;
}

const vysledek = document.querySelector('#vysledek > span');

document.getElementById('tlacitko').addEventListener('click', () => {
  let prvniCislo = parseInt(document.querySelector('input[name="cislo1"]').value);
  let druheCislo = parseInt(document.querySelector('input[name="cislo2"]').value);
  vysledek.innerHTML = vypisSoucet(prvniCislo, druheCislo);
});

