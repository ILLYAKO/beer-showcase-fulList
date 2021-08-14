import React from "react";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ItemAccordion({ itemName, itemAccordion }) {
  const classes = useStyles();
  console.log("itemName:", itemName);
  console.log("itemAccordion", itemAccordion);

  const isDouleNameValue = (text) =>
    ["volume", "boil_volume", "temp", "amount", "yeast"].includes(text);

  const showInnerAccordion = (itemKey, itemAccordion) => {
    if (!itemAccordion) {
      return (
        <AccordionDetails>
          <Typography key={uuidv4()}>
            <span className={"beer-descripttion-bold"}>
              {!isNaN(itemKey)
                ? Number(itemKey) + 1
                : itemKey.replace("_", " ")}
            </span>
            : <span className="beer-descripttion">NO DATA</span>
          </Typography>
        </AccordionDetails>
      );
    }

    if (isDouleNameValue(itemKey)) {
      return (
        <AccordionDetails>
          <Typography key={uuidv4()}>
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
          </Typography>
        </AccordionDetails>
      );
    }

    if (
      typeof itemAccordion === "number" ||
      typeof itemAccordion === "string"
    ) {
      return (
        <AccordionDetails>
          <Typography key={uuidv4()}>
            <span className={"beer-descripttion-bold"}>
              {!isNaN(itemKey)
                ? Number(itemKey) + 1
                : itemKey.replace("_", " ")}
            </span>
            : <span className="beer-descripttion"> {itemAccordion}</span>
          </Typography>
        </AccordionDetails>
      );
    }

    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
          <Typography className={classes.heading}>
            <li key={uuidv4()}>
              <span className={"beer-descripttion-bold"}>
                {!isNaN(itemKey)
                  ? Number(itemKey) + 1
                  : itemKey.replace("_", " ")}
              </span>
            </li>
          </Typography>
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
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography /*className={classes.heading}*/>
          <li key={uuidv4()}>
            <span className={"beer-descripttion-bold"}>
              {!isNaN(itemName)
                ? Number(itemName) + 1
                : itemName.replace("_", " ")}
            </span>
          </li>
        </Typography>
      </AccordionSummary>

      {Object.keys(itemAccordion).length
        ? Object.keys(itemAccordion).map((itemKey) => {
            return showInnerAccordion(itemKey, itemAccordion[itemKey]);
          })
        : "No data"}
    </Accordion>
  );
}
