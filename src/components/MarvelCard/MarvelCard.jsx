import React from 'react';
import styles from './styles/MarvelCard.module.sass';
import {Link} from 'react-router-dom'

const MarvelCard = ({ character }) => {
	return (
		<div className={styles.marvelcard}>
			<Link to={`/${character.id}`} >
				<img className={styles.charactercard} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
			</Link>
			<div className={styles.characternamecard} >{character.name}</div>
		</div >
	)
};

export default MarvelCard;
