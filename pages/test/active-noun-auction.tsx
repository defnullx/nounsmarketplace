import { ActiveAuction } from '@noun-auction'
import { TestPageWrapper } from 'components/utils/TestPageWrapper'

export default function NounsAuctionHistory() {
  return (
    <TestPageWrapper title="Active Noun Auction">
      <ActiveAuction auctionRenderer="CurrentBid" />
    </TestPageWrapper>
  )
}