import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="map-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63647952504!2d3.1191478971023128!3d6.548028245044412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1694192200443!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15 ">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button1">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-10">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">Ojodu Berger, Lagos</address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-10">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel: +234 9034980910">+234 9034980910</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-10">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:sirhmvfx@gmail.com">
                          sirhmvfx@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
