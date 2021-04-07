class WaHomeGallery extends HTMLElement {
    constructor() {
        super();

        this._logo1;
        this._logo2;
        this._logo3;

        this._img1;
        this._img2;
        this._img3;

        this._text1;
        this._text2;
        this._text3;

        this._quote1;
        this._quote2;
        this._quote3;

        this._link1;
        this._link2;
        this._link3;

        this._person1;
        this._person2;
        this._person3;

        this._title1;
        this._title2;
        this._title3;

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

                .gallery-container {
                    font-family: md4, sans-serif;
                    width: 1200px;
                    display: flex;
                    border-radius: 5px;
                    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.2);
                }

                .btns-container {
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                .btn {
                    cursor: pointer;
                    padding-left: 40px;
                    padding-right: 40px;
                    background-color: #F5F7FC;
                    height: 33%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .btn:first-child {
                    background-color: #fff;
                    border-top-left-radius: 5px;
                }

                .btn:last-child {
                    border-bottom-left-radius: 5px;
                }

                .btn img {
                    width: 100%;
                }

                .text-container {
                    width: 45%;
                    display: flex;
                    flex-direction: column;
                    padding: 30px 100px;
                    justify-content: space-around;
                }

                .quote, .person, .title, .link {
                    max-width: 330px;
                }

                .quote {
                    font-size: 20px;
                    font-style: italic;
                    line-height: 30px;
                }

                .person {
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: bold;
                }

                .title {
                    font-size: 16px;
                    line-height: 24px;
                }

                .image-container {
                    width: 35%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }

                .image-container img {
                    width: 100%;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }    
            </style>

            <div class="gallery-container">
            <div class="btns-container">
                <div class="btn btn-1">
                    <img src="https://static.wixstatic.com/shapes/dba05e_d43aac65a7da4796a7a8f40c97aca0bf.svg" alt="">
                </div>
                <div class="btn btn-2">
                    <img src="https://static.wixstatic.com/shapes/dccc21_04c542a5af064ce5921fdd2cd1685ec4.svg" alt="">
                </div>
                <div class="btn btn-3">
                    <img src="https://static.wixstatic.com/media/9c185e_1231594bb0514c88a029cfa3c917f12c~mv2.png" alt="">
                </div>
            </div>
            <div class="text-container">
                <div class="quote">“Our main challenge is that we’re a small team with a high volume of users, so we were looking for a very flexible system that accommodates those needs.”</div>
                <div>
                    <div class="person">Moty Rokach</div>
                    <div class="title">Senior Director, Customer Service & Operations at Viber</div>
                </div>
                <div class="link">
                    <a href="https://www.wixanswers.com/viber-customer-story">Read the full story →</a>
                </div>
            </div>
            <div class="image-container">
                <img src="https://static.wixstatic.com/media/dba05e_a0e8d0fcc9af42a083bc5a9a61cb7e8e~mv2.jpg/v1/fill/w_760,h_720,al_c,q_85/Viber_Image.webp" alt="">
            </div>
        </div>
        `;

        // const fullNameInput = this.shadowRoot.querySelector('#fullNameInput');
        // fullNameInput.addEventListener('input', this.updateFullName.bind(this));
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

    // updateFullName(e) {
    //     this.userData.fullName = e.target.value;
    //     console.log('shadow input: ', this.userData);
    // }
}

customElements.define('wa-home-gallery', WaHomeGallery);
