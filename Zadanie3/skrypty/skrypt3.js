function fibonacci(x)
{
    if(x === 0) 
        return 0;
    else if(x === 1 || x === 2) 
        return 1;
    else
    {
        return(fibonacci(x-1) + fibonacci(x-2));
    }
}

function wynikFibonacci(){
    let y = document.getElementById("element").value;
    document.getElementById("WynikFibonacciego").innerHTML= fibonacci(parseInt(y));
}