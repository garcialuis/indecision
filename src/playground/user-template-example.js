// Exercise / Template Two:
const user = {
    name: "Mike Wasauski",
    age: 25,
    location: 'New York'
  }
  
  function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>
    }
  }
  
  const templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  )