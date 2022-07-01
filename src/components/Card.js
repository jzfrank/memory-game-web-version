const Card = (props) => {
  const flipCardHandler = () => {
    if (props.isClickable) {
      props.flipCardHandler(props.id);
    }
  };

  if (props.isVanished) {
    return (
      <div className="card">
        <div className="vanished"></div>
      </div>
    );
  }

  if (props.isFront) {
    return (
      <div className="card turned">
        <div
          className="front"
          style={{
            backgroundImage: `url(${props.src})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    );
  }

  return (
    <div className="card" onClick={flipCardHandler}>
      <div className="back"></div>
    </div>
  );

  // let className = "card";
  // let content = <div className="back"></div>;
  // if (!props.isVanished && props.isFront) {
  //   className = "card turned";
  //   content = (
  //     <div
  //       className="front"
  //       style={{
  //         backgroundImage: `url(${props.src})`,
  //         backgroundRepeat: "no-repeat",
  //       }}
  //     ></div>
  //   );
  // }

  // console.log("className:", className);

  // return (
  //   <div className={className} onClick={flipCardHandler}>
  //     {content}
  //   </div>
  // );
};

export default Card;
