export default Gallery;{

}
const Gallery={members} =>
    return(
        <div className='Gallery'>
          {members.map( member =>
          <profile name={member.name} role={member.role} photo={member.photo}></profile>

          ) }  
        </div>

    )