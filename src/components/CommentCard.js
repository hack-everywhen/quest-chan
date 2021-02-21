import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import {IconButton, Paper} from "@material-ui/core";
import {ExpandMoreRounded, ShareRounded} from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 800,
        // maxWidth: 600,
        margin: '10px 10px'
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
    // expand: {
    //     transform: 'rotate(0deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // },
    // expandOpen: {
    //     transform: 'rotate(180deg)',
    // },
});

export default function CommentCard(props) {
    const classes = useStyles();
    // const history = useHistory();
    const {text} = props;
    // const [question, setQuestion] = useContext(QuestionContext);

    // const mouseDownCoords = e => {
    //     window.checkForDrag = e.clientX;
    // };
    //
    // const clickOrDrag = e => {
    //     const mouseUp = e.clientX;
    //     if (
    //         mouseUp < window.checkForDrag + 6 &&
    //         mouseUp > window.checkForDrag - 6
    //     ) {
    //         handleClick();
    //     }
    // };
    //
    // const handleClick = () => {
    //     let url = `/question/${_id}`;
    //     history.push(url);
    // }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="body2" component="p" >
                    {text}
                    {/*{author.username}*/}
                </Typography>
            </CardContent>
            {/*<CardActions disableSpacing>*/}
            {/*    <IconButton aria-label="add to favorites">*/}
            {/*        <FavoriteIcon />*/}
            {/*    </IconButton>*/}
            {/*    <IconButton aria-label="share">*/}
            {/*        <ShareRounded />*/}
            {/*    </IconButton>*/}
            {/*</CardActions>*/}
        </Card>
    );
}
