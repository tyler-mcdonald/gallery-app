const Photo = (props) => {
  return (
    <li>
      <img
        src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
        alt={props.title}
      />
    </li>
  );
};

export default Photo;
