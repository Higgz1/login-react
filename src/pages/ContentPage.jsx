import React from "react";
import Card from "../components/common/Card";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import YoutubePlayer from "../components/Iframe/YoutubePlayer";
import "./ContetPage.css";
import { Navigate } from "react-router-dom";

function ContentPage() {
  const { user, auth } = useContext(UserContext);

  if (auth === false) {
    return <Navigate to="/" replace={true} />;
  }

  if (auth === true && user.role === "user") {
    return (
      <div>
        <Card>
          <h2>User Details</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>User Email</th>
            </tr>
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </table>
        </Card>
      </div>
    );
  }

  if (auth === true && user.role === "creator") {
    return (
      <div>
        <Card>
          <h2>Creator Content</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>User Email</th>
            </tr>
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </table>
          <p>
            Hi there {user.name}, {user.email} .You've made it this far you might
            as well have a treat.Hope you Enjoy some additional content!
          </p>
          <YoutubePlayer embedId={"EE-xtCF3T94"} />
        </Card>
      </div>
    );
  }
}

export default ContentPage;
