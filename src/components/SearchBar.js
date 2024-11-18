import React from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ cityName, setCityName, getWeatherData }) => {

    return (
        <Box component="form" onSubmit={getWeatherData}>
            <TextField
                label="Enter City Name"
                fullWidth
                required
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                type="submit"
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    );
};

export default SearchBar;