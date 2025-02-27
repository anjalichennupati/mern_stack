import React from 'react';
import styles from '../style';
import bc2 from '../assets/bc2.jpg'; // Adjust the path accordingly

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mt-[-60px]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">" Where Innovation Meets Product Integrity. "</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Revolutionizing <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Product </span>{" "}
          </h1>
      
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Authentication
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experience the future of product authentication with this groundbreaking blockchain and GI tagging solution. Elevate security, trust, and innovation in every transaction, revolutionizing the way authenticity is verified.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={bc2} alt="billing" className="w-[80%] h-[92%] relative z-[5] mr-8" />
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 grey__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full grey__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 grey__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
}

export default Hero;