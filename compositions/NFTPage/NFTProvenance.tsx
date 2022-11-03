import { usePrimaryAuctionDataTable } from '@market/modules/V3Ask/hooks'
import { DataTable } from '@shared/components'
import { NFTObject } from '@zoralabs/nft-hooks'
import { BoxProps } from '@zoralabs/zord'

interface NFTProvenanceProps extends BoxProps {
  nft: NFTObject
}

export function NFTProvenance({ nft }: NFTProvenanceProps) {
  const { formattedAuctionDataTable } = usePrimaryAuctionDataTable({
    nft: nft,
  })

  return <DataTable items={formattedAuctionDataTable} />
}
