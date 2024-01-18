// Main JavaScript NEKOX PROJECT

window.addEventListener("scroll",function(){
	let header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 50);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('ul');

menu.onclick = () =>{
	menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

nav.forEach(function(li){
	if(li.onclick = () =>{
		li.classList.add('bink');
    });
});