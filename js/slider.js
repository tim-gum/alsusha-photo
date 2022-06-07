const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

const container = document.querySelector('.container')

let activeSlideIndex = 0

upBtn.addEventListener ('click', () => {
    changeSlide('rigth')
})

downBtn.addEventListener ('click', () => {
    changeSlide('left')
})

function changeSlide(direction) {
    if (direction === 'rigth') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'left') {
        activeSlideIndex--
        if (activeSlideIndex < 0)
        {
            activeSlideIndex = slidesCount - 1 
        }
    }

    const width = container.clientWidth

    mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`
}