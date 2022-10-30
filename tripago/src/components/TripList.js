import { useState, useEffect } from 'react'
import './TripList.css'

export default function TripList() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
            .then(response => response.json())
            .then(trips => setTrips(trips))
    }, [])

    return (
        <div>
            <h2>TripList</h2>
            
            <ul className='trip-list'>
                { trips.map((trip) => ( 
                    <li key={trip.id}>
                        <h3>{ trip.title }</h3>
                        <p>{ trip.price }</p>
                    </li>
                )) }
            </ul>
        </div>
    )
}
