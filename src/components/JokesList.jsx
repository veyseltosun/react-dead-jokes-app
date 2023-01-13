import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React, { useEffect, useState, useCallback} from 'react'
import Joke from './Joke';
import axios from 'axios';

const styleBox = {
    display: "flex",
    width: "80%",
    height: "80%",
    // backgroundColor:"red",
    // alignItems:"center",
    // justifyContent:"center",

    sidebar: {
        backgroundColor: "#9575cd",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // height: "30%" ,
        width: "30%",
        textAlign: "center",
        boxShadow: "0 19px 38px  rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
        justifyContent: "center",
        zIndex: 2,
        borderRadius: "7px",



    },
    title: {
        fontSize: "3rem",
        color: "white",
        fontWeight: 700,
        margin:10,
        letterSpacing:0,
    },

    image:{
        width:"50%",
        boxShadow: "0 19px 38px  rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
        borderRadius:"40%",
    },
    jokesList:{
        height: "90%",
        width:"70%",
        backgroundColor:"white",
        alignSelf:"center",
        boxShadow:"0 19px 38px  rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
        overflow:"scroll",
        borderTopRightRadius: 8,
        borderBottomRightRadius:7,


    }

}

const JokesList = () => {

    const[jokes, setJokes] = useState(null);



    async function getJokes () {
        let newJokes = [];
        for(let i= 0; i<7; i++){
            let respond = await axios.get("https://icanhazdadjoke.com/", {
                headers:{Accept:"application/json"}
            })
            newJokes.push({id:i, text:respond.data.joke, votes:0,})
        }
        setJokes(newJokes)

    }



    useEffect(()=>{

        getJokes()

    },[])
    
    const handleVote = useCallback((id, offset) => {
        let filterJokes = jokes.filter((joke) => joke.id !== id)
        let joke = jokes.find((joke) => joke.id === id)
        joke.votes+=offset
        filterJokes.push(joke)
        filterJokes.sort((a,b) => b.votes - a.votes)
        setJokes(filterJokes)

    },[jokes, setJokes])

    if(jokes){
        return (
            <Box sx={styleBox}>
                <Box sx={styleBox.sidebar}>
                    <Typography sx={styleBox.title}>
                        Dad
                        <br />
                        Jokes
                    </Typography>
    
                    <img style={styleBox.image}src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='imoji' />
    
                </Box>
                <Box sx={styleBox.jokesList}>
                   {jokes.map((joke)=>{
                    return(
                        <Joke votes={joke.votes} text={joke.text} key={joke.id} upvote={()=>{handleVote(joke.id, 1)}} downvote={()=>{handleVote(joke.id, -1)}}/>
                    )
                   })}
    
                </Box>
    
            </Box>
        )
    } else{
        return(
            <h1>Loading.....</h1>
        )
    }
}

export default JokesList