import Map, { FullscreenControl, Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Maps = () => {
  const [viewState, setViewState] = useState({
    longitude: 27.555696,
    latitude: 53.902735,
    zoom: 11,
  })

  const [banks, setBanks] = useState()

  const data = [
    {
      geocodes: [53.902499, 27.547336],
      name: 'Белагропромбанк',
    },
    {
      geocodes: [53.894478, 27.547785],
      name: 'Paritetbank УРМ ЦБУ №5',
    },
  ]

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.foursquare.com/v3/places/search',
      params: {
        categories: '11045',
        open_now: 'true',
        near: 'Minsk',
        sort: 'distance',
        limit: '30',
      },
      headers: {
        accept: 'application/json',
        Authorization: 'fsq3S2dJjg13X6eip5vic0mjleHEOVgMv2jfncViaa8ytKo=',
      },
    }
    axios
      .request(options)
      .then((response) => {
        setBanks(response.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  // console.log(banks, 8888)
  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/vulpies/clmaaw98q017k01pe9kai32t1"
      mapboxAccessToken="pk.eyJ1IjoidnVscGllcyIsImEiOiJjbG05M3d3cHMwZnBpM3Z0Y2I5bzlxNWIwIn0.n2dK45dCjDPqPqLjXji2zA"
      style={{ width: '100%', height: 600 }}
    >
      <FullscreenControl />
      <NavigationControl />
      {banks?.map((item) => (
        <>
          <Marker
            longitude={item.geocodes.main.longitude}
            latitude={item.geocodes.main.latitude}
            anchor="bottom"
          >
            <img src="https://i2.imageban.ru/out/2023/09/08/39ffd00ae015147dfd8633f189dd05d1.png" />
            <p className="maps-marker">{item.name}</p>
          </Marker>
        </>
      ))}
    </Map>
  )
}

export default Maps
