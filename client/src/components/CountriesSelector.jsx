var CountryDisplay = require('./CountryDisplay')

var React = require('react');
var PropTypes = React.PropTypes;

var CountriesSelector = React.createClass({

  getInitialState: function() {
    return {selectedIndex: null};
  },
  handleChange: function(e) {
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState({selectedIndex: newIndex});
    var selectedCountry = this.props.countries[newIndex];
    this.props.onSelectCountry(selectedCountry);
  },
  render: function() {
    var selector = this.props.countries.map(function(country, index) {
      return (<option value={index} key={country.alpha3Code}> {country.name} </option>);
    });
    return(
      <div >
        <select value={this.state.selectedIndex} onChange={this.handleChange}>
          {selector}
        </select>
      </div>
    )
  }

});

module.exports = CountriesSelector;
