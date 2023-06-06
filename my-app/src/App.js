import logo from './logo.svg';
import './App.css';
import indiagate from './indiagate.jpg'
import lotus from './lotus.jpg'
import redfort from './redfort.jpg'
import qutubminar from './qutub.jpeg'
import jama from './Jama.jpg'

function App() {
  
  return (
  <>
    <body></body>
    <center>
    <div height = "4210%">  
    <h1 style={{backgroundColor: "green"}}>Places to visit in Delhi</h1></div>
    <h4>
      <ul>
      <li><a href ='#a'>INDIA GATE</a></li>
                 <li><a href ='#b'>LOTUS TEMPLE</a></li> 
                  <li><a href ='#c'>RED FORT</a></li>
                <li><a href ='#d'>QUTUB MINAR</a></li>
                 <li><a href ='#e'>JAMA MASJID</a></li>
      </ul>
    </h4>
    <div id= 'a'>
    <h2>INDIA GATE</h2>
    <img src={indiagate} height = "30%" width = "30%" />
    <p>
    The India Gate (formerly known as All India War Memorial) is a war memorial located near the Kartavya path on the eastern edge
     of the "ceremonial axis" of New Delhi, formerly called duty path. It stands as a memorial to 84,000 soldiers of 
     the British Indian Army who died between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, 
     Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 
     servicemen's names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.
     [2] Designed by Sir Edwin Lutyens, the gate evokes the architectural style of the memorial arch such as the Arch of 
     Constantine, in Rome, and is often compared to the Arc de Triomphe in Paris, and the Gateway of India in Mumbai.
    </p>
    </div>
    <div id= 'b'>
    <h2>Lotus Temple</h2>
    <img src={lotus} height = "30%" width = "30%" />
    <p>
      The Lotus Temple, located in New Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986.
      Notable for its lotus-like shape, it has become a prominent attraction in the city. Like all Bahá’í Houses of Worship,
      the Lotus Temple is open to all, regardless of religion or any other qualification. The building is composed of 27 
      free-standing marble-clad "petals" arranged in clusters of three to form nine sides,[1]with nine doors opening onto
       a central hall with a height of slightly over 34 meters[1] and a capacity of 1,300 people[2] The Lotus Temple has 
       won numerous architectural awards[3][4] and has been featured in many newspaper and magazine articles.
    </p>
    </div>
    <div id= 'c'>
    <h2>Redfort</h2>
    <img src={redfort} height = "30%" width = "30%" />
    <p>
    The Red Fort or Lal Qila (Hindustani: [laːl qiːlaː]) is a historic fort in the Old Delhi neighbourhood of Delhi, India,
     that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of
      the Red Fort on 12th May 1638, when he decided to shift his capital from Agra to Delhi. Originally red and white, its
       design is credited to architect Ustad Ahmad Lahori, who also constructed the Taj Mahal. The fort represents the peak 
       in Mughal architecture under Shah Jahan and combines Persianate palace architecture with Indian traditions.
    </p>
    </div>
    <div id= 'd'>
    <h2>Qutub Minar</h2>
    <img src={qutubminar} height = "30%" width = "30%" />
    <p>
    The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb 
    complex, which lies at the site of Delhi’s oldest fortified city, Lal Kot, founded by the Tomar Rajputs.[3] It is a 
    UNESCO World Heritage Site in the Mehrauli area of South Delhi, India.[4][5] It is one of the most visited tourist
     spots in the city, mostly built between 1199 and 1220.[6][7][4]It can be compared to the 62-metre all-brick Minaret 
     of Jam in Afghanistan, of c. 1190, which was constructed a decade or so before the probable start of the Delhi tower.
     [8] The surfaces of both are elaborately decorated with inscriptions and geometric patterns. The Qutb Minar has a shaft
      that is fluted with "superb stalactite bracketing under the balconies" at the top of each stage.[9][10][11] In general,
     minarets were slow to be used in India and are often detached from the main mosque where they exist.[
    </p>
    </div>
    <div id= 'e'>
    <h2>Jama-Masjid</h2>
    <img src={jama} height = "30%" width = "30%" />
    <p>
    It was built by the Mughal emperor Shah Jahan between 1650 and 1656, and inaugurated by its first Imam, Syed Abdul Ghafoor
     Shah Bukhari. Situated in the Mughal capital of Shahjahanabad (today Old Delhi), it served as the imperial mosque of the 
     Mughal emperors until the demise of the empire in 1857. The Jama Masjid was regarded as a symbolic gesture of Islamic 
     power across India, well into the colonial era. It was also a site of political significance during several key periods 
     of British rule. It remains in active use, and is one of Delhi's most iconic sites, closely identified with the ethos of
      Old Delhi.
    </p>
    </div>

    </center>
  </>
    
  );
}

export default App;
