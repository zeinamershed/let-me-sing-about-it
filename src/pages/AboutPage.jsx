import React from 'react'
import zeina from '../assets/images/zeinas-img.jpeg';
import dani from '../assets/images/danis-img.jpg';
import andreia from '../assets/images/andreias-img.jpg'

function AboutPage() {
  return (
    <div className='aboutUs'>
      <h1>About US</h1>
      <p className='p-indent'>Welcome to "Let Me Sing About It," a vibrant karaoke app designed by three passionate web development students:
        Andreia, Daniela and Zeina. At Ironhack Institute, 
        under the mentorship of our dedicated teacher, Joshua, we've poured our energy into crafting this platform.
        In just five weeks of our Bootcamp, utilizing JavaScript, React, and various APIs, we've brought to life an 
        app that's not just about singing but also about expressing yourself through music. With a diverse collection
        of songs, everyone can find their favorite tunes to sing along to. What sets us apart is our feature that 
        allows users to add their favorite songs, ensuring a constantly evolving and personalized experience. 
        "Let Me Sing About It" isn't just about singing; it's about unleashing your feelings and connecting with others
        through the power of music. We're thrilled to share our creation with you, and we hope it brings joy and 
        inspiration to all who use it.</p>
        <div className='container-about'>
            <div>
                <img src={andreia} alt='andreia-img' />
                <h5>I'm Andreia, a web development student at Ironhack. For "Let Me Sing About It," 
                    I specialized in front-end development using React. 
                    I love coding.</h5>
                <a href='https://github.com/andreiapsa' >Andreia's GitHub</a><br />
                <a href='https://www.linkedin.com/in/andreiasa/' >Andreia's LinkedIn</a>

            </div>
            <div>
                <img src={dani} alt='dani-img' />
                <h5>I'm Daniela, a web development student at Ironhack. For "Let Me Sing About It," 
                    I specialized in front-end development using React.
                     I love coding.</h5>
                <a href='https://github.com/Dani-A-Dias' >Dani's GitHub</a> <br />
                <a href='https://www.linkedin.com/in/daniela-dias-604926243/' >Dani's LinkedIn</a>

            </div>
            <div>
                <img src={zeina} alt='zeina-img' />
                <h5>I'm Zeina, a web development student at Ironhack. For "Let Me Sing About It,"
                     I specialized in front-end development using React.
                      I love coding.</h5>
                <a href="https://github.com/zeinamershed">Zeina's GitHub</a>  <br />
                <a href="https://www.linkedin.com/in/zeina-mershed-7a64b6281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Zeina's LinkedIn</a>
            </div>

        </div>
    </div>
  );
}

export default AboutPage
