import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function Animal({ type }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <column>
      <row>
        <div onClick={handleClick}>
          <img alt="animal" src={[type]} height={100} width={100} /> & nbsp; &
          nbsp; & nbsp; & nbsp; & nbsp; & nbsp; & nbsp;
        </div>
      </row>
      <row>
        <img
          alt="heart"
          src={heart}
          style={{
            width: 10 + 10 * clicks,
          }}
        />
      </row>
    </column>
  );
}

export default Animal;
