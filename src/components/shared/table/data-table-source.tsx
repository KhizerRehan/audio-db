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

// Static data for the table
const albums = [
  {
    idAlbum: "2112973",
    idArtist: "111492",
    idLabel: "43473",
    strAlbum: "Homework",
    strArtist: "Daft Punk",
    intYearReleased: "1997",
    strStyle: "Electronic",
    strGenre: "House",
    strLabel: "Columbia"
  },
  {
    idAlbum: "2112974",
    idArtist: "111493",
    idLabel: "43474",
    strAlbum: "Discovery",
    strArtist: "Daft Punk",
    intYearReleased: "2001",
    strStyle: "Electronic",
    strGenre: "House",
    strLabel: "Columbia"
  },
  {
    idAlbum: "2112975",
    idArtist: "111494",
    idLabel: "43475",
    strAlbum: "Random Access Memories",
    strArtist: "Daft Punk",
    intYearReleased: "2013",
    strStyle: "Electronic",
    strGenre: "House",
    strLabel: "Columbia"
  }
];


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
