import LikeDislike from "./LikeDislike";

const MovieCard = ({ movie, deleteMovie, like, dislike }) => {
  return (
    <div className="movie-card">
      <div className="card-headings">
        <span className="category">{movie.category}</span>
        <h2>{movie.title}</h2>
      </div>
      <button className="fa fa-trash" onClick={() => deleteMovie(movie.id)}>
        
      </button>

      <LikeDislike
        likes={movie.likes}
        dislikes={movie.dislikes}
        id={movie.id}
        like={like}
        dislike={dislike}
      />
    </div>
  );
};

export default MovieCard;
