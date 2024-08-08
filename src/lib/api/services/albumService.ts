import { httpGet } from '@/lib/api/httpWrapper'


export const getAllAlbums = async () => {
  return await httpGet('/users')
}

export const getAlbumsByArtistName = async (albumName: string) => {
  return await httpGet(`/searchalbum.php?s=${albumName}`)
}

export const getAlbumByAlbumName = async (albumName: string) => {
  return await httpGet(`/searchalbum.php?a=${albumName}`)
}
