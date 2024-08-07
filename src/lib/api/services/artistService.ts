import { httpGet } from '@/lib/api/httpWrapper'

export const getArtistByArtistName = async (artistName: string) => {
  return await httpGet(`/search.php?s=${artistName}`)
}