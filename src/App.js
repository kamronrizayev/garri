import React,  { useState, useEffect } from 'react'
import Loading from './Laoding'
import Garri from './Garri'

const url = 'https://hp-api.herokuapp.com/api/characters'

const App = () => {
  const [isLoading, setLoading] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      console.log(data);
    }
    getData()
  }, [])


  function removeItem(name){
    const newArray = data.filter(el => el.name !== name)
    setData(newArray)
  }
 





  if (data.length === 0) {
    return <Loading />
  }

  return (
    <Garri removeItem={removeItem} data = {data}/>
  )
}

export default App
