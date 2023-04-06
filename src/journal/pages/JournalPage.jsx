import { MailOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <Typography component="h1">JournalPage</Typography>
        <MailOutline />
      </JournalLayout>
    </>
  );
};
