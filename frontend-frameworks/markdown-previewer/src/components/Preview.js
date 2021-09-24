import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import { Grid } from '@mui/material'
export default function Preview({ text }) {
  
  const getMarkdownText = () => {
    var rawMarkup = marked(text, {breaks: true})
    return { __html: rawMarkup }
  }

  return (
    <>
      <Grid xs={12} md={8} container item justifyContent="center">
        <Box 
          id="preview" 
          dangerouslySetInnerHTML={getMarkdownText()} 
          sx={{
            height: '100vh', 
            overflow: 'scroll',
            width: '100%',
            align: 'center'
          }}
        >
        </Box>
      </Grid>
    </>
  )
}

Preview.propTypes = {
  text: PropTypes.string.isRequired
}