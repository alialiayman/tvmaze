import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const Show = ({ show }) => {
    return (
        <div style={{ width: '100%', backgroundColor: '#F2F3F8', marginBottom: '4rem', borderRadius: '16px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '30px' }}>
                {show.show.image && <img src={show.show.image.medium} alt={show.show.name} style={{height: '240px', borderRadius: '16px'}}/>}
            </div>
            <div style={{ marginLeft: '25%', padding: '1rem' }}>
                <Typography align="left" style={{ color: '#1F2E48' }} variant="h5" gutterBottom>{show.show.name}</Typography>
                <div style={{ height: '4.4em', lineHeight: '1.1em', overflow: 'hidden' , textAlign: 'left'}}>
                   {show.show.summary.replace(/<.*?>/g, '')}
                </div>
                <div style={{ marginTop: '2rem', display: 'flex' }}>
                    <Button variant="contained" style={{ backgroundColor: '#1F2E48', color: '#FFF', textTransform: 'none' }}>Show Episodes</Button>
                </div>
            </div>
        </div>
    )
}

export default Show
