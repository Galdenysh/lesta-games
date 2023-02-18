import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import News from '../../pages/news/news';
import Footer from '../footer/footer';
import PatchNote from '../../pages/patch-note/patch-note';
import { links } from '../../utils/constants';
import Analyze from '../../pages/analize/analize';
import Game from '../../pages/game/game';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={links.main} element={<Navigate to={links.news} replace />} />
        <Route path={links.news} element={<News />} />
        <Route path={links.patchNote} element={<PatchNote />} />
        <Route path={links.analyze} element={<Analyze />} />
        <Route path={links.game} element={<Game />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
