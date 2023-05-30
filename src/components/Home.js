import image from "../assets/images/desktop_thumbnail_5c212d5c-ea46-44cf-9350-78d14e98ae42.jpeg";
const Home = () => {
  return (
    <>
      <div className="container">
        <header> Pizza Hut</header>
        <div>
          <img
            src=" https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg"
            className="logo"
          />
          <h1>Pizza hut </h1>
        </div>
        <h4>THe food is here</h4>
        <img
          src={image}
          className="img1"
          alt="logo"
          style={{ borderRadius: "30%" }}
        />{" "}
      </div>{" "}
    </>
  );
};
export default Home;
