class WaKmNav extends HTMLElement {
    constructor() {
        super();
        this._kmActiveLink = '';
        this.KM_LINK_MAP = {
            OVERVIEW: {
                link: 'https://www.wixanswers.com/knowledge-management',
                type: 'Button',
                elId: 'wa-km-nav-link-overview',
                text: 'Overview',
            },
            USE_CASES: {
                link:
                    'https://www.wixanswers.com/knowledge-management-use-cases',
                type: 'Button',
                elId: 'wa-km-nav-link-use-cases',
                text: 'Use cases',
            },
            FEATUES: {
                link:
                    'https://www.wixanswers.com/knowledge-management-features',
                type: 'Button',
                elId: 'wa-km-nav-link-features',
                text: 'Features',
            },
        };

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
          * {
            box-sizing: border-box;
            font-family: "Madefor Display", sans-serif;
            margin: 0;
            padding: 0;
          }
          
          .wa-km-nav-container {
            --wa-km-nav-bg-color: #002764;
            --wa-km-nav-text-color: #ffffff;
            --wa-km-nav-link-color: #3BDECA;
            --wa-km-nav-link-font-size: 15px;
            height: 50px;
            width: 100%;
            padding-left: 290px;
            display: flex;
            align-items: center;
            background-color: var(--wa-km-nav-bg-color);
          }
          @media screen and (max-width: 1380px) {
            .wa-km-nav-container {
              padding-left: 20%;
            }
          }
          
          .wa-km-nav-link {
            cursor: pointer;
            height: 100%;
            color: var(--wa-km-nav-text-color);
            background-color: transparent;
            letter-spacing: 0.6px;
            border: none;
            outline: none;
            font-size: var(--wa-km-nav-link-font-size);
            transition: color 0.2s;
          }
          .wa-km-nav-link:hover {
            color: var(--wa-km-nav-link-color);
          }
          .wa-km-nav-link:not(:last-child) {
            margin-right: 40px;
          }
          .wa-km-nav-link.active {
            color: var(--wa-km-nav-link-color);
          }
          </style>

            <div class="wa-km-nav-container">
                <button class="wa-km-nav-link" id="wa-km-nav-link-overview">Overview</button>
                <button class="wa-km-nav-link" id="wa-km-nav-link-use-cases">Use cases</button>
                <button class="wa-km-nav-link" id="wa-km-nav-link-features">Features</button>
            </div>
      `;

        this.addLinkEvent(this.KM_LINK_MAP.OVERVIEW);
        this.addLinkEvent(this.KM_LINK_MAP.USE_CASES);
        this.addLinkEvent(this.KM_LINK_MAP.FEATUES);
    }

    connectedCallback() {
        if (this.hasAttribute('activekmlink')) {
            const kmLink = this.getAttribute('activekmlink');
            this.setActiveKmLink(kmLink);
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'activekmlink') {
            if (oldValue === newValue) return;
            if (newValue === '') return;
            this.setActiveKmLink(newValue);
        }
    }

    static get observedAttributes() {
        return ['activekmlink'];
    }

    setActiveKmLink(kmLink) {
        if (kmLink === this._kmActiveLink) return;
        if (this._kmActiveLink) {
            this.shadowRoot
                .getElementById(`wa-km-nav-link-${this._kmActiveLink}`)
                .classList.remove('active');
        }
        if (kmLink) {
            this.shadowRoot.getElementById(`wa-km-nav-link-${kmLink}`).classList.add('active');
        }
        this._kmActiveLink = kmLink;
    }

    addLinkEvent(navLinkObj) {
        return this.shadowRoot
            .getElementById(navLinkObj['elId'])
            .addEventListener('click', () => this.trackClickEvent(navLinkObj));
    }

    async trackClickEvent(navLinkObj = {}) {
        const obj = {
            uniqueId: 'customEl',
            label: navLinkObj.text || '',
            name: 'customEl',
            type: navLinkObj.type || 'Button',
            linkTo: navLinkObj.link || '',
            url: `${window.location.href}` || '',
        };
        const route = `https://app.wixanswers.com/api/bi/website-click?uniqueId=${obj.uniqueId}&type=${obj.type}&name=${obj.name}&url=${obj.url}&label=${obj.label}&linkTo=${obj.linkTo}`;
        const res = await fetch(route);
        const resText = await res.text();
        console.log(resText);
        // if (navLinkObj.link) window.location.href = navLinkObj.link;
    }
}

customElements.define('wa-km-nav', WaKmNav);
