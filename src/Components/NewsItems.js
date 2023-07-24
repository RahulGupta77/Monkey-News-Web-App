import React, { Component } from "react";
import "../App.css";

export class NewsItems extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      source,
      date,
      author,
      category,
    } = this.props;

    const color = (category) => {
      if (category === "business" || category === "science") return "danger";
      else if (category === "entertainment" || category === "sports")
        return "warning";
      else if (category === "general" || category === "technology")
        return "success";
      else return "info";
    };

    return (
      <div className="my-3">
        <div className="card custom-card " style={{ width: "21rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="logo"
            style={{ objectFit: "cover", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p>
              <span className={`badge rounded-pill text-bg-${color(category)}`}>
                {source}
              </span>
            </p>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By <strong>{author ? author : "unknown"}</strong> on{" "}
                <strong>{new Date(date).toLocaleString()}</strong>
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
