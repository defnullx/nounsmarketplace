import { useMemo, useState } from 'react'
import {
  Grid,
  Flex,
  Label,
  Icon,
  Stack,
  StackProps,
  Separator,
  Box,
} from '@zoralabs/zord'
import { CollectionsData } from 'hooks/zdk/useCollections'
import { CollectionThumbnail } from '@media/CollectionThumbnail'
import { rankingRow, rankingStats } from './CollectionRanking.css'
import { clickAnimation } from 'styles/styles.css'
import { Link } from 'components/Link'
import { roundTwoDecimals } from 'utils/math'
import { useAggregate } from 'hooks/zdk/useAggregate'
import { numberFormatter } from 'utils/numbers'

/* todo: add a skeleton or some kind of loading state */

interface RankingRowProps extends StackProps {
  collection: CollectionsData
}

export function RankingRow({ collection, ...props }: RankingRowProps) {
  const [tokenNo, updateTokenNo] = useState('1')
  const { aggregate } = useAggregate(collection.address)

  const collectionPriceData = useMemo(() => {
    if (aggregate)
      return {
        volume: `${roundTwoDecimals(
          aggregate?.aggregateStat?.salesVolume?.chainTokenPrice
        )} ETH`,
        floor:
          aggregate?.aggregateStat?.floorPrice &&
          aggregate?.aggregateStat?.floorPrice !== null
            ? `${numberFormatter(
                roundTwoDecimals(aggregate.aggregateStat.floorPrice)
              )} ETH`
            : 'NA',
      }
  }, [aggregate])

  return (
    <Stack {...props}>
      <Link href={`/collections/${collection.address}`} passHref>
        <Grid className={[rankingRow, clickAnimation]} gap="x4" w="100%">
          <Flex align="center" gap="x4">
            <CollectionThumbnail
              collectionAddress={collection.address}
              tokenId={tokenNo}
              radius="curved"
              size="sm"
            />
            <Label size="lg" as="span">
              {collection.name}
            </Label>
          </Flex>
          <Grid className={rankingStats}>
            <Label size="lg" as="span" align="right">
              {aggregate ? (
                <>{numberFormatter(collectionPriceData?.volume || 0)} Ξ</>
              ) : (
                '...'
              )}
            </Label>
            <Label size="lg" as="span" align="right">
              {numberFormatter(aggregate?.aggregateStat?.nftCount || 0)}
            </Label>
            <Label size="lg" as="span" align="right">
              {aggregate ? (
                <>
                  {collectionPriceData?.floor &&
                  collectionPriceData.floor.includes('NaN') ? (
                    <>{numberFormatter(collectionPriceData?.floor)} Ξ</>
                  ) : (
                    <>n/a</>
                  )}
                </>
              ) : (
                '...'
              )}
            </Label>
            <Label size="lg" as="span" align="right">
              {numberFormatter(aggregate?.aggregateStat?.ownerCount || '0')}
            </Label>
            <Flex justify="flex-end" pr="x2">
              <Icon id="ChevronRight" color="tertiary" />
            </Flex>
          </Grid>
        </Grid>
      </Link>
    </Stack>
  )
}
