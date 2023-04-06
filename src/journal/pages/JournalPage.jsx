import React from "react";
import { NoteView } from "../../views/NoteView";
import { NothingSelectedView } from "../../views/NothingSelectedView";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <NothingSelectedView/> */}
        <NoteView/>
      </JournalLayout>
    </>
  );
};
