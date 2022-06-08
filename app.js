const inputText = document.getElementById("inputHere");
const prompt = document.getElementById('prompt');
const button = document.getElementById('btn');
console.log(button);

let number = Math.floor(Math.random() * 100 + 1);

button.addEventListener('click', () => {
    if (!inputText.value) {
        return alert('Please enter your guess')
    }else {
        return 1
    }
})


window.onload = () => {
    inputText.focus()
}