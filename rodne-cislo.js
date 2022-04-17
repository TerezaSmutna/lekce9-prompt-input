let rodneCislo = document.querySelector('input[name="rodne-cislo"]');

function zkontroluj() {
  if (zkontrolujRodneCislo(rodneCislo) === true) {
    return true;
  } else {
    alert('Chybně zadaná informace.');
  }
}

function zkontrolujRodneCislo(rodneCislo) {
  let year = parseInt(rodneCislo.substr(0, 2), 10);
  let month = parseInt(rodneCislo.substr(2, 2), 10);
  let day = parseInt(rodneCislo.substr(4, 2), 10);
  let lomitko = (rodneCislo.substr(6, 1), 10);
  let bezLomitka = rodneCislo.replace('/', '');
  let ext = parseInt(rodneCislo.substr(7, 4), 10);
  let zbytek = parseInt(bezLomitka) % 11;

  if ((year > 53) && (ext === parseInt(rodneCislo.substr(7, 4), 10)) && (zbytek === 0)) {
    true;
  } else {
    return false
  };

  if ((year <= 53) && ((ext === parseInt(rodneCislo.substr(7, 4), 10)) || (ext === parseInt(rodneCislo.substr(7, 3), 10)))) {
    true;
  } else {
    return false;
  };

  if ((month > 0 && month < 13) || (month < 50 && month < 63)) {
    true;
  } else {
    return false;
  };

  if (day > 0 && day < 32) {
    true;
  } else {
    return false;
  };

  if (!(lomitko = "/")) {
    return false;
  }
}

//rodneCislo.addEventListener('change', zkontrolujRodneCislo);

