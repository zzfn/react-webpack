import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import CommonLayout from '../layout/CommonLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<CommonLayout />}>
          <Route path=':id' element={<Detail />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
