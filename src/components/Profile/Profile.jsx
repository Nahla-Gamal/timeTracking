import './Profile.css'
import profileImg from '../../assets/image-jeremy.png'


function Profile() {
    return(
      <div id="infoDate">
        <div id="profileInfo">
            <div id='pic'>
            <img src={profileImg}/>
            </div>
            <div id='info'>
                <label className='text'>Report for</label>
                <label className='name'>Jeremy Robson</label>
            </div>
            </div>
            <div id='date'>
                <label className='time'>Daily</label>
                <label className='time'>Weekly</label>
                <label className='time'>Monthly</label>
            </div>
        
      </div>
    )
}
export default Profile