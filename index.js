
function FdRate(){
    let months = Number(document.getElementById('input').value);
    console.log(months)
    let rate = 0 ;
    console.log(rate)

    if (months <3)
        rate = 5.8;
    else if(months >=3 && months <=6 )
        rate = 7

    else if(months >6 && months <=9 )
        rate = 9

        else 
        rate = 10
    let Result = document.querySelector('#result');
    Result.innerHTML= "Your interest rate is " + rate + " %" 
}