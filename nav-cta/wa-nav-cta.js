class WaNavCta extends HTMLElement {
    constructor() {
        super();
        this._currentPageLinkFolder = '';
        this.activeLink = '';

        this.NAV_CTA = {
            LOGIN: {
                elId: 'nav-cta-login',
                text: 'Login',
                link: 'https://app.wixanswers.com/login',
            },
            TRY_FOR_FREE: {
                elId: 'nav-cta-try-for-free',
                text: 'Try for Free',
                link: 'https://app.wixanswers.com/signup',
            },
            REQUEST_DEMO: {
                elId: 'nav-cta-try-for-request-demo',
                text: 'Request Demo',
                link: 'https://info.wixanswers.com/request-demo.html',
            },
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
          
          .nav-cta-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .nav-cta-container {
            --main-text-color: #002764;
            --link-color: #2288f9;
            --text-white-color: #fff;
            --nav-section-title-color: #99a9c1;
            --nav-section-divider-color: #ccd4e0;
            --link-font-size: 15px;
            --btn-link-font-size: 13px;
            --btn-link-width: 160px;
            --btn-link-height: 42px;
            height: 70px;
            display: flex;
            align-items: center;
          }
          .nav-cta-container .nav-cta-type-1 {
            cursor: pointer;
            color: var(--main-text-color);
            font-size: var(--link-font-size);
            text-decoration: none;
            font-weight: 400;
            width: 75px;
            background: none;
            border: none;
            outline: none;
            margin-right: 20px;
          }
          .nav-cta-container .nav-cta-type-1:hover {
            color: var(--link-color);
          }
          .nav-cta-container .nav-cta-type-2 {
            cursor: pointer;
            font-size: var(--btn-link-font-size);
            text-decoration: none;
            font-weight: 400;
            height: var(--btn-link-height);
            width: var(--btn-link-width);
            background: var(--link-color);
            color: var(--text-white-color);
            border-radius: 20px;
            border: none;
            outline: none;
            margin-right: 20px;
            letter-spacing: 0.8px;
            opacity: 1;
            text-transform: uppercase;
            transition: opacity 0.5s;
          }
          .nav-cta-container .nav-cta-type-2:hover {
            opacity: 0.8;
          }
          .nav-cta-container .nav-cta-type-3 {
            font-size: var(--btn-link-font-size);
            cursor: pointer;
            text-decoration: none;
            font-weight: 400;
            text-transform: uppercase;
            height: var(--btn-link-height);
            width: var(--btn-link-width);
            color: var(--link-color);
            background: var(--text-white-color);
            border: 1px solid var(--link-color);
            border-radius: 20px;
            letter-spacing: 0.8px;
            outline: none;
            transition: color 0.5s, background 0.5s, border 0.5s;
          }
          .nav-cta-container .nav-cta-type-3:hover {
            opacity: 0.8;
          }
          </style>

        <div class="nav-cta-wrapper">
            <div class="nav-cta-container">
                <button class="nav-cta-type-1" id="${this.NAV_CTA.LOGIN.elId}">${this.NAV_CTA.LOGIN.text}</button>
                <button class="nav-cta-type-2" id="${this.NAV_CTA.TRY_FOR_FREE.elId}">${this.NAV_CTA.TRY_FOR_FREE.text}</button>
                <button class="nav-cta-type-3" id="${this.NAV_CTA.REQUEST_DEMO.elId}">${this.NAV_CTA.REQUEST_DEMO.text}</button>
            </div>
        </div>
      `;

        this.addLinkEvent(this.NAV_CTA.LOGIN);
        this.addLinkEvent(this.NAV_CTA.TRY_FOR_FREE);
        this.addLinkEvent(this.NAV_CTA.REQUEST_DEMO);
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

customElements.define('wa-nav-cta', WaNavCta);
