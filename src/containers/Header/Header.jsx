import React from 'react';
import BrandBar from '../../assets/BrandBar/BrandBar';
import NavBar from '../../components/NavBar/NavBar'

const Header = ({ categories }) => {
	return(
		<>
			<BrandBar />
			<NavBar categories={categories} />
		</>
	)
};

export default Header;
