const Card = (props) => {
  let className = "card";
  let content = <div className="back"></div>;
  if (!props.isVanished && props.isFront) {
    className = "card turned";
    content = (
      <div className="front" style={{ background: `url(${props.src})` }}></div>
    );
  }

  if (props.isVanished) {
    className += " vanished";
  }

  const flipCardHandler = () => {
    props.flipCardHandler(props.id);
  };

  return (
    <div className={className} onClick={flipCardHandler}>
      {content}
    </div>
  );
};

export default Card;
