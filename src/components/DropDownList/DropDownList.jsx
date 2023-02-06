import React from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DropDownList(props) {
    const { label, data } = props;
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="State"
                    label={label}
                    onChange={() => console.log("selected")}
                >
                    {data?.map((e) => {
                        return <MenuItem value={e}>{e}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}

export default DropDownList