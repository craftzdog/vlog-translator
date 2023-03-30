export function extractVideoIdFromUrl(url: string) {
  return new URL(url).searchParams.get('v')
}
