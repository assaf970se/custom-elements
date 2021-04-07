class WaNavBar extends HTMLElement {
    constructor() {
        super();
        this.activeLink = '';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
          * {
            box-sizing: border-box;
            font-family: md4;
          }
          
          .nav-links-container {
            --link-color: #2d70f7;
            --nav-link-width: 125px;
            --whyanswers-nav-background-width: 250;
            --whyanswers-nav-background-height: 220;
            --whyanswers-nav-background-width-px: 250px;
            --whyanswers-nav-background-height-px: 220px;
            --platform-nav-background-width: 700;
            --platform-nav-background-height: 350;
            --platform-nav-background-width-px: 700px;
            --platform-nav-background-height-px: 350px;
            --solutions-nav-background-width: 250;
            --solutions-nav-background-height: 130;
            --solutions-nav-background-width-px: 250px;
            --solutions-nav-background-height-px: 130px;
            --explore-nav-background-width: 250;
            --explore-nav-background-height: 290;
            --explore-nav-background-width-px: 250px;
            --explore-nav-background-height-px: 290px;
            height: 100%;
            flex-grow: 2;
          }
          
          .nav-links-link-container {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .nav-links-link-container .nav-links-link {
            cursor: default;
            width: var(--nav-link-width);
            text-decoration: none;
            font-weight: 400;
            height: 100%;
            line-height: 70px;
            background: none;
            border: none;
            outline: none;
          }
          .nav-links-link-container .nav-links-link.nav-links-link-pricing {
            cursor: pointer;
          }
          .nav-links-link-container .nav-links-link.nav-links-link-pricing:hover {
            color: var(--link-color);
          }
          
          .nav-links-content {
            position: absolute;
            background: #fff;
            visibility: hidden;
            opacity: 0;
            top: 60px;
            padding: 30px 0px 30px 40px;
            display: flex;
            justify-content: flex-start;
            z-index: 100;
            box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3);
            transition: visibility 0.4s, opacity 0.4s;
          }
          .nav-links-content#why-answers {
            width: var(--whyanswers-nav-background-width-px);
            height: var(--whyanswers-nav-background-height-px);
            left: 0;
          }
          .nav-links-content#platform {
            left: 125px;
            width: var(--platform-nav-background-width-px);
            height: var(--platform-nav-background-height-px);
            z-index: 150;
          }
          .nav-links-content#solutions {
            left: 250px;
            height: var(--solutions-nav-background-height-px);
            z-index: 150;
          }
          .nav-links-content#explore {
            left: 500px;
            display: flex;
            height: var(--explore-nav-background-height-px);
            width: var(--whyanswers-nav-background-width-px);
            z-index: 150;
          }
          .nav-links-content#pricing {
            left: 350px;
          }
          .nav-links-content.why-answers {
            opacity: 1;
            color: #000000;
            z-index: 150;
            visibility: visible;
          }
          .nav-links-content.platform {
            opacity: 1;
            color: #000000;
            visibility: visible;
          }
          .nav-links-content.solutions {
            opacity: 1;
            color: #000000;
            visibility: visible;
          }
          .nav-links-content.explore {
            opacity: 1;
            color: #000000;
            visibility: visible;
          }
          .nav-links-content .nav-links-link-col {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-right: 60px;
            height: 100%;
          }
          .nav-links-content .nav-links-link-col h4 {
            color: darkblue;
            margin-bottom: 25px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
          }
          .nav-links-content .nav-links-link-col > p, .nav-links-content .nav-links-link-col > a {
            color: inherit;
            font-size: 14px;
            margin-bottom: 22px;
            font-weight: 400;
            text-decoration: none;
          }
          .nav-links-content .nav-links-link-col > p:hover, .nav-links-content .nav-links-link-col > a:hover {
            color: var(--link-color);
          }
                            
          </style>

          <div class="nav-links-container">
            <div class="nav-links-link-container" id="nav-links-link-container">
              <button class="nav-links-link" id="nav-links-link-why-answers">
                Why Answers?
              </button>
              <button class="nav-links-link" id="nav-links-link-platform">
                Platform
              </button>
              <button class="nav-links-link" id="nav-links-link-solutions">
                Solutions
              </button>
              <button
                class="nav-links-link nav-links-link-pricing"
                id="nav-links-link-pricing">
                Pricing
              </button>
              <button class="nav-links-link" id="nav-links-link-explore">
                Explore
              </button>
              <div
                class="nav-links-content"
                id="why-answers"
              >
                <div class="nav-links-link-col">
                  <a href="">Why we're different</a>
                  <a href="">Results with Answers</a>
                  <a href="">Customer stories</a>
                  <a href="">CS solutions for 2021</a>
                </div>
              </div>
              <div
                class="nav-links-content"
                id="platform"
              >
                <div class="nav-links-link-col">
                  <h4>Overview</h4>
                  <a href="">Full CS solution</a>
                  <a href="">Integrations</a>
                </div>
                <div class="nav-links-link-col">
                  <h4>Products</h4>
                  <a href="">Knowledge management</a>
                  <a href="">Tickting system</a>
                  <a href="">Call center</a>
                  <a href="">Widgets</a>
                  <a href="">Live chat</a>
                  <a href="">Insights</a>
                </div>
                <div class="nav-links-link-col">
                  <h4>Boosters</h4>
                  <a href="">Spotter</a>
                  <a href="">Control room</a>
                  <a href="">Top Issues</a>
                  <a href="">Built-in CSAT</a>
                </div>
              </div>
              <div
                class="nav-links-content"
                id="solutions"
              >
                <div class="nav-links-link-col">
                  <a href="">SMB</a>
                  <a href="">Enterprise</a>
                </div>
              </div>
              <div class="nav-links-content" id="pricing"></div>
              <div
                class="nav-links-content"
                id="explore"
              >
                <div class="nav-links-link-col">
                  <a href="">CS Tech Assessment</a>
                  <a href="">CX Library</a>
                  <a href="">Blog</a>
                  <a href="">Help Center</a>
                  <a href="">Video Tutorials</a>
                  <a href="">Developer Tools</a>
                </div>
              </div>
              <div
                class="nav-links-background-pointer"
              ></div>
              <div
                class="nav-links-background"
                id="popover"
              ></div>
            </div>
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
        }
        if (linkStr) {
            this.shadowRoot.getElementById(linkStr).classList.add(linkStr);
        }

        this.activeLink = linkStr;
    }
}

customElements.define('wa-nav-bar', WaNavBar);
