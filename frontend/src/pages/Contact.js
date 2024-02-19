import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactUs">
        <div className="col-md-6">
          <img
            src="images/contactus.svg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
            For any query or info about our products fell free to contact us
          </p>
          <p className="mt-3">
            <BiMailSend /> contactus@neroli.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> 0021622123456
          </p>
          <p className="mt-3">
            <BiSupport /> 0021622123456
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
