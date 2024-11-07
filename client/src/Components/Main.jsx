import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Results from "../pages/Results";
import Feedback from "../pages/Feedback";
import Register from "../pages/Register";
import Login from "../pages/Login";
// import Entry from "../pages/Entry";
import Students from "../pages/Students";
import Profile from "../pages/Profile";
import Gallery from "../pages/Gallery";

export default function Main({
  loginStatus,
  user,
  fun,
  setUser,
  students,
  AllUsers,
  feedbacks,
  gallery,
}) {
  // const [fetchResults, setFetchResults] = useState(false);
  //   console.log("main rendered");
  return (
    <div id="main">
      <Switch>
        <Route path="/" exact>
          <Home user={user} students={AllUsers} loginStatus={loginStatus} />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/results">
          {loginStatus ? (
            <Results students={students} user={user} />
          ) : (
            <Login fun={fun} setUser={setUser} />
          )}
        </Route>
        <Route path="/feedback">
          {loginStatus ? (
            <Feedback user={user} feedbacks={feedbacks} />
          ) : (
            <Login fun={fun} setUser={setUser} />
          )}
        </Route>
        <Route path="/students">
          {loginStatus ? (
            <Students students={students} user={user} />
          ) : (
            <Login fun={fun} setUser={setUser} />
          )}
        </Route>
        <Route path="/profile">
          {loginStatus ? (
            <Profile students={AllUsers} user={user} />
          ) : (
            <Login fun={fun} setUser={setUser} />
          )}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/gallery">
          <Gallery gallery={gallery} />
        </Route>
        <Route path="/login">
          <Login fun={fun} setUser={setUser} />
        </Route>
        {/* <Route path="/entry">
          <Entry />
        </Route> */}
      </Switch>
    </div>
  );
}
