import React from "react";
import "./Result.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";

class Result extends React.Component {
  render() {
    return (
      <div key={this.props.id} className="result" id={this.props.id}>
        <img
          src={this.props.imgSrc}
          className="resultPic"
          alt={`Made by ${this.props.user} for Pixabay`}
        />
        <div
          className={
            this.props.saved !== -1
              ? "saveIndicator saved"
              : "saveIndicator save"
          }
          onClick={this.props.clickListener}
        >
          {this.props.saved !== -1 ? "Saved" : "Save"}
        </div>
        <div className="imageTags">
          {this.props.tags.split(", ").map(tag => (
            <p
              className="tag"
              key={`${tag}Tag`}
              onClick={this.props.tagClickListener}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="popularity">
          <p className="pop" key={`${this.props.id}Likes`}>
            {this.props.likes} <FontAwesomeIcon icon={faThumbsUp} />
          </p>
          <p className="pop" key={`${this.props.id}Favorites`}>
            {this.props.favorites} <FontAwesomeIcon icon={faHeart} />
          </p>
        </div>
      </div>
    );
  }
}

export default Result;
