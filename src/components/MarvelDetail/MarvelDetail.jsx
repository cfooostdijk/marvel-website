import React from 'react';
import styles from './styles/MarvelDetail.module.sass';

const MarvelDetail = ({ character }) => {
	console.log(character)
	return (
		<div className={styles.marvelcard}>
			{/* <img className={styles.charactercard} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" /> */}
			<div className={styles.characternamecard} >{character.name}</div>
			<div className={styles.characternamecard} >{character.description}</div>
			{/* <div className={styles.characternamecard} >{character['comics']}</div> */}
		</div >
	)
};

export default MarvelDetail;
