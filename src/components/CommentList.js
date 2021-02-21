import {Grid, Toolbar} from "@material-ui/core";
import React, {useContext} from "react";
import QuestionCard from "../components/QuestionCard";
import {makeStyles} from "@material-ui/core/styles";
import {QuestionListContext} from "../contexts/QuestionList.context";
import CommentCard from "./CommentCard";
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

export default function CommentList(props) {
    const classes = useStyles();
    const {comments} = props;

    if (comments === undefined) {
        return (
            <div>
                Be the first to comment!
            </div>
        )
    }
    else {
        return (
            <div className={classes.mainGrid}  >
                {comments.map((comment, i) => (
                    <CommentCard key={i} comment={comment} />
                ))}
            </div>
        )
    }
}