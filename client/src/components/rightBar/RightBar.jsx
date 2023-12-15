import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/74419103?v=4"
                alt=""
              />
              <span>Yasin Bhojani</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatars.githubusercontent.com/u/76765939?v=4"
                alt=""
              />
              <span>Sadiq Rupani</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>Amana</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>
                <span>Atharva</span> changed their cover picture
              </p>
            </div>
            <span>5 min ago</span>
          </div>
        </div>

        {/* Online friends  */}

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Bhagyeshree Pawar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1310461/pexels-photo-1310461.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Avantika Patil</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2393793/pexels-photo-2393793.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Tanuja Ghorpade</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1699419/pexels-photo-1699419.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Vrushali Kadam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Sayli Kadam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/207569/pexels-photo-207569.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Shreya kore</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Hemant Sawant</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Prajwal Kulkarni</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
