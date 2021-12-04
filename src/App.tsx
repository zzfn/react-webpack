import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Home from './routes/Home';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />} />
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

export { App };
