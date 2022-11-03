import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { atoms, media, vars } from '@zoralabs/zord'

export const buttonVariants = {
  loading: {
    true: style({
      pointerEvents: 'none',
    }),
  },

  size: {
    sm: [
      {
        width: 'auto',
        borderRadius: 12,
        fontSize: 16,
        '@media': {
          [media.min768]: {
            fontSize: 18,
          },
        },
      },
      atoms({
        display: 'inline-flex',
        px: 'x4',
        py: 'x2',
        height: 'x10', // 40px
        minWidth: 'x19',
        fontWeight: 'label',
      }),
    ],
    md: [
      {
        fontSize: 16,
        '@media': {
          [media.min768]: {
            fontSize: 18,
          },
        },
      },
      atoms({
        height: { '@initial': 'x10', '@1024': 'x14' }, // 40px -> 56px
        px: { '@initial': 'x4', '@1024': 'x6' },
        py: { '@initial': 'x2', '@1024': 'x4' },
        fontWeight: 'label',
      }),
    ],
    lg: [
      {
        fontSize: 20,
        '@media': {
          [media.min768]: {
            fontSize: 22,
          },
        },
      },
      atoms({
        px: 'x6',
        py: { '@initial': 'x4', '@1024': 'x6' },
        height: { '@initial': 'x14', '@1024': 'x18' }, // 56px -> 72px
        minWidth: 'x23',
        fontWeight: 'label',
      }),
    ],
  },

  variant: {
    primary: [
      {
        selectors: {
          '&:not([disabled]):hover': {
            cursor: 'pointer',
            backgroundColor: vars.color.accentHover,
          },
        },
      },
      atoms({
        color: 'onAccent',
        backgroundColor: 'accent',
      }),
    ],
    secondary: [
      {
        selectors: {
          '&:not([disabled]):hover': {
            cursor: 'pointer',
            backgroundColor: vars.color.neutralHover,
          },
        },
      },
      atoms({
        color: 'primary',
        backgroundColor: 'background2',
      }),
    ],
    positive: [
      {
        selectors: {
          '&:not([disabled]):hover': {
            cursor: 'pointer',
            backgroundColor: vars.color.positiveHover,
          },
        },
      },
      atoms({
        color: 'onPositive',
        backgroundColor: 'positive',
      }),
    ],
    destructive: [
      {
        selectors: {
          '&:not([disabled]):hover': {
            cursor: 'pointer',
            backgroundColor: vars.color.negativeHover,
          },
        },
      },
      atoms({
        color: 'onNegative',
        backgroundColor: 'negative',
      }),
    ],
    outline: [
      {
        selectors: {
          '&:not([disabled]):hover': {
            cursor: 'pointer',
            backgroundColor: vars.color.background2,
          },
        },
      },
      atoms({
        color: 'primary',
        borderColor: 'primary',
        borderWidth: 'normal',
        backgroundColor: 'transparent',
      }),
    ],
    circle: [
      {
        aspectRatio: '1 / 1',
        minWidth: 0,
        selectors: {
          '&[disabled]': {
            color: vars.color.secondary,
            backgroundColor: 'transparent',
          },
          '&:not([disabled]):hover': {
            cursor: 'pointer',
            borderColor: vars.color.accent,
          },
        },
      },
      atoms({
        p: 'x0',
        color: 'primary',
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        justifyContent: 'center',
        borderColor: 'borderOnImage',
        borderWidth: 'thin',
        borderRadius: 'round',
        backgroundColor: 'transparent',
      }),
    ],
    ghost: [
      {
        selectors: {
          '&:hover, &:not([disabled]):hover': {
            cursor: 'pointer',
            backgroundColor: vars.color.ghostHover,
          },
        },
      },
      atoms({
        color: 'onGhost',
        borderColor: 'ghost',
        backgroundColor: 'transparent',
      }),
    ],
    // @NOTE: Maybe we don't need this variant, instead it could be the default.
    unset: {
      backgroundColor: 'unset',
      gap: 'unset',
      borderColor: 'unset',
      borderWidth: 'unset',
      borderStyle: 'unset',
      minWidth: 'unset',
      padding: 'unset',
      height: 'unset',
      fontSize: 'unset',
      fontWeight: 'unset',
    },
  },
}

export const button = recipe({
  variants: buttonVariants,

  base: style([
    atoms({
      borderStyle: 'solid',
      borderWidth: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      position: 'relative',
      cursor: 'pointer',
      fontSize: 18,
    }),
    {
      lineHeight: 1,
      borderRadius: 16,
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
    },
  ]),

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})