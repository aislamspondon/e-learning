import React from "react";
import TextInfo from "./TextInfo";
import PlanCard from "./PlanCard";
import { packageList } from "@/utility/data/priceData";

const SubscriptionPlan = () => {
  return (
    <div className="w-full text-center flex flex-col items-center gap-5 my-5">
      <TextInfo />
      <div className="w-full md:w-10/12 flex flex-col md:flex-row justify-around items-center my-10 gap-5 ">
        {packageList?.map((item, index) => (
          <PlanCard key={index} item={item} />
        ))}
      </div>
      <div className="w-full md:w-[70%] flex flex-col items-center gap-5">
        <p className="text-gray-550">
          In our 14 Days Free trial, there Is no streaming option available for
          either group or private classes. You can buy streaming credits to try
          out our online streaming lessons anytime through out the trial period
          or after the trial period
        </p>
        <p className="text-gray-550">
          <strong className="text-gray-550">Please note:</strong> Subscribing to
          our monthly online e-Learning plan means that each month you will be
          automatically charged in local currency via our payment provider (Pay
          Pal), and will receive a receipt via email. You can also pay with
          Prompt Pay for our yearly subscription plan only. Cancel your
          subscription at any time. For more information, please read the terms
          and conditions of sale.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
