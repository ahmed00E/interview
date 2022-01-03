import { useState } from "react";

const LikeDislike = ({ likes, dislikes, id, like, dislike }) => {
  // todo : block multiple votes
  const [voted, setVoted] = useState(false);

  return (
    <div className="like-dislike">
      <span min="0" max={likes + dislikes} value={likes}></span>
      <button
        className="like-button"
        // disabled={voted}
        onClick={() => {
          like(id);
          setVoted(true);
        }}
      >
        👍
         
      </button>
      <div>{likes + " / " + dislikes}</div>
      <button
        className="like-button dislike-button"
        disabled={voted}
        onClick={() => {
          dislike(id);
          setVoted(true);
        }}
      >
        👎
       
      </button>
    </div>
  );
};

export default LikeDislike;
