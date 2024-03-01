let slideButton = document.getElementsByClassName('scroll-to-top')

if (slideButton.length) {

    window.onscroll = () => {
        handleButton();
    }

    const handleButton = () => {

        const scrollPosition = window.pageYOffset || window.scrollY || document.body.scrollTop || document.documentElement.scrollTop

        if (scrollPosition > 300) {
            slideButton[0].classList.remove('d-none');
        } else {
            slideButton[0].classList.add('d-none');
        }
    }

    slideButton[0].addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

}
