export default function Grids(props) {
    return(
        <div className="grid">
         <button><img src={props.gridicon} alt="" /></button>
         <div className="words">
            <p>{props.name}</p>
            <p className="info">Members, Friends Connection ( like followers ), Private Message</p>
         </div>
        </div>
    )
}