class carousel {

    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slideToScroll: 1,
            slideVisible: 1
        }, options)

        this.children = [].slice.call(element.children)
        let ratio = this.children.length / this.options.slideVisible
        let carousel = this.createDivWithClassName('carousel')
        let container = this.createDivWithClassName('carousel__container')
        container.style.width = (ratio * 100) + "%"
        carousel.appendChild(container)
        this.element.appendChild(carousel)
        this.children.forEach(element => {
            let item = this.createDivWithClassName('carousel__item')
            item.appendChild(element)
            item.style.width = ((100 / this.options.slideVisible) / ratio) + "%"
            container.appendChild(item)
        });
    }

    createDivWithClassName(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }
}

document.addEventListener("DOMContentLoaded", function() {
    //let element = document.querySelector("#carousel1")
    new carousel(document.getElementById('carousel1'), {
        slideToScroll: 6,
        slideVisible: 4
    })
    new carousel(document.getElementById('carousel2'), {
        slideToScroll: 6,
        slideVisible: 3
    })
    new carousel(document.getElementById('carousel3'), {
        slideToScroll: 6,
        slideVisible: 5
    })
})