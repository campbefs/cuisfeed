import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import './main.css'
import bgImg from '../../assets/images/collage.jpeg'

function Main() {

    return (
        <div className="mainText">
          <h1>What do you want to eat?</h1>  
          <h3>The search for your answer ends here.</h3>
          <Image src={bgImg} centered />
          <Icon name='arrow down' size='huge' className='icon'/>
        </div>
    )
}

export default Main;
