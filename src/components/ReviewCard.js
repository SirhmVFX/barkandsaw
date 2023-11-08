import React from "react";
import ReactStars from "react-rating-stars-component";

function ReviewCard() {
  return (
    <>
      <div className="review-card">
        <img src="/images/Rectangle 20.png" alt="reviewimage" />
        <div className="review-details">
          <div className="stars-rating">
            <ReactStars
              count={5}
              size={28}
              value="3"
              edit={false}
              activeColor="#E16F25"
            />
          </div>

          <p>Demetrius</p>
          <h3>This is super legit, he delivered mine, and I love them</h3>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
