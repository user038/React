import ProfileCard from './ProfileCard';
import AlexaImage  from './images/alexa.png';
import CortanaImage from './images/cortana.png'
import SiriImage  from './images/siri.png';
import 'bulma/css/bulma.css';

console.log(AlexaImage);
console.log(CortanaImage);
console.log(SiriImage);

function App() {
    return (
    <div>
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistance</p>
                </div>
            </section>
        </div>
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <ProfileCard title='Alexa' handle='@alexa99'imgSrc={AlexaImage}/>
                    </div>
                    <div className="column is-3">
                        <ProfileCard title='Cortona' handle='@cortona32' imgSrc={CortanaImage}/>
                    </div>
                    <div className="column is-3">
                    <ProfileCard title='Siri' handle='@siri01'imgSrc={SiriImage}/>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}


export default App;