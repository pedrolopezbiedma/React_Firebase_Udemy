import { useState } from 'react'

export default function TripList() {

    const [trips, setTrips] = useState([])

    fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(    console.log(trips))

    return (
        <div>
            <h2>TripList</h2>
        </div>
    )
}
