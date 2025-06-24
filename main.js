const text = document.getElementById("text");
const key = document.getElementById("key");
const encrypt = document.getElementById("encyrypt");
const decrypt = document.getElementById("decrypt");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

console.log(text, key, encrypt, decrypt, clear, result);

const ukrainianAlphabet = 'АБВГҐДЕЄЖЗИІЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'.split('');

function caesarEncrypt(text, key) {
    let result = '';
    key = key % ukrainianAlphabet.length;
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toUpperCase();

        if (ukrainianAlphabet.includes(char)) {
            let index = ukrainianAlphabet.indexOf(char);
            let newIndex = (index + key + ukrainianAlphabet.length) % ukrainianAlphabet.length;

            result += ukrainianAlphabet[newIndex];
        } else {
            result += text[i];
        }
    }
    return result;
}

function caesarDecrypt(text, key) {
    key = key % ukrainianAlphabet.length;
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toUpperCase();

        if (ukrainianAlphabet.includes(char)) {
            let index = ukrainianAlphabet.indexOf(char);
            let newIndex = (index - key + ukrainianAlphabet.length) % ukrainianAlphabet.length;

        

            result += ukrainianAlphabet[newIndex];
        } else {
            result += text[i];
        }
    }
    return result;
}

encrypt.addEventListener('click', () => {
    const inputText = text.value;
    const inputKey = parseInt(key.value);

    if (inputText === "") {
        alert("Введіть текст");
        return;
    }
    if (isNaN(inputKey)) {
        alert("Введіть ключ");
        return;
    }

    result.innerText = caesarEncrypt(inputText, inputKey);
});

decrypt.addEventListener('click', () => {
    const inputText = text.value;
    const inputKey = parseInt(key.value);

    if (inputText === "") {
        alert("Введіть текст");
        return;
    }
    if (isNaN(inputKey)) {
        alert("Введіть ключ");
        return;
    }

    result.innerText = caesarDecrypt(inputText, inputKey);
});

clear.addEventListener("click", () => {
    console.log("Натиснуто кнопку ОЧИСТИТИ");
    text.value = "";
    key.value = "";
    result.innerText = "";
});
