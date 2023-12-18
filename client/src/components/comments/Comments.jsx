import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

function Comments() {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "Yes definately!!!",
      name: " Vrushali Kadam",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1699419/pexels-photo-1699419.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      desc: "See you soon!!!",
      name: " Amana Shaikh",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      desc: "Missing You Guysss!!!",
      name: " Avantika Patil",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a comment..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">2 hour ago </span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
