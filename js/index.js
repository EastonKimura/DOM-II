// Your code goes here
const busimg = document.querySelector ('.intro img');
busimg.addEventListener('mouseenter', e => {
    busimg.setAttribute('src', 'img/fun-bus-reverse.jpg');
});
busimg.addEventListener('mouseleave', e => {
    busimg.setAttribute('src', 'img/fun-bus.jpg');
});
