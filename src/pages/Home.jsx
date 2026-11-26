import { Link } from "react-router";

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <h2>Welcome to the News Site!</h2>

      <p>What would you like to do?</p>

      <Link to="/articles">Browse articles</Link>
      <br />
      <Link to="/about">About us</Link>
    </section>
  ) 
}

export default Home;