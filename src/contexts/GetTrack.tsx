import axios from "axios";

export async function getSongs() {
  try {
    const response = await fetch("src/assets/data/tracks.json");
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}

export async function getAlbums() {
  try {
    const response = await fetch("src/assets/data/albums.json");
    const JSONResponsee = await response.json();
    return JSONResponsee;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}
export async function getArtists(baseUrl) {
  try {
    const response = await axios.get(baseUrl);
    
    return response.data.data.allArtists;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}
export async function getPlaylists() {
  try {
    const response = await fetch("src/assets/data/playlists.json");
    const JSONResponsee = await response.json();
    return JSONResponsee;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}
