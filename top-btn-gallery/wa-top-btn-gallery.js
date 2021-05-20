class WaTopBtnGallery extends HTMLElement {
    constructor() {
        super();

        this._activeImg = `https://static.wixstatic.com/media/dba05e_2c415c704442477285a3d81e5b8a3cef~mv2.png`;
        this._activeTitle = `One inbox`;
        this._activeText = `Manage all real-time and offline support requests in one feed and easily jump between customer conversations without having to switch tabs.`;
        this._activeBtn = 1;
        this._activeBtnMob = 1;

        this._title1 = `One inbox`;
        this._title2 = `One timeline`;
        this._title3 = `Customer info panel`;
        this._title4 = `Smart reply box`;

        this._img1 = `https://static.wixstatic.com/media/dba05e_2c415c704442477285a3d81e5b8a3cef~mv2.png`;
        this._img2 = `https://static.wixstatic.com/media/dba05e_b765b99fbaab4d5c86d08d05e07228ec~mv2.png`;
        this._img3 = `https://static.wixstatic.com/media/dba05e_3d50efb5e65645fa86ba2fa3b3f5eb86~mv2.png`;
        this._img4 = `https://static.wixstatic.com/media/dba05e_3b4a764adc0d40fea66e5209d59025f3~mv2.png`;

        this._text1 = `Manage all real-time and offline support requests in one feed and easily jump between customer conversations without having to switch tabs.`;
        this._text2 = `See your customers’ entire support journey across any channel in one chronological view. This gives you the context you need to help customers quickly and accurately.`;
        this._text3 = `There’s no need to ask customers too many questions to resolve an issue. Simply view previous issues, personal information and details from built-in integrations alongside the timeline.`;
        this._text4 = `Respond to customers faster and be consistently accurate. With one-click shortcuts, apply multiple actions and link AI-powered article suggestions.`;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
            * {
              box-sizing: border-box;
              font-family: "Madefor", "Helvetica Neue", sans-serif;
            }
            
            .top-btn-gallery-container {
              color: #002764;
              width: 100%;
              max-width: 1000px;
              border-radius: 5px;
              background-color: #f1f7ff;
            }
            @media screen and (max-width: 600px) {
              .top-btn-gallery-container {
                display: none;
              }
            }
            
            .top-btn-gallery-container__btn-container {
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #9370fe;
            }
            
            .top-btn-gallery-container__button {
              background-color: #f1f7ff;
              text-align: center;
              flex-grow: 1;
              padding: 20px 0;
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
            }
            .top-btn-gallery-container__button:not(:last-child) {
              border-right: 1px solid #9370fe;
            }
            .top-btn-gallery-container__button:hover {
              background-color: #d8e8ff;
            }
            
            .top-btn-gallery-container__active-button {
              background-color: #cde3ff;
            }
            
            .top-btn-gallery-container__content-container {
              display: flex;
              justify-content: space-around;
              align-items: center;
              padding: 70px 100px;
            }
            
            .top-btn-gallery-container__content-text {
              max-width: 350px;
              font-size: 16px;
              line-height: 23px;
            }
            
            .top-btn-gallery-container__content-image {
              max-width: 375px;
            }
            .top-btn-gallery-container__content-image img {
              width: 100%;
            }
            
            .top-btn-gallery-container-mob {
              position: relative;
              margin: 0 auto;
              color: #002764;
              width: 90%;
              border-radius: 5px;
              background-color: #f1f7ff;
            }
            @media screen and (min-width: 600px) {
              .top-btn-gallery-container-mob {
                display: none;
              }
            }
            .top-btn-gallery-container-mob .top-btn-gallery-container-mob__trigger {
              text-decoration: none;
              width: 100%;
              display: block;
              margin: 0;
              padding: 20px;
              background-color: #f1f7ff;
              border-bottom: 1px solid#9370fe;
              color: #002764;
            }
            .top-btn-gallery-container-mob .top-btn-gallery-container-mob__trigger:active, .top-btn-gallery-container-mob .top-btn-gallery-container-mob__trigger:hover {
              color: #002764;
            }
            .top-btn-gallery-container-mob .top-btn-gallery-container-mob__content {
              display: block;
              padding: 0;
              height: 0;
              overflow: hidden;
              transition: height 0.5s ease, padding 0.3s linear;
            }
            .top-btn-gallery-container-mob .top-btn-gallery-container-mob__content p {
              padding: 20px;
              margin: 0;
            }
            .top-btn-gallery-container-mob .top-btn-gallery-container-mob__content.opened-content {
              height: 150px;
            }
            </style>

            <div class="top-btn-gallery-container">
            <div class="top-btn-gallery-container__btn-container">
                <div id="btn-1" class="top-btn-gallery-container__button top-btn-gallery-container__active-button">${this._title1}</div>
                <div id="btn-2" class="top-btn-gallery-container__button">${this._title2}</div>
                <div id="btn-3" class="top-btn-gallery-container__button">${this._title3}</div>
                <div id="btn-4" class="top-btn-gallery-container__button">${this._title4}</div>
            </div>
            <div class="top-btn-gallery-container__content-container">
                <div class="top-btn-gallery-container__content-text" id="content-text">
                    ${this._activeText}
                </div>
                <div class="top-btn-gallery-container__content-image">
                    <img id="content-image" src=${this._activeImg} alt=${this._activeTitle}>
                </div>
            </div>
        </div>
        <div class="top-btn-gallery-container-mob">
            <div class="top-btn-gallery-container-mob__item">
                <a id="btnMob-1" href="#tab-1" class="top-btn-gallery-container-mob__trigger">
                  ${this._title1}
                <span style="margin-left: 20px;">▼</span></a>
                <div id="tab-1" class="top-btn-gallery-container-mob__content opened-content">
                    <p>
                        ${this._text1}
                    </p>
                </div>
            </div>
            <div class="top-btn-gallery-container-mob__item">
                <a id="btnMob-2" href="#tab-2" class="top-btn-gallery-container-mob__trigger">
                  ${this._title2}
                <span style="margin-left: 20px;">▼</span></a>
                <div id="tab-2" class="top-btn-gallery-container-mob__content">
                    <p>
                        ${this._text2}
                    </p>
                </div>
            </div>
            <div class="top-btn-gallery-container-mob__item">
                <a id="btnMob-3" href="#tab-3" class="top-btn-gallery-container-mob__trigger">
                  ${this._title3}
                <span style="margin-left: 20px;">▼</span></a>
                <div id="tab-3" class="top-btn-gallery-container-mob__content">
                    <p>
                        ${this._text3}
                    </p>
                </div>
            </div>
            <div class="top-btn-gallery-container-mob__item">
                <a id="btnMob-4" href="#tab-4" class="top-btn-gallery-container-mob__trigger">
                  ${this._title4}
                <span style="margin-left: 20px;">▼</span></a>
                <div id="tab-4" class="top-btn-gallery-container-mob__content">
                    <p>
                        ${this._text4}
                    </p>
                </div>
            </div>
        </div>
        `;

        const btn1 = this.shadowRoot.getElementById('btn-1');
        btn1.addEventListener('click', () => this.updateActiveBlock(1));
        const btn2 = this.shadowRoot.getElementById('btn-2');
        btn2.addEventListener('click', () => this.updateActiveBlock(2));
        const btn3 = this.shadowRoot.getElementById('btn-3');
        btn3.addEventListener('click', () => this.updateActiveBlock(3));
        const btn4 = this.shadowRoot.getElementById('btn-4');
        btn4.addEventListener('click', () => this.updateActiveBlock(4));

        const btnMob1 = this.shadowRoot.getElementById('btnMob-1');
        btnMob1.addEventListener('click', () => this.switchTabContent(1));
        const btnMob2 = this.shadowRoot.getElementById('btnMob-2');
        btnMob2.addEventListener('click', () => this.switchTabContent(2));
        const btnMob3 = this.shadowRoot.getElementById('btnMob-3');
        btnMob3.addEventListener('click', () => this.switchTabContent(3));
        const btnMob4 = this.shadowRoot.getElementById('btnMob-4');
        btnMob4.addEventListener('click', () => this.switchTabContent(4));
    }

    connectedCallback() {
        if (this.hasAttribute('img1')) this._img1 = this.getAttribute('img1');
        if (this.hasAttribute('img2')) this._img2 = this.getAttribute('img2');
        if (this.hasAttribute('img3')) this._img3 = this.getAttribute('img3');

        if (this.hasAttribute('text1'))
            this._text1 = this.getAttribute('text1');
        if (this.hasAttribute('text2'))
            this._text2 = this.getAttribute('text2');
        if (this.hasAttribute('text3'))
            this._text3 = this.getAttribute('text3');

        if (this.hasAttribute('title1'))
            this._title1 = this.getAttribute('title1');
        if (this.hasAttribute('title2'))
            this._title2 = this.getAttribute('title2');
        if (this.hasAttribute('title3'))
            this._title3 = this.getAttribute('title3');
    }

    switchTabContent(num) {
        if (this._activeBtnMob === num) return;
        this._activeBtnMob = num;
        this.shadowRoot
            .querySelectorAll('.top-btn-gallery-container-mob__content')
            .forEach((el) => el.classList.remove('opened-content'));
        this.shadowRoot
            .getElementById('tab-' + num)
            .classList.add('opened-content');
    }

    updateActiveBlock(num) {
        if (this._activeBtn === num) return;

        this._activeBtn = num;
        this._activeImg = this['_img' + num];
        this._activeText = this['_text' + num];
        this._activeTitle = this['_title' + num];

        this.render();
    }

    render() {
        this.shadowRoot
            .querySelectorAll('.top-btn-gallery-container__button')
            .forEach((el) =>
                el.classList.remove('top-btn-gallery-container__active-button')
            );
        this.shadowRoot
            .getElementById('btn-' + this._activeBtn)
            .classList.add('active-btn');
        // this.shadowRoot.getElementById('title').innerText = this._activeTitle;
        this.shadowRoot.getElementById('content-text').innerText =
            this._activeText;
        this.shadowRoot.getElementById('content-image').src = this._activeImg;
    }
}

customElements.define('wa-top-btn-gallery', WaTopBtnGallery);
