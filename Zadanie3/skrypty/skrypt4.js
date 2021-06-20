var A, B;

function NWD()
{
    A = Math.abs(document.getElementById("a").value);
    B = Math.abs(document.getElementById("b").value);
    var zmienna = 0;

    while ((A % B) > 0) {
        zmienna = A % B;
        A = B;
        B = zmienna;
    }
}


function wynikNWD()
{
    NWD();
    document.getElementById("WynikNWD").innerHTML= "wynik to " + B;
}