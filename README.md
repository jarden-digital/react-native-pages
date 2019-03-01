# react-native-pages

[![npm](https://img.shields.io/npm/v/@fnzc/react-native-switches.svg)](https://www.npmjs.com/package/@fnzc/react-native-switches)

_A component to handle transition between pages based on a list of ordered statuses_

Using:
* _**[react-move](https://github.com/react-tools/react-move)**_ for animations

## Installation

```
npm install --save @fnzc/react-native-pages
```
or
```
yarn add @fnzc/react-native-pages
```

## Demo

Here is how it can look like with a login/register flow example:

![pages](https://user-images.githubusercontent.com/10620919/53610534-2ba76c00-3c30-11e9-861d-9c0b4fc8c912.gif)

## Usage

Basic usage requires you to provide:
* a `currentStatus` representing the current page
* `pages`, an array of `page`
* an array of `statuses` ordered

The pages will use the statuses ordered in the provided array to transition from left to right or right to left

**NOTE**: A page contains:
```
{
  associatedStatus: string,
  component: JSX.Element,
  style?: StypeProp<ViewStyle>
}
```

Example usage:
```
import Pages from '@fnzc/react-native-pages'

const orderedStatuses = ['email', 'login', 'password', 'finished', 'confirmed', 'loading']

createPages = (): Page[] => {
  return [
    {
      component: this.createPage(...),
      associatedStatus: 'email'
    },
    {
      component: this.createPage(...),
      associatedStatus: 'password' 
    },
    ...
  ]
}

<PagesComponent
  currentStatus={this.props.status}
  orderedStatuses={orderedStatuses}
  pages={this.createPages()}/>
```

## Options

| Key | Description | Default | Required | Type |
|---|---|---|---|---|
|**`currentStatus`**|Name of the status associated to the current page|`None`|`true`|`string`|
|**`pages`**|The array of pages that have to be displayedPage|`None`|`true`|`Page[]`|
|**`orderedStatuses`**|The array of ordered statuses use to transition the pages|`None`|`true`|`any[]`|
|**`translateEnterDuration`**|The duration of the enter transition|`400`|`false`|`number`|
|**`translateEnterFunction`**|The easing function of the enter transition|`easeQuadInOut`|`false`|`(normalizedTime: number) => number`|
|**`translateEnterPosition`**|The position of the page on the enter transition|`0`|`false`|`number`|
|**`translateEndForwardPosition`**|The position of the page at the end of a forward transition|`-Dimensions.get('window').width`|`false`|`number`|
|**`translateEndBackwardPosition`**|The position of the page at the end of a backward transition|`Dimensions.get('window').width`|`false`|`number`|
|**`translateLeaveDuration`**|The duration of the enter transition|`400`|`false`|`number`|
|**`translateLeaveFunction`**|The easing function of the enter transition|`easeQuadInOut`|`false`|`(normalizedTime: number) => number`|
|**`translateStartForwardPosition`**|The position of the page at the start of a forward transition|`Dimensions.get('window').width`|`false`|`number`|
|**`translateStartBackwardPosition`**|The position of the page at the start of a backward transition|`-Dimensions.get('window').width`|`false`|`number`|

## Contributing

Pull requests are welcome.
