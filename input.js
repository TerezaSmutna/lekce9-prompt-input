
  let prvniCislo = document.querySelector('input[name="cislo1"]').value;
  let druheCislo = document.querySelector('input[name="cislo2"]').value;

function vypisSoucet (prvniCislo, druheCislo) {
  let soucetCisel = prvniCislo + druheCislo;
  document.querySelector('#vysledek > span').innerHTML = soucetCisel;
  return soucetCisel;
}

document.querySelectorAll('input').forEach((element) => {
  element.addEventListener('change', vypisSoucet);
});
