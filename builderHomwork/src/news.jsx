import npic from "#/npic.png"
export default function News() {
    return(
        <div className="n">
            <img src={npic} alt="" />
            <div className="nline">
                <span></span>
                <h2>It Does Not Matter Hows Slowly go as Long</h2>
            </div>
            <p className="blue">Continue Reading</p>
        </div>
    )
}