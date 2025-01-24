import { Route, Routes, Link } from 'react-router-dom';
import { Common, Home } from '@monorepo-test/common';

export function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> | <Link to="/common">Common</Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/common" element={<Common />}></Route>
      </Routes>
    </>
  );
}

export default App;
