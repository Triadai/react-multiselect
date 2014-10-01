# Reactive MultiSelect

Reactive MultiSelect is a client-side web component that presents the user with a list of items and allows them to filter and select one or more of them.

Reactive MultiSelect is implemented using the [React JavaScript library](http://facebook.github.io/react "React JavaScript library").

![Reactive MultiSelect Example](http://i.imgur.com/VLuM9W0.png "Reactive MultiSelect Example")

## Features

### Filters

Enter some text in the input box to filter the items listed.  Selections are remembered even if the items
are momentarily not visible.

### Dynamic Data

Supports loading item lists dynamically with AJAX requests.  Selections will remain across requests as long as the item ids stay the same.
This can be helpful where you need the items in one list to depend on the selections in another list and want them to
update dynamically.

## Examples

An example is included with the project.  You can run it locally using nodejs to serve the files.

Run the following commands in the project directory, and then navigate to the URL displayed.

```
$ sudo npm install http-server -g
$ http-server
```

## Options

The options below can be passed to the MultiSelect component to customize its behavior.  Each option
is shown with its default value and further explained.

```
/** @jsx React.DOM */
<multiSelect
  items={[]}
  placeholder={''}
  onChange={function(selectedIds) {}}
/>
```

### items

Items to display in the list.  Each item must contain an id property to identify the item and a text property to
display in the item list.

### placeholder

Text to initially display in the filter input box.

### onChange

Called when items are selected or deselected.  The first parameter is an array containing the ids of
items in the list that are currently selected.

## CSS

You can use the following CSS selectors to customize the appearance of the component.
  
```
div.multi-select
div.multi-select input
div.multi-select ul
div.multi-select li
div.multi-select li:hover
div.multi-select button
```

## TODO
 * Getting started
 * More examples
 * More options

