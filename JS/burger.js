let menuBtn = document.querySelector('#burger_btn');
let menu = document.querySelector('#nav');
let main1 = document.querySelector('main');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    main1.classList.toggle('active');
});