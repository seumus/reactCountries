var React = require('react');
var PropTypes = React.PropTypes;

var CountryDisplay = React.createClass({

  render: function() {
    var borders = this.props.display.borders.map(function(border){
      return this.props.borderInfo(border);
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
