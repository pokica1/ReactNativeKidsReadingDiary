import React, { useContext, useState } from "react";
import ElementContext from "../contexts/ElementContext";
import ReusableForm from "../components/ReusableForm/ReusableForm";

const EditElementScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const { state, update } = useContext(ElementContext);
  const currentElement = state.find((element) => element.id === id);

  const [bookTitle, setBookTitle] = useState(currentElement.bookTitle);
  const [pagesFrom, setPagesFrom] = useState(currentElement.pagesFrom);
  const [pagesTo, setPagesTo] = useState(currentElement.pagesTo);
  const [parentComment, setParentComment] = useState(
    currentElement.parentComment
  );
  const [teacherComment, setTeacherComment] = useState(
    currentElement.teacherComment
  );
  const [enjoymentRating, setEnjoymentRating] = useState(
    currentElement.enjoymentRating
  );

  return (
    <ReusableForm
      bookTitle={bookTitle}
      pagesFrom={pagesFrom}
      pagesTo={pagesTo}
      parentComment={parentComment}
      teacherComment={teacherComment}
      enjoymentRating={enjoymentRating}
      update={update}
      setBookTitle={setBookTitle}
      setPagesFrom={setPagesFrom}
      setPagesTo={setPagesTo}
      setParentComment={setParentComment}
      setTeacherComment={setTeacherComment}
      setEnjoymentRating={setEnjoymentRating}
      navigation={navigation}
      mode={"update"}
      currentElement={currentElement}
    ></ReusableForm>
  );
};

export default EditElementScreen;
