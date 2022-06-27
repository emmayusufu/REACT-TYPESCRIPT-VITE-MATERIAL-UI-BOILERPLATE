import Home from '@app/pages/Home';
import PageNotFound from '@app/pages/PageNotFound';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Layout from '@app/layout/Layout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
