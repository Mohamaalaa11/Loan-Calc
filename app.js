let loanAmount = document.querySelector("#amount");
let interest = document.querySelector("#intrest");
let years = document.querySelector("#years");
let monthlyPayment = document.querySelector("#monthly-payment");
let totalPayment = document.querySelector("#total-payment");  
let totalInterset = document.querySelector("#total-interst");  
let loading = document.querySelector("#loading");
let result = document.querySelector(".result")
document.querySelector(".loan-form").addEventListener("submit",function(e){
    e.preventDefault();
    loading.style.display='block';
    setTimeout(CalculateResult,2000);

});



function CalculateResult(){

    const princable =parseFloat(loanAmount.value);
    const interstCalc =parseFloat(interest.value)/100/12;
    const paymentYear =parseFloat(years.value)*12;

    const x= Math.pow(1+interstCalc,paymentYear);
    const monthly=(princable*x*interstCalc)/(x-1);
    monthlyPayment.value=monthly.toFixed(2);
    totalPayment.value=(monthly*paymentYear).toFixed(2);
    totalInterset.value=((monthly*paymentYear)-princable).toFixed(2);
    loading.style.display='none';
    result.style.display='block';

}