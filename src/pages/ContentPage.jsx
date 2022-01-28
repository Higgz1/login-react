import React from "react";
import Card from "../components/common/Card";
import { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import YoutubePlayer from "../components/Iframe/YoutubePlayer";
import "./ContetPage.css";

function ContentPage() {
    
  const { user } = useContext(UserContext);
  let navigate = useNavigate();



  if (user.role === "user") {
    return (
      <div>
        <Card>
          <h2>User Content</h2>
          <p>Hi there {user.name}.Sit back and enjoy the show .Hope you Enjoy!</p>
          <YoutubePlayer embedId={'cBibjRQMe1o'}/>
        </Card>
      </div>
    );
  }
  
  return (
    <div>
        <Card>
          <h2>Creator Content</h2>
          <p>Hi there {user.name},you've made it this far you might  as well have a treat.Hope you Enjoy!</p>
          <YoutubePlayer embedId={'EE-xtCF3T94'}/>
        </Card>
    </div>
  );
  
}

export default ContentPage;
