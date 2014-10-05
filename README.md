Please get in touch with me if you have any issues or suggestions for this project.  I am actively developing and taking
requests for new features.  You can contact me via e-mail at [james@neodon.com](mailto:james@neodon.com).

# React-MultiSelect

React-MultiSelect is a client-side [React](http://facebook.github.io/react "React") component that presents the user with a list of items and allows them to filter and select one or more of them.

I am currently working on a jQuery plugin wrapper for this project.

![React-MultiSelect Example](http://i.imgur.com/VLuM9W0.png "React-MultiSelect Example")

## Features

### Filters

Enter some text in the input box to filter the items listed.  Selections are remembered even if the items
are momentarily not visible.

### Dynamic Data

Supports loading item lists dynamically with AJAX requests.  Selections will remain across requests as long as the item ids stay the same.
This can be helpful where you need the items in one list to depend on the selections in another list and want them to
update dynamically.

## Examples

Some examples are included with the project.  You can run them locally using nodejs to serve the files.

Run the following commands in the project directory, and then navigate to the URL displayed.

```
$ sudo npm install http-server -g
$ http-server
```

## Options

The options below can be passed to the MultiSelect component to customize its behavior.

```
/** @jsx React.DOM */
<MultiSelect
  items={[]}
  placeholder={''}
  onChange={function(selectedItems) {}}
/>
```

### items

Items to display in the list.  Each item must contain an id property to identify the item and a text property to
display in the item list.

### placeholder

Text to initially display in the filter input box.

### onChange

Called when items are selected or deselected.  The parameter is an object containing the ids of
items in the list as keys and either true or false as the values to indicate whether or not an item is selected.

## CSS

You can use the following CSS selectors to customize the appearance of the component.
  
```
div.multiselect
div.multiselect input
div.multiselect ul
div.multiselect li
div.multiselect li:hover
div.multiselect button
```

## TODO
 * Getting started
 * More examples
 * More options

