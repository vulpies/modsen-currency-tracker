import {
  Component,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react'
import axios from 'axios'
import { Map, NavigationControl, FullscreenControl, Marker } from 'react-map-gl'

class BanksLocation extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      currency: 'none',
      list: [],
      view: {
        longitude: 27.555696,
        latitude: 53.902735,
        zoom: 11,
      },
    }
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
      .then((res) => {
        this.setState({ list: res.data.results, data: res.data.results })
        console.log(this.state.list, 8888)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  handleChange(event: any) {
    if (event.target.value === 'USD') {
      this.setState({ data: this.state.list.slice(0, 7) })
    } else if (event.target.value === 'EUR') {
      this.setState({ data: this.state.list.slice(7, 18) })
    } else if (event.target.value === 'RUB') {
      this.setState({ data: this.state.list.slice(18) })
    } else {
      this.setState({ data: this.state.list })
    }
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

        <Map
          {...this.state.view}
          onMove={(evt) => this.setState({ view: evt.view })}
          mapStyle="mapbox://styles/vulpies/clmaaw98q017k01pe9kai32t1"
          mapboxAccessToken="pk.eyJ1IjoidnVscGllcyIsImEiOiJjbG05M3d3cHMwZnBpM3Z0Y2I5bzlxNWIwIn0.n2dK45dCjDPqPqLjXji2zA"
          style={{ width: '100%', height: 600 }}
        >
          <FullscreenControl />
          <NavigationControl />
          {this.state.data?.map(
            (item: {
              geocodes: { main: { longitude: number; latitude: number } }
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined
            }) => (
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
            ),
          )}
        </Map>
      </main>
    )
  }
}

export default BanksLocation

// API FOR MAPS = 'fsq3S2dJjg13X6eip5vic0mjleHEOVgMv2jfncViaa8ytKo='
// ID banks = 11045
//https://location.foursquare.com/developer/reference/place-search
