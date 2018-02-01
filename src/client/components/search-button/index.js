import { h, Component } from "preact";
import cx from "obj-str";

import "./style.scss";

const SearchButton = ({ google, stackoverflow, href = "#" }) => {
  let classes = cx({ superlink: true, google, stackoverflow });
  return <a className={classes} href={href} target="_blank" rel="noopener" />;
};

export default SearchButton;
