import {Grid, Toolbar} from "@material-ui/core";
import React, {useContext} from "react";
import QuestionCard from "../components/QuestionCard";
import {makeStyles} from "@material-ui/core/styles";
import {QuestionListContext} from "../contexts/QuestionList.context";
// import ScrollToTopButton from "../components/ScrollToTopButton";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "../components/ScrollToTopButton";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        position: "absolute",
        // display: "flow"
        // justifyItems: "center",
        // alignItems: "center",
        // minHeight: "100vh",
        // alignSelf: "center"
        // margin: "2px",
        // maxWidth: 800,
    },
}));

export default function QuestionList() {
    const classes = useStyles();

    const {questions, setQuestions} = useContext(QuestionListContext);
    if (questions === undefined) {
        return (
            <div>
                No questions! There is a reason we don't call this StackOverflow.com
            </div>
        )
    }
    else {
        return (
            <div className={classes.mainGrid}  >
                {questions.map((question, i) => (
                    <QuestionCard key={i} question={question} />
                ))}
            </div>
            // <Grid item xs={12} md={12} lg={12} className={classes.mainGrid} spacing={0} >
            //     {questions.map((question, i) => (
            //         <QuestionCard key={i} question={question} />
            //     ))}
            // </Grid>

        )
    }
}