
const form = document.getElementById('input-form')

const user = document.getElementById('input-name')
const height = document.getElementById('input-height')
const weight = document.getElementById('input-weight')
let list  = document.getElementById('calculations-list')
// let listItem = document.getElementById('calculations-list-item')
const calculations = []



const submitBmi = (height, weight) => {
    const sqrHeight = (+height.value) * (+height.value)
    
    const calculatedUser = {
        user: user.value ,
        height: +height.value ,
        weight: +weight.value ,
        calculatedBmi: (height, weight) => {
            const sqrHeight = (+height) * (+height)
            console.log(sqrHeight)
            console.log(height)
            return +weight / sqrHeight
        }
    }
    
    calculations.push(calculatedUser)
    console.log(calculations)
    let lastItem =  calculations[calculations.length - 1]
 
    addCalculationItem(lastItem)
    clearFields()
}



form.addEventListener('submit', e => {
    e.preventDefault()
    submitBmi(height, weight)
})


const clearFields = () => {
    height.value = ""
    weight.value = ""
    user.value = ""
}

function addCalculationItem (item) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>User: ${item.user}</h3>
            <h3>Height: ${item.height}m</h3>
            <h3>Weight: ${item.weight}kg</h3>
            <h3>BMI: ${item.calculatedBmi(item.height, item.weight)}kg</h3>
        `
        list.append(listItem)
}


