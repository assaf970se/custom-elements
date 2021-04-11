class WaNavBar extends HTMLElement {
    constructor() {
        super();
        this._currentPageLinkFolder = '';
        this.activeLink = '';
        this.NAV_BAR_MAP = {
            LOGO: {
                link: 'https://www.wixanswers.com',
                type: 'logo',
                elId: 'nav-logo',
                text: 'logo',
                src:'https://static.wixstatic.com/shapes/dba05e_67c23a413b1744d5b7084696c38a9f52.svg',
            },
            NAV_LINKS: {
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
                            link:
                                'https://www.wixanswers.com/knowledge-management',
                        },
                        TICKETING_STSTEM: {
                            elId: 'pl-pr-ts-link',
                            text: 'Tickting system',
                            link: 'https://www.wixanswers.com/ticketing-system',
                        },
                        CALL_CENTER: {
                            elId: 'pl-pr-cc-link',
                            text: 'Call center',
                            link:
                                'https://www.wixanswers.com/call-center-software',
                        },
                        WIDGETS: {
                            elId: 'pl-pr-wdgt-link',
                            text: 'Widgets',
                            link: 'https://www.wixanswers.com/help-widget',
                        },
                        LIVE_CHAT: {
                            elId: 'pl-pr-lc-link',
                            text: 'Live chat',
                            link:
                                'https://www.wixanswers.com/live-chat-software',
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
                            link:
                                'https://www.wixanswers.com/spotter-automations',
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
                    },
                    USE_CASE: {
                        text: 'USE CASE',
                        OMNICHANNEL_SUPPORT: {
                            elId: 'sl-uc-os-link',
                            text: 'Omnichannel Support',
                            link:
                                'https://www.wixanswers.com/omnichannel-support',
                        },
                        SELF_SERVICE: {
                            elId: 'sl-uc-ss-link',
                            text: 'Self-service',
                            link: 'https://www.wixanswers.com/self-service',
                        },
                        PROACTIVE_SUPPORT: {
                            elId: 'sl-uc-ps-link',
                            text: 'Proactive Support',
                            link:
                                'https://www.wixanswers.com/proactive-support',
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
            },
        };

        this.NAV_LINKS_LIST = [];

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            * {
              box-sizing: border-box;
              font-family: "Madefor Display", sans-serif;
              margin: 0;
              padding: 0;
            }
            
            .wa-navbar-container {
              --main-text-color: #002764;
              --link-color: #2288f9;
              --text-white-color: #fff;
              --nav-section-title-color: #99a9c1;
              --nav-section-divider-color: #ccd4e0;
              --link-font-size: 15px;
              --btn-link-font-size: 13px;
              --btn-link-width: 160px;
              --btn-link-height: 42px;
              box-sizing: border-box;
              font-family: "Madefor Display", sans-serif;
              display: flex;
              justify-content: space-around;
              align-items: baseline;
              padding-right: 60px;
              padding-left: 60px;
              color: var(--main-text-color);
            }
            .wa-navbar-container .nav-logo-container {
              min-width: 160px;
              height: 100%;
              display: flex;
              justify-content: center;
              margin-right: 60px;
            }
            .wa-navbar-container .nav-logo-container img {
              cursor: pointer;
              width: 100%;
            }
            .wa-navbar-container .nav-links-container {
              --nav-link-width: 120px;
              --whyanswers-nav-background-width-px: 240px;
              --whyanswers-nav-background-height-px: 240px;
              --platform-nav-background-width-px: 650px;
              --platform-nav-background-height-px: 370px;
              --solutions-nav-background-width-px: 480px;
              --solutions-nav-background-height-px: 280px;
              --explore-nav-background-width-px: 270px;
              --explore-nav-background-height-px: 320px;
              height: 70px;
              flex-grow: 2;
              perspective: 2000px;
            }
            .wa-navbar-container .nav-links-link-container {
              position: relative;
              height: 100%;
              display: flex;
              align-items: center;
            }
            .wa-navbar-container .nav-links-link-container .nav-links-link {
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
              letter-spacing: 0.4px;
            }
            .wa-navbar-container .nav-links-link-container .nav-links-link.bold {
              font-weight: bold;
            }
            .wa-navbar-container .nav-links-link-container .nav-links-link.nav-links-link-pricing {
              cursor: pointer;
            }
            .wa-navbar-container .nav-links-link-container .nav-links-link.nav-links-link-pricing:hover {
              color: var(--link-color);
            }
            .wa-navbar-container .nav-links-content {
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
              box-shadow: 0 30px 60px -50px #e9e7e7;
              transition: visibility 0.4s, opacity 0.4s, transform 0.4s;
            }
            .wa-navbar-container .nav-links-content#why-answers {
              width: var(--whyanswers-nav-background-width-px);
              height: var(--whyanswers-nav-background-height-px);
              left: 0;
            }
            .wa-navbar-container .nav-links-content#platform {
              left: 125px;
              width: var(--platform-nav-background-width-px);
              height: var(--platform-nav-background-height-px);
              z-index: 150;
            }
            .wa-navbar-container .nav-links-content#solutions {
              left: 250px;
              width: var(--solutions-nav-background-width-px);
              height: var(--solutions-nav-background-height-px);
              z-index: 150;
            }
            .wa-navbar-container .nav-links-content#explore {
              left: 500px;
              display: flex;
              height: var(--explore-nav-background-height-px);
              width: var(--whyanswers-nav-background-width-px);
              z-index: 150;
            }
            .wa-navbar-container .nav-links-content#pricing {
              left: 350px;
            }
            .wa-navbar-container .nav-links-content.why-answers {
              opacity: 1;
              z-index: 150;
              visibility: visible;
              transform: rotateX(0);
            }
            .wa-navbar-container .nav-links-content.platform {
              opacity: 1;
              visibility: visible;
              transform: rotateX(0);
            }
            .wa-navbar-container .nav-links-content.platform .nav-link-divider {
              width: 2px;
              height: 240px;
              border: solid 1px #ccd4e0;
              align-self: flex-start;
            }
            .wa-navbar-container .nav-links-content.solutions {
              opacity: 1;
              visibility: visible;
              transform: rotateX(0);
            }
            .wa-navbar-container .nav-links-content.explore {
              opacity: 1;
              visibility: visible;
              transform: rotateX(0);
            }
            .wa-navbar-container .nav-links-content .nav-links-link-col {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
            }
            .wa-navbar-container .nav-links-content .nav-links-link-col h4 {
              margin-top: 0;
              color: var(--nav-section-title-color);
              margin-bottom: 25px;
              font-size: 14px;
              font-weight: 700;
              text-transform: uppercase;
            }
            .wa-navbar-container .nav-links-content .nav-links-link-col > p, .wa-navbar-container .nav-links-content .nav-links-link-col > a, .wa-navbar-container .nav-links-content .nav-links-link-col > button {
              cursor: pointer;
              color: inherit;
              background: none;
              outline: none;
              border: none;
              text-align: left;
              font-size: var(--link-font-size);
              font-weight: 400;
              text-decoration: none;
            }
            .wa-navbar-container .nav-links-content .nav-links-link-col > p:not(:last-child), .wa-navbar-container .nav-links-content .nav-links-link-col > a:not(:last-child), .wa-navbar-container .nav-links-content .nav-links-link-col > button:not(:last-child) {
              margin-bottom: 18px;
            }
            .wa-navbar-container .nav-links-content .nav-links-link-col > p:hover, .wa-navbar-container .nav-links-content .nav-links-link-col > a:hover, .wa-navbar-container .nav-links-content .nav-links-link-col > button:hover {
              color: var(--link-color);
            }
            .wa-navbar-container .nav-cta-container {
              height: 100%;
              display: flex;
              align-items: center;
            }
            .wa-navbar-container .nav-cta-container .nav-cta-type-1 {
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
            .wa-navbar-container .nav-cta-container .nav-cta-type-1:hover {
              color: var(--link-color);
            }
            .wa-navbar-container .nav-cta-container .nav-cta-type-2 {
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
            .wa-navbar-container .nav-cta-container .nav-cta-type-2:hover {
              opacity: 0.8;
            }
            .wa-navbar-container .nav-cta-container .nav-cta-type-3 {
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
            .wa-navbar-container .nav-cta-container .nav-cta-type-3:hover {
              opacity: 0.8;
            }
            </style>

          <div class="wa-navbar-container">
            <div class="nav-logo-container">
                <img id="nav-logo" src=${this.NAV_BAR_MAP.LOGO.src} alt="Wixanswers Logo" />
            </div>
            <div class="nav-links-container">
                  <div class="nav-links-link-container" id="nav-links-link-container">
                  <button class="nav-links-link" id="nav-links-link-why-answers">
                    ${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.text}
                  </button>
                  <button class="nav-links-link" id="nav-links-link-platform">
                  ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.text}
                  </button>
                  <button class="nav-links-link" id="nav-links-link-solutions">
                  ${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.text}
                  </button>
                  <button
                    class="nav-links-link nav-links-link-pricing"
                    id="nav-links-link-pricing">
                    ${this.NAV_BAR_MAP.NAV_LINKS.PRICING.text}
                  </button>
                  <button class="nav-links-link" id="nav-links-link-explore">
                  ${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.text}
                  </button>
                  <div
                    class="nav-links-content"
                    id="why-answers"
                  >
                    <div class="nav-links-link-col">
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.WHY_WERE_DIFFERENT.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.WHY_WERE_DIFFERENT.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.RESULTS_WITH_ANSWERS.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.RESULTS_WITH_ANSWERS.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.CUSTOMER_STORIES.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.CUSTOMER_STORIES.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.CS_SOLUTION_2021.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.CS_SOLUTION_2021.text}
                      </button>
                    </div>
                  </div>
                  <div
                    class="nav-links-content"
                    id="platform"
                  >
                    <div class="nav-links-link-col">
                      <h4>${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.OVERVIEW.text}</h4>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.OVERVIEW.FULL_CS_SOLUTION.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.OVERVIEW.FULL_CS_SOLUTION.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.OVERVIEW.INTEGRATIONS.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.OVERVIEW.INTEGRATIONS.text}
                      </button>
                    </div>
                    <div class="nav-links-link-col">
                      <h4>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.text}
                      </h4>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.KNOWLEDGE_MANAGMENT.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.KNOWLEDGE_MANAGMENT.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.TICKETING_STSTEM.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.TICKETING_STSTEM.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.CALL_CENTER.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.CALL_CENTER.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.WIDGETS.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.WIDGETS.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.LIVE_CHAT.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.LIVE_CHAT.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.INSIGHTS.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.INSIGHTS.text}
                      </button>
                    </div>
                    <div class="nav-link-divider"></div>
                    <div class="nav-links-link-col">
                      <h4>${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.text}</h4>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.SPOTTER.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.SPOTTER.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.CONTROL_ROOM.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.CONTROL_ROOM.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.TOP_ISSUES.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.TOP_ISSUES.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.CSAT.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.CSAT.text}
                      </button>
                    </div>
                  </div>
                  <div
                    class="nav-links-content"
                    id="solutions"
                  >
                    <div class="nav-links-link-col">
                      <h4>${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.text}</h4>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.SMB.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.SMB.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.ENTERPRISE.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.ENTERPRISE.text}
                      </button>
                    </div>
                    <div class="nav-links-link-col">
                      <h4>${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.text}</h4>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.OMNICHANNEL_SUPPORT.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.OMNICHANNEL_SUPPORT.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.SELF_SERVICE.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.SELF_SERVICE.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.PROACTIVE_SUPPORT.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.PROACTIVE_SUPPORT.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.CUSTOMER_INTERACTIONS.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.CUSTOMER_INTERACTIONS.text}
                      </button>
                    </div>
                  </div>
                  <div class="nav-links-content" id="pricing"></div>
                  <div
                    class="nav-links-content"
                    id="explore"
                  >
                    <div class="nav-links-link-col">
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.TECH_ASSESSMENT.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.TECH_ASSESSMENT.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.CX_LIBRARY.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.CX_LIBRARY.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.BLOG.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.BLOG.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.HELP_CENTER.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.HELP_CENTER.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.VIDEO_TUTORIALS.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.VIDEO_TUTORIALS.text}
                      </button>
                      <button id=${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.DEVELOPER_TOOLS.elId}>
                      ${this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.DEVELOPER_TOOLS.text}
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
            <div class="nav-cta-container">
                <button class="nav-cta-type-1">Login</button>
                <button class="nav-cta-type-2">Try for Free</button>
                <button class="nav-cta-type-3">Request Demo</button>
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

        this.addLinkEvent(this.NAV_BAR_MAP.LOGO);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.WHY_WERE_DIFFERENT);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.RESULTS_WITH_ANSWERS);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.CUSTOMER_STORIES);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.WHY_ANSWERS.CS_SOLUTION_2021);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.OVERVIEW.FULL_CS_SOLUTION);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.OVERVIEW.INTEGRATIONS);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.KNOWLEDGE_MANAGMENT);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.TICKETING_STSTEM);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.CALL_CENTER);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.WIDGETS);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.LIVE_CHAT);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.PRODUCTS.INSIGHTS);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.SPOTTER);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.CONTROL_ROOM);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.TOP_ISSUES);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PLATFORM.BOOSTERS.CSAT);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.SMB);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.COMPANY_TYPE.ENTERPRISE);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.OMNICHANNEL_SUPPORT);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.SELF_SERVICE);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.PROACTIVE_SUPPORT);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.SOLUTIONS.USE_CASE.CUSTOMER_INTERACTIONS);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.PRICING);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.TECH_ASSESSMENT);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.CX_LIBRARY);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.BLOG);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.HELP_CENTER);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.VIDEO_TUTORIALS);
        this.addLinkEvent(this.NAV_BAR_MAP.NAV_LINKS.EXPLORE.DEVELOPER_TOOLS);
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
        if (this._currentPageLinkFolder && this._currentPageLinkFolder !== 'home') {
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

customElements.define('wa-nav-bar', WaNavBar);
