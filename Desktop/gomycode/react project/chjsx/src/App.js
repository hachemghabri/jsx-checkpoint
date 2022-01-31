
import './App.css';

import hachem from './beerus.jpg';
import mario from './Nintendo.mp4';


function App() {
  return (
    <div >
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

 <h1 className='title red'>Your name here</h1>

 <br />

 <img src={hachem}/ >

 <br />

 <img src="/ena.jpg" />

</div>

<video width="320" height="240" controls>

 <source src={mario} />

</video>
    </div>
  );
}

export default App;

