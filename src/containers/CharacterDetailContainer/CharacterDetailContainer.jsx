import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/Spinners/Spinner";
import MarvelDetail from "../../components/MarvelDetail/MarvelDetail";
import { allCharAxios } from "../../services/Api";

const CharacterDetailContainer = () => {
	const [character, setCharacter] = useState([]);
	// const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

	
	const getCharacter = async () => {
		try {
			const result = await allCharAxios.get();
			const onechar = result.data.data.results;
			const char = onechar.find(c => c.id === parseInt(id));
			setCharacter(char);
		} catch { console.log("error"); }
		finally { setLoading(false); }
	};
	
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	
	useEffect(()=>{
		getCharacter()
	},[id])

	return (
		<div>
			{ <> {loading ? <Spinner /> : <MarvelDetail character={character} /> } </> }
		</div>
	)
}

export default CharacterDetailContainer;
