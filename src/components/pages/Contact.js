import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import ContactCard from "../ContactCard";

function Contact(props) {
  return (
    <div>




      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link bg-light">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link bg-light">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />

      <ContactCard />

    </div>
  );
}

export default Contact;