import React from 'react';
import { Box, Text, Heading } from 'gestalt';

export default function Post() {
  return (
    <section className = 'topic-container'>
      
      <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
        <div style={{width: "40%", backgroundColor: "green", padding: "20px 30px"}}>
          <Box marginBottom={5}>
            <Heading align="center">Pizza that's pretty good</Heading>
          </Box>
          <Text marginTop={3}>A bunch of text</Text>
        </div>
        <div style={{width: "60%", paddingTop: "100px", backgroundColor: "purple", textAlign: "center"}}>
          <img style={{width: "400px", height: "400px", borderRadius: "8px"}} alt="recipe image" src="https://www.edamam.com/web-img/7fe/7fee72cbf470edc0089493eb663a7a09.jpg"/>
        </div>
      </div>

    </section>
  )
}