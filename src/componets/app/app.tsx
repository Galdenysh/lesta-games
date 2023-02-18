import { Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import News from '../../pages/news/news';
import Footer from '../footer/footer';
import PatchNote from '../../pages/patch-note/patch-note';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/patch-note" element={<PatchNote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
