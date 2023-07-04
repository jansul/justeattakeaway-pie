import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userShield"><path d="M13.127 3.791 8 1.14 2.872 3.791a1.525 1.525 0 0 0-.831 1.374v3.588c0 .043.07 4.637 5.793 6.124l.166.044.166-.043c5.723-1.497 5.793-6.082 5.793-6.134V5.165c0-.577-.316-1.102-.832-1.374ZM3.362 5.165c0-.087.044-.157.123-.201L8 2.628l4.515 2.345c.07.035.122.113.122.2v3.58c0 .166-.122 3.56-4.637 4.812-4.524-1.26-4.629-4.664-4.638-4.812V5.165Z"></path><path d="M9.251 8.149a1.787 1.787 0 0 0-1.278-3.036c-.98 0-1.784.805-1.784 1.785 0 .49.2.936.525 1.26-1.147.385-1.97 1.25-1.97 2.24h1.313c0-.464.744-1.138 1.917-1.138 1.172 0 1.968.656 1.968 1.138h1.313c0-1.015-.832-1.882-2.013-2.258l.009.009ZM7.974 6.425a.47.47 0 0 1 .472.473.47.47 0 0 1-.472.472.47.47 0 0 1-.473-.472.47.47 0 0 1 .473-.473Z"></path></svg>';

export class IconUserShield extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--userShield', '', null, 'IconUserShield');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--userShield');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userShield', '', newVal, 'IconUserShield');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-user-shield', IconUserShield);