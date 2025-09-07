import React, { useEffect ,useState} from 'react'

export const explore =  () => {
const [fetchdata, setFetchData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch('http://127.0.0.1:8000/detect/json');
      if(!request.ok) {
        console.error('Failed to fetch data');
        return;
      }
      const data = await request.json();
      console.log(data);
      setFetchData(data);
    };
    fetchData();
  }, []);

return(
  <div>
      <div>
        <p onClick={() => console.log(fetchdata)}>click me</p>
      </div>
  </div>
)


};
export default explore;
