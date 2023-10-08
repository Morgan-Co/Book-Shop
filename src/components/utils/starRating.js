import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import styles from "../ui/screens/home/MainSection/ProductSection/BookSection/BookItem/BookItem.module.css"

export default function starRating(rating) {
  if (rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i += 1) {
      stars.push(
        <FontAwesomeIcon
          className={styles.solidStar}
          key={i}
          icon={faStar}
        />
      );
    }
    if (halfStar >= 0.5) {
      stars.push(
        <FontAwesomeIcon
          className={styles.halfStar}
          key="half"
          icon={faStarHalfStroke}
        />
      );
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i += 1) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          className={styles.emptyStar}
          icon={faStar}
        />
      );
    }
    return <div>{stars}</div>;
  }
  return 'no stars';
}