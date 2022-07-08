import back from "../assets/back.jpg";
import vanished from "../assets/vanished.jpg";

const Card = (props) => {
  const flipCardHandler = () => {
    if (props.isClickable) {
      props.flipCardHandler(props.id);
    }
  };

  let layoutClasses = "custom-card col s3 m2 top-bottom-margin";

  if (props.isVanished) {
    return (
      <div className={layoutClasses}>
        <img src={vanished} className=" responsive-img vanished" />
      </div>
    );
  } else if (props.isFront) {
    return (
      <div className={layoutClasses}>
        <img src={props.src} className=" responsive-img z-depth-2 front" />
      </div>
    );
  } else {
    return (
      <div className={layoutClasses} onClick={flipCardHandler}>
        <img src={back} className=" responsive-img back" />
      </div>
    );
  }
};

export default Card;
