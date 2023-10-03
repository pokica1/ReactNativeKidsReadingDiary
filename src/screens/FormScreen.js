import React, { useContext, useState } from "react";
import ElementContext from "../contexts/ElementContext";
import ReusableForm from "../components/ReusableForm/ReusableForm";

const FormScreen = ({ navigation }) => {
  const { create } = useContext(ElementContext);

  const [bookTitle, setBookTitle] = useState("");
  const [pagesFrom, setPagesFrom] = useState("");
  const [pagesTo, setPagesTo] = useState("");
  const [parentComment, setParentComment] = useState("");
  const [teacherComment, setTeacherComment] = useState("");
  const [enjoymentRating, setEnjoymentRating] = useState("");

  return (
    <ReusableForm
      bookTitle={bookTitle}
      pagesFrom={pagesFrom}
      pagesTo={pagesTo}
      parentComment={parentComment}
      teacherComment={teacherComment}
      enjoymentRating={enjoymentRating}
      create={create}
      setBookTitle={setBookTitle}
      setPagesFrom={setPagesFrom}
      setPagesTo={setPagesTo}
      setParentComment={setParentComment}
      setTeacherComment={setTeacherComment}
      setEnjoymentRating={setEnjoymentRating}
      navigation={navigation}
      mode={"create"}
    ></ReusableForm>
  );
};

export default FormScreen;
