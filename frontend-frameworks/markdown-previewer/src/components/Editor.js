import { Grid, Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'



export default function Editor({ text, setText }) {

  return (
    <>
      <Grid container item xs={12} justifyContent="center">
        <Grid container item xs={12} md={8} justifyContent="center" >
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              maxWidth: '600px',

            }}
          >
          </Box>
          <textarea
            id="editor"
            onChange={(e) => setText(e.target.value)}
            value={text}
            style={{ width: '99%', margin: '0', padding: '5px', minWidth: '99%', minHeight: '700px' }}
          />
        </Grid>
      </Grid>
    </>
  )
}

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
}
