import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1>About Class Component</h1>
      <h2>This is Namaste React webseries</h2>

      <h4>LoggedInUser</h4>
      <UserContext.Consumer>
        {({ loggedInUser }) => {
          return <h4 className="text-lg font-bold">{loggedInUser}</h4>;
        }}
      </UserContext.Consumer>

      {/* <User name={"Sanket (Function)"} location={"Pune"} /> */}
      <UserClass name={"Sanket (Class)"} location={"Pune"} />
    </div>
  );
};

export default About;
