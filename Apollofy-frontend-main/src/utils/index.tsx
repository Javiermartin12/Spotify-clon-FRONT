



export interface Artist {
  id: number;
  name: string;
  genres: string;
  popularity: number;
  photoUrl: string;
  songs: number[];
  album: string;
  artist: string;
  genre: string;
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

export const convertTrackToSong = (track: Track): Song => ({
  id: track.id,
  name: track.name,
  artist: "Unknown Artist",  
  url: track.url,
  thumbnail: track.thumbnail,
  genre: "Unknown Genre",   
  liked: false  
});

export interface User {
  likedSongs: number[];
  id: number;
  rolId: number | null;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  password: string;
  gender: string;
  country: string;
  img: string;
  public_id_img?: string | null;
  dateOfBirth: string;
  genreId: number;
  popularity: number;
  
  // Roles: Roles;
  // Followers: Followers[];
  // Followed: Followers[];
  // LikedAlbums: LikedAlbums[];
  // FollowPlaylist: FollowPlaylist[];
  // Playlist: Playlist[];
  // AlbumArtist: AlbumArtist[];
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

export interface Track {
  id: number;
  name: string;
  url: string;
  genreId: number;
  albumId: number;
  thumbnail: string;
}
// const convertTrackToSong = (track: Track): Song => ({
//   id: track.id,
//   name: track.name,
//   artist: "Unknown Artist", 
//   url: track.url,
//   thumbnail: track.thumbnail,
//   genre: "Unknown Genre", 
//   liked:false
// })



export interface ArtistFromSearch {
  id: number;
  first_name: string;
  last_name: string;
  img: string;
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
