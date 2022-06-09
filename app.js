const inputText = document.getElementById("inputHere");
const prompt = document.getElementById('prompt');
const button = document.getElementById('btn');
console.log(button);

let number = Math.floor(Math.random() * 100 + 1);
console.log(number);
let live = 5;

button.addEventListener('click', () => {
    if (!inputText.value) {
        return alert('Please enter your guess')
    }else {
        if (inputText.value == number){
            alert(`congrats, you're guess is right`);
            inputText.value = ''
        }else {
            live--
            inputText.value = ''
            prompt.textContent = `You've got ${live} lives left, think wisely`
            console.log(`live: ${live}`);
        }
    }
})


window.onload = () => {
    inputText.focus()
}