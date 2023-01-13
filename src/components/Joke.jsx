import React from 'react'
import { Box } from '@mui/system'

const style = {
    joke:{
        display:"flex",
        borderBottom:"2px solid #eeeeee",
        alignItems:"center",
        justifyContent:"center",
        fontWeight:400,
        padding:"1rem",


    },
    button:{
        display: "flex" ,
        marginRight:"1rem",
        justifyContent:"center",
        width:"15%",
        backgroundColor:"red",
        alignItems:"center",
        



    }
}

const Joke = () => {
  return (
    <Box sx={style.joke}>

      <Box sx={style.button}>

      </Box>

    </Box>
  )
}

export default Joke