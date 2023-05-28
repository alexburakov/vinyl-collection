import React from 'react';
import { useRef, useState } from 'react';

export function Disq() {
  const myRef = useRef(null);
  const [dataRes, setData] = useState([]);

  async function fetchArtistAlbums(artistName) {
    try {
      const query = artistName;
      const page = 1;
      const url = `https://api.discogs.com/database/search?q=${query}&key=xnnRUMJSSHTuRmcmCeTl&secret=BlBRFFiAAAEQbPYfmlCWDAcfkUqiyUSy&page=${page}&per_page=20`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const handleFetchData = (e) => {
    e.preventDefault();
    fetchArtistAlbums(myRef.current.value);
  };

  const myChose = (album) => {
    alert(album.year);
  };

  return (
    <>
      <form>
        <input ref={myRef}></input>
        <button onClick={handleFetchData}>Загрузить альбомы</button>
      </form>
      <ul>
        {dataRes && dataRes.length > 0 ? (
          dataRes.map((album) => (
            <li key={album.id}>
              <img style={{ width: '100px' }} src={`${album.thumb}`} alt="" />
              <a href={`https://www.discogs.com${album.uri}`}>{album.title}</a>
              {album.year}
              <button
                onClick={() => {
                  myChose(album);
                }}
              >
                Click
              </button>
            </li>
          ))
        ) : (
          <li>Нет данных для отображения</li>
        )}
      </ul>
    </>
  );
}
