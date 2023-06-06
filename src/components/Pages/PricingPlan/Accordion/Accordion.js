import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { MdExpandMore } from "react-icons/md";

const AccordionSection = () => {
  return (
    <div className="w-full flex flex-col items-center my-24 gap-10">
      <h2>Frequently asked questions</h2>

      <div className="w-full flex flex-col items-center gap-8  divide-none">
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent before:content-none p-1.5 rounded-md">
          <AccordionSummary
            expandIcon={<MdExpandMore className="w-6 h-6" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>How does the 7-day trial work?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent before:content-none p-1.5 rounded-md">
          <AccordionSummary
            expandIcon={<MdExpandMore className="w-6 h-6" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p>Which subscription plan is right for me?</p>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#F6F6F6]  text-black w-full shadow-none border border-transparent before:content-none p-1.5 rounded-md">
          <AccordionSummary
            expandIcon={<MdExpandMore className="w-6 h-6" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p>What payment methods do you accept?</p>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionSection;
