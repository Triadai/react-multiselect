/** @jsx React.DOM */
var multiSelectItem = React.createClass({
  getDefaultProps: function() {
    return {
      visible: true,
      selected: false,
      onChange: function() {}
    }
  },
  render: function() {
    // Highlight selected items
    var style = {background: this.props.selected ? '#ddf' : 'none'}
    // Hide items that are marked as not visible
    if (!this.props.visible) style.display = 'none'
    return <li onClick={this.props.onClick} style={style}>{this.props.text}</li>
  }
})
var multiSelect = React.createClass({
  getDefaultProps: function() {
    return {
      items: [],
      placeholder: 'Enter some filter text',
      onChange: function() {}
    }
  },
  getInitialState: function() {
    return {
      selectedItems: {},
      filter: ''
    }
  },
  handleItemClick: function(item) {
    // Toggle item selection
    var selectedItems = this.state.selectedItems
    selectedItems[item.id] = !selectedItems[item.id]    
    this.setState({ selectedItems: selectedItems })
    // Call user's event handler
    this.props.onChange(Object.keys(this.state.selectedItems))
  },
  handleInputChange: function(event) {
    // Keep track of every change to the filter input
    this.setState({ filter: event.target.value })
  },
  createItem: function(item) {
    // Filter item visibility based on the filter input
    var regex = new RegExp('.*'+this.state.filter+'.*', 'i')
    return <multiSelectItem
      key={item.id}
      text={item.text}
      onClick={this.handleItemClick.bind(this, item)}
      visible={regex.test(item.text)}
      selected={this.state.selectedItems[item.id] ? true : false}
    />
  },
  selectAll: function(event) {
    this.setAllSelected(true);
  },
  selectNone: function(event) {
    this.setAllSelected(false);
  },
  setAllSelected: function(selected) {
    var selectedItems = {}
    for (var i in this.props.items) {
      var item = this.props.items[i]
      if (selected) {
        selectedItems[item.id] = true
      }
      else {
        // Delete instead of set to false so we can just get all of
        // selectedItems keys in order to produce a list of ids
        // of items that are selected
        delete selectedItems[item.id]
      }
    }
    this.setState({ selectedItems: selectedItems })
    // Call the user's event handler
    this.props.onChange(Object.keys(selectedItems))
  },
  render: function() {
    return (
      <div className="multi-select">
        <input onChange={this.handleInputChange} value={this.state.filter} placeholder={this.props.placeholder} />
        <ul className="scrollable">{this.props.items.map(this.createItem)}</ul>
        <button onClick={this.selectAll}>Select all</button>&nbsp;
        <button onClick={this.selectNone}>Select none</button>
      </div>
    )
  }
})
