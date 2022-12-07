import React from 'react'
import { TextField, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import "./Search.css"


const Search = ({word, setWord}) => {
    const darkTheme = createTheme({
        palettle: {
            primary:{
                main: '#ffffff',
            },
            type: "dark",
        },
    });
  return (
    <div className='search'>
        <ThemeProvider theme={darkTheme}>
            <TextField className='input' id="standard-basic" label="Search a Word" variant="standard" value={word} onChange={(e) => setWord(e.target.value)}/>
        </ThemeProvider>
        
    </div>
  )
}

export default Search