import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

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
        borderRadius:7,



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
        overFlow:"scroll",
        borderTopRightRadius:7,
        borderBottomRightRadius:7,


    }

}

const JokesList = () => {
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

            </Box>

        </Box>
    )
}

export default JokesList