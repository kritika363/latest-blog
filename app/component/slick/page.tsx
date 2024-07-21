'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./slick.module.css"


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="grid grid-custom">
            <div className={styles.imageClient}>
                <Image src="/client1.jpg" alt="client iamge" width={150} height={150}></Image>
            </div>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <h4 className="mt-4">Rudrakash</h4>
            </div>
        </div>
      </div>
      <div>
      <div className="grid grid-custom">
            <div className={styles.imageClient}>
                <Image src="/client1.jpg" alt="client iamge" width={150} height={150}></Image>
            </div>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <h4 className="mt-4">Rudrakash</h4>
            </div>
        </div>
      </div>
      <div>
      <div className="grid grid-custom">
            <div className={styles.imageClient}>
                <Image src="/client1.jpg" alt="client iamge" width={150} height={150}></Image>
            </div>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <h4 className="mt-4">Rudrakash</h4>
            </div>
        </div>
      </div>
      <div>
      <div className="grid grid-custom">
            <div className={styles.imageClient}>
                <Image src="/client1.jpg" alt="client iamge" width={150} height={150}></Image>
            </div>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <h4 className="mt-4">Rudrakash</h4>
            </div>
        </div>
      </div>
      <div>
      <div className="grid grid-custom">
            <div className={styles.imageClient}>
                <Image src="/client1.jpg" alt="client iamge" width={150} height={150}></Image>
            </div>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <h4 className="mt-4">Rudrakash</h4>
            </div>
        </div>
      </div>
      <div>
      <div className="grid grid-custom">
            <div className={styles.imageClient}>
                <Image src="/client1.jpg" alt="client iamge" width={150} height={150}></Image>
            </div>
            <div className="content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <h4 className="mt-4">Rudrakash</h4>
            </div>
        </div>
      </div>
    </Slider>
  );
}