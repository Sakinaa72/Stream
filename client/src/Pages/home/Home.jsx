import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import "./home.scss";

function home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
      <div>Home</div>
    </div>
  );
}

export default home;
