import assert from 'assert'

export const GALACTUS_BASE_URL = process.env.NEXT_PUBLIC_GALACTUS_BASE_URL
assert(GALACTUS_BASE_URL, 'NEXT_PUBLIC_GALACTUS_BASE_URL is a required env variable')

export const NETWORK_CHAIN_ID = '1'

export const DEFAULT_CONTRACT = process.env.NEXT_PUBLIC_DEFAULT_CONTRACT as string
assert(DEFAULT_CONTRACT, 'At least one token contract is required as an env variable')

/* 
  SEO
**/
export const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE || ''
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || ''
export const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER_HANDLE || ''
export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || ''
export const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE || ''
export const FAVICON = `${WEBSITE_URL}/favicon.png`
