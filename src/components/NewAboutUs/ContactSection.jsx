"use client";
import { useState } from "react";
import PipeDriveForm from "@/components/Home/PipeDrive/PipeDriveForm";
import ImageSection from "../Home/PipeDrive/ImageSection";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    // You can add validation here before submitting
    if (formData.name && formData.email && formData.phone && formData.purpose) {
      alert("Thank you! We will get back to you soon.");
      // Reset form
      setFormData({ name: "", email: "", phone: "", purpose: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const purposeOptions = [
    { value: "", label: "Purpose" },
    { value: "website-development", label: "Website Development" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "seo-services", label: "SEO Services" },
    { value: "social-media", label: "Social Media Marketing" },
    { value: "content-marketing", label: "Content Marketing" },
    { value: "ppc-advertising", label: "PPC Advertising" },
    { value: "consultation", label: "Consultation" },
    { value: "other", label: "Other" },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#cd1f38" }}>
      <div className="!max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Looking for the best digital marketing services in
            <br />
            Hyderabad?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section - Left on desktop, Top on mobile */}
          <div className="w-full h-full lg:w-1/2 order-1 lg:order-1">
            <ImageSection />
          </div>

          {/* Form Section - Right on desktop, Bottom on mobile */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              {/* Pipedrive Form */}
              <PipeDriveForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
