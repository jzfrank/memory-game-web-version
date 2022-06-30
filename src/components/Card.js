const Card = (props) => {
  if (props.isVanished) {
    return (
      <div className="card">
        <div className="vanished"></div>
      </div>
    );
  }

  let className = "card";
  let content = <div className="back"></div>;
  if (!props.isVanished && props.isFront) {
    className = "card turned";
    content = (
      <div
        className="front"
        style={{
          backgroundImage: `url(${props.src})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      // <img
      // className="front"
      // src={props.src}
      // style={{
      //   backgroundImage: `url(${props.src})`,
      //   backgroundRepeat: "no-repeat",
      // }}
      // />
    );
  }

  const flipCardHandler = () => {
    if (props.isClickable) {
      props.flipCardHandler(props.id);
    }
  };

  console.log("className:", className);

  return (
    <div className={className} onClick={flipCardHandler}>
      {content}
    </div>
  );
};

export default Card;
