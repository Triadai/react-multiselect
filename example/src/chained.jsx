/** @jsx React.DOM */
var makes = [
  {id: 1, name: 'Toyota'},
  {id: 2, name: 'Honda'},
  {id: 3, name: 'Ford'}
]
var models = [
  {id: 1, makeId: 1, name: 'Camry'},
  {id: 2, makeId: 1, name: 'Tundra'},
  {id: 3, makeId: 1, name: 'Tacoma'},
  {id: 4, makeId: 2, name: 'Civic'},
  {id: 5, makeId: 2, name: 'Accord'},
  {id: 6, makeId: 2, name: 'CR-V'},
  {id: 7, makeId: 3, name: 'Escape'},
  {id: 8, makeId: 3, name: 'Focus'},
  {id: 9, makeId: 3, name: 'Mustang'}
]
var chained = React.createClass({
  getDefaultProps: function() {
    return {
      makes: [],
      models: []
    }
  },
  getInitialState: function() {
    return {makeSelections: {}}
  },
  handleMakeChange: function(selections, event) {
    this.setState({ makeSelections: selections })
  },
  handleModelChange: function(selections, event) {
    // Do something with the selection info
    // selections is an object where the keys are item ids and the values
    // are true or false, indicating the selection status
  },
  render: function() {
    var makes = this.props.makes.map(
      // Convert data to the structure that multiselect needs
      function(make) { return {id: make.id, text: make.name} }.bind(this)
    )
    var models = this.props.models.filter(
      // Filter so only selected items are displayed
      function(model) { return this.state.makeSelections[model.makeId] }.bind(this)
    ).map(
      // Convert data to the structure that multiselect needs
      function(model) { return {id: model.id, text: model.name} }.bind(this)
    )
    return (
      <div>
        <MultiSelect items={makes} onChange={this.handleMakeChange} />
        <MultiSelect items={models} onChange={this.handleModelChange} />
      </div>
    )
  }
})
React.renderComponent(<chained makes={makes} models={models} />, document.getElementById('multiselect-chained'))
