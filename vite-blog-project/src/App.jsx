import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'dotenv';

export default function App() 
{
    const [count, setCount] = useState(140)
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try 
            {
                const response = await fetch(`http://localhost:3000/api/blog`, { method : 'GET' });
                const data = await response.json();
                if(data) 
                {
                    console.log(data.blogs);
                    //setData(data);
                }   
            } 
            catch (error) 
            {
                console.log(`Error During Fetch Due To ${error}`);
            }
        }
        fetchData()
    }, [])
    

    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

