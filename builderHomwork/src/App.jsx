import "./App.css";
import mainLogo from "#/mainLogo.png"
import headPage from "#/headPage.jpg"
import whyPic1 from "#/whyPic1.jpg"
import whyPic2 from "#/whyPic2.jpg"
import whyPic3 from "#/whyPic3.jpg"
import Rating from "@/rating"
import Grids  from "@/grids";
import Mem from "@/members"
import appstore from "#/appstore.png"
import playstore from "#/playstore.png"
import mobile from "#/mobile.png"
import News  from "@/news"
import twitter from "#/Twitter.png"
import instagram from "#/instagram.png"
import facebook from "#/facebook.png"
import Linkedin from "#/Linkedin.png"
import gridicon1 from "#/gridicon.png"
import gridicon2 from "#/gridicon2.png"
import gridicon3 from "#/gridicon3.png"
import gridicon4  from "#/gridicon4.png"
import gridicon5 from "#/gridicon5.png"
import gridicon6 from "#/gridicon6.png"
 function App() {
  return(
    <div className="App">
      <nav>
        <div className="mainLogo">
          <img src= {mainLogo}alt="" />
          <p>Netbook</p>
        </div>
        <div className="pages">
          <p>Home</p>
          <p>community</p>
          <p>Blog</p>
          <p>Events</p>
        </div>
        <input type="search" placeholder="Search Here.." className="srch"/>
      </nav>
      <header>
        <div className="Hleft">
          <button className="netbook">Netbook community</button>
          <h1>Your Solutions For Community!</h1>
          <p>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
          <div className="headBtns">
            <button className="aboutmoreBtn">About More</button>
            <button className="inviteBtn">Invite Friend</button>
          </div>
        </div>
        <img src={headPage} alt="" />
      </header>
      <div className="why">
        <div className="whyLeft">
          <p className="blue">Whats Netboks?</p>
          <h1>Why Join to Netbook Social Network?</h1>
          <p>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
          <ul>
            <li>Groups</li>
            <li>Messages</li>
            <li>Share</li>
          </ul>
        </div>
        <div className="whyRigth">
         <img src={whyPic1} alt="" className="imageKalan"/>
         <div className="whypics">
          <img src={whyPic2} alt="" />
          <img src={whyPic3} alt="" />
         </div>
        </div>
      </div>
      <div className="rat">
        <Rating/>
        <Rating/>
        <div className="rme">
          <p className="blue">Our Achievement</p>
          <h1>We are Connecting You The Digital Life.</h1>
          <p className="info">The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
          <button>Discover me</button>
        </div>
      </div>
      <div className="community">
        <p className="blue">Our Community</p>
        <h1>Our Community</h1>
        <p className="info">The wise man therefore always holds in these matters to this principle of selection.</p>
      </div>

      <div className="mainGrid">
        <Grids gridicon={gridicon1} name={"Members, Friends"}/>
        <Grids gridicon={gridicon2} name={"Groups"}/>
        <Grids gridicon={gridicon3} name={"Forum"}/>
        <Grids gridicon={gridicon4} name={"Custom Module"}/>
        <Grids gridicon={gridicon5} name={"List Builder"}/>
        <Grids gridicon={gridicon6} name={"List Scroll Effects"}/>
      </div>

      <div className="members">
        <div className="mem1">
          <p className="blue">Valuable Team</p>
          <h1>Our Active Members</h1>
          <p className="info">when an unknown printer took a galley of type and meeting fari scrambled it.</p>
          </div>
           <div className="membtns">
             <button>Newest</button>
             <button>Popular</button>
             <button className="active">Active</button>
           </div>
          <div className="memboxes">
            <Mem/>
             <Mem/>
              <Mem/>
               <Mem/>
          </div>
      </div>
      <div className="application">
       <div className="Aleft">
                <p className="blue">Get Our Aplication</p>
        <h1>You Can Easily Find 
This App…!</h1>
        <p className="info">I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>
        <div className="download">
          <img src={appstore} alt="" />
          <img src={playstore} alt="" />
        </div>
      </div>
      <img src= {mobile}alt=""  className="mobile"/>
       </div>
       <div className="news">
        <p className="blue">Get Our Aplication</p>
        <h1>Latest news</h1>
        <div className="nBox">
          <News/>
          <News/>
          <News/>
        </div>
       </div>
       <footer>
        <div className="q">
          <h3>Home</h3>
          <p>Home</p>
          <p>community</p>
          <p>events</p>
          <p>contact</p>
        </div>
        <div className="q">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>News</p>
          <p>Guides</p>
          <p>Help center</p>
        </div>

          <div className="q">
          <h3>community</h3>
          <p>newFeed</p>
          <p>Profile</p>
          <p>freinds</p>
          <p>forums</p>
        </div>

          <div className="q">
          <h3>main links</h3>
          <p>members</p>
          <p>activity</p>
          <p>groups</p>
          <p>private group</p>
        </div>
        <div className="q5">
          <h3>Subscribe Cirkle Newsletter</h3>
          <p>Subscribe to be the first one to know about updates. Enter your email</p>
          <div className="email">
             <input type="email" placeholder="Email Address"/>
             <button>Subscribe</button>
          </div>
        </div>
       </footer>
       <div className="end">
       <p>Besnik Creative Agency.</p>
        <div className="mainLogo">
         <img src= {mainLogo}alt="" />
          <p>Netbook</p>
        </div>
         <div className="socials">
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={Linkedin} alt="" />
         </div>
       </div>
    </div>
  )
 }

 export default App