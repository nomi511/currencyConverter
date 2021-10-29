

console.log("........ CURRENCY EXCHANGE .........")


const val1 = document.querySelector("#currency")
const val2 = document.querySelector("#currency2")
const qt1 = document.querySelector('#qtfrom')
const qt2 = document.querySelector('#qtto')
const para = document.querySelector("#curdata")
const btn = document.querySelector(".btn")


val1.addEventListener("change", exchange)
val2.addEventListener("change", exchange)
qt1.addEventListener("input", exchange)
qt2.addEventListener("input", exchange)

btn.addEventListener("click", ()=>{

    let val = val2.options[val2.selectedIndex].getAttribute("value")
    let v2 = val1.options[val1.selectedIndex].getAttribute("value")
    
    document.querySelector('#currency [value="' + val + '"]').selected = true
    document.querySelector('#currency2 [value="' + v2 + '"]').selected = true

    exchange()

})


function exchange () {

    let v1 = val1.options[val1.selectedIndex].getAttribute("value")
    let v2 = val2.options[val2.selectedIndex].getAttribute("value")
    let amt1 = qt1.value
    let amt2 = 0

    

    const key1 = "41707ef70f50114ecc24b1de"

    const exchange = fetch(`https://v6.exchangerate-api.com/v6/${key1}/pair/${v1}/${v2}`)

    exchange.then( res => {
        return res.json()
    }).then ( data => {

        para.textContent = `1 ${v1} = ${data.conversion_rate} ${v2}`

        amt2 = data.conversion_rate * amt1

        qt2.value = amt2

        amt1 = amt2 / data.conversion_rate

        para.textContent = `1 ${v1} = ${data.conversion_rate} ${v2}`
        
    })

}

exchange()