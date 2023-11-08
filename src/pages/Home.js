import React from "react";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="container">
        <img src="/images/headerimg.png" alt="heroimg" />
      </section>

      <section className="container">
        <div>
          <h2>Why Choose Us</h2>
          <p>Bringing you the best of contemporary furniture</p>
        </div>
        <div className="two-column">
          <div className="all-features">
            <div className="features">
              <img className="icons-2" src="/images/Vectorwhyimg.png" alt="" />
              <h3>Unique selection</h3>
              <p>Sophisticated styles for modern tastes</p>
            </div>
            <div className="features">
              <img className="icons-2" src="/images/Vectorwhyimg.png" alt="" />
              <h3>Unique selection</h3>
              <p>Sophisticated styles for modern tastes</p>
            </div>
            <div className="features">
              <img className="icons-2" src="/images/Vectorwhyimg.png" alt="" />
              <h3>Unique selection</h3>
              <p>Sophisticated styles for modern tastes</p>
            </div>
            <div className="features">
              <img className="icons-2" src="/images/Vectorwhyimg.png" alt="" />
              <h3>Unique selection</h3>
              <p>Sophisticated styles for modern tastes</p>
            </div>
          </div>

          <img src="/images/Why chose us.png" alt="" />
        </div>
      </section>

      <section className="container">
        <h2>Explore Our Furniture Store Online</h2>
        <div className="all-products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className="container">
        <div>
          <h2>Our Client Reviews</h2>
        </div>

        <div className="review">
          <Link>
            <img
              className="icons"
              id="left"
              src="/images/arrow-left-circle.png"
              alt="lefticon"
            />
          </Link>
          <Link>
            <img
              id="right"
              className="icons"
              src="/images/arrow-right-circle.png"
              alt="lefticon"
            />
          </Link>
          <div className="review-container">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>

      <section className="container">
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div>
          <div className="frequently-asked-questions">
            <div className="questions-heading">
              <h3>Do you deliver all over Nigeria?</h3>
              <Link>
                <img
                  className="icons"
                  src="/images/Button_dropdown.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
              aut minima autem fugit facilis rerum nisi nihil, laborum, quia
              sint officiis similique dolores soluta facere sunt doloremque esse
              corporis.
            </div>
          </div>

          <div className="frequently-asked-questions">
            <div className="questions-heading">
              <h3>Can I order if I live outside of delivery state?</h3>
              <Link>
                <img
                  className="icons"
                  src="/images/Button_dropdown.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
              aut minima autem fugit facilis rerum nisi nihil, laborum, quia
              sint officiis similique dolores soluta facere sunt doloremque esse
              corporis.
            </div>
          </div>

          <div className="frequently-asked-questions">
            <div className="questions-heading">
              <h3>What is your refund/return policy?</h3>
              <Link>
                <img
                  className="icons"
                  src="/images/Button_dropdown.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
              aut minima autem fugit facilis rerum nisi nihil, laborum, quia
              sint officiis similique dolores soluta facere sunt doloremque esse
              corporis.
            </div>
          </div>

          <div className="frequently-asked-questions">
            <div className="questions-heading">
              <h3>How long does it takes to deliver?</h3>
              <Link>
                <img
                  className="icons"
                  src="/images/Button_dropdown.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a
              aut minima autem fugit facilis rerum nisi nihil, laborum, quia
              sint officiis similique dolores soluta facere sunt doloremque esse
              corporis.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
