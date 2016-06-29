var React = require('react');
var PropTypes = React.PropTypes;
var CountriesSelector = require('./CountriesSelector');
var CountriesRegionSelector = require('./CountriesRegionSelector');
var CountryDisplay = require('./CountryDisplay')

var CountriesBox = React.createClass({
  getInitialState: function() {
    return {
      setCountries: [],
      countries: [],
      displayCountry: null,
      regions: []
    };
  },
  setDisplayCountry: function(country) {
    this.setState({displayCountry: country})
  },
  setRegionCountries: function(region) {
    var data = []
    for(var country of this.state.setCountries) {
      if(country.region === region) {
        data.push(country)
        // console.log('t',country.region);
        // console.log('w',region);
      }
    }
    // console.log(data);
    this.setState({countries: data})
  },
  componentDidMount: function() {
    console.log('CDM was called');
    var url = 'https://restcountries.eu/rest/v1/all'
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      var regions = [];
      for (var i = 0; i < data.length; i++) {
        if(regions.indexOf(data[i].region) === -1) {
          regions.push(data[i].region);
        }
      }
      this.setState({setCountries: data})
      this.setState({countries: data})
      this.setState({regions: regions})
    }.bind(this)
    request.send();
  },
  findRegions: function() {

  },
  render: function() {
    var displayElement = <h4 className='france'> No Country Selected</h4>
    if(this.state.displayCountry){
      displayElement = <CountryDisplay countries={this.state.countries} display={this.state.displayCountry}/>
    }
    return (
      <div className='cheese'>
        <h1 className='france'>Countries Box</h1>
        <CountriesRegionSelector regions={this.state.regions} setRegionCountries ={this.setRegionCountries}/>
        <CountriesSelector countries={this.state.countries} onSelectCountry={this.setDisplayCountry}/>
        {displayElement}
      </div>
    )
  }

});

module.exports = CountriesBox;
