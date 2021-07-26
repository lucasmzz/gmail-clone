import React from "react";
import { IconButton } from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon,
  Error as ErrorIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  WatchLater as WatchLaterIcon,
  CheckCircle as CheckCircleIcon,
  LabelImportant as LabelImportantIcon,
  MoreVert as MoreVertIcon,
  UnfoldMore as UnfoldMoreIcon,
  Print as PrintIcon,
  ExitToApp as ExitToAppIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "./features/mailSlice";
import { useSelector } from "react-redux";
import "./Mail.css";

const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton>
            <ArrowBackIcon onClick={() => history.push("/")} />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
