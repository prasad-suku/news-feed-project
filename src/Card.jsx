import React from "react";

const Card = ({ keys, title, description, imgurl, url }) => {
  return (
    <div key={keys} className="card">
      <img
        src={
          imgurl
            ? imgurl
            : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
        }
        className="card-img-top"
        // style={{ height: "60%", width: "100%" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 30)}</h5>
        <div className="card-text">
          {description ? (
            description.slice(0, 70)
          ) : (
            <p>
              Lorem ipsum dolores voluptatibus placeat ex nihil repellat vitae
              ipsam rerum eligendi, optio
            </p>
          )}{" "}
          ...
        </div>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
