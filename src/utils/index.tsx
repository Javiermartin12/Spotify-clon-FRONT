export interface Artist {
  id: number;
  name: string;
  genres: string;
  popularity: number;
  photoUrl: string;
  songs: number[];
  album: string;
}

export interface Playlist {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  publicAccessible: boolean;
  primaryColor: string;
  songs: number[];
}

export interface Song {
  id: number;
  name: string;
  artist: string;
  url: string;
  thumbnail: string;
  genre: string;
  liked: boolean;
}

export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  city: string;
  gender: string;
  profilePicture: string;
  country: string;
  dateOfBirth: number;
  likedSongs: number[];
}

export interface Album {
  id: number;
  name: string;
  imageUrl: string;
  artist: boolean;
  songs: number[];
}

export interface Genre {
  id: string;
  name: string;
}

export interface Tracks {
  id: string;
  name: string;
}

export interface ArtistFromSearch {
  id: number;
  first_name: string;
  last_name: string;
  profilePicture: string;
}

export interface SongFromSearch {
  id: number;
  name: string;
  thumbnail: string;
  artist: string;
}

export interface AlbumFromSearch {
  id: number;
  name: string;
  imageUrl: string;
  artist: string;
}

export interface SearchResult {
  artists: ArtistFromSearch[];
  songs: SongFromSearch[];
  albums: AlbumFromSearch[];
}
