window.addEventListener('DOMContentLoaded', function () {
    'use stirct';

    // ES6

    class Options {
        constructor(height, width, bg, fontSize, textAlign, justifyContent) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.justifyContent = justifyContent;
        }
        createElement() {
            let newElem = document.createElement('div'),
                nodeText = prompt('Введите текст', '');
            newElem.textContent = nodeText;
            newElem.style.cssText = `height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};`;
            let getElem = document.getElementsByClassName('social')[0];
            getElem.style.justifyContent = `${this.justifyContent}`;
            getElem.appendChild(newElem);
        }
    }

    let someText = new Options(100, 300, 'orange', 'large', 'center', 'center');
        someText.createElement()

});

