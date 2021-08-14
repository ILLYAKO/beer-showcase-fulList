import React from "react";
import { v4 as uuidv4 } from "uuid";
// import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";


export default function ItemAccordion({ itemName, itemAccordion }) {
  // const classes = useStyles();

  // const isDouleNameValue = (text) =>["volume", "boil_volume", "temp", "amount", "yeast"].includes(text);
  const isDouleNameValue = (text) =>
    ["volume", "boil_volume", "temp", "amount"].includes(text);


  const showInnerAccordion = (itemKey, itemAccordion) => {


    // console.log(
    //   "Key",
    //   itemKey,
    //   "- Value: ",
    //   itemAccordion,
    //   " Type: ",
    //   typeof itemAccordion
    // );


    if (!itemAccordion) {
       // twist : null
      return (
        <AccordionDetails key={uuidv4()}>
          {/* <Typography> */}
          <li>
            <span className={"beer-descripttion-bold"}>
              {!isNaN(itemKey)
                ? Number(itemKey) + 1
                : itemKey.replace("_", " ")}
            </span>
            : <span className="beer-descripttion">no data</span>
          </li>
          {/* </Typography> */}
        </AccordionDetails>
      );
    }

    if (isDouleNameValue(itemKey)) {
      console.log(itemKey, ":", itemAccordion);
      return (
        <AccordionDetails key={uuidv4()}>
          {/* <Typography> */}
          <li>
            <span className={"beer-descripttion-bold"}>
              {!isNaN(itemKey)
                ? Number(itemKey) + 1
                : itemKey.replace("_", " ")}
            </span>
            :{" "}
            <span className="beer-descripttion">
              {itemAccordion["value"]}
              {itemAccordion["unit"]}
            </span>
          </li>
          {/* </Typography> */}
        </AccordionDetails>
      );
    }

    if (
      typeof itemAccordion === "number" ||
      typeof itemAccordion === "string"
    ) {
      // console.log(itemKey, ":", itemAccordion);
      return (
        <AccordionDetails key={uuidv4()}>
          {/* <Typography> */}
          <li>
            <span className={"beer-descripttion-bold"}>
              {
              !isNaN(itemKey)
                ? Number(itemKey) + 1
                : itemKey.replace("_", " ")}
            </span>
            : <span className="beer-descripttion"> {itemAccordion}</span>
          </li>
          {/* </Typography> */}
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
          {/* <Typography
             className={classes.heading} className="beer-accordiontypography"
          > */}
          <li>
            <span className={"beer-descripttion-bold"}>
              {!isNaN(itemKey)
                ? Number(itemKey) + 1
                : itemKey.replace("_", " ")}:
            </span>
          </li>
          {/* </Typography> */}
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
        {/* <Typography
          className={classes.heading} className="beer-accordiontypography"
        > */}
        <span className={"beer-descripttion-bold"}>
          {!isNaN(itemName) ? Number(itemName) + 1 : itemName.replace("_", " ")}:
        </span>
        {/* </Typography> */}
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
