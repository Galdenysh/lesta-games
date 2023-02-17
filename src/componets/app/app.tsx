import { Route, Routes } from 'react-router-dom';
import Header from '../header/header';
import News from '../../pages/news/news';
import Footer from '../footer/footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
