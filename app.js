const inputText = document.getElementById("inputHere");
const prompt = document.getElementById('prompt');
const button = document.getElementById('btn');
let resetBtn = document.getElementById('btnn');
const footer = document.getElementById('footer');
console.log(resetBtn);

// const randomGenerator = () => {
//  return Math.floor(Math.random() * 100 + 1);
// }

randomGenerator = Math.floor(Math.random() * 100 + 1);

console.log(randomGenerator)

let live = 5;

button.addEventListener('click', btnFunc)

function btnFunc() {
    if (!inputText.value) {
         alert('Please enter your guess')
    }else if (inputText.value < 0 || inputText.value > 100){
        alert('Please enter a number between 1 and 100')
        inputText.value = ''
    }
    // else if (typeof inputText.value !== Number){
    //     alert('Please enter a number')
    //     inputText.value = ''
    // }
    else {
        if (inputText.value == randomGenerator){
            alert(`congrats, you're guess is right`);
            resetBtn.style.display = 'inline';
            inputText.style.display = 'none';
            button.style.display = 'none';
            resetBtn.addEventListener('click', () => window.location.reload(false));
            inputText.value = ''
        }else {
            if (live >= 1){
            live--
            inputText.value = ''
            prompt.textContent = `You've got ${live} more chances`
            if (live == 1) {
            prompt.textContent = `last chance`
            }
            }
            if (live == 0){
            prompt.textContent =   `Wanna go for a second round?`
            // footer.append(resetBtn)
            // footer.innerHTML = '<button id="btnn" style="width: 150px;  height: 30px;font-size: 22px;background-color: transparent;border-radius: 5px; display: inline">Try Again</button>'
            resetBtn.style.display = 'inline';
            inputText.style.display = 'none';
            button.style.display = 'none';
            resetBtn.addEventListener('click', () => window.location.reload(false));
            }
        }
    }
}


window.onload = () => {
    inputText.focus()
}