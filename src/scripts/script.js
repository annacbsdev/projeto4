document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.about__tabs__button');
    const tabContents = document.querySelectorAll('.about__list');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab-button');

            tabButtons.forEach(btn => {
                btn.classList.remove('about__tabs__button--is-active');
            });

            tabContents.forEach(content => {
                content.classList.remove('about__list--is-active');
                if (content.getAttribute('data-tab-id') === tabId) {
                    content.classList.add('about__list--is-active');
                }
            });

            this.classList.add('about__tabs__button--is-active');
        });
    });
});
