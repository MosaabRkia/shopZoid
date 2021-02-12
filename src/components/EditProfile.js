import React, { useState } from "react";
import NavBar from "./NavBar";
import '../cssFile/EditProfile.css';

export default function EditProfile(props) {

  const [HideShowEmail, setHideShowEmail] = useState(false);
  const [HideShowPassoword, setHideShowPassoword] = useState(false);

  function showDivChangeEmail() {
    setHideShowEmail(!HideShowEmail);
  }

  function showDivChangePassword() {
    setHideShowPassoword(!HideShowPassoword);
  }
  
  return (
    <div className="container" style={{textAlign:'center'}}>
        <NavBar Page="MyProfilePage" toLink="/ProfilePage" />
        <h1>Edit Profile</h1>
        <div id="formOfEmail">
      <button id="showButton" style={{margin:"178px 10px 10px 8px"}} className={HideShowEmail?"btn btn-primary":"btn btn-danger"} onClick={showDivChangeEmail}>Change Email</button>

      <div className="form-group" style={{display:HideShowEmail?'block':'none'}}>
        <input className="form-control" type="email" placeholder="Old Email" />
        <input className="form-control" type="email" placeholder="New Email" />
        <button className="btn btn-primary">Submit</button>
        </div>

      </div>
  <div id="formOfPassword">
      <button id="showButton" style={{margin:"178px 10px 10px 8px"}} className={HideShowPassoword?"btn btn-primary":"btn btn-danger"} onClick={showDivChangePassword}>Change Password</button>
      <div className="form-group" style={{display:HideShowPassoword?'block':'none'}}>
        <input className="form-control" type="password" placeholder="Old Password" />
        <input className="form-control" type="password" placeholder="New Password" />
        <button  className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
