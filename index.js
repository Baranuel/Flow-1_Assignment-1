
const form = document.getElementById('input-form')

const user = document.getElementById('input-name')
const height = document.getElementById('input-height')
const weight = document.getElementById('input-weight')
let list  = document.getElementById('calculations-list')
// let listItem = document.getElementById('calculations-list-item')
const calculations = []
let lastItem;

class User {
    constructor(user, height, weight){
        this.user = user,
        this.height = +height,
        this.weight = +weight
        this.bmi = this.CalculateBmi(height, weight)
    }
    CalculateBmi = (height, weight) => {
        //converting strings to numbers
        height = +height
        weight = +weight
        const squaredHeight = height * height
        return weight / squaredHeight
    }
}

const createUser = (user, height, weight) => {
    const newUser = new User(user, height, weight)
    calculations.push(newUser)
    lastItem = calculations[calculations.length - 1]
}



form.addEventListener('submit', e => {
    e.preventDefault()
    const userValue = user.value
    const heightValue = height.value
    const  weightValue = weight.value
    lastItem = calculations[calculations.length - 1]
    createUser(userValue,heightValue, weightValue)
    clearFields()
    addCalculationItem(lastItem)
})


const clearFields = () => {
    height.value = ""
    weight.value = ""
    user.value = ""
}

function addCalculationItem (item) {
        let listItem = document.createElement("li");
        listItem.classList.add("appear")
        listItem.innerHTML = `
            <h3>User: <span> ${item.user}</span></h3>
            <h3>Height: <span>${item.height} meters</span> </h3>
            <h3>Weight: <span>${item.weight} kg</span></h3>
            <h3>BMI: <span>${item.bmi}</span></h3>
        `
        list.append(listItem)
}


