import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Spinner from '../../assets/Spinners/Spinner';
import MarvelList from '../../lists/MarvelList/MarvelList';
import { allCharAxios } from '../../services/Api';

const CharactersContainer = () => {
	const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

	const getCharacters = async (id) => {
    try {
      const result = await allCharAxios.get();
      const characters = result.data.data.results;
      setCharacters(characters);
    } catch { console.log("error"); }
  };

  useEffect( ()=>{ getCharacters() }, [id] )

	return (
    <> { loading ? <Spinner /> : <MarvelList characters={characters} /> } </>
  )

};

export default CharactersContainer;
