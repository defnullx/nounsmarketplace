import { WalletCallStatus } from '../typings/transactions'
import { Box, Button, ButtonProps } from '@zoralabs/zord'
import React, { useMemo } from 'react'

/**
 * Render a button that will submit a transaction to the blockchain.
 * This button handles loading, disabling, and error states.
 */

interface TransactionSubmitButtonProps extends ButtonProps {
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  txInProgress: boolean
  txStatus: WalletCallStatus
}

export function TransactionSubmitButton({
  children,
  disabled,
  loading,
  txInProgress,
  txStatus,
  ...props
}: TransactionSubmitButtonProps) {
  const isLoading = useMemo(
    () => txStatus === WalletCallStatus.CONFIRMING || txInProgress || loading,
    [loading, txInProgress, txStatus]
  )

  const isDisabled = isLoading || disabled

  return (
    <Button loading={isLoading} disabled={isDisabled} w="100%" mt="x4" mb="x1" {...props}>
      {txStatus === WalletCallStatus.ERRORED ? (
        'Try Again'
      ) : txStatus === WalletCallStatus.PROMPTED ? (
        <>
          <Box as="span" display={{ '@initial': 'none', '@480': 'block' }}>
            Confirm the transaction in your wallet
          </Box>
          <Box as="span" display={{ '@initial': 'none', '@480': 'block' }}>
            Awaiting confirmation
          </Box>
        </>
      ) : (
        children
      )}
    </Button>
  )
}
