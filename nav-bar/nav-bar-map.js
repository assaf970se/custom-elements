const NAV_BAR_MAP = {
    LOGO: {
        link: 'https://www.wixanswers.com',
        type: 'logo',
        elId: 'nav-logo',
        text: 'logo',
        src:
            'https://static.wixstatic.com/shapes/dba05e_67c23a413b1744d5b7084696c38a9f52.svg',
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
                link: 'https://www.wixanswers.com/future-of-customer-support',
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
                    text: 'Tickting system',
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
                    link: 'https://www.wixanswers.com/customer-interactions',
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
    NAV_CTA: {
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
    },
};
