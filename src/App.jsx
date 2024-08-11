import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

const Catalog = React.lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = React.lazy(() => import('./pages/Favorites/Favorites'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
