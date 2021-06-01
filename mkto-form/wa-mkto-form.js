const createMktoStyle = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        * {
        box-sizing: border-box;
        font-family: "Madefor", sans-serif;
        margin: 0;
        padding: 0;
        }

        .wa-mkto-form-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        }

        .wa-mkto-form-container {
        width: 400px;
        height: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        }
        @media screen and (max-width: 600px) {
        .wa-mkto-form-container {
            width: 100%;
            height: 100%;
        }
        }

        .wa-mkto-form-title {
        max-width: 300px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        line-height: 30px;
        }

`;
    return style;
};

const createMktoForm = (id) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wa-mkto-form-wrapper');
    const container = document.createElement('div');
    container.classList.add('wa-mkto-form-container');
    const title = document.createElement('div');
    title.classList.add('wa-mkto-form-title');
    title.innerText = 'Schedule a 15 minute demo of Wix Answers';
    const form = document.createElement('form');
    form.id = `mktoForm_${id}`;

    wrapper.appendChild(container);
    container.appendChild(title);
    container.appendChild(form);

    return wrapper;
};

class WaMktoForm extends HTMLElement {
    constructor() {
        super();
        this._mktoFormId;
        this._inputEmail = '';
        this._inputBanner = '';
        
        this._eventTrigger = '';
        this._eventCategory = '';
        
        try {
            console.log('MktoForms2: ', MktoForms2);
        } catch (err) {
            console.log('err: ', err);
        }
    }

    connectedCallback() {
        if (this.hasAttribute('mktoformid')) {
            this._mktoFormId = +this.getAttribute('mktoformid');
        }
        if (this.hasAttribute('mktoinputemail')) {
            this._inputEmail = this.getAttribute('mktoinputemail');
        }
        if (this.hasAttribute('mktoinputbanner')) {
            this._inputBanner = this.getAttribute('mktoinputbanner');
        }
        if (this.hasAttribute('mktoeventtrigger')) {
            this._eventTrigger = this.getAttribute('mktoeventtrigger');
        }
        if (this.hasAttribute('mktoeventcategory')) {
            this._eventCategory = this.getAttribute('mktoeventcategory');
        }
        this.appendChild(createMktoStyle());
        this.appendChild(createMktoForm(this._mktoFormId));
        try {
            MktoForms2.loadForm(
                '//app-nld101.marketo.com',
                '314-AVR-999',
                this._mktoFormId
            );
            MktoForms2.whenReady((form) => {
                let fullPageUrl = document.location.href;
                try {
                    form.setValues({
                        Conversion_Page_URL__c: fullPageUrl || '',
                    });
                } catch (e) {
                    console.log(e);
                }
                if (this._inputEmail) form.setValues({ Email: this._inputEmail });

                if (
                    document.cookie
                    .split(';')
                    .some((item) => item.includes('wamk_most_recent_ref'))
                ) {
                    let encodedUrl = document.cookie
                        .split(';')
                        .find((cookie) => cookie.includes('wamk_most_recent_ref'))
                        .split('=')[1];
                    let decodedUrl = decodeURIComponent(encodedUrl);
                    form.setValues({
                        most_Recent_Referral_URL: decodedUrl || '',
                    });
                }

                form.onSuccess((values, followUpUrl) => {
                    const elForm = document.getElementById(
                        `mktoForm_${this._mktoFormId}`
                    );
                    elForm.remove();
                    const elTitle = document.querySelector(
                        '.wa-mkto-form-title'
                    );
                    elTitle.innerText =
                        'A Wix Answers expert will be in touch with you shortly.';
                    setTimeout(() => {
                        dataLayer.push({
                            event: this._eventTrigger,
                            eventCategory: this._eventCategory,
                            eventAction: this._inputBanner,
                            eventLabel: document.location.href
                        });

                        const mktoFomSubmitted = new Event('mktoFomSubmitted');
                        this.dispatchEvent(mktoFomSubmitted);
                    }, 2000);
                    return false;
                });
            });
        } catch (err) {
            console.log('err: ', err);
        }
    }
}

customElements.define('wa-mkto-form', WaMktoForm);