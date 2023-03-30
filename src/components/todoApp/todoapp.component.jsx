import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './todoapp.styles.scss';

import Home from 'routes/Home';
import About from 'routes/About';
import Login from 'routes/Login';
import Profile from 'routes/Profile';
import NotMatch from 'routes/NotMatch';
import Layout from 'components/layout.conponent';
import SinglePage from 'routes/singlePage';
import ProtectedRoute from 'components/protectedRoute.component';

const TodoApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={(
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
        )}
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
      <Route path="/" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default TodoApp;
