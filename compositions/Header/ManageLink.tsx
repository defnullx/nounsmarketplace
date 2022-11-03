import { Box, Label } from '@zoralabs/zord'
import { Link } from 'components/Link'
import { useAccount } from 'wagmi'
import { collectionTrigger } from './Header.css'
import { clickAnimation, noTextWrap } from 'styles/styles.css'

export function ManageLink() {
  const { address } = useAccount()

  if (address === null) {
    return null
  }

  return (
    <Box>
      <Link href={`/manage/${address}`}>
        <Label
          className={[collectionTrigger, noTextWrap, clickAnimation]}
          display="flex"
          align="center"
          h="100%"
          size="lg"
          backgroundColor="tertiary"
          py={{
            '@initial': 'x1',
            '@1024': 'x2',
          }}
        >
          Manage
        </Label>
      </Link>
    </Box>
  )
}
