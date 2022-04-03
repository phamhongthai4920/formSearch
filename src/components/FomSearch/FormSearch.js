import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
function FormSearch() {
    const [age, setAge] = React.useState("");

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <form >
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px', justifyContent: 'space-between' }}>
                    <Box sx={{ borderRight: '1px solid #dadada' }}>
                        <Box sx={{ display: "flex", alignItems: 'center' }}>
                            <Box sx={{ padding: '0 20px 0 0' }}> 受付簿</Box>
                            <TextField
                                title="Title"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: "25ch", margin: '0 200px 0 0' }}

                            />
                            <FormControl sx={{ paddingRight: '200px', display: 'flex' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ paddingRight: '20px' }}>受付簿</Box>
                                    <Select
                                        title="age"
                                        sx={{ width: '100px' }}
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChangeAge}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </Box>

                            </FormControl>
                        </Box >


                        <Box sx={{ display: "flex", alignItems: 'center', width: " 100%" }}>
                            <Box sx={{ padding: '0 20px 0 0' }}> 受付簿</Box>
                            <TextField
                                fullWidth
                                title="Title"
                                id="outlined-start-adornment"
                                sx={{ m: 1, marginRight: '200px' }}

                            />
                        </Box>
                        <Box sx={{ fontSize: '12px' }}>文字数は最大100文字、ワードは10個までスペース区切りで入力可能</Box>
                    </Box>
                    <Box sx={{ padding: '0 20px' }}>
                        <Button sx={{ padding: '6px 12px', background: '#001e3c' }} variant="contained">
                            <SearchIcon sx={{ fontSize: '20px' }} />
                            <Box sx={{ fontSize: '14px' }}>Search</Box></Button>
                    </Box>
                </Box>



            </form >
            <Box>
                <Button variant="text">
                    <FileDownloadIcon sx={{
                        padding: '10px 12px', border: '1px solid #2296f0', borderRadius: '4px', "&:hover": {
                            cursor: "pointer",
                            background: '#2296f0',
                            color: '#fff'

                        }
                    }} />
                </Button>
            </Box>

        </Box>


    )
}
export default FormSearch