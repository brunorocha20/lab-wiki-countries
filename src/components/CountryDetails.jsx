import {useParams, Link} from "react-router-dom"

function CountryDetails({countries}) {
    const {id} = useParams()
    const [country] = countries.filter(el => el.alpha3Code === id);

  return (

    <div className='container'>
    <div className='row'>
    <div className="col-9">
            <h1><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country" /> {country.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((border, i) => <li><Link to={`/country/${border}`}>{border}</Link></li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to="/">Countries List</Link>
          </div>
          </div>
    
          </div>
  )
}

export default CountryDetails