import React from 'react';

const FeedbackCard = ({ content, name, title }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card relative z-[1] gradient-effect">
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain absolute top-2 left-2" /> */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
