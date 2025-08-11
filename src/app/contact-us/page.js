'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


import {
  FaPhoneAlt,
  FaTwitter,
  FaPinterest,
  FaFacebookF,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLinkedin, BsDribbble, BsBehance } from "react-icons/bs";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import PipeDriveForm from "@/components/Home/PipeDrive/PipeDriveForm";

export default function ContactUs() {
  return (
    <div className=" py-20">
      {/* Header */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500 text-sm mt-2">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28019.105126770002!2d77.382232!3d28.618127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff4f028983f%3A0xa99e585909342d13!2sShootOrder%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1752666026376!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Contact Info & Form */}
      <div className="!max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 my-12 rounded-3xl border p-4 md:p-4">
          {/* Left Section - Info */}
          <div className="bg-[#9a0c28] rounded-3xl p-6 md:p-10">
            <h3 className="font-semibold text-white text-lg mb-2">
              Contact Information
            </h3>
            <p className="text-white text-sm mb-6">
              Say something to start a live chat!
            </p>
            <div className="text-white space-y-4">
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91-630-392-1512
              </p>
              <p className="flex items-center gap-2">
                <FiMail /> info@shootorder.com
              </p>
              <p className="flex items-start gap-2">
                <HiOutlineLocationMarker className="mt-1" />
                Ivent It Solutions Pvt. Ltd. (ShootOrder)
                Krishe Sapphire
                MSR Block, 1st Floor, SY No. 88,
                HITEC City main road, Madhapur
                Hyderabad, Telangana
                500081
              </p>
            </div>

            <div className="mt-6">
              <p className="text-white font-semibold mb-2">We are on Socials</p>
              <div className="flex items-center justify-start gap-6 text-white text-lg ">
                <Link href="https://www.facebook.com/shootorder">
                  <FaFacebookF className="cursor-pointer" />
                </Link>
                <Link href="https://x.com/shootorder">
                  <FaXTwitter className="cursor-pointer" />
                </Link>
                <Link href="https://www.instagram.com/shootorder/#">
                  <FaInstagram className="cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/company/shootorder/">
                  <FaLinkedin className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Drop Us a Line</h3>
            <p className="text-sm text-gray-500 mb-6">
              We are always looking for a next great project
            </p>

            <PipeDriveForm />
          </div>



        </div>
      </div>
    </div>
  );
}
