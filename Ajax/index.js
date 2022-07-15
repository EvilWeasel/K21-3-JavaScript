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
    xhttp.onload = function() {
        let data = this.responseText
        console.log(data)
    }
    xhttp.open('GET', 'sampleData.json') // same as below
    // xhttp.open('GET', 'sampleData.json', true)
    xhttp.send()
}