function zkontroluj(rodneCislo) {
  let rodneCislo = document.querySelector('input[name="rodne-cislo"]').value;
  if (zkontrolujRodneCislo(rodneCislo)) {
    alert('Správně zadané rodné číslo.');
  } else {
    alert('Chybně zadané rodné číslo.');
  }
}

function zkontrolujRodneCislo(rodneCislo) {
  let year = parseInt(rodneCislo.substr(0, 2), 10);
  let month = parseInt(rodneCislo.substr(2, 2), 10);
  let day = parseInt(rodneCislo.substr(4, 2), 10);
  let lomitko = rodneCislo.substr(6, 1);
  let bezLomitka = rodneCislo.replace('/', '');
  let ext = parseInt(rodneCislo.substr(7, 4), 10);
  let ext_delka = ext.length;
  let zbytek = parseInt(bezLomitka) % 11;

  if ((year > 53 && zbytek === 0) || (year <= 53 && ((ext_delka === 4 && zbytek === 0)|| ext_delka === 3))) {
    if ((month > 0 && month < 13) || (month > 50 && month < 63)) {
      if (day > 0 && day < 32) {
        if (lomitko === "/") {
          return true;
        }
      } 
    }
  } 
  return false;
}

