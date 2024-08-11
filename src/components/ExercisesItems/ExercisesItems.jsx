import './ExercisesItems.css'

function ExercisesItems(props){
    
    return(
      <div className='card' style={{backgroundColor: props.selectionColor}}>
        <img className='cardIcon' src={props.selectionIcon}/>
        <div className='card-content'>
            <div className='card-header'>
                <label className='heading'>{props.selectionText}</label>
                <img className='menu' src={props.selectionImg}/>
            </div>
            <div className='card-body'>
             <label className='durationHours'>{props.selectionHours}</label>
             <label className='durationWeeks'>{props.selectionWeeks}</label>
            </div>
        </div>
      </div>
    )
}
export default ExercisesItems