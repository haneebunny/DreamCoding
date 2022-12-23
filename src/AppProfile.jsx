import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

function AppProfile() {
  return (
    <>
      <Profile
        isNew={true}
        image="/img/Hi.jpg"
        name="hi"
        desc="프론트엔드 개발자"
      />
      <Profile
        // isNew={false} 이건 없어도 무방함
        image="/img/Hi.jpg"
        name="so cute"
        desc="백엔드 개발자"
      />
      <Profile image="/img/Hi.jpg" name="happy" desc="난 개발자" />
      <Avatar image="/img/Hi.jpg" name="avatar" isNew={true} />
    </>
  );
}

export default AppProfile;
