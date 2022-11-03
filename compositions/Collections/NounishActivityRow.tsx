import { NounishAuction } from '@noun-auction'
import { useNFTProvider } from '@shared'
import { returnDao } from 'constants/collection-addresses'
export function NounishActivityRow() {
  const {
    hooksData: { data },
    contractAddress,
    tokenId,
  } = useNFTProvider()

  if (!data || !contractAddress || !tokenId) return null

  const dao = returnDao(contractAddress)

  if (!dao) return null

  return (
    <NounishAuction
      key={`${contractAddress}`}
      daoConfig={dao}
      hideCollectionTitle={false}
      borderRadius="curved"
      borderColor="tertiary"
      tokenId={tokenId}
      p="x4"
    />
  )
}
