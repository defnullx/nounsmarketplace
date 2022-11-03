import { useRef, useState } from 'react'
import { Label, Flex, Box } from '@zoralabs/zord'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Link } from 'components'
import { clickAnimation } from 'styles/styles.css'

export function BetaTag() {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const childRef = useRef<HTMLDivElement>(null)

  useScrollPosition(
    ({ currPos }) => {
      setHideOnScroll(currPos.y > 400)
    },
    [hideOnScroll],
    // @ts-ignore-next-line
    childRef,
    false,
    500,
    false
  )

  return (
    <Link href="/test">
      <Flex
        ref={childRef}
        backgroundColor="tertiary"
        py="x2"
        pr="x5"
        pl="x2"
        borderRadius="curved"
        align="center"
        gap="x3"
        position={{
          '@initial': 'fixed',
          '@1024': 'relative',
        }}
        bottom={{
          '@initial': 'x4',
          '@1024': 'auto',
        }}
        right={{
          '@initial': 'x4',
          '@1024': 'auto',
        }}
        className={clickAnimation}
        style={{
          opacity: `${hideOnScroll ? 1 : 1}`,
          height: 42,
        }}
      >
        <Box h="x7" w="x7">
          <Box
            w="100%"
            h="100%"
            inset="x0"
            as="img"
            borderRadius="curved"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTFkN2Q1IiAvPjxyZWN0IHdpZHRoPSIxNDAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIyMTAiIGZpbGw9IiNiOTE4NWMiIC8+PHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjIyMCIgZmlsbD0iI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMjMwIiBmaWxsPSIjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIxNDAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIyNDAiIGZpbGw9IiNiOTE4NWMiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMjUwIiBmaWxsPSIjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIxMTAiIGhlaWdodD0iMTAiIHg9IjEyMCIgeT0iMjUwIiBmaWxsPSIjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjI2MCIgZmlsbD0iI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMTEwIiBoZWlnaHQ9IjEwIiB4PSIxMjAiIHk9IjI2MCIgZmlsbD0iI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIyNzAiIGZpbGw9IiNiOTE4NWMiIC8+PHJlY3Qgd2lkdGg9IjExMCIgaGVpZ2h0PSIxMCIgeD0iMTIwIiB5PSIyNzAiIGZpbGw9IiNiOTE4NWMiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMjgwIiBmaWxsPSIjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIxMTAiIGhlaWdodD0iMTAiIHg9IjEyMCIgeT0iMjgwIiBmaWxsPSIjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjI5MCIgZmlsbD0iI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMTEwIiBoZWlnaHQ9IjEwIiB4PSIxMjAiIHk9IjI5MCIgZmlsbD0iI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIzMDAiIGZpbGw9IiNiOTE4NWMiIC8+PHJlY3Qgd2lkdGg9IjExMCIgaGVpZ2h0PSIxMCIgeD0iMTIwIiB5PSIzMDAiIGZpbGw9IiNiOTE4NWMiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMzEwIiBmaWxsPSIjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIxMTAiIGhlaWdodD0iMTAiIHg9IjEyMCIgeT0iMzEwIiBmaWxsPSIjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTQwIiB5PSIyMzAiIGZpbGw9IiNmZmZkZjIiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxMzAiIHk9IjI0MCIgZmlsbD0iI2ZmZmRmMiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iMjQwIiBmaWxsPSIjZmZmZGYyIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIyNTAiIGZpbGw9IiNmZmZkZjIiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSIxNDAiIHk9IjI2MCIgZmlsbD0iI2ZmZmRmMiIgLz48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iMjcwIiBmaWxsPSIjZmZmZGYyIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTkwIiB5PSIyODAiIGZpbGw9IiNmZmZkZjIiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNjAiIHk9IjI5MCIgZmlsbD0iI2ZmZmRmMiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE5MCIgeT0iMjkwIiBmaWxsPSIjZmZmZGYyIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIzMDAiIGZpbGw9IiNmZmZkZjIiIC8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjQwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSI0MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSI1MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iNTAiIGZpbGw9IiNlZWRjMDAiIC8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiB4PSIxNjAiIHk9IjUwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjYwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTQwIiB5PSI2MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iNjAiIGZpbGw9IiNlZWRjMDAiIC8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjYwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjcwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTQwIiB5PSI3MCIgZmlsbD0iI2VlZGMwMCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iNzAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjcwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSI3MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHg9IjcwIiB5PSI4MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iODAiIGZpbGw9IiNlZWRjMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNjAiIHk9IjgwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSI4MCIgZmlsbD0iI2VlZGMwMCIgLz48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iODAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjkwIiBoZWlnaHQ9IjEwIiB4PSI2MCIgeT0iOTAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjkwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTYwIiB5PSI5MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iOTAiIGZpbGw9IiNlZWRjMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyMzAiIHk9IjkwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjEwMCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTAwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgeD0iMTYwIiB5PSIxMDAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjkwIiBoZWlnaHQ9IjEwIiB4PSI2MCIgeT0iMTEwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIxMTAiIGZpbGw9IiNlZWRjMDAiIC8+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiB4PSIxNjAiIHk9IjExMCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iMTAiIHg9IjYwIiB5PSIxMjAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjEyMCIgZmlsbD0iI2VlZGMwMCIgLz48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iMTIwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjEzMCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTMwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgeD0iMTYwIiB5PSIxMzAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjkwIiBoZWlnaHQ9IjEwIiB4PSI2MCIgeT0iMTQwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIxNDAiIGZpbGw9IiNlZWRjMDAiIC8+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiB4PSIxNjAiIHk9IjE0MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iMTAiIHg9IjYwIiB5PSIxNTAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjE1MCIgZmlsbD0iI2VlZGMwMCIgLz48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iMTUwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjE2MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTYwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgeD0iMTYwIiB5PSIxNjAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSI2MCIgeT0iMTcwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIxNzAiIGZpbGw9IiNlZWRjMDAiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMTgwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjE4MCIgZmlsbD0iI2VlZGMwMCIgLz48cmVjdCB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjE4MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjIzMCIgeT0iMTgwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIxODAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMTkwIiBmaWxsPSIjZmZmMDA2IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjE5MCIgZmlsbD0iI2VlZGMwMCIgLz48cmVjdCB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjE5MCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjIzMCIgeT0iMTkwIiBmaWxsPSIjZWVkYzAwIiAvPjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIxOTAiIGZpbGw9IiNmZmYwMDYiIC8+PHJlY3Qgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxMCIgeD0iNTAiIHk9IjIwMCIgZmlsbD0iI2ZmZjAwNiIgLz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTEwIiBmaWxsPSIjZDE5YTU0IiAvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIxMTAiIGZpbGw9IiNkMTlhNTQiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjEyMCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTIwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIxMjAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjEyMCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTIwIiBmaWxsPSIjZDE5YTU0IiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIxMjAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjEyMCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjIyMCIgeT0iMTIwIiBmaWxsPSIjZDE5YTU0IiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjEzMCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTMwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIxMzAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjEzMCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iMTMwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMjAwIiB5PSIxMzAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyMjAiIHk9IjEzMCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjcwIiB5PSIxNDAiIGZpbGw9IiNkMTlhNTQiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjE0MCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTQwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIxNDAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjE0MCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTQwIiBmaWxsPSIjZDE5YTU0IiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIxNDAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjE0MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjIyMCIgeT0iMTQwIiBmaWxsPSIjZDE5YTU0IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjE1MCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTUwIiBmaWxsPSIjZDE5YTU0IiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIxNTAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxMzAiIHk9IjE1MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTUwIiBmaWxsPSIjZDE5YTU0IiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIxNTAiIGZpbGw9IiNkMTlhNTQiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE1MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMTUwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjIwIiB5PSIxNTAiIGZpbGw9IiNkMTlhNTQiIC8+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjE2MCIgZmlsbD0iI2QxOWE1NCIgLz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTYwIiBmaWxsPSIjZDE5YTU0IiAvPjwvc3ZnPg=="
          />
        </Box>
        <Label size="sm">BETA</Label>
      </Flex>
    </Link>
  )
}
