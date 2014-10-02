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
    this.setSelected(item, !this.state.selectedItems[item.id])
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
    this.setSelected(this.props.items, true)
  },
  selectNone: function(event) {
    this.setSelected(this.props.items, false)
  },
  setSelected: function(items, selected) {
    // Accept an array or a single item
    if (!(items instanceof Array)) items = [items]
    var selectedItems = this.state.selectedItems
    for (var i in items) {
      selectedItems[items[i].id] = selected
    }
    this.setState({ selectedItems: selectedItems })
    this.props.onChange(selectedItems)
  },
  render: function() {
    return (
      <div className="multi-select">
        <input onChange={this.handleInputChange} value={this.state.filter} placeholder={this.props.placeholder} />
        <ul>{this.props.items.map(this.createItem)}</ul>
        <button onClick={this.selectAll}>Select all</button>&nbsp;
        <button onClick={this.selectNone}>Select none</button>
      </div>
    )
  }
})
