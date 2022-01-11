'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const tabs = require('./modules/tabs');

    tabs();

    const modalTriget = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');



    function ModalShow() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearTimeout(ModalTimeOut);
    }

    modalTriget.forEach(btn => {
        btn.addEventListener('click', () => {
            ModalShow();
        });
    });





    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            modal.classList.toggle('show');
            document.body.style.overflow = '';
        }

    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.contains('show')) {
            modal.classList.toggle('show');
            document.body.style.overflow = '';
        }
    });

    const ModalTimeOut = setTimeout(ModalShow, 15000);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            ModalShow();
        }
    });


    // используем классы для карточек


    // модальное окно

    function ShowThanksModal() {
        const prevModal = document.querySelector('.modal__dialog');

        prevModal.classList.add('hide');
        ModalShow();

        const thankModal = document.createElement('div');
        thankModal.classList.add('.modal__dialog');

        thankModal.innerHTML = ` 
            <div class="modal__content">
                    <div class="modal__close" data-close> &times;</div>
                    <div class="modal__title> </div>
            </div> 

        `;

        document.querySelector('.modal').append(thankModal);

        setInterval(() => {
            thankModal.remove();
            prevModal.classList.add('show');
            prevModal.classList.remove('hide');

        }, 4000);

    }





    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                name: "alex"
            }),
            headers: {
                'Content-type': 'aplication/json'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));



    let name = ['Alex', ' Dasha', 'Fake', 'ksenia', 'ann'];

    const shortNames = name.filter(function (name) {
        return name.length < 4;
    });

    console.log(shortNames);

    name = name.map(e => e.toLowerCase());

    console.log(name);

    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    let slideIndex = 1;

    showSlides(slideIndex);


    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }


        if (n < 1) {
            slideIndex = slides.length;
        }


        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = '';


        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);

    });

    //calc

    const result = document.querySelector('.calculating__result span');

    let sex = 'female',
        height, weight, age,
        ratio = 1.375;

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "";
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) + (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) + (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                } else {
                    sex = e.target.getAttribute('id');
                }

                console.log(ratio, sex);

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

    function getDinamycInformation(selector) {
        const input = document.querySelector(selector);
        input.addEventListener('input', () => {
            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });

    }

    getDinamycInformation('#weight');
    getDinamycInformation('#height');
    getDinamycInformation('#age');
});