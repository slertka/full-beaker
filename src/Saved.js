import React from "react";
import "./Saved.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class Saved extends React.Component {
  generateSavedLinks = ({ saved }) => {
    return saved.map(result => {
      return (
        <div key={result.id} className="savedResult">
          <p>
            #{result.id}{" "}
            <a href={result.pageURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="faIcon" />
            </a>
          </p>
        </div>
      );
    });
  };

  render() {
    return (
      <div id="savedArea">
        <h1>Saved</h1>
        {this.generateSavedLinks(this.props)}
      </div>
    );
  }
}

export default Saved;
