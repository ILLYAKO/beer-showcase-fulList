import React from "react";
import { v4 as uuidv4 } from "uuid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";

export default function ItemAccordion({ itemName, itemAccordion }) {
  const textStringNumnerConverter = (text) =>
    !isNaN(text) ? Number(text) + 1 : text.replace("_", " ");

  const isDouleNameValue = (text) =>
    ["volume", "boil_volume", "temp", "amount"].includes(text);

  const showInnerAccordion = (itemKey, itemAccordion) => {
    if (!itemAccordion) {
      return (
        <AccordionDetails key={uuidv4()}>
          <li>
            <span className={"beer-descripttion-bold"}>
              {textStringNumnerConverter(itemKey)}
            </span>
            : <span className="beer-descripttion">no data</span>
          </li>
        </AccordionDetails>
      );
    }

    if (isDouleNameValue(itemKey)) {
      return (
        <AccordionDetails key={uuidv4()}>
          <li>
            <span className={"beer-descripttion-bold"}>
              {textStringNumnerConverter(itemKey)}
            </span>
            :{" "}
            <span className="beer-descripttion">
              {itemAccordion["value"]}
              {itemAccordion["unit"]}
            </span>
          </li>
        </AccordionDetails>
      );
    }

    if (
      typeof itemAccordion === "number" ||
      typeof itemAccordion === "string"
    ) {
      return (
        <AccordionDetails key={uuidv4()}>
          <li>
            <span className={"beer-descripttion-bold"}>
              {textStringNumnerConverter(itemKey)}
            </span>
            : <span className="beer-descripttion"> {itemAccordion}</span>
          </li>
        </AccordionDetails>
      );
    }

    return (
      <Accordion key={uuidv4()} className="beer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
          className="beer-accordionsummary"
        >
          <li>
            <span className={"beer-descripttion-bold"}>
              {textStringNumnerConverter(itemKey)}:
            </span>
          </li>
        </AccordionSummary>
        {Object.keys(itemAccordion).length
          ? Object.keys(itemAccordion).map((itemKey) => {
              return showInnerAccordion(itemKey, itemAccordion[itemKey]);
            })
          : "No data"}
      </Accordion>
    );
  };

  return (
    <Accordion key={uuidv4()} className="beer-accordion">
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <span className={"beer-descripttion-bold"}>
          {textStringNumnerConverter(itemName)}:
        </span>
      </AccordionSummary>
      <ul>
        {Object.keys(itemAccordion).length
          ? Object.keys(itemAccordion).map((itemKey) => {
              return showInnerAccordion(itemKey, itemAccordion[itemKey]);
            })
          : "No data"}
      </ul>
    </Accordion>
  );
}
