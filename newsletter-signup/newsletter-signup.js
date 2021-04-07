class WaNewsletterSignup extends HTMLElement {
    constructor() {
        super();
        this.activeLink = '';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
          @font-face {
            font-family: "md4";
            src: local("md4"), url(https://info.wixanswers.com/rs/314-AVR-999/images/WixMadeforDisplay_Rg.ttf);
            font-weight: 400;
          }
          @font-face {
            font-family: "md4";
            src: local("md4"), url(https://info.wixanswers.com/rs/314-AVR-999/images/WixMadeforDisplay_Bd.ttf);
            font-weight: 700;
          }
          @font-face {
            font-family: "md4";
            src: local("md4"), url(https://info.wixanswers.com/rs/314-AVR-999/images/WixMadeforDisplay_XBd.ttf);
            font-weight: 900;
          }
          * {
            box-sizing: border-box;
            font-family: md4;
          }
          
          
                                                 
          </style>

          <div>
            
          </div>
      `;

        this.shadowRoot
            .getElementById('nav-links-link-container')
            .addEventListener('mouseleave', () => this.setActiveLink(''));
        this.shadowRoot
            .getElementById('nav-links-link-why-answers')
            .addEventListener('mouseover', () =>
                this.setActiveLink('why-answers')
            );
        this.shadowRoot
            .getElementById('nav-links-link-platform')
            .addEventListener('mouseover', () =>
                this.setActiveLink('platform')
            );
        this.shadowRoot
            .getElementById('nav-links-link-solutions')
            .addEventListener('mouseover', () =>
                this.setActiveLink('solutions')
            );
        this.shadowRoot
            .getElementById('nav-links-link-pricing')
            .addEventListener('mouseover', () => this.setActiveLink('pricing'));
        this.shadowRoot
            .getElementById('nav-links-link-explore')
            .addEventListener('mouseover', () => this.setActiveLink('explore'));
    }

    setActiveLink(linkStr) {
        if (this.activeLink) {
            this.shadowRoot
                .getElementById(this.activeLink)
                .classList.remove(this.activeLink);
            this.shadowRoot
                .querySelector('.nav-links-background-pointer')
                .classList.remove(this.activeLink);
            this.shadowRoot
                .querySelector('.nav-links-background')
                .classList.remove(this.activeLink);
        }
        if (linkStr) {
            this.shadowRoot.getElementById(linkStr).classList.add(linkStr);
            this.shadowRoot
                .querySelector('.nav-links-background-pointer')
                .classList.add(linkStr);
            this.shadowRoot
                .querySelector('.nav-links-background')
                .classList.add(linkStr);
        }

        this.activeLink = linkStr;
    }
}

customElements.define('wa-newsletter-signup', WaNewsletterSignup);
