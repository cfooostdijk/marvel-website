import React from 'react';
import styles from './styles/MarvelList.module.sass';
import MarvelCard from '../../components/MarvelCard/MarvelCard';

const MarvelList = ({ characters }) => {
	return (
		<div className={styles.marvellist}>
			{characters.map((character) =>
						<MarvelCard key={character.id} character={character} />
				)}
		</div >
	)
};

export default MarvelList;
