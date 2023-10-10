// document.getElementById("count-el").innerText = 5

// Store the count as 0
// Listen for clicks on increment button
// Increment the count variable
// Change the count-el to reflect new count

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countDash = count + " - "
  saveEl.textContent += countDash
  count = 0
  countEl.textContent = count
}

function reset() {
  count = 0
  countEl.textContent = count
  saveEl.textContent = ""

}