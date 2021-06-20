var imieWartosc, nazwiskoWartosc, emailWartosc;

function weryfikacja()
{
    imieWartosc = document.getElementById('imie').value;
    nazwiskoWartosc = document.getElementById('nazwisko').value;
    emailWartosc = document.getElementById('mail').value;

    const messageElement = document.getElementById('message')

    const nameReg = new RegExp('^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśźż]*$', 'g');
    const surnameReg = new RegExp('^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśźż]*$', 'g'); 
    const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\\.[a-z]{2,3}$', 'i')

    var imiePrawidlowe = nameReg.test(imieWartosc);
    var nazwiskoPrawidlowe = surnameReg.test(nazwiskoWartosc);
    var emailPrawidlowy = mailReg.test(emailWartosc);

    if (!imiePrawidlowe || !nazwiskoPrawidlowe || !emailPrawidlowy) {
        var message = `Nieprawidłowe pola: ${!imiePrawidlowe ? "imię" : ""} ${!nazwiskoPrawidlowe ? "nazwisko" : ""} ${!emailPrawidlowy ? "email" : ""}`
    
        messageElement.textContent = message;    
        
        return false;
    }

    return true;
}

function wyswietlDane() {
    alert(`Imię: ${imieWartosc}. Nazwisko: ${nazwiskoWartosc}. E-mail: ${emailWartosc}.`)
}

function onSubmit() {
    if (weryfikacja()) {
        wyswietlDane();
    }
}
    