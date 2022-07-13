// var x = document.querySelector('[data-previous-operand]')
// var y = document.getElementById('previous-operand')
// var z = document.getElementsByClassName('previous-operand')[0]
// console.log(x, y, z)
const previousOperandElement = document.querySelector('[data-previous-operand]')
const currentOperandElement = document.querySelector('[data-current-operand]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')

class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement
        this.clear()
    }

    clear() {
        this.currentOperand = '0'
        this.previousOperand = ''
        this.updateDisplay()
    }

    delete() {
        if (this.currentOperand === '0') return
        this.currentOperand = this.currentOperand.slice(0, -1)
        if (this.currentOperand.length === 0) this.currentOperand = '0'
        this.updateDisplay()
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return 
        if (this.currentOperand[0] === '0' &&
             number !== '.' &&
              !this.currentOperand.includes(".")) this.currentOperand = number
        else this.currentOperand = this.currentOperand.toString() + number.toString()
        this.updateDisplay()
    }

    chooseOperation(operation) {
        // if (this.currentOperandElement.innerText === 'NaN') {
        //     this.clear()
        //     return
        // }
        this.operation = operation
        //this.previousOperand = this.currentOperand + operation
        this.previousOperand = `${this.currentOperand} ${this.operation}`
        this.currentOperand = '0'
        this.updateDisplay()
    }

    calculate() {
        let result
        // if (this.currentOperandElement.innerText === 'NaN') {
        //     this.clear()
        //     return
        // }
        const prev = parseFloat(this.previousOperand.slice(0, -2))
        const curr = parseFloat(this.currentOperand)
        switch (this.operation) {
            case '+':
                result = prev + curr
                break
            case '-':
                result = prev - curr
                break
            case '*':
                result = prev * curr
                break
            case '/':
                //if (curr === 0) {result = NaN; break}
                result = prev / curr
                break
            default: return
        }
        this.currentOperand = result
        //this.previousOperand = ''
        //this.operation = undefined
        this.updateDisplay()
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand
        this.previousOperandElement.innerText = this.previousOperand
    }
}


const calculator = new Calculator(previousOperandElement, currentOperandElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear()
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
    })
})

equalsButton.addEventListener('click', () => {
    calculator.calculate()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
})



// Executes a callback-function when the window (HTML) 
// is fully loaded
window.addEventListener('load', () => {
    let message = "Hello World!"
    let password = document.querySelector('[data-password]').innerHTML
    console.log(password)
})

document.querySelector('[data-clickme]').addEventListener('click', () => {
    let password = document.querySelector('[data-password]').innerText
    console.log(password)
})