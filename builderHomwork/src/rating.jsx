import star from "#/starLogo.png" 
import people from "#/people.png"

 function Rating() {
      return(
        <div className="rating">
        <div className="rate">
            <img src={star} alt="" />
            <p>4.8 Rating</p>
        </div>
        <div className="pep">
            <img src={people} alt="" />
            <p><span className="blue">+836k</span> Members</p>
        </div>
            <p className="info">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
            <p className="blue">Join Our Community</p>
        </div>
      )
}    

export default Rating
