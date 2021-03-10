import React, { useEffect, useState } from "react";
import "./book.scss";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Button, Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

function Book(props) {
  useEffect(() => {
    console.log("Componente actualizado");
  });

  const [state, setState] = useState({
    windowInfo: false,
  });

  const showInfo = () => {
    setState(!state.windowInfo);
  };

  return (
    <div className="divCard">
      <div className="card col-lg-12">
        {
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div className="responsive">
                <Button className="buttonCard" {...bindTrigger(popupState)}>
                  <Paper elevation={3} className="paper">
                    <img src={props.image}></img>
                  </Paper>
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                >
                  <Box p={2}>
                    <Typography>
                      <h3 className="title">{props.title}</h3>
                      <div className="popupMarco">
                        <p className="popupPcursive">
                          <strong>Subtitle: </strong>
                          {props.subtitle}
                        </p>
                        <h4 className="h4 end">
                          <strong>Authors: </strong>
                          {props.authors}
                        </h4>
                        <p className="popupPcursive">
                          <strong>Publisher: </strong>
                          {props.publisher}
                        </p>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Rating
                            name="read-only"
                            value={props.averageRating}
                            readOnly
                          />
                        </Box>
                        <p className="popupPcursive">
                          <strong>pages: </strong>
                          {props.pageCount}
                        </p>
                      </div>
                    </Typography>
                    <Button
                      size="medium"
                      href={props.previewLink}
                      variant="contained"
                      color="primary"
                    >
                      Read book
                    </Button>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        }
      </div>
    </div>
  );
}
export default Book;
