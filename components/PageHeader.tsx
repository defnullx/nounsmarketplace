import { Stack, Text, Paragraph, FlexProps } from '@zoralabs/zord'
import {
  lightFont,
  textCenter,
  maxWidthSm,
  pageHeadline,
  pageHeaderWrapper,
} from 'styles/styles.css'
import { Maybe } from '@zoralabs/nft-hooks/dist/backends/zora-indexer-v1/zora-indexer-types'

export interface PageHeaderProps extends FlexProps {
  headline: Maybe<string> | undefined
  copy?: string
}

export function PageHeader({ headline, copy, ...props }: PageHeaderProps) {
  return (
    <Stack
      as="article"
      align="center"
      className={[maxWidthSm, pageHeaderWrapper({ variant: 'topBorder' })]}
      gap="x4"
      px="x4"
      {...props}
    >
      {headline ? (
        <Text
          className={[textCenter, pageHeadline]}
          as="h1"
          style={{ lineHeight: 1.125 }}
        >
          {headline}
        </Text>
      ) : null}
      {copy ? (
        <Paragraph as="p" size="lg" className={[lightFont, textCenter]} color="primary">
          {copy}
        </Paragraph>
      ) : null}
    </Stack>
  )
}
