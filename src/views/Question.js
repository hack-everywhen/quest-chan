import React, {createRef, useContext, useEffect, useState} from "react";
import axios from "axios";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Button, Grid, Icon, IconButton, TextField} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {CloudUploadOutlined, ShareRounded} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import QuestionCard from "../components/QuestionCard";
import SimpleSnackbar from "../components/snackbar";
import CommentList from "../components/CommentList";

const useStyles = makeStyles({
    root: {
        // minWidth: 800,
        // maxHeight: 60,
        // maxWidth: 600,
        // margin: '10px 10px'
        position: "absolute",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    question: {
        minWidth: "800"
    }
});

export default function Question(props) {
    // const {questions, setQuestion} = useContext(QuestionListContext);
    const {match: {params}} = props;
    const {questionId} = params;
    const [question, setQuestion] = useState();
    const [inputComment, setInputComment] = useState();
    const [comments, setComments] = useState()
    const [showingSnackbar, toggleSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("Submitting comment..")
    const classes = useStyles();
    // const question = undefined;


    useEffect(() => {
        // const apiURL = `https://cors-anywhere.herokuapp.com/localhost:8000/api/question`
        const apiURL = `http://localhost:8000/api/question/${questionId}`
        const apiURLComments = `http://localhost:8000/api/question/${questionId}/comments`
        axios.get(apiURL, {headers: {Accept: "application/json"}})
            .then((res) => {
                setQuestion(res.data);
            }).catch((error) => {
            console.log(error);
        });
        axios.get(apiURLComments, {headers: {Accept: "application/json"}})
            .then((res) => {
                setComments(res.data);
            }).catch((error) => {
            console.log(error);
        });
    }, []);

    const submitComment = (event) => {
        event.preventDefault();
        toggleSnackbar(true);
        let url = `http://localhost:8000/api/comment/${questionId}`;
        axios.post(url, {
            text: inputComment,
            author: {
                id: "60317beb9cb1f441807f864c",
                username: "dorseyjacky",
            }
        })
        .then(function (response) {
            toggleSnackbar(false);
            setSnackbarMessage("Comment posted!")
            toggleSnackbar(true);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    if(!question) {
        return (
            <div>
                Question got lost. Sorry. Go away.
            </div>
        )
    }
    else {
        return (
            <div className={classes.root}>
                <Typography variant="h5" component="h2">
                    {question.query}
                </Typography>
                <Typography variant="body2" component="p" >
                    {question.description}
                </Typography>
                <form onSubmit={submitComment}>
                    <TextField onChange={event => setInputComment(event.target.value)}
                               required={""}
                               variant={"outlined"}
                               value={inputComment}
                               label={"Write a comment.."}/>
                    <Button type={"submit"}>
                        <FavoriteIcon />
                    </Button>
                </form>
                <CommentList comments={comments} />
                {/*<Button onClick={() => toggleSnackbar(true)}>*/}
                {/*    <CloudUploadOutlined />*/}
                {/*</Button>*/}
                <SimpleSnackbar message={snackbarMessage} open={showingSnackbar} setOpen={toggleSnackbar}/>
            </div>
            // <div>
            //
            // </div>
            // <Card className={classes.root} >
            //     <CardContent>
            //         <Typography className={classes.title} color="textSecondary" gutterBottom>
            //             #tag1 #tag2
            //         </Typography>
            //     </CardContent>
            //     <CardActions disableSpacing>
            //         <IconButton aria-label="add to favorites">
            //             <FavoriteIcon />
            //         </IconButton>
            //         <IconButton aria-label="share">
            //             <ShareRounded />
            //         </IconButton>
            //     </CardActions>
            // </Card>
        )
    }
}