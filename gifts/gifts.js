const submitBtn = document.getElementById('submitBtn');
const pass = document.getElementById('pass');

const welcome = document.getElementById('welcome');
const mainBox = document.getElementById('main_box');

const box_1 = document.getElementById('box_1');
const box_2 = document.getElementById('box_2');
const box_3 = document.getElementById('box_3');

submitBtn.addEventListener('click', () => {
    welcome.innerHTML = 'Welcome to the <span style="font-style: italic; color: #4f1189;">Gift-Hub!</span>';
    const password = pass.value.trim();
    switch (password) {
        case 'Hey cutie ;)':
            box1();
            break;
        case "You're so pretty!":
            box2();
            break;
        case "My favourite girl!":
            box3();
            break;
        default:
            break;
    }
});

function box1(){
    mainBox.classList.add('hidden')
    box_1.classList.remove("hidden");
    box_2.classList.add("hidden");
    box_3.classList.add("hidden");
}

function box2(){
    mainBox.classList.add('hidden')
    box_1.classList.add("hidden");
    box_2.classList.remove("hidden");
    box_3.classList.add("hidden");
}

function box3(){
    mainBox.classList.add('hidden')
    box_1.classList.add("hidden");
    box_2.classList.add("hidden");
    box_3.classList.remove("hidden");
}

function openFullscreen(img){
    img.requestFullscreen();
}