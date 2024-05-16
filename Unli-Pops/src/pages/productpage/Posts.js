import "./ProductPage.css";
function Posts({ post, rating }) {
  const posts = post.map((post, index) => {
    return (
      <div key={index}>
        <div className="review__container">
          <div className="review_post">
            <h1 className="productPage__right__rating">
              <img
                className="star"
                src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png"
                alt=""
              />
              <span>{post.rate}</span>
            </h1>
            <h1 className="review__text">{post.text}</h1>
          </div>
          <div className="review__rate ">
            <img
              className="review__avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
              alt=""
            />{" "}
            <h1>Igel | 4 May 2024 </h1>{" "}
          </div>
        </div>
      </div>
      // </div>
    );
  });

  return <div>{posts}</div>;
}

export default Posts;
