import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './Main.css'

const Main = () => {
  const [allgym, setAllgym] = useState([]);
  useEffect(() => {
    async function fetch(){
    let ans = await axios.get(
      `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
    );
    console.log(ans.data.data);
    setAllgym(ans.data.data);
    }
    fetch();
  }, [])
  
  
  return (
    <>
    <div className='Main'>
        <div className='Filters'>
            <h1>Filters</h1> 
            <h3>Location</h3>
            <input type="text" placeholder='Enter Location' />
            <h3>Price</h3>
            <div className='minmax'>
            <input type="text" placeholder='Min' />
            <input type="text" placeholder='Max' />
            </div>
            <h3>Cities</h3>
            <input type="text" name="cityname" list="cityname" placeholder='Selct city'/>
                <datalist id="cityname">
                <option value="Delhi" />
                <option value="Noida" />
                </datalist>
        </div>
        <div className='gyms'>
          {allgym && allgym.map((gym)=>(
            <div className='gyms-card'>
                <img src="https://images.unsplash.com/photo-1637430308606-86576d8fef3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='gym-img' />
                <div className='gym-details'>
                  <div className='detail-content'>
                    <h2>{gym.gym_name}</h2>
                    <h2>Rating: {gym.rating}star</h2>
                    <h3>{gym.address1},{gym.address2},{gym.city},{gym.state}</h3>
                    <h3>{gym.distance} meters</h3>
                  </div>
                  <div className='price-book'>
                    <h3 className='price'>Price</h3>
                    <button className='btn-bookNow'>Book Now</button>
                  </div>
                </div>
            </div>
          ))}
        </div>
    </div>
    <div className='footer-bg'>

    </div>
    </>
  )
}

export default Main