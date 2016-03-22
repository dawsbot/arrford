# arrford
[![npm version](https://img.shields.io/npm/v/arrford.svg)](https://www.npmjs.com/package/arrford)
[![Build Status](https://travis-ci.org/dawsonbotsford/arrford.svg?branch=master)](https://travis-ci.org/dawsonbotsford/arrford)
[![NPM downloads](http://img.shields.io/npm/dm/arrford.svg?style=flat)](http://npmjs.org/arrford)

> Array to human readable list converter

<br>

## Install

#### Node

```
npm install --save arrford
```

#### Web

arrford is exported for web and usable with the variable `arrford`
```html
<script src="https://rawgit.com/dawsonbotsford/arrford/master/bundle.js"></script>
```

<br>

## Usage

```js
const arrford = require('arrford');

arrford(['run', 'climb', 'jump!']);
//=> 'run, climb, and jump!'
```

<br>

#### Fewer than 3 elements in array
```js
arrford(['run', 'climb!']);
//=> 'run and climb!'

arrford(['run!']);
//=> 'run!'
```

<br>

#### Abort the Oxford comma
```js
arrford(['run', 'climb', 'jump!'], false);
//=> 'run, climb and jump!'
```

<br>

#### Replace the word 'and'
```js
arrford(['spring', 'klättra', 'hoppa!'], true, 'och');
//=> 'spring, klättra, och hoppa!'
```

<br>

#### Replace the word 'and' and abort the Oxford comma
```js
arrford(['spring', 'klättra', 'hoppa!'], false, 'och');
//=> 'spring, klättra och hoppa!'
```

<br>

## API

### arrford(target [, oxford, join])

##### target

Type: `Array` of `string`s

##### oxford

*optional*
Type: `boolean`
Default: true
Description: whether to use the Oxford comma or not

##### join

*optional*
Type: `string`
Default: 'and'
Description: word used to join the list with the last element

#### returns
Type: `string`

Take an array of strings and return a string of these items as an list. Insert "," and "and" in a grammatically correct way. Follow the Oxford comma trend unless `false` is passed in for the second argument. Use the word 'and' to join the list unless some other word is specified for the third argument.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
