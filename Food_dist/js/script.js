window.addEventListener("DOMContentLoaded", () => {






    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items')


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList == "tabheader__item") {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent()
                    showTabContent(i)
                }

            });
        }


    });

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
        if (e.target === modal || e.target.getAttribute('data-close') =='') {
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


    }


    document.querySelector('.modal').append(thankModal);

});