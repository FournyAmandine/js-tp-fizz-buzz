// début classique
/*
const olElement = document.getElementById('fizzbuzz');

for (let i = 1; i <= 100; i++) {
    if (i%5===0 && i%3===0){
        olElement.insertAdjacentHTML('beforeend', ' <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
    } else {
        if (i%5===0){
            olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
        } else {
            if (i%3===0){
                olElement.insertAdjacentHTML('beforeend',' <li class="fizz">FI<i>zz</i></li>');
            } else {
                olElement.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
            }
        }
    }

}*/

// scroll infini

/*bodyElement.insertAdjacentHTML('beforeend', '<ol id="fizzbuzz" class="grid"></ol>');*/
/*const olElement = document.querySelector('ol');
const windowHeight = window.innerHeight;
let start = 1;
let end = 100;
let gap = end;


function generateNewItemElements() {
    for (; start <= end; start++) {
        if (start % 5 === 0 && start % 3 === 0) {
            olElement.insertAdjacentHTML('beforeend', ' <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
        } else if (start % 5 === 0) {
            olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
        } else if (start % 3 === 0) {
            olElement.insertAdjacentHTML('beforeend', ' <li class="fizz">FI<i>zz</i></li>');
        } else {
            olElement.insertAdjacentHTML('beforeend', `<li>${start}</li>`);
        }
    }
    end += gap;
}

generateNewItemElements();

window.addEventListener('scrollend', () => {
    const bodyHeight = document.body.clientHeight;
    const scroll = window.scrollY;
    if (scroll + windowHeight >= bodyHeight){
        generateNewItemElements()
    }
})*/

/*
const liElements = document.querySelectorAll('li');

for (const liElement of liElements) {
    if(!liElement.classList.contains('fizzbuzz', "buzz", "fizz"))
    liElement.addEventListener('click', ()=>{
        console.log(`${start}`)
    })
}
*/

/*

(function () {
    const fizzBuzz = {
        olElement: document.querySelector('ol'),
        windowHeight: window.innerHeight,
        start: 1,
        end: 100,
        init() {
            this.gap = this.end;
            document.documentElement.classList.add('js-enabled');
            this.generateNewItemElements();
            window.addEventListener('scrollend', () => {
                const bodyHeight = document.body.clientHeight;
                const scroll = window.scrollY;
                if (scroll + this.windowHeight >= bodyHeight) {
                    this.generateNewItemElements()
                }
            });
        },
        toggleSum(event) {
            [event.currentTarget.dataset.sum, event.currentTarget.textContent] = [event.currentTarget.textContent, event.currentTarget.dataset.sum]
            console.log(event.currentTarget);
        },
        getSum(until) {
            return (until * (until + 1)) / 2;
        },
        generateNewItemElements() {
            for (; this.start <= this.end; this.start++) {
                if (this.start % 5 === 0 && this.start % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', ' <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
                } else if (this.start % 5 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
                } else if (this.start % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', ' <li class="fizz">FI<i>zz</i></li>');
                } else {
                    const liElement = document.createElement('li');
                    liElement.textContent = this.start;
                    liElement.addEventListener('click', this.toggleSum);
                    liElement.dataset.sum = this.getSum(this.start);
                    this.olElement.insertAdjacentElement('beforeend', liElement);
                }
            }
            this.end += this.gap;
        },

    }

    fizzBuzz.init();
})()*/


(function () {
    const fizzBuzz = {
        olElement: document.querySelector('ol'),
        windowHeight: window.innerHeight,
        start: 1,
        end: 100,
        init() {
            this.gap = this.end;
            document.documentElement.classList.add('js-enabled');
            this.generateNewItemElements();
            window.addEventListener('scrollend', () => {
                this.generateLiNumberElement();
            });
        },
        generateLiNumberElement() {
            const bodyHeight = document.body.clientHeight;
            const scroll = window.scrollY;
            if (scroll + this.windowHeight >= bodyHeight) {
                this.generateNewItemElements()
            }
        },
        toggleSum(event) {
            [event.currentTarget.dataset.sum, event.currentTarget.textContent] = [event.currentTarget.textContent, event.currentTarget.dataset.sum]
            console.log(event.currentTarget);
        },
        getSum(until) {
            return (until * (until + 1)) / 2;
        },
        generateNewItemElements() {
            for (; this.start <= this.end; this.start++) {
                if (this.start % 5 === 0 && this.start % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', ' <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
                } else if (this.start % 5 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
                } else if (this.start % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', ' <li class="fizz">FI<i>zz</i></li>');
                } else {
                    const liElement = document.createElement('li');
                    liElement.textContent = this.start;
                    liElement.addEventListener('click', this.toggleSum);
                    liElement.dataset.sum = this.getSum(this.start);
                    this.olElement.insertAdjacentElement('beforeend', liElement);
                }
            }
            this.end += this.gap;
        },

    }

    fizzBuzz.init();
})()