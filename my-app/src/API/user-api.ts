import axios from 'axios';

// Login

const BASE_URL = 'http://localhost:3001';

export const loginUser = async (
  user: Omit<DBUser, 'avatar' | 'displayName'>
) => {
  const newUser = await axios.post(`${BASE_URL}/login`, user);
  console.log(newUser.data);
  return newUser.data;
};

export const registerUser = async (user: DBUser) => {
  const newUser = await axios.post(`${BASE_URL}/register`, user);
  return newUser.data;
};

export const addTVShow = async (_id: number, TMDB_show_Id: number) => {
  const newUserTVShow = await axios.post(
    `${BASE_URL}/home/add/${TMDB_show_Id}`,
    {
      _id,
    }
  );

  if (newUserTVShow.status === 400) return undefined;

  return newUserTVShow.data as UserTVShow;
};

export const getShowDetail = async (id: string) => {
  const newUserTVShow = await axios.get(`${BASE_URL}/show/${id}`);

  return newUserTVShow.data as TVShow;
};

export const updateEpisode = async (
  _id: string,
  newEpisodeCode: string,
  TMDB_show_Id: string
) => {
  const updated = await axios.patch(`${BASE_URL}/show/${TMDB_show_Id}`, {
    _id,
    newEpisodeCode,
  });

  console.log('/////////////////////////');
  console.log(updated, 'from', TMDB_show_Id);

  if (updated.status === 500) return undefined;

  return updated.data as UserTVShow;
};