import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdExpandMore } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import TaskCard from "./TaskCard";

const TaskPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="my-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="w-full md:w-6/12 ">
          <h1>A request from your boss</h1>
        </div>
        <div className="w-full h-[250px] md:w-[476px] md:h-[408px] relative border border-transparent rounded-br-[90px] overflow-hidden">
          <Image src={"/images/task/hero.png"} alt="" fill />
        </div>
      </div>
      <p className="text-center my-10 font-medium text-[17px] text-black">
        Listen to some requests from a manager to practise and improve your
        listening skills.
      </p>
      <div className="w-full flex flex-col items-center gap-8 ">
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent">
          <AccordionSummary
            expandIcon={<MdExpandMore className="text-3xl" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Instructions</p>
          </AccordionSummary>
          <AccordionDetails className="w-full bg-white">
            <p className="w-full text-black text-sm">
              Do the preparation task first. Then listen to the audio and do the
              exercises.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent">
          <AccordionSummary
            expandIcon={<MdExpandMore className="text-3xl" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Preparation</p>
          </AccordionSummary>
          <AccordionDetails className="w-full bg-white">
            <audio
              controls
              className="w-full border rounded-full overflow-hidden  "
            >
              <source
                src="https://open.http.mp.streamamg.com/p/2000622/sp/200062200/playManifest/entryId/0_24rg5z4z/flavorId/0_7hjy5nou/format/url/protocol/https/a.mp4?clientTag=html5:v2.55&uiConfId=30010383"
                type="audio/ogg"
              />
              <source
                src="https://open.http.mp.streamamg.com/p/2000622/sp/200062200/playManifest/entryId/0_24rg5z4z/flavorId/0_7hjy5nou/format/url/protocol/https/a.mp4?clientTag=html5:v2.55&uiConfId=30010383"
                type="audio/mpeg"
              />
            </audio>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent">
          <AccordionSummary
            expandIcon={<MdExpandMore className="text-3xl" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Transcript</p>
          </AccordionSummary>
          <AccordionDetails className="w-full bg-white">
            <div className="mt-2 mb-6 w-full flex justify-start items-center gap-2">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Language Options"
              >
                <Tab
                  label="English"
                  {...{ index: 0, "aria-controls": "English Language" }}
                />
                <Tab
                  label="Thai"
                  {...{ index: 1, "aria-controls": "Thai Language" }}
                />
              </Tabs>
            </div>

            {value === 1 ? (
              <ul className="w-full text-black text-sm flex flex-col gap-3">
                <li>
                  <strong>ซูซานน์:</strong> สวัสดี มาริโอ้
                  คุณช่วยฉันเตรียมของสำหรับเดือนหน้าได้ไหม
                </li>
                <li>
                  <strong>มาริโอ้:</strong> โอเค แน่นอน
                  อะไรที่ฉันสามารถช่วยคุณได้?
                </li>
                <li>
                  <strong>ซูซานน์:</strong> ฉันต้องไปพบลูกค้าที่เยอรมนี
                  มันสำคัญ.
                </li>
                <li>
                  <strong>มาริโอ้:</strong> มีอะไรให้ช่วยไหม?
                </li>
                <li>
                  <strong>ซูซานน์:</strong> คุณช่วยส่งอีเมลหาลูกค้าได้ไหม
                  ถามพวกเขาว่าฉันจะไปเยี่ยมพวกเขาได้เมื่อไหร่ในสัปดาห์หน้า
                  กรุณาทำสิ่งนี้ก่อน เป็นเรื่องสำคัญและเร่งด่วนมาก
                </li>
                <li>
                  <strong>มาริโอ้:</strong> ถูกต้อง ฉันจะทำมันวันนี้
                </li>
                <li>
                  <strong>ซูซานน์:</strong> ขอบคุณ งานต่อไปนี้ก็สำคัญเช่นกัน
                  คุณสามารถเชิญทุกคนเข้าร่วมการประชุมทีมครั้งต่อไปได้หรือไม่?
                </li>
                <li>
                  <strong>มาริโอ้:</strong> ครับผม
                </li>
                <li>
                  <strong>ซูซานน์:</strong> แต่ก่อนอื่นคุณต้องจองห้องประชุม
                  หลังจากนั้นโปรดส่งอีเมลถึงทุกคนเกี่ยวกับเรื่องนี้
                </li>
                <li>
                  <strong>มาริโอ้:</strong> ใช่ แน่นอน
                </li>
                <li>
                  <strong>ซูซานน์:</strong> และสุดท้าย คุณช่วยเขียนรายงานสั้นๆ
                  เกี่ยวกับโครงการใหม่ของเราได้ไหม
                  ฉันต้องนำเสนอต่อผู้จัดการของเราในเดือนหน้า
                  โปรดทำเมื่อคุณมีเวลา - ในอีกสองหรือสามสัปดาห์ข้างหน้า
                  ไม่ใช่เรื่องเร่งด่วนเกินไป
                </li>
                <li>
                  <strong>มาริโอ้:</strong> แน่นอน ไม่มีปัญหา
                  ฉันสามารถทำได้ในสัปดาห์นี้
                </li>
                <li>
                  <strong>ซูซานน์:</strong> ไม่ต้องรีบร้อน ใช้เวลาของคุณ
                </li>
              </ul>
            ) : (
              <ul className="w-full text-black text-sm flex flex-col gap-3">
                <li>
                  <strong>Susanne:</strong> Hi, Mario. Can you help me prepare
                  some things for the next month?
                </li>

                <li>
                  <strong>Mario:</strong> OK, sure. What can I help you with?
                </li>

                <li>
                  <strong>Susanne:</strong> I need to visit the customer in
                  Germany. It&apos;s important.
                </li>

                <li>
                  <strong>Mario:</strong> What can I do to help?
                </li>

                <li>
                  <strong>Susanne:</strong> Can you send an email to the
                  customer? Ask them when I can visit them next week. Please do
                  this first. It&apos;s a priority and very urgent.
                </li>

                <li>
                  <strong>Mario:</strong> Right. I&apos;ll do it today.
                </li>

                <li>
                  <strong>Susanne:</strong> Thanks. This next task is also
                  important. Can you invite everyone to the next team meeting?
                </li>

                <li>
                  <strong>Mario:</strong> Yes, I will.
                </li>

                <li>
                  <strong>Susanne:</strong> But first you need to book a meeting
                  room. After that, please send everyone an email about it.
                </li>

                <li>
                  <strong>Mario:</strong> Yes, of course.
                </li>

                <li>
                  <strong>Susanne:</strong> And finally, can you write a short
                  report about our new project? I have to give a presentation to
                  our managers next month. Please do it when you have time -
                  sometime in the next two or three weeks. It&apos;s not too
                  urgent.
                </li>

                <li>
                  <strong>Mario:</strong> Sure, no problem. I can do it this
                  week.
                </li>

                <li>
                  <strong>Susanne:</strong> There&apos;s no hurry. Take your
                  time.
                </li>
              </ul>
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent">
          <AccordionSummary
            expandIcon={<MdExpandMore className="text-3xl" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Task 1</p>
          </AccordionSummary>
          <AccordionDetails className="w-full bg-white h-[800px]">
            <iframe
              className="w-full h-[800px]"
              src="https://gamedata.britishcouncil.org/lep25_embed/MjI4NDU=/le"
              title="task 1"
            ></iframe>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent">
          <AccordionSummary
            expandIcon={<MdExpandMore className="text-3xl" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Task 2</p>
          </AccordionSummary>
          <AccordionDetails className="w-full bg-white h-[800px]">
            <iframe
              className="w-full h-[800px]"
              src="https://gamedata.britishcouncil.org/lep25_embed/MjI4NDU=/le"
              title="task 1"
            ></iframe>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="w-full flex flex-col my-16 ">
        <div className="w-full">
          <h3 className="text-[#777777]">Language level</h3>
          <h2 className="text-blue-primary my-4">A1-Elementary</h2>
          <div className="w-max flex justify-start gap-2">
            <RiStarSFill className="text-blue-primary text-4xl" />
            <RiStarSFill className="text-blue-primary text-4xl" />
            <RiStarSFill className="text-blue-primary text-4xl" />
            <RiStarSFill className="text-blue-primary text-4xl" />
            <RiStarSFill className="text-blue-primary text-4xl" />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center my-16">
            <div className="w-full md:w-6/12">
              <h3>Discussion</h3>
              <p className="w-9/12 my-5">
                Do you sometimes help other people with their work? What do you
                do for them?
              </p>
            </div>
            <div className="w-full md:w-3/12">
              <h3>Download</h3>
              <div className="my-5 flex justify-start gap-4 items-center">
                <Button
                  variant="contained"
                  className="text-black font-semibold bg-[#ECECEC] hover:bg-[#ECECEC]/90 font-poppins 
                  rounded-full px-16 py-3"
                >
                  Worksheet
                </Button>
                <Button>
                  <AiOutlineDownload className="w-8 h-8 text-blue-primary" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start my-20 gap-16">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskPage;
