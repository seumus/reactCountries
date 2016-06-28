var CountriesSelector = require('./CountriesSelector')

var React = require('react');
var PropTypes = React.PropTypes;

var CountriesRegionSelector = React.createClass({
    getInitialState: function() {
      return {selectedIndex: null};
    },
    handleChange: function(e) {
      e.preventDefault();
      var newIndex = e.target.value;
      this.setState({selectedIndex: newIndex});
      var selectedRegion = this.props.regions[newIndex];
      this.props.setRegionCountries(selectedRegion);
    },
    render: function() {
      var selector = this.props.regions.map(function(region, index) {
        return (<option value={index} key={region}> {region} </option>);
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

module.exports = CountriesRegionSelector;
