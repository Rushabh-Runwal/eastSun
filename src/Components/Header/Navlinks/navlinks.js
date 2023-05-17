import React from "react";
import { Link } from "react-router-dom";
const Navlinks = ({ urlLink, linkName, className }) => {
  // const { urlLink,linkName } = this.props;
  return (
    <>
      <li>
        <Link className={className} to={urlLink}>
          {linkName}
        </Link>
      </li>
    </>
  );
};
export default Navlinks;
