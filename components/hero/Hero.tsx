"use client";
import React from "react";
import Button from "../shared/Button";
import Image from "next/image";

function Hero() {
  const handleScroll = () => {};
  return (
    <section className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quackly and easily!
        </h1>
        <h2 className="hero__subtitle">
          StreamLine your car rental experience with our effortless booking
          process.
        </h2>
        <Button
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-3xl mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Car Image"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
