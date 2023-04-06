import { MailOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { NothingSelectedView } from "../../views/NothingSelectedView";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView/>
      </JournalLayout>
    </>
  );
};
