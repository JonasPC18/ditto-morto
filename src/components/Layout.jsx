import { NavLink, Outlet, Link } from 'react-router-dom';
import FrameLink from './FrameLink.jsx';

export default function Layout() {
  return (
    <>
      <header className="titulo">
        <h1 className="logo">
          <Link to="/">Ditto Morto</Link>
        </h1>

        <nav>
          <ul className="menu">
            {['filmes', 'quadrinhos', 'desenhos', 'bio'].map((p) => (
              <li key={p}>
                <FrameLink to={`/${p}`}>{p.toUpperCase()}</FrameLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
