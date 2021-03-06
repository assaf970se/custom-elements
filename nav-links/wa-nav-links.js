class WaNavLinks extends HTMLElement {
    constructor() {
        super();
        this._currentPageLinkFolder = '';
        this.activeLink = '';

        this.NAV_LINKS = {
            WHY_ANSWERS: {
                text: 'Why Answers?',
                elId: 'nav-links-link-why-answers',
                WHY_WERE_DIFFERENT: {
                    elId: 'wa-wed-link',
                    text: "Why we're different",
                    link: 'https://www.wixanswers.com/why-answers',
                },
                RESULTS_WITH_ANSWERS: {
                    elId: 'wa-rwa-link',
                    text: 'Results with Answers',
                    link: 'https://www.wixanswers.com/results-with-answers',
                },
                CUSTOMER_STORIES: {
                    elId: 'wa-cs-link',
                    text: 'Customer stories',
                    link: 'https://www.wixanswers.com/customers',
                },
                CS_SOLUTION_2021: {
                    elId: 'wa-cs21-link',
                    text: 'CS solutions for 2021',
                    link:
                        'https://www.wixanswers.com/future-of-customer-support',
                },
            },
            PLATFORM: {
                text: 'Platform',
                elId: 'nav-links-link-platform',
                OVERVIEW: {
                    text: 'OVERVIEW',
                    FULL_CS_SOLUTION: {
                        elId: 'pl-ov-fcs-link',
                        text: 'Full CS solution',
                        link: 'https://www.wixanswers.com/full-platform',
                    },
                    INTEGRATIONS: {
                        elId: 'pl-ov-int-link',
                        text: 'Integrations',
                        link: 'https://www.wixanswers.com/integrations',
                    },
                },
                PRODUCTS: {
                    text: 'PRODUCTS',
                    KNOWLEDGE_MANAGMENT: {
                        elId: 'pl-pr-km-link',
                        text: 'Knowledge management',
                        link: 'https://www.wixanswers.com/knowledge-management',
                    },
                    TICKETING_STSTEM: {
                        elId: 'pl-pr-ts-link',
                        text: 'Ticketing system',
                        link: 'https://www.wixanswers.com/ticketing-system',
                    },
                    CALL_CENTER: {
                        elId: 'pl-pr-cc-link',
                        text: 'Call center',
                        link: 'https://www.wixanswers.com/call-center-software',
                    },
                    WIDGETS: {
                        elId: 'pl-pr-wdgt-link',
                        text: 'Widgets',
                        link: 'https://www.wixanswers.com/help-widget',
                    },
                    LIVE_CHAT: {
                        elId: 'pl-pr-lc-link',
                        text: 'Live chat',
                        link: 'https://www.wixanswers.com/live-chat-software',
                    },
                    INSIGHTS: {
                        elId: 'pl-pr-ingt-link',
                        text: 'Insights',
                        link: 'https://www.wixanswers.com/insights',
                    },
                },
                BOOSTERS: {
                    text: 'BOOSTERS',
                    SPOTTER: {
                        elId: 'pl-bst-spt-link',
                        text: 'Spotter: Automations',
                        link: 'https://www.wixanswers.com/spotter-automations',
                    },
                    CONTROL_ROOM: {
                        elId: 'pl-bst-cr-link',
                        text: 'Control Room',
                        link: 'https://www.wixanswers.com/control-room',
                    },
                    TOP_ISSUES: {
                        elId: 'pl-bst-ti-link',
                        text: 'Top Issues',
                        link: 'https://www.wixanswers.com/top-issues',
                    },
                    CSAT: {
                        elId: 'pl-bst-csat-link',
                        text: 'Built-in CSAT',
                        link: 'https://www.wixanswers.com/csat',
                    },
                },
            },
            SOLUTIONS: {
                text: 'Solutions',
                elId: 'nav-links-link-solutions',
                COMPANY_TYPE: {
                    text: 'COMPANY TYPE',
                    SMB: {
                        elId: 'sl-ct-smb-link',
                        text: 'SMB',
                        link: 'https://www.wixanswers.com/smb',
                    },
                    ENTERPRISE: {
                      elId: 'sl-ct-ent-link',
                      text: 'Enterprise',
                      link: 'https://www.wixanswers.com/enterprise',
                    },
                    STARTUP: {
                        elId: 'sl-ct-strtup-link',
                        text: 'Startup',
                        link: 'https://www.wixanswers.com/startup',
                    },
                },
                USE_CASE: {
                    text: 'USE CASE',
                    OMNICHANNEL_SUPPORT: {
                        elId: 'sl-uc-os-link',
                        text: 'Omnichannel Support',
                        link: 'https://www.wixanswers.com/omnichannel-support',
                    },
                    SELF_SERVICE: {
                        elId: 'sl-uc-ss-link',
                        text: 'Self-service',
                        link: 'https://www.wixanswers.com/self-service',
                    },
                    PROACTIVE_SUPPORT: {
                        elId: 'sl-uc-ps-link',
                        text: 'Proactive Support',
                        link: 'https://www.wixanswers.com/proactive-support',
                    },
                    CUSTOMER_INTERACTIONS: {
                        elId: 'sl-uc-ci-link',
                        text: 'Customer Interactions',
                        link:
                            'https://www.wixanswers.com/customer-interactions',
                    },
                },
            },
            PRICING: {
                elId: 'nav-links-link-pricing',
                text: 'Pricing',
                link: 'https://www.wixanswers.com/pricing',
            },
            EXPLORE: {
                text: 'Explore',
                elId: 'nav-links-link-explore',
                TECH_ASSESSMENT: {
                    elId: 'ex-ta-link',
                    text: 'CS Tech Assessment',
                    link:
                        'https://app.wixanswers.com/assessment?_ga=2.180617447.1349779728.1617533070-748958510.1597566763',
                },
                CX_LIBRARY: {
                    elId: 'ex-cxlib-link',
                    text: 'CX Library',
                    link: 'https://www.wixanswers.com/cx-library',
                },
                BLOG: {
                    elId: 'ex-blog-link',
                    text: 'Blog',
                    link: 'https://www.wixanswers.com/blog',
                },
                HELP_CENTER: {
                    elId: 'ex-hc-link',
                    text: 'Help Center',
                    link: 'https://help.wixanswers.com/kb/en',
                },
                VIDEO_TUTORIALS: {
                    elId: 'ex-vid-link',
                    text: 'Video Tutorials',
                    link: 'https://www.wixanswers.com/video-tutorials',
                },
                DEVELOPER_TOOLS: {
                    elId: 'ex-dev-link',
                    text: 'Developer Tools',
                    link: 'https://www.wixanswers.com/developers',
                },
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
        
        .nav-links-container {
          --main-text-color: #002764;
          --link-color: #2288f9;
          --text-white-color: #fff;
          --nav-section-title-color: #99a9c1;
          --nav-section-divider-color: #ccd4e0;
          --link-font-size: 15px;
          --btn-link-font-size: 13px;
          --btn-link-width: 160px;
          --btn-link-height: 42px;
          --nav-link-width: fit-content;
          --whyanswers-nav-background-width-px: 240px;
          --whyanswers-nav-background-height-px: 230px;
          --whyanswers-nav-background-left-px: -40px;
          --platform-nav-background-width-px: 650px;
          --platform-nav-background-height-px: 350px;
          --platform-nav-background-left-px: 135px;
          --solutions-nav-background-width-px: 380px;
          --solutions-nav-background-height-px: 270px;
          --solutions-nav-background-left-px: 262px;
          --explore-nav-background-width-px: 270px;
          --explore-nav-background-height-px: 300px;
          --explore-nav-background-left-px: 497px;
          --pricing-left-px: 350px;
          color: var(--main-text-color);
          padding-left: 30px;
          perspective: 2000px;
          display: flex;
          align-items: center;
        }
        @media screen and (max-width: 650px) {
          .nav-links-container {
            display: none;
          }
        }
        
        .nav-links-link-container {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .nav-links-link-container .nav-links-link {
          padding: 0;
          cursor: default;
          width: var(--nav-link-width);
          text-decoration: none;
          font-size: var(--link-font-size);
          font-weight: 400;
          height: 100%;
          line-height: 70px;
          background: none;
          border: none;
          outline: none;
          color: var(--main-text-color);
          letter-spacing: 0.6px;
          margin-right: 60px;
        }
        .nav-links-link-container .nav-links-link.bold {
          font-weight: bold;
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
          border-radius: 6px;
          display: flex;
          letter-spacing: 0.4px;
          justify-content: space-evenly;
          z-index: 100;
          padding-top: 50px;
          transform-origin: center -100px;
          transform: rotateX(-10deg);
          box-shadow: 0 6px 10px -10px rgba(0, 0, 0, 0.2), 6px 0 10px -10px rgba(0, 0, 0, 0.2), -6px 0 10px -10px rgba(0, 0, 0, 0.2);
          transition: visibility 0.4s, opacity 0.4s, transform 0.4s;
        }
        .nav-links-content#why-answers {
          left: var(--whyanswers-nav-background-left-px);
          width: var(--whyanswers-nav-background-width-px);
          height: var(--whyanswers-nav-background-height-px);
        }
        .nav-links-content#platform {
          left: var(--platform-nav-background-left-px);
          width: var(--platform-nav-background-width-px);
          height: var(--platform-nav-background-height-px);
          z-index: 150;
        }
        .nav-links-content#solutions {
          left: var(--solutions-nav-background-left-px);
          width: var(--solutions-nav-background-width-px);
          height: var(--solutions-nav-background-height-px);
          z-index: 150;
        }
        .nav-links-content#explore {
          left: var(--explore-nav-background-left-px);
          display: flex;
          height: var(--explore-nav-background-height-px);
          width: var(--whyanswers-nav-background-width-px);
          z-index: 150;
        }
        .nav-links-content#pricing {
          left: var(--pricing-left-px);
        }
        .nav-links-content.why-answers {
          opacity: 1;
          z-index: 150;
          visibility: visible;
          transform: rotateX(0);
        }
        .nav-links-content.platform {
          opacity: 1;
          visibility: visible;
          transform: rotateX(0);
        }
        .nav-links-content.platform .nav-link-divider {
          width: 1px;
          height: 250px;
          border: solid 1px rgba(204, 212, 224, 0.5);
          align-self: flex-start;
        }
        .nav-links-content.solutions {
          opacity: 1;
          visibility: visible;
          transform: rotateX(0);
        }
        .nav-links-content.explore {
          opacity: 1;
          visibility: visible;
          transform: rotateX(0);
        }
        .nav-links-content .nav-links-link-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .nav-links-content .nav-links-link-col h4 {
          margin-top: 0;
          color: var(--nav-section-title-color);
          margin-bottom: 25px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .nav-links-content .nav-links-link-col > p, .nav-links-content .nav-links-link-col > a, .nav-links-content .nav-links-link-col > button {
          cursor: pointer;
          color: inherit;
          background: none;
          outline: none;
          border: none;
          text-align: left;
          font-size: var(--link-font-size);
          font-weight: 400;
          text-decoration: none;
          letter-spacing: 0.6px;
        }
        .nav-links-content .nav-links-link-col > p:not(:last-child), .nav-links-content .nav-links-link-col > a:not(:last-child), .nav-links-content .nav-links-link-col > button:not(:last-child) {
          margin-bottom: 18px;
        }
        .nav-links-content .nav-links-link-col > p:hover, .nav-links-content .nav-links-link-col > a:hover, .nav-links-content .nav-links-link-col > button:hover {
          color: var(--link-color);
        }
        
        .nav-cta-container {
          height: 100%;
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
          <div class="nav-links-container">
                <div class="nav-links-link-container" id="nav-links-link-container">
                <button 
                  class="nav-links-link" 
                  id=${this.NAV_LINKS.WHY_ANSWERS.elId}>
                  ${this.NAV_LINKS.WHY_ANSWERS.text}
                </button>
                <button 
                  class="nav-links-link" 
                  id=${this.NAV_LINKS.PLATFORM.elId}>
                ${this.NAV_LINKS.PLATFORM.text}
                </button>
                <button 
                  class="nav-links-link" 
                  id=${this.NAV_LINKS.SOLUTIONS.elId}>
                ${this.NAV_LINKS.SOLUTIONS.text}
                </button>
                <button
                  class="nav-links-link nav-links-link-pricing"
                  id=${this.NAV_LINKS.PRICING.elId}>
                  ${this.NAV_LINKS.PRICING.text}
                </button>
                <button 
                  class="nav-links-link" 
                  id=${this.NAV_LINKS.EXPLORE.elId}>
                ${this.NAV_LINKS.EXPLORE.text}
                </button>
                <div
                  class="nav-links-content"
                  id="why-answers"
                >
                  <div class="nav-links-link-col">
                    <button id=${this.NAV_LINKS.WHY_ANSWERS.WHY_WERE_DIFFERENT.elId}>
                    ${this.NAV_LINKS.WHY_ANSWERS.WHY_WERE_DIFFERENT.text}
                    </button>
                    <button id=${this.NAV_LINKS.WHY_ANSWERS.RESULTS_WITH_ANSWERS.elId}>
                    ${this.NAV_LINKS.WHY_ANSWERS.RESULTS_WITH_ANSWERS.text}
                    </button>
                    <button id=${this.NAV_LINKS.WHY_ANSWERS.CUSTOMER_STORIES.elId}>
                    ${this.NAV_LINKS.WHY_ANSWERS.CUSTOMER_STORIES.text}
                    </button>
                    <button id=${this.NAV_LINKS.WHY_ANSWERS.CS_SOLUTION_2021.elId}>
                    ${this.NAV_LINKS.WHY_ANSWERS.CS_SOLUTION_2021.text}
                    </button>
                  </div>
                </div>
                <div
                  class="nav-links-content"
                  id="platform"
                >
                  <div class="nav-links-link-col">
                    <h4>${this.NAV_LINKS.PLATFORM.OVERVIEW.text}</h4>
                    <button id=${this.NAV_LINKS.PLATFORM.OVERVIEW.FULL_CS_SOLUTION.elId}>
                    ${this.NAV_LINKS.PLATFORM.OVERVIEW.FULL_CS_SOLUTION.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.OVERVIEW.INTEGRATIONS.elId}>
                    ${this.NAV_LINKS.PLATFORM.OVERVIEW.INTEGRATIONS.text}
                    </button>
                  </div>
                  <div class="nav-links-link-col">
                    <h4>
                    ${this.NAV_LINKS.PLATFORM.PRODUCTS.text}
                    </h4>
                    <button id=${this.NAV_LINKS.PLATFORM.PRODUCTS.KNOWLEDGE_MANAGMENT.elId}>
                    ${this.NAV_LINKS.PLATFORM.PRODUCTS.KNOWLEDGE_MANAGMENT.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.PRODUCTS.TICKETING_STSTEM.elId}>
                    ${this.NAV_LINKS.PLATFORM.PRODUCTS.TICKETING_STSTEM.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.PRODUCTS.CALL_CENTER.elId}>
                    ${this.NAV_LINKS.PLATFORM.PRODUCTS.CALL_CENTER.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.PRODUCTS.WIDGETS.elId}>
                    ${this.NAV_LINKS.PLATFORM.PRODUCTS.WIDGETS.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.PRODUCTS.LIVE_CHAT.elId}>
                    ${this.NAV_LINKS.PLATFORM.PRODUCTS.LIVE_CHAT.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.PRODUCTS.INSIGHTS.elId}>
                    ${this.NAV_LINKS.PLATFORM.PRODUCTS.INSIGHTS.text}
                    </button>
                  </div>
                  <div class="nav-link-divider"></div>
                  <div class="nav-links-link-col">
                    <h4>${this.NAV_LINKS.PLATFORM.BOOSTERS.text}</h4>
                    <button id=${this.NAV_LINKS.PLATFORM.BOOSTERS.SPOTTER.elId}>
                    ${this.NAV_LINKS.PLATFORM.BOOSTERS.SPOTTER.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.BOOSTERS.CONTROL_ROOM.elId}>
                    ${this.NAV_LINKS.PLATFORM.BOOSTERS.CONTROL_ROOM.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.BOOSTERS.TOP_ISSUES.elId}>
                    ${this.NAV_LINKS.PLATFORM.BOOSTERS.TOP_ISSUES.text}
                    </button>
                    <button id=${this.NAV_LINKS.PLATFORM.BOOSTERS.CSAT.elId}>
                    ${this.NAV_LINKS.PLATFORM.BOOSTERS.CSAT.text}
                    </button>
                  </div>
                </div>
                <div
                  class="nav-links-content"
                  id="solutions"
                >
                  <div class="nav-links-link-col">
                    <h4>${this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.text}</h4>
                    <button id=${this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.SMB.elId}>
                    ${this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.SMB.text}
                    </button>
                    <button id=${this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.ENTERPRISE.elId}>
                    ${this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.ENTERPRISE.text}
                    </button>
                    <button id=${this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.STARTUP.elId}>
                    ${this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.STARTUP.text}
                    </button>
                  </div>
                  <div class="nav-links-link-col">
                    <h4>${this.NAV_LINKS.SOLUTIONS.USE_CASE.text}</h4>
                    <button id=${this.NAV_LINKS.SOLUTIONS.USE_CASE.OMNICHANNEL_SUPPORT.elId}>
                    ${this.NAV_LINKS.SOLUTIONS.USE_CASE.OMNICHANNEL_SUPPORT.text}
                    </button>
                    <button id=${this.NAV_LINKS.SOLUTIONS.USE_CASE.SELF_SERVICE.elId}>
                    ${this.NAV_LINKS.SOLUTIONS.USE_CASE.SELF_SERVICE.text}
                    </button>
                    <button id=${this.NAV_LINKS.SOLUTIONS.USE_CASE.PROACTIVE_SUPPORT.elId}>
                    ${this.NAV_LINKS.SOLUTIONS.USE_CASE.PROACTIVE_SUPPORT.text}
                    </button>
                    <button id=${this.NAV_LINKS.SOLUTIONS.USE_CASE.CUSTOMER_INTERACTIONS.elId}>
                    ${this.NAV_LINKS.SOLUTIONS.USE_CASE.CUSTOMER_INTERACTIONS.text}
                    </button>
                  </div>
                </div>
                <div class="nav-links-content" id="pricing"></div>
                <div
                  class="nav-links-content"
                  id="explore"
                >
                  <div class="nav-links-link-col">
                    <button id=${this.NAV_LINKS.EXPLORE.TECH_ASSESSMENT.elId}>
                    ${this.NAV_LINKS.EXPLORE.TECH_ASSESSMENT.text}
                    </button>
                    <button id=${this.NAV_LINKS.EXPLORE.CX_LIBRARY.elId}>
                    ${this.NAV_LINKS.EXPLORE.CX_LIBRARY.text}
                    </button>
                    <button id=${this.NAV_LINKS.EXPLORE.BLOG.elId}>
                    ${this.NAV_LINKS.EXPLORE.BLOG.text}
                    </button>
                    <button id=${this.NAV_LINKS.EXPLORE.HELP_CENTER.elId}>
                    ${this.NAV_LINKS.EXPLORE.HELP_CENTER.text}
                    </button>
                    <button id=${this.NAV_LINKS.EXPLORE.VIDEO_TUTORIALS.elId}>
                    ${this.NAV_LINKS.EXPLORE.VIDEO_TUTORIALS.text}
                    </button>
                    <button id=${this.NAV_LINKS.EXPLORE.DEVELOPER_TOOLS.elId}>
                    ${this.NAV_LINKS.EXPLORE.DEVELOPER_TOOLS.text}
                    </button>
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
            .getElementById(this.NAV_LINKS.WHY_ANSWERS.elId)
            .addEventListener('mouseover', () =>
                this.setActiveLink('why-answers')
            );
        this.shadowRoot
            .getElementById(this.NAV_LINKS.PLATFORM.elId)
            .addEventListener('mouseover', () =>
                this.setActiveLink('platform')
            );
        this.shadowRoot
            .getElementById(this.NAV_LINKS.SOLUTIONS.elId)
            .addEventListener('mouseover', () =>
                this.setActiveLink('solutions')
            );
        this.shadowRoot
            .getElementById(this.NAV_LINKS.PRICING.elId)
            .addEventListener('mouseover', () => this.setActiveLink('pricing'));
        this.shadowRoot
            .getElementById(this.NAV_LINKS.EXPLORE.elId)
            .addEventListener('mouseover', () => this.setActiveLink('explore'));

        this.addLinkEvent(this.NAV_LINKS.WHY_ANSWERS.WHY_WERE_DIFFERENT);
        this.addLinkEvent(this.NAV_LINKS.WHY_ANSWERS.RESULTS_WITH_ANSWERS);
        this.addLinkEvent(this.NAV_LINKS.WHY_ANSWERS.CUSTOMER_STORIES);
        this.addLinkEvent(this.NAV_LINKS.WHY_ANSWERS.CS_SOLUTION_2021);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.OVERVIEW.FULL_CS_SOLUTION);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.OVERVIEW.INTEGRATIONS);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.PRODUCTS.KNOWLEDGE_MANAGMENT);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.PRODUCTS.TICKETING_STSTEM);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.PRODUCTS.CALL_CENTER);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.PRODUCTS.WIDGETS);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.PRODUCTS.LIVE_CHAT);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.PRODUCTS.INSIGHTS);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.BOOSTERS.SPOTTER);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.BOOSTERS.CONTROL_ROOM);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.BOOSTERS.TOP_ISSUES);
        this.addLinkEvent(this.NAV_LINKS.PLATFORM.BOOSTERS.CSAT);
        this.addLinkEvent(this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.SMB);
        this.addLinkEvent(this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.STARTUP);
        this.addLinkEvent(this.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.ENTERPRISE);
        this.addLinkEvent(
            this.NAV_LINKS.SOLUTIONS.USE_CASE.OMNICHANNEL_SUPPORT
        );
        this.addLinkEvent(this.NAV_LINKS.SOLUTIONS.USE_CASE.SELF_SERVICE);
        this.addLinkEvent(this.NAV_LINKS.SOLUTIONS.USE_CASE.PROACTIVE_SUPPORT);
        this.addLinkEvent(
            this.NAV_LINKS.SOLUTIONS.USE_CASE.CUSTOMER_INTERACTIONS
        );
        this.addLinkEvent(this.NAV_LINKS.PRICING);
        this.addLinkEvent(this.NAV_LINKS.EXPLORE.TECH_ASSESSMENT);
        this.addLinkEvent(this.NAV_LINKS.EXPLORE.CX_LIBRARY);
        this.addLinkEvent(this.NAV_LINKS.EXPLORE.BLOG);
        this.addLinkEvent(this.NAV_LINKS.EXPLORE.HELP_CENTER);
        this.addLinkEvent(this.NAV_LINKS.EXPLORE.VIDEO_TUTORIALS);
        this.addLinkEvent(this.NAV_LINKS.EXPLORE.DEVELOPER_TOOLS);
    }

    connectedCallback() {
        if (this.hasAttribute('currentpagelinkfolder')) {
            const linkFolder = this.getAttribute('currentpagelinkfolder');
            this.setCurrentPageLinkFolder(linkFolder);
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'currentpagelinkfolder') {
            if (oldValue === newValue) return;
            if (newValue === '') return;
            this.setCurrentPageLinkFolder(newValue);
        }
    }

    static get observedAttributes() {
        return ['currentpagelinkfolder'];
    }

    setCurrentPageLinkFolder(linkFolder) {
        if (
            this._currentPageLinkFolder &&
            this._currentPageLinkFolder !== 'home'
        ) {
            this.shadowRoot
                .getElementById(`nav-links-link-${this._currentPageLinkFolder}`)
                .classList.remove('bold');
        }
        if (linkFolder && linkFolder !== 'home') {
            this.shadowRoot
                .getElementById(`nav-links-link-${linkFolder}`)
                .classList.add('bold');
        }
        this._currentPageLinkFolder = linkFolder;
    }

    addLinkEvent(navLinkObj) {
        return this.shadowRoot
            .getElementById(navLinkObj['elId'])
            .addEventListener('click', () => this.trackClickEvent(navLinkObj));
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

customElements.define('wa-nav-links', WaNavLinks);
