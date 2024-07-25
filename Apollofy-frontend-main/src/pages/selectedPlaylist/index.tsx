import  { useEffect, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { NavBar } from "../../components/navbar";
import {
  addSongPlaylist,
  followUnfollow,
  getPlaylistById,
  getSongsByPlaylistId,
  isUserFollowingPlaylistService,
} from "../../services/services.playlist";
import { useNavigate, useParams } from "react-router";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import { getTracks } from "../../services/services.tracks";
import IndividualSong from "../../components/individualSong";
import { SmallShowPlaySong } from "../../components/SmallShowPlaySong";
import { usePlayer } from "../../contexts/AudioPlayerContext";

export interface Track {
  id: number;
  name: string;
  url: string;
  genreId: number;
  albumId: number;
  thumbnail: string;
}

interface Playlist {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  primaryColor: string;
}
3;

const SelectedPlaylist = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const { playlistid } = useParams<{ playlistid?: string }>();
  const number = parseInt(playlistid || "");
  const [currePlaylist, setCurrePlaylist] = useState<Playlist | undefined>();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [selectedSongId, setSelectedSongId] = useState<number | null>(null);
  const { setSongs } = usePlayer();

  useEffect(() => {
    const fetchData = async () => {
      const playlistData = await getSongsByPlaylistId(number);
      if (playlistData) {
        setTracks(playlistData);
      }
      const isUserFollowing = await isUserFollowingPlaylistService(3, number);
      setIsFollowing(isUserFollowing);
      console.log("isFollowing:" + isUserFollowing);
    };

    fetchData();
  }, [number]);

  useEffect(() => {
    const fetchData = async () => {
      const currePlaylist = await getPlaylistById(number);
      if (currePlaylist) {
        setCurrePlaylist(currePlaylist);
      }
    };

    fetchData();
  }, [number]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleFollowUnfollow = async () => {
    try {
      const response = await followUnfollow(3, parseInt(playlistid!));
      if (response) {
        setIsFollowing(!isFollowing);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addSongPlaylistFront = async ({
    id,
    trackId,
  }: {
    id: number;
    trackId: number;
  }) => {
    try {
      const response = await addSongPlaylist({ id, trackId });
      if (response) {
        setIsFollowing(!isFollowing);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [tracksAll, settracksAll] = useState<Track[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tracksData = await getTracks();
      if (tracksData) {
        settracksAll(tracksData);
      }
    };

    fetchData();
  }, []);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <div className="bg-black h-screen w-screen relative">
      <button onClick={goBack}>
        <IoChevronBackSharp className="text-2xl text-white ml-3 mt-3 hover:text-accent" />
      </button>

      <div className="pt-10 pl-20">
        <img
          src={currePlaylist?.imageUrl}
          alt=""
          className="w-52  top-20 left-20 rounded-xl"
        />
        <div>
          <button
            className="text-white"
            style={{ backgroundColor: isFollowing ? "green" : "red" }}
            onClick={handleFollowUnfollow}
          >
            {isFollowing ? "Following" : "Not Following"}
          </button>
        </div>
      </div>
      <div>
        <button onClick={togglePopup}>
          <p className="text-white">Add song</p>
        </button>
        {isPopupVisible && (
          <VerticalScrollLayout height="20rem">
            <div>
              {tracksAll.length > 0 &&
                tracksAll.map((track) => (
                  <div key={track.id} className="bg-white">
                    <p
                      onClick={() =>
                        addSongPlaylistFront({
                          id: number,
                          trackId: track.id,
                        })
                      }
                    >
                      {track.name}
                    </p>
                  </div>
                ))}
            </div>
          </VerticalScrollLayout>
        )}
      </div>
      <div className="pt-10 pl-5 ">
        <p className="text-white text-3xl">{currePlaylist?.name}</p>
      </div>
      <div className="  pl-5 pb-10">
        <p className="text-white text-xl">{currePlaylist?.description}</p>
      </div>
      <VerticalScrollLayout height="25rem">
        <div className=" flex flex-col">
          {tracks.length > 0 &&
            tracks.map((track) => (
              <div key={track.id} className="w-40 flex flex-col">
                <IndividualSong
                  key={track.id}
                  songId={track.id}
                  songName={track.name}
                  groupName={" "}
                  isSelected={false}
                  onClick={() => {
                    setSelectedSongId(track.id);
                    setSongs(tracks);
                  }}
                />
              </div>
            ))}
        </div>
      </VerticalScrollLayout>

      <div className="absolute bottom-14 w-screen">
        <SmallShowPlaySong selectedSongId={selectedSongId} />
      </div>
      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
};

export default SelectedPlaylist;
