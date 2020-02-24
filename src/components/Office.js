import React from "react"

export default ({
  address1,
  address2,
  map,
  phone,
  postcode,
  state,
  suburb,
  title,
}) => {
  return (
    <section className="office">
      <h2>{title}</h2>
      <p>{phone}</p>
      <p>{address1}</p>
      {address2 ? <p>{address2}</p> : ""}
      <p>
        {suburb}, {state} {postcode}
      </p>
      <p>
        lat: {map.lat} | lon: {map.lon}
      </p>
    </section>
  )
}
