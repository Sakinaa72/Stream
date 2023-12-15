import "./stories.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Stories() {
  const { currentUser } = useContext(AuthContext);
  //Temporary Data

  const stories = [
    {
      id: 1,
      name: "Amana",
      img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Atharva",
      img: "https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Yasin",
      img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Sadiq",
      img: "https://images.pexels.com/photos/127905/pexels-photo-127905.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Shreya",
      img: "https://images.pexels.com/photos/1844038/pexels-photo-1844038.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
