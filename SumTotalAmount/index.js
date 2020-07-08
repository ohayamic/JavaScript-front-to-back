// Using function, for loop, if statement to find sum.

const gasExpenses = [10, 20, 30 ,100]
const foodExpenses = [35, 55, 65, 150]

function calculate(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        //console.log(arr[i])
        total += arr[i]
    }
    if(total > 100){
        console.log('You have spent way pass your limit')
        console.log(`The total price is ${total}`)
        return total
    }
    else{
        console.log('You are within your budget')
        console.log(`The total price is ${total}`)
        return total
    }
}


const gasTotal = (calculate(gasExpenses))
const foodTotal = (calculate(foodExpenses))

const totalExpenses = {
    gasTotal: gasTotal,
    foodTotal: foodTotal
}

console.log(totalExpenses)