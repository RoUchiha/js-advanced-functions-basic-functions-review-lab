// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`
}


function wrapAdjective(flair="*") {
    return function(string="special") {
        return `You are ${flair}${string}${flair}!`
    }
}



let Calculator = {}

Calculator.add = function() {
    return (1 + 3)
}

Calculator.subtract = function() {
    return (1 - 3)
}

Calculator.multiply = function() {
    return (1 * 3)
}

Calculator.divide = function() {
    return (10 / 5)
}


function actionApplyer(start, array) {
    let int = start
    if (array == "") {
        return start
    }
    for (const func of array) {
        int = func(int)
    }
    return int
}
