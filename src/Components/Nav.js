import { Link } from "react-router-dom";

const Nav = (props) => {
  const navButtons = props.topics.map((topic, index) => {
    return (
      <li key={index} onClick={() => props.performSearch(topic)}>
        <Link to={`/search/${topic}`}>{topic}</Link>
      </li>
    );
  });

  return (
    <nav className="main-nav">
      <ul>{navButtons}</ul>
    </nav>
  );
};

export default Nav;
