document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
    const rootElement = document.documentElement;

    //функция для показа/скрытия кнопки
    function handleScroll() {
        const scrollPosition = window.scrollY; //текущая высота прокрутки
        const viewportHeight = window.innerHeight; //высота видимого окна
        const totalHeight = rootElement.scrollHeight; //общая высота страницы

        if (scrollPosition >= viewportHeight / 2) {
            scrollToTopBtn.classList.add('showBtn');
        } else {
            scrollToTopBtn.classList.remove('showBtn');
        }
    }

    //скролл в начало
    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    handleScroll();
});



function initStickyMenu() {
    const header = document.querySelector('[data-header]');
    const mainPage = document.querySelector('[data-main-page]');

    //фиксации меню при прокрутке
    const handleScroll = () => {
        if (window.scrollY > header.offsetHeight) {
            header.classList.add('is-fixed');
        } else {
            header.classList.remove('is-fixed');
        }
    };
    //расчет паддинга для main
    const setMainPadding = () => {
        const header = document.querySelector('[data-header]');
        const mainPage = document.querySelector('[data-main-page]');
    
        if (header && mainPage) {
            const headerHeight = Math.ceil(header.getBoundingClientRect().height);
            const screenWidth = window.innerWidth;
    
            const adjustedPadding = screenWidth < 768 ? headerHeight / 1.5 : headerHeight;
    
            mainPage.style.paddingTop = `${adjustedPadding}px`;
        }
    };

    const init = () => {
        setMainPadding();
        window.addEventListener('resize', setMainPadding);
        window.addEventListener('scroll', handleScroll);
    };

        init(); 
}

document.addEventListener('DOMContentLoaded', initStickyMenu);
