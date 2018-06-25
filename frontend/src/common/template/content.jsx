import React from "react";
import ContentHeader from "./contentHeader";

export default props => {
  return <section className="content">{props.children}</section>;
};
