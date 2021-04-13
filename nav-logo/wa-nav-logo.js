class WaNavLogo extends HTMLElement {
    constructor() {
        super();
        this._currentNavLogoImg =
            'https://static.wixstatic.com/shapes/dba05e_67c23a413b1744d5b7084696c38a9f52.svg';
        this.activeLink = '';

        this.LOGO = {
            link: 'https://www.wixanswers.com',
            type: 'logo',
            elId: 'nav-logo',
            text: 'Wix Answers logo',
            src:
                'https://static.wixstatic.com/shapes/dba05e_67c23a413b1744d5b7084696c38a9f52.svg',
        };

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
          * {
            box-sizing: border-box;
            font-family: "Madefor", sans-serif;
            margin: 0;
            padding: 0;
          }
          
          .nav-logo-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .nav-logo-container {
            width: 160px;
            height: 70px;
            padding-bottom: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .nav-logo-container img {
            cursor: pointer;
            width: 100%;
          }
          </style>

            <div class="nav-logo-wrapper">
                <div class="nav-logo-container">
                    <img id=${this.LOGO.elId} src=${this._currentNavLogoImg} alt=${this.LOGO.text} />
                </div> 
            </div>
      `;

        this.addLinkEvent(this.LOGO);
    }

    connectedCallback() {
        if (this.hasAttribute('currentnavlogoimg')) {
            const _currentNavLogoImg = this.getAttribute('currentnavlogoimg');
        }
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
        if (navLinkObj.link) window.location.href = navLinkObj.link;
    }
}

customElements.define('wa-nav-logo', WaNavLogo);
