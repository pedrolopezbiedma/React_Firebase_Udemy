import { useState, useEffect, useCallback } from 'react'
import './TripList.css'

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const [trips, setTrips] = useState([])

    const fetchTrips = useCallback(
      async () => {
        const response = await fetch(url);
        const trips = await response.json();
        setTrips(trips)
      },
      [url]
    )

    useEffect(() => {
        fetchTrips()
    }, [fetchTrips])

    return (
        <div className='trip-list'>
            <h2>TripList</h2>
            
            <ul>
                { trips.map((trip) => ( 
                    <li key={trip.id}>
                        <h3>{ trip.title }</h3>
                        <p>{ trip.price }</p>
                    </li>
                )) }
            </ul>

            <div className='filters'>
                    <button onClick={() => setUrl('http://localhost:3000/trips?location=Europe')}>European Trips</button>
                    <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
            </div>
        </div>
    )
}
