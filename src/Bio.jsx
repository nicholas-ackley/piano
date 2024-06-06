import React from 'react'
import './Bio.css'
import piano from './images/teacher.png'
import backround from './images/vertical.png'
import White from './images/steinway.png'
import Teacher from './images/gallery4.jpg'
const Bio = () =>
    {

        return(
            <>
            <div className='bio-box'>
                <div className="description"><p><b><i>The University of Texas at Dallas</i>...</b></p>
                    <div className="description2"><p><b>Classical Musician</b></p></div>
                </div>
            <div className="name">Nicholas Ackley
                <div className="pianist">
                    Pianist
                </div>
                    <div className="outline-container">
                        <img src={piano}></img>
                    </div>
                <div className="backdrop"></div>
            </div>
            <div className="border"></div>
                {/* <div className="teacher-container"> */}
                    {/* <img src={Teacher}></img> */}
            {/* </div> */}
                <div className="competition-info">
                    <div className="black-box-info1"></div>
                        <div className="competition-title"><h1>Masterly <br/>Performer<br/>Of Classical Music</h1>
                            <div className="text-box"><p>
                            As an accomplished classical musician with over thirteen years of dedicated solo study, I have developed a profound mastery and an extensive repertoire spanning numerous classical 
                            genres. My journey in music has been marked by participation in various prestigious competitions, where I have honed my skills and deepened my interpretative understanding of complex
                            compositions. Additionally, my experience playing with a renowned orchestra has not only enriched my performance capabilities but also allowed me to collaborate with other talented
                            musicians, creating deeply resonant and finely tuned performances that communicate the nuances of classical music to diverse audiences. This blend of solo study, competitive
                            excellence, and orchestral collaboration defines my musical career and continues to fuel my passion for classical music.</p></div>
                            </div>
                        </div>
                    <div className="competition-info1">
                        <div className="competition-title1"><h1>Comeptitive <br/>Performer<br/></h1>
                            <div className="text-box1"><p>
                    Competing in piano competitions has been a cornerstone of my musical journey, providing not only a platform to showcase my skills but also opportunities to expand
                     my repertoire with some of the most demanding pieces in classical and contemporary music. These competitions have taught me the value of resilience and the
                      importance of meticulous preparation, as I navigated the challenges of performing under pressure and adapting to different acoustic environments.
                       Each piece I mastered added depth to my musical expression and technical prowess, allowing me to connect more profoundly with both the music and my audience.
                        The extensive and varied repertoire I developed through these competitions has not only enhanced my versatility as a pianist but also deepened my
                         understanding of the vast emotional landscape that music encompasses. These experiences have been instrumental in shaping me into a confident performer 
                         and a well-rounded musician.</p></div>
                            </div>
                        </div>
                    <div className="competition-info2">
                        <div className="competition-title2"><h1>Dallas <br/>Asiam American <br/> Youth Orchestra</h1>
                            <div className="text-box2"><p>
                                As the lead pianist for a distinguished youth orchestra, I've had the enriching experience of performing alongside a talented ensemble, 
                                mastering complex musical pieces that challenged both my technical skills and artistic expression. This role not only honed my ability to collaborate
                                 effectively with fellow musicians, it also deepened my appreciation for the nuances of group dynamics and the importance of every role within an 
                                 ensemble. Through regular, disciplined practice sessions, I developed a rigorous work ethic and a commitment to consistency, both essential traits
                                  for achieving musical excellence. Additionally, teaching younger musicians about music not only broadened my communicative skills but also 
                                  reinforced my understanding of musical theory and performance techniques, ensuring that I could pass on valuable knowledge to the next generation 
                                  of performers. This multifaceted involvement with the youth orchestra has been a cornerstone of my musical career, providing both professional
                                   growth and personal satisfaction.</p></div>
                            </div>
                        </div>
                    </div>
            <img className='white'src={White}></img>
    

      
            
            </>
        )
    }
    export default Bio