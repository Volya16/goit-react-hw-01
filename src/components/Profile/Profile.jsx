import style from "./Profile.module.css";
console.log(style);

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={style.card}>
      <div className={style.userInfo}>
        <img className={style.img} src={image} alt={`Avatar of ${name}`} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.statsList}>
        <li className={style.statsItems}>
          <span className={style.statsProperty}>Followers</span>
          <span className={style.statsValue}>{followers}</span>
        </li>
        <li className={style.statsItems}>
          <span className={style.statsProperty}>Views</span>
          <span className={style.statsValue}>{views}</span>
        </li>
        <li className={style.statsItems}>
          <span className={style.statsProperty}>Likes</span>
          <span className={style.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// className={style.}
