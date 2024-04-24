function formularz() {
    let imie = document.getElementById("imie").value.trim();
    let nazwisko = document.getElementById("nazwisko").value.trim();
    let email = document.getElementById("email").value.toLowerCase().trim();
    let lista = document.getElementById("lista").value.trim();
    let wynik = document.getElementById("wynik");

    // Walidacja
    if (imie === "" || nazwisko === "" || email === "" || lista === "") {
        wynik.innerHTML = "Proszę wypełnić wszystkie pola formularza.";
        return;
    }
 if (email.indexOf("@") === -1) {
        wynik.innerHTML = "Nieprawidłowy adres email.";
        return;
    }

    wynik.innerHTML = imie + " " + nazwisko + "<br/>" + email + "<br/>" + "Usługa: " + lista;
}
