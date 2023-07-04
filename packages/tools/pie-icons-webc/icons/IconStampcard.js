import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--stampcard"><path d="M13.941 10.039c-.043.061-.183.254-.218.332a3.248 3.248 0 0 0-.105.473c-.097.569-.22 1.338-.832 1.951-.603.604-1.4.735-1.925.822-.157.027-.393.062-.49.105-.07.027-.27.176-.376.245-.437.324-1.111.806-1.995.806-.884 0-1.549-.482-1.986-.806a4.093 4.093 0 0 0-.376-.253c-.088-.035-.315-.07-.473-.105-.542-.088-1.339-.219-1.942-.832-.604-.603-.735-1.373-.823-1.933-.035-.201-.061-.403-.105-.49-.026-.07-.166-.254-.245-.368-.324-.446-.814-1.12-.814-2.004 0-.883.482-1.548.805-1.986.07-.096.22-.306.254-.376.035-.096.079-.324.105-.481v-.062c.096-.524.245-1.294.831-1.88.587-.587 1.374-.736 1.934-.823.166-.026.394-.062.49-.105.07-.026.271-.175.376-.245.473-.341 1.112-.805 1.995-.805.884 0 1.55.481 1.987.805.122.087.306.227.376.253.087.035.315.08.481.105.569.097 1.339.22 1.943.832.603.612.735 1.374.822 1.933.026.158.061.394.105.49.026.07.166.254.245.368.35.481.814 1.12.814 2.004 0 .883-.481 1.548-.805 1.986l-.053.044ZM3.695 5.419a3.263 3.263 0 0 1-.175.726 3.414 3.414 0 0 1-.411.656c-.263.368-.543.753-.543 1.199 0 .446.28.831.552 1.207.157.22.315.438.402.648.096.227.14.49.184.77.079.455.149.919.455 1.216.306.298.779.385 1.207.455.28.044.552.088.78.184.2.088.393.219.655.402.368.272.753.543 1.2.543.445 0 .83-.28 1.207-.551.2-.149.428-.315.647-.403.236-.096.525-.149.788-.184.42-.07.9-.148 1.198-.446.307-.306.377-.761.455-1.207.044-.271.088-.552.184-.779.079-.201.219-.402.368-.604l.035-.052c.27-.377.55-.753.55-1.199 0-.446-.28-.831-.542-1.199-.157-.219-.315-.437-.402-.656-.096-.236-.149-.534-.184-.787-.07-.438-.149-.902-.446-1.2-.298-.306-.761-.376-1.208-.454-.27-.044-.55-.088-.787-.193-.21-.087-.438-.245-.648-.402-.376-.272-.76-.551-1.207-.551-.446 0-.831.28-1.199.55-.201.15-.429.316-.647.403-.237.096-.508.14-.78.184-.445.07-.91.149-1.207.455-.297.306-.376.779-.446 1.199V5.4l-.035.018Z"></path><path d="M5.9 7.772c-.577 0-1.05-.472-1.05-1.05v-.07a1.044 1.044 0 0 1 .98-1.12 1.044 1.044 0 0 1 1.12.98v.15a1.044 1.044 0 0 1-.98 1.12H5.9v-.01Zm4.2.447c-.577 0-1.05.472-1.05 1.05v.07a1.044 1.044 0 0 0 .98 1.12 1.045 1.045 0 0 0 1.12-.98V9.33a1.044 1.044 0 0 0-.98-1.12h-.07v.009Zm-.962-2.923L5.48 10.695h1.383l3.657-5.399H9.138Z"></path></svg>';

export class IconStampcard extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard', '', null, 'IconStampcard');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--stampcard');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard', '', newVal, 'IconStampcard');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stampcard', IconStampcard);