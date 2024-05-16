import { useState } from "react";
import { Avatar } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import "./UserProfile.css";

function UserProfile(props) {
  const { getUserData } = props;
  const userData = getUserData("userData");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleAvatarClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  // console.log("Avatar Dropped", isDropdownOpen);

  return (
    <div className="user-profile">
      <div className="login-icon" onClick={handleAvatarClick}>
        <img
          className="star"
          src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/357736634_1973808909652489_6342205269670047656_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4TgtzoGx9pVOxMMU9CiePlB0HPIELdVmUHQc8gQt1WQ4kDErbYv59BRLdAdFSMUGDYw7selFghBnlnvfVgHkN&_nc_ohc=Kv-xml1BEqIQ7kNvgGHQPUt&_nc_ht=scontent.fmnl8-3.fna&oh=00_AYCVNPIDCYAdyaTQtJ0mKdzZDovG8TxBzf-RLXjA4owXPQ&oe=664BF8A2"
          alt=""
          style={{ width: "200px", height: "150px" }}
        />
        <p>{userData.userName}</p>
      </div>
      {isDropdownOpen && (
        <div className="user-avatar">
          <Link to="/orders">
            <p>Orders</p>
          </Link>
          <Link to="/wishlist">
            <p>Wishlist</p>
          </Link>
          <p>Log Out</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
