import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const QuestionListContext = createContext();

export function QuestionListProvider(props) {
    const [question, setQuestions] = useState();

    useEffect(() => {
        // const apiURL = `https://cors-anywhere.herokuapp.com/localhost:8000/api/question`
        const apiURL = `http://localhost:8000/api/question`;
        axios.get(apiURL, {headers: {Accept: "application/json"}})
            .then((res) => {
                setQuestions((questions) => {
                    return res.data;
                })
            }).catch((error) => {
                console.log(error);
        })
    }, []);

    return (
        <QuestionListContext.Provider value={{questions: question, setQuestion: setQuestions}} >
            {props.children}
        </QuestionListContext.Provider>
    )
}