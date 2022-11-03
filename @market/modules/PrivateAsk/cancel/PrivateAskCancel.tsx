import React, { useEffect } from 'react'
import { Flex, Stack } from '@zoralabs/zord'
import { Button } from 'components/Button'

import { CommonPrivateAskComponentProps } from '../PrivateAskFlow'
import { TransactionSubmitButton } from '@market/components/TransactionSubmitButton'
import { usePrivateAskTransaction } from '../hooks/usePrivateAskTransaction'
import { DataTable, formatContractError, PrintError } from '@shared'
import { useModal } from '@modal/useModal'
import { useListingDataTable } from '@market/hooks'
import { PrivateAskModalHeading } from '../PrivateAskModalHeading'
import * as styles from '../PrivateAskFlow.css'

interface PrivateAskCancelProps extends CommonPrivateAskComponentProps {}

export function PrivateAskCancel({ onNext, ...props }: PrivateAskCancelProps) {
  const { isSubmitting, cancelAsk, txStatus, txInProgress, txError, finalizedTx } =
    usePrivateAskTransaction({ nft: props.nft })
  useEffect(() => finalizedTx!! && onNext && onNext(), [finalizedTx, onNext])
  const { requestClose } = useModal()
  const { formattedListingDataTable } = useListingDataTable({
    nft: props.nft,
  })

  return (
    <Stack gap="x3" {...props}>
      <Stack gap="x4">
        <PrivateAskModalHeading nftObj={props.nft} action="Delist" />

        <DataTable
          rowSize="lg"
          rowVariant="withBorder"
          items={formattedListingDataTable}
        />

        {txError && <PrintError errorMessage={formatContractError(txError)} />}
      </Stack>

      <Flex gap="x2" justify="space-between" pt="x3" className={styles.stretch}>
        <Button flex={1} variant="secondary" size="lg" onClick={requestClose}>
          Cancel
        </Button>
        <TransactionSubmitButton
          flex={1}
          type="submit"
          size="lg"
          txStatus={txStatus}
          txInProgress={txInProgress}
          onClick={cancelAsk}
          variant="destructive"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Delist
        </TransactionSubmitButton>
      </Flex>
    </Stack>
  )
}
