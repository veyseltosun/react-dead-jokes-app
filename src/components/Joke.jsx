import React, {useCallback} from 'react'
import { Box } from '@mui/system'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Typography } from '@mui/material';

const style = {
    joke: {
        display: "flex",
        borderBottom: "2px solid #eeeeee",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        padding: "1rem",


    },
    button: {
        display: "flex",
        marginRight: "1rem",
        justifyContent: "center",
        width: "15%",
        // backgroundColor:"red",
        alignItems: "center",




    },
    arrow: {
        fontSize: "2rem",
        margin: "10px",
        cursor: "pointer",

    },
    votes: {
        fontSize: 20,
    },
    jokeText: {
        width: "75%",
        fontSize: "1.2rem",

    },
    jokeEmoji:{
        fontSize:"3rem",
        marginLeft:"auto",
        borderRadius:"50%",
        boxShadow:"0 19px 38px  rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
        
    }
}

const Joke = ({votes, text, upvote, downvote}) => {
    const getEmoji = useCallback((votes) => {
        if(votes >=9){
            return "em em-rolling_on_the_floor_laughing";

        }else if(votes >= 6){
            return "em em-laughing";
        }else if(votes >=3) {
            return "em em-slightly_smiling_face";
        }else if(votes >=0){
            return "em em-neutral_face"
        }else {
            return "em em-angry"
        }

    }, []);
    return (
        <Box sx={style.joke}>

            <Box sx={style.button}>
                <ArrowUpwardIcon sx={style.arrow} onClick={()=>{upvote()}}/>
                <Typography sx={style.votes}>
                    {votes}

                </Typography>
                <ArrowDownwardIcon sx={style.arrow}onClick={()=>{downvote()}} />

            </Box>
            <Box sx={style.jokeText}>
               {text}

            </Box>
            <Box sx={style.jokeEmoji}>
                <i className={getEmoji(votes)} />
            </Box>

        </Box>
    )
}

export default Joke