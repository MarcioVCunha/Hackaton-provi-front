import { Routes, Route } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<p>Teste</p>} />
    </Routes>
  );
};

export default Pages;