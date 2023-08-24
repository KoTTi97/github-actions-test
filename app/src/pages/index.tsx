import { type FunctionComponent } from "react";

const test: number = "test";

const Home: FunctionComponent = () => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      width: "100%",
    }}>
    <h1 style={{ fontSize: 50 }}>Hello world!</h1>
  </div>
);
export default Home;
