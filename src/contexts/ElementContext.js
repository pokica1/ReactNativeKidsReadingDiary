import React, { useReducer, useEffect } from "react";
import { actionTypes } from "../aids/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "my key";

const ElementContext = React.createContext();

let startState = [];

//TODO Extract to reducer file
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.create:
      return [
        ...state,
        {
          id: new Date().getTime(),
          bookTitle: action.payload.bookTitle,
          pagesFrom: action.payload.pagesFrom,
          pagesTo: action.payload.pagesTo,
          parentComment: action.payload.parentComment,
          teacherComment: action.payload.teacherComment,
          enjoymentRating: action.payload.enjoymentRating,
          date: new Date(),
        },
      ];
    case actionTypes.update:
      return state.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        } else {
          return element;
        }
      });
    case actionTypes.delete:
      return state.filter((element) => element.id !== action.payload.id);
    case actionTypes.save:
      try {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.log(error);
      } finally {
        return state;
      }
    case actionTypes.load:
      return [
        ...state,
        {
          id: new Date().getTime(),
          bookTitle: action.payload.bookTitle,
          pagesFrom: action.payload.pagesFrom,
          pagesTo: action.payload.pagesTo,
          parentComment: action.payload.parentComment,
          teacherComment: action.payload.teacherComment,
          enjoymentRating: action.payload.enjoymentRating,
          date: new Date(action.payload.date),
        },
      ];
    default:
      return state;
  }
};

export const ElementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, startState);

  useEffect(() => {
    const loadStorage = async () => {
      const storage = await AsyncStorage.getItem(STORAGE_KEY);
      if (storage !== null && state.length === 0) {
        startState = JSON.parse(storage);
        startState.forEach((element) => {
          dispatch({ type: actionTypes.load, payload: element });
        });
      }
    };
    loadStorage();
  }, [STORAGE_KEY]);

  //TODO Extract Actions
  const addItem = (
    bookTitle,
    pagesFrom,
    pagesTo,
    parentComment,
    teacherComment,
    enjoymentRating,
    callback
  ) => {
    dispatch({
      type: actionTypes.create,
      payload: {
        bookTitle,
        pagesFrom,
        pagesTo,
        parentComment,
        teacherComment,
        enjoymentRating,
      },
    });
    dispatch({ type: actionTypes.save });
    if (callback) {
      callback();
    }
  };

  const removeItem = (id, callback) => {
    dispatch({ type: actionTypes.delete, payload: { id: id } });
    dispatch({ type: actionTypes.save });
    if (callback) callback();
  };

  const updateItem = (
    id,
    bookTitle,
    pagesFrom,
    pagesTo,
    parentComment,
    teacherComment,
    enjoymentRating,
    date,
    callback
  ) => {
    dispatch({
      type: actionTypes.update,
      payload: {
        id,
        bookTitle,
        pagesFrom,
        pagesTo,
        parentComment,
        teacherComment,
        enjoymentRating,
        date,
      },
    });
    dispatch({ type: actionTypes.save });
    if (callback) {
      callback();
    }
  };

  return (
    <ElementContext.Provider
      value={{
        state: state,
        create: addItem,
        remove: removeItem,
        update: updateItem,
      }}
    >
      {children}
    </ElementContext.Provider>
  );
};

export default ElementContext;
