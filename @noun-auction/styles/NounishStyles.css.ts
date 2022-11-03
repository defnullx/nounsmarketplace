import { style, globalStyle } from '@vanilla-extract/css'
import { atoms, space, color, typography, media, radii } from '@zoralabs/zord'
import { recipe } from '@vanilla-extract/recipes'

export const auctionWrapperVariants = {
  layout: {
    row: [
      {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        gridAutoFlow: 'row',
        borderRadius: radii.phat,
        border: `2px solid ${color.black10}`,
        height: '232px',
        '@media': {
          [media.min1024]: {
            gridTemplateColumns: '250px repeat(2, 1fr) 1.25fr 155px',
            height: '85px',
            borderRadius: 0,
            border: 'none',
            borderTop: `2px solid ${color.black10}`,
          },
        },
      },
      atoms({
        gap: {
          '@initial': 'x3',
          '@1024': 'x4',
        },
        p: {
          '@initial': 'x4',
          '@1024': 'x0',
        },
        pt: {
          '@initial': 'x4',
          '@1024': 'x4',
        },
      }),
    ],
    historyOnly: [
      {
        gridTemplateRows: 'auto',
      },
    ],
    withHistory: [
      {
        gridTemplateColumns: '250px repeat(2, 1fr) 1.25fr 155px',
        gridTemplateRows: '68px 1fr auto',
      },
    ],
    sideBarBid: [
      {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
      },
      atoms({
        width: '100%',
      }),
    ],
  },
}

export const auctionWrapper = recipe({
  variants: auctionWrapperVariants,
  base: style([
    atoms({
      width: '100%',
      position: 'relative',
    }),
  ]),
  defaultVariants: {
    layout: 'row',
  },
})

export const responsiveRow = style([
  {
    alignItems: 'flex-start',
    '@media': {
      [media.min1024]: {
        alignItems: 'flex-end',
      },
    },
    selectors: {
      '&.nounish-auction__countdown': {
        gridColumn: '1',
        '@media': {
          [media.min1024]: {
            gridColumn: 'auto',
          },
        },
      },
      '&.nounish-auction__high-bid': {
        gridColumn: '2',
        '@media': {
          [media.min1024]: {
            gridColumn: 'auto',
          },
        },
      },
    },
  },
  atoms({
    w: '100%',
  }),
])

export const rowButtonWrapper = style([
  {
    gridColumn: '1 / 3',
    width: '100%',
    '@media': {
      [media.min1024]: {
        gridColumn: 'auto',
      },
    },
  },
])

globalStyle(
  `
  ${rowButtonWrapper} .zora-modal-trigger-wrapper,
  ${rowButtonWrapper} .nounish-auction__row-link
`,
  {
    width: '50%',
    '@media': {
      [media.min1024]: {
        width: '100%',
      },
    },
  }
)

globalStyle(`${rowButtonWrapper} .zora-modal-trigger`, {
  width: '100%',
  '@media': {
    [media.min1024]: {
      width: '100%',
    },
  },
})

export const sidebarBidWrapper = style([
  {
    backgroundColor: color.black100,
  },
  atoms({
    p: 'x4',
    gap: 'x4',
    borderRadius: 'phat',
    flexDirection: 'column',
  }),
])

export const sidebarHighBid = style([
  {
    fontSize: typography.size[5],
    fontFamily: "'Londrina Solid', cursive!important",
    fontWeight: 400,
  },
  atoms({
    color: 'reverse',
  }),
])

export const sideBarUpperLabel = style({
  fontSize: typography.size[9],
})

export const bidHistoryWrapper = style([
  {
    gridRowStart: 2,
    gridRowEnd: 2,
    gridColumnStart: 1,
    gridColumnEnd: 6,
  },
])

export const debugWrapper = style([
  {
    gridRowStart: 3,
    gridRowEnd: 3,
    gridColumnStart: 1,
    gridColumnEnd: 6,
  },
])

export const placeBidTrigger = style([
  {
    whiteSpace: 'nowrap',
    height: '42px',
  },
  atoms({
    borderRadius: 'curved',
    px: 'x4',
    py: 'x2',
    justifyContent: 'center',
    backgroundColor: 'tertiary',
    color: 'primary',
  }),
])

export const nounishAuctionRow = style([
  atoms({
    borderColor: 'secondary',
    borderStyle: 'solid',
    borderWidth: 'normal',
    borderRadius: 'phat',
    backgroundColor: 'primary',
    p: 'x2',
  }),
])

export const transactionEventWrapper = style([
  {
    gridTemplateColumns: 'auto 125px',
  },
  atoms({
    w: '100%',
  }),
])

export const transactionBidder = style([
  {
    gridTemplateColumns: `${space.x12} auto`,
  },
  atoms({
    gap: 'x3',
  }),
])

export const auctionEventRow = style([
  {
    selectors: {
      '&:after': {
        content: '',
        display: 'block',
        position: 'relative',
        width: '100%',
        height: space.x5,
        borderLeft: `2px solid ${color.black10}`,
        margin: `${space.x1} 0 ${space.x1}`,
        transform: `translateX(calc(${space.x6} - 1px))`,
        '@media': {
          [media.min1024]: {
            height: space.x6,
            margin: `${space.x2} 0 ${space.x2}`,
          },
        },
      },
      '&:last-of-type:after': {
        display: 'none',
      },
    },
  },
  atoms({
    w: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
])

/* STYLE UTILS */
export const lightFont = style({
  fontWeight: 300,
  fontFamily: "'ptRegular', Arial, Helvetica, sans-serif!important",
})

/* Thumbnail */
export const tokenInfoWrapper = style([
  {
    gridColumn: '1 / 3',
    borderBottom: `1px solid ${color.black10}`,
    gridTemplateColumns: '68px auto',
    gridTemplateRows: '68px',
    '@media': {
      [media.min1024]: {
        maxWidth: 350,
        gridColumn: 'auto',
        borderBottom: 'none',
      },
    },
  },
  atoms({
    w: '100%',
    gap: 'x3',
    display: 'grid',
    pb: {
      '@initial': 'x4',
      '@1024': 'x0',
    },
    mb: {
      '@initial': 'x2',
      '@1024': 'x0',
    },
  }),
])

export const nounishThumbnail = style([
  atoms({
    backgroundColor: 'tertiary',
    position: 'relative',
    overflow: 'hidden',
    h: '100%',
    w: '100%',
  }),
])

export const nounishThumbnailImage = style([
  atoms({
    inset: 'x0',
    position: 'absolute',
    w: '100%',
    h: '100%',
    objectFit: 'cover',
  }),
])

export const pixelate = style([
  {
    '@supports': {
      '(filter: url("#mosaic"))': {
        filter: 'url("#mosaic")',
        transform: 'scale(.65)',
      },
    },
  },
])

export const rowLoader = style([
  {
    height: 68,
    width: 68,
  },
  atoms({
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'curved',
    backgroundColor: 'tertiary',
    pos: 'relative',
    overflow: 'hidden',
  }),
])
