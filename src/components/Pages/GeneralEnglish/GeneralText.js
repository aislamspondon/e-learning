import React from "react";

const GeneralText = () => {
  return (
    <div className="lg:w-[67%]  mx-auto py-12 lg:py-16 flex flex-col items-center text-black">
      <p className="text-justify md:text-center">
        In General English you can improve your knowledge of everyday English
        and learn the language you need for socializing. You will also develop
        your comprehension skills and build your vocabulary.
      </p>
      <h2 className="text-left lg:text-justify mt-16">
        Zones: 5- to 10-minute activities
      </h2>
      <p className="text-justify my-4">
        Do you have 5 to 10 minutes to practice your English today? Try one of
        our Video, Audio, Magazine or Reading zone activities.
        <br />
        These are short activities on a range of different topics to help you
        improve your English level. Practising every day, even for a short time,
        will help you to improve. Choose a topic that interests you and get
        started today!
      </p>
      <h2 className="text-left lg:text-justify mt-16">
        Series: 15- to 30-minute activities
      </h2>
      <p className="text-justify my-4">
        If you have more time to work on your English, try the learning material
        in our series. You will find longer learning activities, which you can
        work through, one episode at a time, at your own pace.
      </p>
    </div>
  );
};

export default GeneralText;
