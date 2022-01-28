import React from "react";
import Card from "../components/common/Card";
import { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function ContentPage() {
    
  const { user } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    if(!user.role ){
        navigate("/", { replace: true });
      }
}, [navigate, user.role]);


  if (user.role === "user") {
    return (
      <div>
        <Card>
          <h2>Some User Content</h2>
        </Card>
      </div>
    );
  }
  else if(!user.role ){
    navigate("/", { replace: true });
  }
  return (
    <div>
      <Card>
        <h2>Some Creator Content</h2>
      </Card>
    </div>
  );
  
}

export default ContentPage;
