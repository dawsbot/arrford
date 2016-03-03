# arrford
[![npm version](https://img.shields.io/npm/v/arrford.svg)](https://www.npmjs.com/package/arrford)
[![Build Status](https://travis-ci.org/dawsonbotsford/arrford.svg?branch=master)](https://travis-ci.org/dawsonbotsford/arrford)
[![NPM downloads](http://img.shields.io/npm/dm/arrford.svg?style=flat)](http://npmjs.org/arrford)

> Array to human readable list converter

<br>

## Install

```
npm install --save arrford
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

## API

### arrford(target [, oxford])

##### target

Type: `Array` of strings

##### oxford

*optional*  
Type: `boolean`  
Default: true  
Description: whether to use the Oxford comma or not

Take an array of strings and return a string of these items as an english list. Insert "," and "and" in a grammatically correct way. Follow the Oxford comma trend unless `false` is passed in for the second argument.
Returns: `string`

<br>

## License

[Do What The F*ck You Want To Public License v2 (WTFPL-2.0)](https://tldrlegal.com/l/wtfpl) © [Dawson Botsford](http://dawsonbotsford.com)
