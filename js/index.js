// Your code goes here

const busimg = document.querySelector ('.intro img');
busimg.addEventListener('mouseenter', e => {
    busimg.setAttribute('src', 'img/fun-bus-reverse.jpg');
});
busimg.addEventListener('mouseleave', e => {
    busimg.setAttribute('src', 'img/fun-bus.jpg');
});
const navLink = document.querySelector('.nav-link');
navLink.addEventListener('click', e => {
    navLink.style.backgroundColor = 'blue';
    navLink.style.borderRadius = "3px";
    e.stopPropagation();
});
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', e => {
  logoHeading.textContent = `Party Bus`;
});
logoHeading.addEventListener('mouseout', e => {
    logoHeading.textContent = `Fun Bus`;
});
const imageContent = document.querySelector('.img-content');
const letsGoText = document.querySelector('.text-content h2');
imageContent.addEventListener('drag', e => {
    letsGoText.textContent = `here we go`;
});
imageContent.addEventListener('dragend', e => {
    letsGoText.textContent = `Stay`;
});
letsGoText.addEventListener('dblclick', e => {
    letsGoText.style.fontSize = '80px';
});
letsGoText.addEventListener('auxclick', e => {
    letsGoText.style.fontSize = '32px';
});
const wholePageBody = document.querySelector('body');
wholePageBody.addEventListener('keydown', e => {
    wholePageBody.style.backgroundColor = 'limegreen';
});
wholePageBody.addEventListener('keyup', e => {
    wholePageBody.style.backgroundColor = 'red';
});