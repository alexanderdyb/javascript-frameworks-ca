import styles from "./Reviews.module.css";

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div className={styles.userReviews}>
            <p>Rating: {review.rating}</p>
            <p>{review.description}</p>
            <p>by {review.username}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </>
  );
}
