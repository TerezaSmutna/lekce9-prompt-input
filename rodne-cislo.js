let rodneCislo = document.querySelector('input[name="rodne-cislo"]');

function zkontrolujRodneCislo() {
  try {
    let year = parseInt(rodneCislo.substr(0, 2), 10);
    let month = parseInt(rodneCislo.substr(2, 2), 10);
    let day = parseInt(rodneCislo.substr(4, 2), 10);
    let lomitko = (rodneCislo.substr(6, 1), 10);
    lomitko.innerHTML = "/";
    let zbytek = parseInt(rodneCislo) % 11;

    if (year < 54 && year > 22) {
      let ext = parseInt(rodneCislo.substr(7, 3), 10);
      rodneCislo.length === 10;
    } else {
    let year = parseInt(rodneCislo.substr(0, 2), 10);
      throw 1;
    };

    if (!(year < 54 && year > 22)) {
      ext = parseInt(rodneCislo.substr(7, 4), 10);
      rodneCislo.length === 11;
      zbytek = 0;
    } else {
      throw 1;
    };

    if (!((month > 0 && month < 13) || (month < 50 && month < 63))) { throw 1 };
    if (!(day > 0 && day < 32)) { throw 1 };
  } catch (err) {
    alert('Zadaný údaj není správný.');
  }
  console.log(day);
}

rodneCislo.addEventListener('change', zkontrolujRodneCislo);

