import Post from "../post/Post";
import "./posts.scss";

function Posts() {
  const posts = [
    {
      id: 1,
      name: "Hemant Sawant",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Studying togather is fun",
      img: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Bhagyeshree Pawar ",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "More espresso, less depresso",
      img: "https://images.pexels.com/photos/3361170/pexels-photo-3361170.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Avantika Patil",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: " Weekends be Like",
      img: "https://images.pexels.com/photos/716421/pexels-photo-716421.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
