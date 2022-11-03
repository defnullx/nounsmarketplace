import useSWR from 'swr'
import { nounAuction } from '@noun-auction/data'
import { useMemo } from 'react'

async function fetchNounAuctionData(tokenId: string) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GALACTUS_BASE_URL as string, {
      method: 'POST',
      /* @ts-ignore */
      headers: {
        'Content-Type': 'application/json',
        // 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: nounAuction(tokenId),
      }),
    })
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`)
    }
    const res = response.json()
    return res
  } catch (err) {
    console.error(err)
  }
}

export function useNounAuction(tokenId: string) {
  const { data: response, error } = useSWR(
    [`noun-current-auction-${tokenId}`, tokenId],
    (_, tokenId) => fetchNounAuctionData(tokenId)
  )

  const isActiveAuction = useMemo(() => {
    return response?.data.token?.markets[0]?.status === 'ACTIVE'
  }, [response?.data])

  return {
    tokenId,
    data: response?.data ? response?.data : undefined,
    error,
    isActiveAuction,
  }
}
