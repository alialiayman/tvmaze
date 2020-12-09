import { Container, TextField, Grid, Button, InputAdornment } from '@material-ui/core'
import React, { useState } from 'react'
import tvService from './redux/tvService';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Show from './components/Show';

const Home = () => {
    const [keyword, setkeyword] = useState('')
    const [shows, setShows] = useState([])

    const handleSearch = async () => {

        const svc = tvService()
        const result = await svc.searchShows(keyword);
        setShows(result)
    }
    return (
        <div>
            <Container style={{ marginTop: '5rem' }}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <TextField
                            value={keyword}
                            fullWidth
                            variant="filled"
                            onChange={(e) => setkeyword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <SearchOutlinedIcon fontSize="large" />
                                ),
                            }}
                        >

                        </TextField>
                    </Grid>
                    <Grid item xs={1}><Button size="large" color="primary" variant="contained" onClick={handleSearch} style={{ backgroundColor: '#1F2E48', color: '#FFF', textTransform: 'none' }}>Search</Button></Grid>


                    <div style={{ marginTop: '1rem' }}>
                        {shows.map(s => <Show show={s} />)}

                    </div>
                </Grid>


            </Container>
        </div>
    )
}

export default Home
