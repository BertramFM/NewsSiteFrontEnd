import {Outlet, Link} from 'react-router'

function Layout (){
  return (
    <>
      <nav>
        <h1>Hello</h1>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <br />
        <Link to="/about">About</Link>
        <p>-----------</p>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
      </footer>
    </>
  );
}

export default Layout;