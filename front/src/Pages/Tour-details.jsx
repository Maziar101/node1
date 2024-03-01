import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TourDetails() {
    const [tour, setTour] = useState();
    const {id} = useParams();
    useEffect(() => {
      (async () => {
        const res = await fetch(`http://localhost:5000/api/tours/${id}`);
        const data = await res.json();
        setTour(data?.data);
        console.log(tour)
      })();
    }, [id]);
  return (
    <div>
        <h1>Name : {tour?.name}</h1>
        <b>{tour?.description}</b>
        <h3>Price : {tour?.price}</h3>
        <h3>Rating : {tour?.ratingsAverage}</h3>
    </div>
  )
}
