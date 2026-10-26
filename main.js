//select the generator btn
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input")
const copyIconEl = document.querySelector(".copy-svg")
const alertContainerEl = document.querySelector(".alert-container");

// what excute when click genrator btn
btnEl.addEventListener("click", () => {
    createpassword();
    // alertContainerEl.classList.add("active");
})

// what excute when click copy icon


copyIconEl.addEventListener("click", () => {
    console.log(inputEl.value);
    if (inputEl.value) {
        copypassword();

        alertContainerEl.classList.remove("active");
        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000)
    }
})



//creat password function
function createpassword() {

        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

        const passwordlenghth = 16;

        let password = ""


        for (let index = 0; index < passwordlenghth; index++) {
            const randomNum = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNum, randomNum + 1);
            
        }

        inputEl.value = password;
        alertContainerEl.innerHTML = password + " copied!";
    }


//create copy password 
function copypassword() {
        inputEl.select();
        inputEl.setSelectionRange(0, 999);
        navigator.clipboard.writeText(inputEl.value);
    }
