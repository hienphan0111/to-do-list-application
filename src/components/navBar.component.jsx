import { useState, useRef, Fragment } from 'react';
import { useOnClickOutside } from 'useOnClickOutSide';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, navbarOpen, () => setNavbarOpen(false));

  return (
    <>
      <nav className="narbar">
        <button
          type="button"
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? (
            <MdClose style={{ width: '32px', height: '32px' }} />
          ) : (
            <FiMenu
              style={{
                width: '32px',
                height: '32px',
              }}
            />
          )}
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          {links.map((link) => (
            <Fragment key={link.text}>
              { (link.path === 'login') ? (
                !user && (
                <li>
                  <NavLink
                    to={link.path}
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
                )
              ) : (
                <li>
                  <NavLink
                    to={link.path}
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
              )}
            </Fragment>
          ))}
          {
            !user && (
              <li className="log-in">
                <span>Log in to edit tasks</span>
              </li>
            )
          }
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
