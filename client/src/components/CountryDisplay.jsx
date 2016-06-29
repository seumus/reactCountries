var React = require('react');
var PropTypes = React.PropTypes;

var CountryDisplay = React.createClass({
  borderInfo: function(border) {
    for(var country of this.props.countries){
      if(country.alpha3Code === border) {
        return (<p key={country.alpha3Code}>{country.name} - {country.population}</p>)
      }
    }
  },
  render: function() {
    var borders = this.props.display.borders.map(function(border){
      return this.borderInfo(border);
    }.bind(this))

    return (
      <div>
      <h3 className='france'>Country:</h3>
      <p>Name: {this.props.display.name}</p>
      <p>Capital: {this.props.display.capital}</p>
      <p>Population: {this.props.display.population}</p>
      <h4 className='france'>Bordering Countries:</h4>
      {borders}
      </div>

    );
  }

});

module.exports = CountryDisplay;
