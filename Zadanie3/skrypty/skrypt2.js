function najwiekszaLiczba()
{
    const a = document.getElementById("liczby").value;
    const cyfry = a.split(' ');

    const message2Element = document.getElementById('message2')

    if (cyfry.length<7 || cyfry.length>7 || cyfry.some(isNaN)) 
    {
        var message2 = `Wprowadzono złe wartości:
                ${cyfry.some(isNaN) ? "Wprowadzone dane musza byc cyframi" : ""} 
                ${cyfry.length<7 ? "Prosze wprowadzic 7 cyfr" : ""} 
                ${cyfry.length>7 ? "Prosze wprowadzic 7 cyfr" : ""}`
    
        message2Element.textContent = message2;
        
        return;
    }
    cyfry.sort()
    document.getElementById("wynik").innerHTML = "Maksiumum z tablicy to " + cyfry[6];

}