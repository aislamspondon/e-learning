import React from "react";

const TextInfo = () => {
  return (
    <>
      <h2 className="bigger text-black">
        Choose your online e-Learning subscription plan
      </h2>
      <p className="text-black">
        It&apos;s now or never. Time to level up your English skills!
      </p>
      <p className="mt-5 w-[80%] mx-auto text-black">
        Choose a subscription plan that suits your budget and lifestyle. Pick a
        plan based on how many live online classes you want to join each month
        and start learning today.
      </p>
      <h3 className="text-black mt-5">How does streaming credits work?</h3>
      <p className="w-full md:w-[35.5%] mx-auto text-black text-[16px]">
        Use your streaming credits to join group and private classes, which are
        live online and have teachers from around the world.
      </p>
      <ul className="text-black">
        <li className="mt-2">
          <strong>Group streaming classes:</strong> 1 credit / 55 min{" "}
        </li>
        <li className="mt-2">
          <strong> Private streaming classes:</strong> 5 credits / 25min{" "}
        </li>
        <li className="mt-2"> Each credit to buy cost only ฿ 55.50</li>
      </ul>
    </>
  );
};

export default TextInfo;
