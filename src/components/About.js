import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React webseries</h2>
      <User name={"Sanket (Function)"} location={"Pune"} />
      <UserClass name={"Sanket (Class)"} location={"Pune"} />
    </div>
  );
};

export default About;
