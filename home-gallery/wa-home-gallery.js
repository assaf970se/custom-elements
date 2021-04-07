class WaHomeGallery extends HTMLElement {
    constructor() {
        super();

        this._activeImg = `https://static.wixstatic.com/media/dba05e_a0e8d0fcc9af42a083bc5a9a61cb7e8e~mv2.jpg`;
        this._activeQuote = `“Our main challenge is that we’re a small team with a high volume of users, so we were looking for a very flexible system that accommodates those needs.”`;
        this._activePerson = `Moty Rokach`;
        this._activeTitle = `Senior Director, Customer Service & Operations at Viber`;
        this._activeBtn = 1;

        this._logo1;
        this._logo2;
        this._logo3;

        this._img1 = `https://static.wixstatic.com/media/dba05e_a0e8d0fcc9af42a083bc5a9a61cb7e8e~mv2.jpg`;
        this._img2 = `https://static.wixstatic.com/media/dba05e_955c22023b6848338e2d7e0d3dba70f4~mv2.jpg`;
        this._img3 = `https://static.wixstatic.com/media/dba05e_d41fdc6c60014effa2163c6230acc6cb~mv2.jpg`;

        this._text1;
        this._text2;
        this._text3;

        this._quote1 = `“Our main challenge is that we’re a small team with a high volume of users, so we were looking for a very flexible system that accommodates those needs.”`;
        this._quote2 = `“With Answers, automating processes cut our response time to 30 seconds. Moreover, needing multiple vendors was eliminated —everything is in one place and easy to use.”`;
        this._quote3 = `“Wix Answers gave us the ability to create a help center exactly the way we wanted in a short time frame with zero development, minimal effort and in multiple languages.”`;

        this._link1;
        this._link2;
        this._link3;

        this._person1 = `Moty Rokach`;
        this._person2 = `Yakir Lasry`;
        this._person3 = `Darren VanderVort`;

        this._title1 = `Senior Director, Customer Service & Operations at Viber`;
        this._title2 = `VP of Customer Relations at MyHeritage`;
        this._title3 = `Product Manager at Getty Images`;

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
                }

                .quote-gallery-wrapper {
                  width:100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                @media screen and (max-width: 767px) {
                  .quote-gallery-wrapper {
                    padding-left:10px;
                    padding-right: 10px;
                  }
                }

                .quote-gallery-section {
                    font-family: 'md4', sans-serif;
                    background-color: #ffffff;
                    margin: 0 auto;
                    width: 1120px;
                    height: 360px;
                    display: flex;
                    border-radius: 10px;
                    box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.15);
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section {
                      flex-direction: column;
                      width: 100%;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__buttons-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 220px;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__buttons-container {
                      flex-direction: row;
                      width: 100%;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button {
                    cursor: pointer;
                    width: 100%;
                    height: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 50px;
                    background-color: #f2f7ff;
                  }
                  .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button.active-btn {
                    background-color: #ffffff;
                  }
                  .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button img {
                    width: 100%;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button {
                      height: 70px;
                    }
                  }
                  @media screen and (max-width: 600px) {
                    .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button {
                      padding: 0 25px;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button:first-child {
                    border-top-left-radius: 10px;
                  }
                  .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button:last-child {
                    border-bottom-left-radius: 10px;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__buttons-container .quote-gallery-section__button:last-child {
                      border-bottom-left-radius: 0;
                      border-top-right-radius: 10px;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__quote-container {
                    width: 520px;
                    padding: 30px 80px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__quote-container {
                      width: 100%;
                      padding: 20px;
                      height: 100%;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__quote-container .quote-gallery-section__quote {
                    font-size: 20px;
                    line-height: 30px;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__quote-container .quote-gallery-section__quote {
                      font-size: 14px;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__quote-container .quote-gallery-section__quote-name-title {
                    font-size: 16px;
                    line-height: 25px;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__quote-container .quote-gallery-section__quote-name-title {
                      font-size: 11px;
                      line-height: normal;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__quote-container .quote-gallery-section__quote-link {
                    font-size: 14px;
                    color: var(--link-color);
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__quote-container .quote-gallery-section__quote-link {
                      font-size: 11px;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__img-container {
                    width: 380px;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__img-container {
                      display: none;
                      width: 100%;
                      border-radius: 0;
                    }
                  }
                  .quote-gallery-section .quote-gallery-section__img-container img {
                    width: 100%;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                  }
                  @media screen and (max-width: 767px) {
                    .quote-gallery-section .quote-gallery-section__img-container img {
                      border-radius: 0;
                    }
                  }                                       
            </style>

            <div class="quote-gallery-wrapper">
              <div class="quote-gallery-section">
              <div class="quote-gallery-section__buttons-container">
                  <div id="btn-1" class="quote-gallery-section__button active-btn">
                      <img src="https://static.wixstatic.com/shapes/dba05e_d43aac65a7da4796a7a8f40c97aca0bf.svg" alt="">
                  </div>
                  <div id="btn-2" class="quote-gallery-section__button">
                      <img src="https://static.wixstatic.com/shapes/dccc21_04c542a5af064ce5921fdd2cd1685ec4.svg" alt="">
                  </div>
                  <div id="btn-3" class="quote-gallery-section__button">
                      <img src="https://static.wixstatic.com/media/9c185e_1231594bb0514c88a029cfa3c917f12c~mv2.png" alt="">
                  </div>
              </div>
              <div class="quote-gallery-section__quote-container">
                  <div class="quote-gallery-section__quote" id="quote">${this._activeQuote}</div>
                  <div>
                      <div class="quote-gallery-section__quote-name-title" id="person">${this._activePerson}</div>
                      <div class="quote-gallery-section__quote-name-title" id="title">${this._activeTitle}</div>
                  </div>
                  <div class="quote-gallery-section__quote-link">
                      <a href="https://www.wixanswers.com/viber-customer-story">Read the full story →</a>
                  </div>
              </div>
              <div class="quote-gallery-section__img-container">
                  <img id="image" src="${this._activeImg}" alt="">
              </div>
          </div>
        </div>
        `;

        // const fullNameInput = this.shadowRoot.querySelector('#fullNameInput');
        // fullNameInput.addEventListener('input', this.updateFullName.bind(this));

        const btn1 = this.shadowRoot.getElementById('btn-1');
        btn1.addEventListener('click', () => this.updateActiveBlock(1));
        const btn2 = this.shadowRoot.getElementById('btn-2');
        btn2.addEventListener('click', () => this.updateActiveBlock(2));
        const btn3 = this.shadowRoot.getElementById('btn-3');
        btn3.addEventListener('click', () => this.updateActiveBlock(3));
    }

    connectedCallback() {
        if (this.hasAttribute('logo1'))
            this._logo1 = this.getAttribute('logo1');
        if (this.hasAttribute('logo2'))
            this._logo2 = this.getAttribute('logo2');
        if (this.hasAttribute('logo3'))
            this._logo3 = this.getAttribute('logo3');

        if (this.hasAttribute('img1')) this._img1 = this.getAttribute('img1');
        if (this.hasAttribute('img2')) this._img2 = this.getAttribute('img2');
        if (this.hasAttribute('img3')) this._img3 = this.getAttribute('img3');

        if (this.hasAttribute('text1'))
            this._text1 = this.getAttribute('text1');
        if (this.hasAttribute('text2'))
            this._text2 = this.getAttribute('text2');
        if (this.hasAttribute('text3'))
            this._text3 = this.getAttribute('text3');

        if (this.hasAttribute('quote1'))
            this._quote1 = this.getAttribute('quote1');
        if (this.hasAttribute('quote2'))
            this._quote2 = this.getAttribute('quote2');
        if (this.hasAttribute('quote3'))
            this._quote3 = this.getAttribute('quote3');

        if (this.hasAttribute('link1'))
            this._link1 = this.getAttribute('link1');
        if (this.hasAttribute('link2'))
            this._link2 = this.getAttribute('link2');
        if (this.hasAttribute('link3'))
            this._link3 = this.getAttribute('link3');

        if (this.hasAttribute('person1'))
            this._person1 = this.getAttribute('person1');
        if (this.hasAttribute('person2'))
            this._person2 = this.getAttribute('person2');
        if (this.hasAttribute('person3'))
            this._person3 = this.getAttribute('person3');

        if (this.hasAttribute('title1'))
            this._title1 = this.getAttribute('title1');
        if (this.hasAttribute('title2'))
            this._title2 = this.getAttribute('title2');
        if (this.hasAttribute('title3'))
            this._title3 = this.getAttribute('title3');
    }

    updateActiveBlock(num) {
        if (this._activeBtn === num) return;
        
        this._activeBtn = num;
        this._activeImg = this['_img' + num];
        this._activeQuote = this['_quote' + num];
        this._activePerson = this['_person' + num];
        this._activeTitle = this['_title' + num];

        this.render();
    }

    render() {
        this.shadowRoot.querySelectorAll('.quote-gallery-section__button').forEach(el => el.classList.remove('active-btn'));
        this.shadowRoot.getElementById('btn-' + this._activeBtn).classList.add('active-btn');
        this.shadowRoot.getElementById('quote').innerText = this._activeQuote;
        this.shadowRoot.getElementById('title').innerText = this._activeTitle;
        this.shadowRoot.getElementById('person').innerText = this._activePerson;
        this.shadowRoot.getElementById('image').src = this._activeImg;
    }

}

customElements.define('wa-home-gallery', WaHomeGallery);
