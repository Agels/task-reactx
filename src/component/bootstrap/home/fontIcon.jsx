import "../bootstrap.css";
import React from "react";
import LinkedinIcon from "./linkedInIcon";
import FacebookIcon from "./facebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwiterIcon from "./twitertIcon";
export default class Icon extends React.Component {
  render(){

  return (
    <div className="fs-1 col-lg-3 col-md-6 col-sm-12  mt-auto mb-auto">
        <TwiterIcon />
        {" "}
        <LinkedinIcon />
        <FacebookIcon />
        <InstagramIcon />
    </div>
  );
}
};

