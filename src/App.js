import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard"; 
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage)
function App(){
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                  <p class="title"> Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                        <ProfileCard 
                            title='Alexa' 
                            handle='@alexa' 
                            image={AlexaImage}
                            content='Alexa was created by amazon and helps you buy things.'
                            />
                        </div>
                        <div className='column is-4'>
                        <ProfileCard 
                            title='cortona' 
                            handle='@cortona' 
                            image={CortanaImage}
                            content='Cortona was made by Microsoft. who knows what it does?'
                            />
                        </div>
                        <div className='column is-4'>
                        <ProfileCard 
                            title='siri' 
                            handle='@siri' 
                            image={SiriImage}
                            content='Siri was made by apple and is being phased out'
                            />
                        </div>

                    </div>

                </section>

            </div>

            
        </div>
    )
}

export default App;