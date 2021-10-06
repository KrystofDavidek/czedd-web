import React from "react";
import BEMHelper from "react-bem-helper";
import "./Header.css";

const classes = new BEMHelper({
  name: "header",
});

export const Header = () => {
  return (
    // <div {...classes()}>
    //   <h1 {...classes("title")}>
    //     <p {...classes("title-part")}>
    //       <span {...classes("title-highlight")}>Cz</span>ech <span {...classes("title-highlight")}>E</span>lectronic
    //     </p>
    //     <p {...classes("title-part")}>
    //       <span {...classes("title-highlight")}>D</span>erivation <span {...classes("title-highlight")}>D</span>ictonary
    //     </p>
    //     <p {...classes("title-part")}>
    //       (<span {...classes("title-highlight")}>CZEDD</span>)
    //     </p>
    //   </h1>
    // </div>
    <div {...classes()}>
      <div {...classes("title")}>
        <h1>
          <span {...classes("title-highlight")}>CZEDD</span>
        </h1>
        <p {...classes("subtitle")}>
          (<span {...classes("highlight")}>Cz</span>ech <span {...classes("highlight")}>E</span>lectronic{" "}
          <span {...classes("highlight")}>D</span>erivation <span {...classes("highlight")}>D</span>ictonary)
        </p>
      </div>
    </div>
  );
};
