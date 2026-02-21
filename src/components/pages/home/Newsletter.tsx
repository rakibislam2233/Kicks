"use client";
import kicksLogo from "@/assets/logo/logo-white.png";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="w-full container bg-primary rounded-t-[24px] xl:rounded-t-[32px] mx-auto px-6 md:px-[72px] pt-14 md:pt-16 pb-14 md:pb-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left: Text Content */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-4xl xl:text-[48px] font-semibold text-white uppercase leading-tight mb-3">
            JOIN OUR KICKSPLUS
            <br />
            CLUB &amp; GET 15% OFF
          </h2>
          <p className="text-white/80 text-sm xl:text-[20px] font-semibold font-open-sans">
            Sign up for free! Join the community.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex items-center gap-1 max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 h-[48px] px-4 text-sm bg-transparent border border-white text-white placeholder:text-white/40 outline-none rounded-md"
            />
            <button
              type="submit"
              className="w-[102px] h-[48px] bg-[#232321] text-white text-sm font-semibold uppercase tracking-wider rounded-[4px] xl:rounded-[8px] hover:bg-black transition-colors cursor-pointer whitespace-nowrap"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right: Big KICKS Logo */}
        <div className="w-full flex justify-center items-center">
          <div className="relative inline-block">
            <div className="w-[180px] sm:w-[280px] md:w-[351px]">
              <Image
                src={kicksLogo}
                alt="Kicks Logo"
                width={351}
                height={88}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bg-[#FFA52F] rounded-full -top-3 -right-3 sm:-top-8 sm:-right-6 md:-top-11 md:right-0 p-1 sm:p-1.5">
              <Plus
                size={14}
                className="text-primary sm:hidden"
                strokeWidth={3}
              />
              <Plus
                size={26}
                className="text-primary hidden sm:block"
                strokeWidth={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
