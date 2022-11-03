import { style, globalStyle } from '@vanilla-extract/css'
import {
  atoms,
  media,
  typography,
  colorTheme,
  radii,
  fontWeight,
  color,
} from '@zoralabs/zord'
import {
  FOOTER_HEIGHT,
  FOOTER_HEIGHT_MOBILE,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  MAX_WIDTH,
} from './style-constants'
import { recipe } from '@vanilla-extract/recipes'

globalStyle('html, body', {
  margin: 0,
  padding: 0,
})

globalStyle('*', {
  fontFamily: "'ptBold', Arial, Helvetica, sans-serif!important",
})

globalStyle('h1, h2, h3', {
  fontFamily: "'Londrina Solid', cursive!important",
})

globalStyle('light-font', {
  fontWeight: 300,
  fontFamily: "'ptRegular', Arial, Helvetica, sans-serif!important",
})

export const lightFont = style({
  fontWeight: 300,
  fontFamily: "'ptRegular', Arial, Helvetica, sans-serif!important",
})

export const noTextWrap = style({
  whiteSpace: 'nowrap',
})

export const textCenter = style({
  textAlign: 'center',
})

export const leadingTight = style({
  lineHeight: 1.125,
})

export const lightGreyType = style({
  color: 'var(--dk-grey)',
})

export const buttonStyle = style([
  {
    backgroundColor: 'var(--light-grey)',
  },
  atoms({
    borderRadius: 'round',
    px: 'x2',
    py: 'x2',
    justifyContent: 'center',
  }),
])

export const pageWrapper = style([
  {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE + FOOTER_HEIGHT_MOBILE}px)`,
    '@media': {
      [media.min1024]: {
        minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
      },
    },
  },
])

export const maxWidthSm = style([
  {
    maxWidth: MAX_WIDTH.SM,
  },
  atoms({
    width: '100%',
    margin: 'auto',
  }),
])

globalStyle('.zord-acccordionTrigger > span', {
  fontFamily: "'Londrina Solid', cursive!important",
  fontSize: typography.size[8],
  paddingBottom: 10,
})

globalStyle('.zord-attributesHeading', {
  fontFamily: "'Londrina Solid', cursive!important",
  fontSize: typography.size[8],
  paddingTop: 10,
})

globalStyle('.nouns-market-traits h3 > button > span', {
  fontFamily: "'ptBold', Arial, Helvetica, sans-serif!important",
  fontSize: `${typography.size[10]}!important`,
  textTransform: 'capitalize',
  paddingBottom: 0,
})

globalStyle('.nouns-market-traits h3 > button', {
  backgroundColor: `${colorTheme.background.tertiary}!important`,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 10,
  borderRadius: radii.curved,
  marginBottom: 5,
})

export const clickAnimation = style({
  transition:
    'border 0.1s ease-in-out, background 0.1s ease-in-out, transform 0.1s ease-out',
  userSelect: 'none',
  selectors: {
    '&:focus-visible': {
      outline: '2px solid rgb(32, 103, 243)',
      outlineStyle: 'auto',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      opacity: 0.6,
    },
    '&[disabled]:active': {
      transform: 'unset',
    },
  },
})

/* PAGE HEADER */
export const pageHeadline = [
  {
    fontWeight: fontWeight.display,
    lineHeight: '40px',
    '@media': {
      [media.min1024]: {
        lineHeight: '85px',
      },
    },
  },
  atoms({
    fontSize: {
      '@initial': '48px',
      '@1024': '80px',
    },
  }),
]

export const pageHeaderVariants = {
  variant: {
    topBorder: [
      {
        borderTop: `2px solid ${color.black10}`,
        '@media': {
          [media.min1024]: {
            borderTop: 0,
          },
        },
      },
      atoms({
        pt: {
          '@initial': 'x6',
          '@1024': 'x0',
        },
      }),
    ],
  },
}

export const pageHeaderWrapper = recipe({
  variants: pageHeaderVariants,
  base: style([
    {
      maxWidth: MAX_WIDTH.SM,
    },
    atoms({
      width: '100%',
      margin: 'auto',
    }),
  ]),
})

export const hideMobile = style({
  '@media': {
    '(max-width: 500px)': {
      display: 'none',
    },
  },
})
