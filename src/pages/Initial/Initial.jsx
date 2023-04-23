import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../containers/Header';
import '../../index.css'

import CharacterDetailContainer from '../../containers/CharacterDetailContainer/CharacterDetailContainer';
import CharactersContainer from '../../containers/CharactersContainer/CharactersContainer';
import Layout from '../../containers/Layout';
import ErrorPage from '../ErrorPage';
import Landing from '../Landing/Landing';

function Initial() {

  const Categories = [
    { name: 'Characters', id: 0, route: '/characters' },
    { name: 'Comics', id: 1, route: '/comics' }];

  return (
    <BrowserRouter>
      <Layout>
        <Header categories={Categories} />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/characters' element={ <CharactersContainer /> } />
          <Route exact path='/:id' element={ <CharacterDetailContainer /> } />
          {/* <Route exact path='/comics' element={ <ComicsContainer /> } />
          <Route exact path='/comics/:id' element={ <ComicDetailContainer /> } /> */}
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default Initial;
