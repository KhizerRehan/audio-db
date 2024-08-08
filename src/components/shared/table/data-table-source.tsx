const albumColumns = [
  {uid: "idAlbum", name: "Album ID"},
  {uid: "idArtist", name: "Artist ID"},
  {uid: "idLabel", name: "Label ID"},
  {uid: "strAlbum", name: "Album Name"},
  {uid: "strArtist", name: "Artist Name"},
  {uid: "intYearReleased", name: "Year Released"},
  {uid: "strStyle", name: "Style"},
  {uid: "strGenre", name: "Genre"},
  {uid: "strLabel", name: "Label"}
];

export interface Album {
  idAlbum: string;
  idArtist: string;
  idLabel: string;
  strAlbum: string;
  strArtist: string;
  intYearReleased: string;
  strStyle: string;
  strGenre: string;
  strLabel: string;
}


// Artist
const artistColumns = [
  {uid: "idArtist", name: "Artist ID"},
  {uid: "strArtist", name: "Artist Name"},
  {uid: "strLabel", name: "Label"},
  {uid: "idLabel", name: "Label ID"},
  {uid: "intFormedYear", name: "Year Formed"},
  {uid: "intBornYear", name: "Born Year"},
  {uid: "intDiedYear", name: "Died Year"},
  {uid: "strDisbanded", name: "Disbanded"},
  {uid: "strStyle", name: "Style"},
  {uid: "strGenre", name: "Genre"},
  {uid: "strMood", name: "Mood"}
];


export interface Artist {
  idArtist: string;
  strArtist: string;
  strLabel: string;
  idLabel: string;
  intFormedYear: string;
  intBornYear: string;
  intDiedYear: string;
  strDisbanded: string;
  strStyle: string;
  strGenre: string;
  strMood: string;
}


export { albumColumns, artistColumns }
