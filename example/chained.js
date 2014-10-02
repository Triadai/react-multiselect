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
      makes: makes,
      models: models
    }
  },
  getInitialState: function() {
    return {selectedMakeIds: []}
  },
  handleMakeChange: function(selectedItemIds, event) {
    this.setState({ selectedMakeIds: selectedItemIds })
  },
  handleModelChange: function(selectedItemIds, event) {
    // Do something with the selected item ids
  },
  render: function() {
    var makes = this.props.makes.map(
      function(make) { return {id: make.id, text: make.name} }.bind(this)
    )
    var models = this.props.models.filter(
      function(model) { return this.state.selectedMakeIds[model.makeId] }.bind(this)
    ).map(
      function(model) { return {id: model.id, text: model.name} }.bind(this)
    )
    return (
      <div>
        <multiSelect items={makes} onChange={this.handleMakeChange} />
        <multiSelect items={models} onChange={this.handleModelChange} />
      </div>
    )
  }
})
React.renderComponent(<chained/>, document.getElementById('multiselect-chained'))
