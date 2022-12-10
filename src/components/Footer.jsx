import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Career</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-0 ">
          <p className="uppercase font-bold ">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md p-2 mr-4 mb-4"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 p-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="pb-4">2022 Claud, LLC. All right reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-xl">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
