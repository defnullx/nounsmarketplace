import { Flex, Label } from '@zoralabs/zord'

// @noun-auction
import { SharedDataRendererProps } from '@noun-auction/typings'
import { EthAmount } from './EthAmount'
import { useNounishAuctionProvider } from '@noun-auction/providers'
import { sidebarHighBid } from '@noun-auction/styles/NounishStyles.css'

// @shared
import { lightFont } from 'styles/styles.css'

export function AuctionHighBid({
  label = 'Current bid',
  layoutDirection = 'row',
  ethValue,
  showLabels,
  usdcValue,
  useUsdc = false,
  ...props
}: {
  ethValue: string
  usdcValue: string
  useUsdc?: boolean
} & SharedDataRendererProps) {
  const { layout } = useNounishAuctionProvider()

  return (
    <Flex
      direction={layoutDirection}
      gap={layoutDirection === 'row' ? 'x2' : 'x0'}
      {...props}
    >
      {showLabels && (
        <Label
          size={layout === 'sideBarBid' ? 'lg' : 'md'}
          className={lightFont}
          style={{ lineHeight: '1.15' }}
          align={layout === 'sideBarBid' ? 'left' : 'right'}
          color={layout === 'sideBarBid' ? 'tertiary' : 'secondary'}
          mb={layout === 'sideBarBid' ? 'x2' : 'x0'}
        >
          {label}
        </Label>
      )}
      <EthAmount
        style={{ lineHeight: '1.15' }}
        size="md"
        align={layout === 'sideBarBid' ? 'left' : 'right'}
        className={layout === 'sideBarBid' && sidebarHighBid}
        ethAmount={ethValue}
      />
    </Flex>
  )
}
