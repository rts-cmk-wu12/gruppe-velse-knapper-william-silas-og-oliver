const buttonBackgroundChange = document.querySelector('#button-background-change');
const buttonAlert = document.querySelector('#button-alert');
const buttonPic = document.querySelector('#button-pic');
const body = document.body;
const pic = document.createElement('img');
const buttonColorChange = document.querySelector('#button-text-color-change');
const buttonVideo = document.querySelector('#button-video');
const video = document.createElement('iframe');
const buttonFontFamilyChange = document.querySelector('#button-font-family');
const buttonFontChange = document.querySelector('#button-font');
const buttonAnimation = document.querySelector('#button-animation');
const buttonSomething = document.querySelector('#something');
const buttonSomething2 = document.querySelector('#something2');
const buttonRainbow = document.querySelector('#button-rainbow');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
buttonAnimation.addEventListener('click', animationCool);
buttonBackgroundChange.addEventListener('click', colorChange);
buttonAlert.addEventListener('click', showAlert);
buttonPic.addEventListener('click', showPic);
buttonColorChange.addEventListener('click', colorChangeText);
buttonVideo.addEventListener('click', playVideo);
buttonFontFamilyChange.addEventListener('click', fontFamilyChange);
buttonFontChange.addEventListener('click', fontChange);
buttonSomething.addEventListener('click', toggleBorder);
buttonSomething2.addEventListener('click', addShadow);
buttonRainbow.addEventListener('click', rainbow);

function colorChange() {
    body.style.backgroundColor = 'hotpink'
}
 
function showAlert() {
    alert('Hello World')
}

function showPic() {
    pic.src = 'https://picsum.photos/200/300';
    document.body.appendChild(pic);
}

function colorChangeText() {
    buttonColorChange.style.color = 'red';

}

function playVideo() {
    video.src = 'https://www.youtube.com/embed/r_iNRGac_uM?si=AZy9d02Obxxh8cp0';
    video.width = '560';
    video.height = '315';
    document.body.appendChild(video);
}

function fontFamilyChange() {
    buttonFontFamilyChange.style.fontFamily = '"New Amsterdam", sans-serif';
}
function fontChange() {
    buttonFontChange.style.fontSize = '100px';
}

function animationCool() {
   buttonAnimation.style.transform = 'rotate(90deg)'
   setTimeout(() => {
    buttonAnimation.style.transform = 'rotate(180deg)'
   },300);
   setTimeout(() => {
    buttonAnimation.style.transform = 'rotate(360deg)'
   }, 500);
}

function toggleBorder() {
   
        buttonSomething.style.border = '3px solid blue';
    buttonSomething.style.borderRadius = '50%';
}

function addShadow() {
    buttonSomething2.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
}

function rainbow() {
    buttonRainbow.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}