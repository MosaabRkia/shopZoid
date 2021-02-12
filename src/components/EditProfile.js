import React, { useState } from "react";
import NavBar from "./NavBar";
import '../cssFile/EditProfile.css';

export default function EditProfile(props) {

  const [HideShowEmail, setHideShowEmail] = useState(false);
  const [HideShowPassoword, setHideShowPassoword] = useState(false);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [oldEmail, setOldEmail] = useState();
  const [newEmail, setNewEmail] = useState();
  const [message, setMessage] = useState();
  const [userLogined,setUserLogined] = useState(localStorage.getItem('User'));
  let usr = JSON.parse(userLogined)

// note the state when changed to regular make problems
  function showDivChangeEmail() {
    setHideShowEmail(!HideShowEmail);
  }

  function showDivChangePassword() {
    setHideShowPassoword(!HideShowPassoword);
  }
  function HandleOldEmail(e){
  setOldEmail(e.target.value);
  }

  function HandleNewEmail(e){
  setNewEmail(e.target.value);
  }
  
  function HandleOldPassword(e){
  setOldPassword(e.target.value)
  }

  function HandleNewPassword(e){
    setNewPassword(e.target.value)
  }

  function ChangeEmail(e){
    e.preventDefault();
if(usr.email === oldEmail){
  usr.email = newEmail;
  localStorage.setItem('User',usr)
  setMessage("sucessfully Changed Email")
}
else{
  setMessage("Wrong Old Email or Vaild new Email")
}
  }

  function ChangePassword(e){
    e.preventDefault();

    if(usr.password === oldPassword){
      usr.password = newPassword;
      localStorage.setItem('User',usr)
      setMessage("sucessfully Changed Password")
    }else{
      setMessage("Wrong Old Password or Vaild new Password")
    }
  }

  return (
    <div className="container" style={{textAlign:'center'}}>
        <NavBar Page="MyProfilePage" toLink="/ProfilePage" />
        <h1>Edit Profile</h1>
        <div id="formOfEmail">
      <button id="showButton" style={{margin:"178px 10px 10px 8px"}} className={HideShowEmail?"btn btn-primary":"btn btn-danger"} onClick={showDivChangeEmail}>Change Email</button>

      <form onSubmit={ChangeEmail} className="form-group" style={{display:HideShowEmail?'block':'none'}}>
        <input className="form-control" type="email" onChange={HandleOldEmail} placeholder="Old Email" />
        <input className="form-control" type="email" onChange={HandleNewEmail} placeholder="New Email" />
        <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
                      <h1>{message}</h1>
      </div>
  <form onSubmit={ChangePassword} id="formOfPassword">
      <button id="showButton" style={{margin:"178px 10px 10px 8px"}} className={HideShowPassoword?"btn btn-primary":"btn btn-danger"} onClick={showDivChangePassword}>Change Password</button>
      <div className="form-group" style={{display:HideShowPassoword?'block':'none'}}>
        <input className="form-control" type="password" onChange={HandleOldPassword} placeholder="Old Password" />
        <input className="form-control" type="password" onChange={HandleNewPassword}  placeholder="New Password" />
        <button type="submit"  className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
