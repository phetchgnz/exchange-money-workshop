let amount1 = document.querySelector("#amount1");
let amount2 = document.querySelector("#amount2");
let currency1 = document.querySelector("#currency1");
let currency2 = document.querySelector("#currency2");
let resetBtn = document.querySelector("#resetBtn");
let swapBtn = document.querySelector("#swapBtn");
let rateText = document.querySelector("#rateText")

currency1.addEventListener("change", CalculateMoney)
currency2.addEventListener("change", CalculateMoney)
amount1.addEventListener("change", CalculateMoney)
amount2.addEventListener("change", CalculateMoney)

function CalculateMoney() {
    const firstCurr = currency1.value;
    const secondCurr = currency2.value;
    const api = `https://v6.exchangerate-api.com/v6/e3d89cd867869c1eb5e3a100/latest/${firstCurr}`;

    fetch(api).then(res=>res.json()).then((data) => {
        const rates = data.conversion_rates[secondCurr];
        rateText.innerHTML = `1 ${firstCurr} = ${rates} ${secondCurr}`
        amount2.value = (amount1.value * rates).toFixed(2);
    })
};

function ResetButton() {
    amount1.value = "1";
    console.log('Reset button has been clicked!');
}

resetBtn.addEventListener("click", ResetButton);
swapBtn.addEventListener("click", (e) => {
    let temp = currency1.value
    currency1.value = currency2.value
    currency2.value = temp;
    CalculateMoney()
})

CalculateMoney();