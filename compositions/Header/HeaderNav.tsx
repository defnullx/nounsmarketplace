import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Box, Flex, Heading } from '@zoralabs/zord/elements'
import Link from 'next/link'
import { NOUNS_GLASSES } from 'styles/style-constants'
import { SITE_TITLE } from 'utils/env-vars'
import { nounsGlasses } from './Header.css'

export function HeaderNav() {
  return (
    <Flex align="center" justify="space-between" w="100%" px="x6">
      <Flex align="center" gap="x8">
        <Link passHref href="/">
          <Box as="img" className={nounsGlasses} src={NOUNS_GLASSES} alt={SITE_TITLE} />
        </Link>
      </Flex>
      <Box>
        <ConnectButton showBalance={false} />
      </Box>
    </Flex>
  )
}
