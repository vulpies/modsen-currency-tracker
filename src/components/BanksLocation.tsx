import { Component } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'

class BanksLocation extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      currency: 'none',
    }
    this.list = this.state.data
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://api.foursquare.com/v3/places/search',
      params: {
        categories: '11045',
        open_now: 'true',
        near: 'Minsk',
        sort: 'DISTANCE',
      },
      headers: {
        accept: 'application/json',
        Authorization: 'fsq3S2dJjg13X6eip5vic0mjleHEOVgMv2jfncViaa8ytKo=',
      },
    }
    axios
      .request(options)
      .then((response) => {
        this.setState({ data: response.data.results })
        console.log(this.state.data, 8888)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  handleChange(event: any) {
    let list = this.state.data

    if (event.target.value === 'USD') {
      list = this.state.data.slice(0, 5)
    } else if (event.target.value === 'EUR') {
      list = this.state.data.slice(5, 8)
    } else if (event.target.value === 'RUB') {
      list = this.state.data.slice(8)
    }

    console.log(list, 'list')
    console.log(event.target.value, 9999)
    this.setState({ currency: event.target.value })
    console.log(this.state, 777)
  }

  render() {
    return (
      <main className="maps">
        <div className="maps-select">
          <h2>Search currency in the bank</h2>

          <select
            name="currencies"
            required
            onChange={(e) => this.handleChange(e)}
          >
            <option value="none">Сurrency search...</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
          </select>
        </div>

        <div className="maps-map">
          <MapContainer center={[53.902735, 27.555696]} zoom={12}>
            <TileLayer
              attribution={
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></TileLayer>
          </MapContainer>
        </div>

        {/* <div id="map" className="explorer-map"></div> */}
      </main>
    )
  }
}

export default BanksLocation

// API FOR MAPS = 'fsq3S2dJjg13X6eip5vic0mjleHEOVgMv2jfncViaa8ytKo='
// ID banks = 11045
//https://location.foursquare.com/developer/reference/place-search
