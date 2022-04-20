import { ThemeProvider } from '@emotion/react';
import { createTheme, MenuItem, TextField } from '@mui/material'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

const Header = ({ setCategory, category, word, setWord, LightMdoe }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMdoe ? "#000" : '#fff',
            },
        mode: LightMdoe ? 'light' : 'dark',
    },
  });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    };

  return (
    <div>
        <span className='title'> {word ? word : "Word Hunt"}</span>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
                <TextField 
                    className='search' 
                    label="Search Word" 
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    variant="standard" 
                />
                  <TextField
                    className='select'
                    select
                    label="Language"
                    value={category}
                    onChange={(e) => handleChange(e.target.value)}
                   >
                    {categories.map((option)=> (
                        <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                    ))}
                </TextField>
            </ThemeProvider>
            
        </div>
    </div>
  )
}

export default Header