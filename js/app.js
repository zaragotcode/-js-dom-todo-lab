// console.log('sanity check')

// create cached element references
const inputEl = document.querySelector("#list-input")  
const buttonEl = document.querySelector("#submit-button")  
const ulEl = document.querySelector("#todo-list") 

// add event listener that adds value to unordered list on click
buttonEl.addEventListener("click", function(evt) {
    const li = document.createElement("li") 
    const inpEl = document.querySelector("input")
    li.textContent = inpEl.value  
    ulEl.appendChild(li) 
    return inpEl.value = "" 
    
})