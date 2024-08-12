import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../testimonials.scss";

const ReviewTemplate = ({ r }) => {
  return (
    <>
      <div key={r.id} className="review">
        <div className="top">
          <img src={r.img} alt="avatarPicture" className="avatar" />
          <div className="userDetails">
            <div className="name">{r.name}</div>
            <div className="title">{r.title}</div>
          </div>
        </div>
        <div className="bottom">
          <div className="desc">{r.desc}</div>
        </div>
        <div className="center">
          <div className="rating">
            <span style={{ fontSize: "0.8rem" }}>Rating:</span>
            {Array(5)
              .fill()
              .map((_, index) => (
                <span key={index} className="star">
                  {index < r.rating ? (
                    "⭐"
                  ) : (
                    <span style={{ fontSize: "1.2rem", width: "1rem" }}>☆</span>
                  )}
                </span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewTemplate;
