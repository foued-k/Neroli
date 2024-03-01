import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactUs ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.svg"
            alt="privacy policy"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
