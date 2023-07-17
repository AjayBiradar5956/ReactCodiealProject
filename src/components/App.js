import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login, Settings, Signup, UserProfile } from '../pages';
import { Loader, Navbar } from './';
import { useAuth } from '../hooks';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();

  if (!auth.user) {
    return <Navigate {...rest} to="/login" />;
  }
  return children;
}

const Page404 = () => {
  return <h1>Page 404 error</h1>
}

function App() {

  const auth = useAuth();

  if (auth.loading) {
    return <Loader />
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route path="/user/:userId"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
