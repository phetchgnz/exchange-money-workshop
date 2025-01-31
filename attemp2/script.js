let currency1 = document.querySelector("#currency1")
let currency2 = document.querySelector("#currency2")
let amount1 = document.querySelector("#amount1")
let amount2 = document.querySelector("#amount2")
let ratesText = document.querySelector(".ratesText")
let swapButton = document.querySelector("#swapBtn")
let resetButton = document.querySelector("#resetBtn")

function CalculateMoney() {
    let first = currency1.value
    let second = currency2.value
    let api = `https://v6.exchangerate-api.com/v6/e3d89cd867869c1eb5e3a100/latest/${first}`

    fetch(api).then(res=>res.json()).then((data) => {
        const rates = data.conversion_rates[second]
        amount2.value = (amount1.value * rates).toFixed(2);
        ratesText.innerHTML = `1 ${first} = ${rates} ${second}`
    })
}

function SwapBtn() {
    let temp = currency1.value
    currency1.value = currency2.value
    currency2.value = temp;
    CalculateMoney()
}

currency1.addEventListener("change", CalculateMoney)
currency2.addEventListener("change", CalculateMoney)
amount1.addEventListener("input", CalculateMoney)
amount2.addEventListener("input", CalculateMoney)

swapButton.addEventListener("click", SwapBtn)
resetButton.addEventListener("click", () => {
    amount1.value = "1"
    CalculateMoney()
})

CalculateMoney();
