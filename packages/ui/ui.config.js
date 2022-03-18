/** this config can be replaced by windi.config.js or tailwind.config.js */

const { defineConfig } = require('cosmic-util');

const moreSpacingExtends = {
    '70': '7rem',
    '80': '8rem',
    '90': '9rem',
    '100': '10rem',
    '120': '12rem',
    '125': '12.5rem',
    '128': '12.8rem',
    '140': '14rem',
    '150': '15rem',
    '160': '16rem',
    '180': '18rem',
    '200': '20rem',
    '250': '25rem',
    '300': '30rem',
    '320': '32rem',
    '350': '35rem',
    '360': '36rem',
    '400': '40rem',
    '450': '45rem',
    '480': '48rem',
    '500': '50rem',
    '640': '64rem',
    '960': '9.6rem',
    '1080': '108rem',
};

module.exports = defineConfig({
    theme: {
        opacity: {
            0: '0',
            5: '.5',
            10: '.1',
            20: '.2',
            25: '.25',
            30: '.3',
            40: '.4',
            50: '.5',
            60: '.6',
            70: '.7',
            75: '.75',
            80: '.8',
            90: '.9',
            95: '.95',
            100: '1',
        },
        spacing: {
            0: '0',
            1: '.1rem',
            2: '.2rem',
            4: '.4rem',
            6: '.6rem',
            8: '.8rem',
            10: '1rem',
            12: '1.2rem',
            14: '1.4rem',
            16: '1.6rem',
            18: '1.8rem',
            20: '2.0rem',
            24: '2.4rem',
            30: '3.0rem',
            32: '3.2rem',
            40: '4.0rem',
            48: '4.8rem',
            50: '5.0rem',
            56: '5.6rem',
            60: '6.0rem',
            64: '6.4rem',
        },
        extend: {
            fontSize: {
                'xs': ['var(--font-xs)', 'var(--leading-xs)'],
                'sm': ['var(--font-sm)', 'var(--leading-xs)'],
                'md': ['var(--font-md)', 'var(--leading-xs)'],
                'lg': ['var(--font-lg)', 'var(--leading-xs)'],
                'xl': ['var(--font-xl)', 'var(--leading-xs)'],
                '2xl': ['var(--font-2xl)', 'var(--leading-xs)'],
            },
            width: {
                ...moreSpacingExtends,
            },
            height: {
                ...moreSpacingExtends,
            },
            minHeight: {
                ...moreSpacingExtends,
            },
            maxHeight: {
                ...moreSpacingExtends,
            },
            minWidth: {
                ...moreSpacingExtends,
            },
            maxWidth: {
                ...moreSpacingExtends,
            },
        },
    },
});