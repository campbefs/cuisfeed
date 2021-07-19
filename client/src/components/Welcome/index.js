import React from 'react';
import { Box, Text, Collage, Mask, Image, Button, IconButton } from 'gestalt';


import pexel1 from '../../assets/images/welcome/pexels-photo-704569.jpeg';
import pexel2 from '../../assets/images/welcome/pexels-photo-315755.jpeg';
import pexel3 from '../../assets/images/welcome/pexels-photo-1391487.jpeg';
import pexel4 from '../../assets/images/welcome/pexels-photo-2097090.jpeg';
import pexel5 from '../../assets/images/welcome/pexels-photo-1279330.jpeg';
import pexel6 from '../../assets/images/welcome/pexels-photo-1109197.jpeg';
import pexel7 from '../../assets/images/welcome/pexels-photo-461428.jpeg';
import pexel8 from '../../assets/images/welcome/pexels-photo-196643.jpeg';



import pexel11 from '../../assets/images/welcome/pexels-photo-784631.jpeg';
import pexel12 from '../../assets/images/welcome/bing-cherries-ripe-red-fruit.jpg';

import pexel13 from '../../assets/images/welcome/pexels-photo-3338497.jpeg';
import pexel14 from '../../assets/images/welcome/pexels-photo-1893556.jpeg';
import pexel15 from '../../assets/images/welcome/pexels-photo-3655916.jpeg';
import pexel16 from '../../assets/images/welcome/pexels-photo-3737639.jpeg';
import pexel17 from '../../assets/images/welcome/pexels-photo-1579926.jpeg';
import pexel18 from '../../assets/images/welcome/pexels-photo-3987381.jpeg';


function Welcome() {

  return (

    <section id='welcome-container'>

      <Box display="flex" wrap id="box">
          <Box key={0} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={1}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 880,
                    naturalWidth: 659,
                    src: pexel1,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 880,
                    naturalWidth: 586,
                    src: pexel2,
                  },
                  {
                    color: '#000',
                    naturalHeight: 693,
                    naturalWidth: 500,
                    src: pexel3,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel4,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel5,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel6,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel7,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel8,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>

          <Box key={1} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={0}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 751,
                    naturalWidth: 564,
                    src: pexel11,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 200,
                    naturalWidth: 98,
                    src: pexel12,
                  },
                  {
                    color: '#000',
                    naturalHeight: 300,
                    naturalWidth: 200,
                    src: pexel13,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel14,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel15,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel16,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel17,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel18,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>
          <Box key={2} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={1}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 880,
                    naturalWidth: 659,
                    src: pexel1,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 880,
                    naturalWidth: 586,
                    src: pexel2,
                  },
                  {
                    color: '#000',
                    naturalHeight: 693,
                    naturalWidth: 500,
                    src: pexel3,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel4,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel5,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel6,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel7,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel8,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>

          <Box key={3} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={0}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 751,
                    naturalWidth: 564,
                    src: pexel11,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 200,
                    naturalWidth: 98,
                    src: pexel12,
                  },
                  {
                    color: '#000',
                    naturalHeight: 300,
                    naturalWidth: 200,
                    src: pexel13,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel14,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel15,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel16,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel17,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel18,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>

          
          <Box key={4} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={0}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 751,
                    naturalWidth: 564,
                    src: pexel11,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 200,
                    naturalWidth: 98,
                    src: pexel12,
                  },
                  {
                    color: '#000',
                    naturalHeight: 300,
                    naturalWidth: 200,
                    src: pexel13,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel14,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel15,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel16,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel17,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel18,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>

          <Box key={5} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={0}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 751,
                    naturalWidth: 564,
                    src: pexel11,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 200,
                    naturalWidth: 98,
                    src: pexel12,
                  },
                  {
                    color: '#000',
                    naturalHeight: 300,
                    naturalWidth: 200,
                    src: pexel13,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel14,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel15,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel16,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel17,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel18,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>

          <Box key={6} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={0}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 751,
                    naturalWidth: 564,
                    src: pexel11,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 200,
                    naturalWidth: 98,
                    src: pexel12,
                  },
                  {
                    color: '#000',
                    naturalHeight: 300,
                    naturalWidth: 200,
                    src: pexel13,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel14,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel15,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel16,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel17,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel18,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>

          <Box key={7} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={0}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 751,
                    naturalWidth: 564,
                    src: pexel11,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 200,
                    naturalWidth: 98,
                    src: pexel12,
                  },
                  {
                    color: '#000',
                    naturalHeight: 300,
                    naturalWidth: 200,
                    src: pexel13,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel14,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel15,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel16,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel17,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel18,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>

          <Box key={8} padding={0}>
            {/* <Box><Text>layoutKey = {1}</Text></Box> */}
            <Collage
              columns={4}
              height={350}
              width={300}
              layoutKey={0}
              renderImage={({ index, width, height }) => {
                const images = [
                  {
                    color: 'rgb(111, 91, 77)',
                    naturalHeight: 751,
                    naturalWidth: 564,
                    src: pexel11,
                  },
                  {
                    color: 'rgb(231, 186, 176)',
                    naturalHeight: 200,
                    naturalWidth: 98,
                    src: pexel12,
                  },
                  {
                    color: '#000',
                    naturalHeight: 300,
                    naturalWidth: 200,
                    src: pexel13,
                  },
                  {
                    color: '#000',
                    naturalHeight: 517,
                    naturalWidth: 564,
                    src: pexel14,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel15,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel16,
                  },
                  {
                    color: '#000',
                    naturalHeight: 806,
                    naturalWidth: 564,
                    src: pexel17,
                  },
                  {
                    color: '#000',
                    naturalHeight: 200,
                    naturalWidth: 200,
                    src: pexel18,
                  },

                ];
                const image = images[index];
                return (
                  <Mask wash width={width} height={height}>
                    <Image
                      alt="collage image"
                      color={image.color}
                      fit="cover"
                      naturalHeight={image.naturalHeight}
                      naturalWidth={image.naturalWidth}
                      src={image.src}
                    />
                  </Mask>
                );
              }}
            />
          </Box>


      </Box>

      
      <div id="welcome-container-right">
        <h1 id="welcome-title">Welcome to <span style={{fontWeight: "bold", color: "rgba(1,116,232)"}}>Cuisfeed</span></h1>

        <div id="login-container">
          <Button className='login-button' size="lg" icon="facebook" text="Continue with Facebook"/>
          <hr></hr>
          <Button className='login-button' size="lg" text="Continue with Google" />
          <hr></hr>
          <Button className='login-button' color="blue" size="lg" text="Sign Up" />
          <hr></hr>
          <Button className='login-button' color="red" size="lg" text="Login" />
        </div>

      </div>

    </section>
  )
}

export default Welcome;