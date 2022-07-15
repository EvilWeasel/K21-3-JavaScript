const contentContainerElement = document.querySelector('[data-content-container]')
// console.log(contentContainerElement)
const dataTargetElement = document.querySelector('[data-content-target]')

function loadData() {
    /*
        AJAX = Asynchronous JavaScript And XML.

        - Browser built-in Module
        - Use JavaScript and HTML DOM to display data, 
            loaded from somewhere else 
    */

    const xhttp = new XMLHttpRequest()
    // xhttp.responseType = 'json'
    xhttp.onload = function() {
        // let person = {
        //     name: "Kevin",
        //     alter: 13
        // }
        let data = JSON.parse(this.response)
        // let jsonData = JSON.stringify(person)
        console.log(data)
        // console.log(jsonData)
        data.forEach((person) => {
            let personCardElement = document.createElement("div")
            personCardElement.classList.add('card')
            let cardHeader = document.createElement("h1")
            let cardBody = document.createElement("p")
            let cardImage = document.createElement("img")
            
            cardImage.src = 'https://avatars.dicebear.com/api/human/lug.svg'

            cardHeader.innerText = person.name + " " + person.lastname
            cardHeader.classList.add('card-header')

            cardBody.innerText = "Ich bin " + person.age + " Jahre alt :D"
            cardBody.classList.add('card-body')


            personCardElement.appendChild(cardImage)
            personCardElement.appendChild(cardHeader)
            personCardElement.appendChild(cardBody)
            contentContainerElement.appendChild(personCardElement)
        })
    }
    xhttp.open('GET', 'sampleData.json') // same as below
    // xhttp.open('GET', 'sampleData.json', true)
    xhttp.send()
}
