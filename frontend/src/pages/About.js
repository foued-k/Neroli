import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Neroli"}>
      <div className="row contactUs ">
        <div className="col-md-6 ">
          <img
            src="/images/about_us.svg"
            alt="about us"
            style={{ width: "65%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We at Neroli believe that beauty should be accessible to anyone
            because it has the power to give confidence and transform people.
            When people feel beautiful, they find it easier to achieve their
            goals and make the world around them more beautiful.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
