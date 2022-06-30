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
      <div className="front" style={{ background: `url(${props.src})` }}></div>
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
