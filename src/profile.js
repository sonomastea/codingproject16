export default Profile = ({name,role,photo}) =>{
    return(
        <div classname="Profile">
            <img src={photo} alt={'${name}, Profile'} role={role}/>
            <h2>{'name'}</h2>
            <p>{'role'}</p>
</div>
    )}