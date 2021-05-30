rapid-queue-2
=============
JavaScript array.shift() is slow. This is an implementation using circular buffer and two stack. Circular queue use circular buffer and Double Stack Queue use two stack to implement the queue.

This implementation of shift is up to 10,000 times faster than JavaScript's array.shift().

## Installation

```
npm install rapid-queue-2
```

## Usage

Before using it, require the module

```js
const RapidQueue = require('rapid-queue-2')
```

### Creating queue

```js
const queue = RapidQueue.createQueue()
```

## Queue operation


### Inserting element to the end of queue

```js
queue.push(5)`
```

Push will insert 5 to the back of the queue, it will automatically grow the array if the capacity is not enough.

### Get front element

```js
const front = queue.front()
```

It will return the front element without removing it from the queue. It will return null if queue is empty.

### Remove front element

```js
const front = queue.shift()
```

It will return and remove front element from the queue. It will return null if queue is empty.

### Get queue length

```js
const length = queue.length()
```

It will return the number of element inside queue;

### Check if queue is empty

```js
const isEmpty = queue.isEmpty()
```

## Performance

Shift 1,000,000 items by `rapid-queue-2`: 0.00865 Seconds
Shift 1,000,000 items by regular array: 88.97404 Seconds

The code used for benchmark:
```js
const RapidQueue = require('rapid-queue-2')
const queue = RapidQueue.createQueue()

// function to measure code execution time
function parseHrtimeToSeconds(hrtime) {
  var seconds = (hrtime[0] + hrtime[1] / 1e9).toFixed(5)
  return seconds
}

for (let i = 0; i < 1000000; i++) {
  queue.push(i)
}

// start measuring time1
startTime1 = process.hrtime()

for (let i = 0; i < 1000000; i++) {
  queue.shift()
}

// stop time1
const elapsedSeconds1 = parseHrtimeToSeconds(process.hrtime(startTime1))
console.log('rapid-queue-2: ' + elapsedSeconds1 + 'seconds')

// ------ regular array implementation
const arr = []

for (let i = 0; i < 1000000; i++) {
  arr.push(i)
}

// start measuring time2
startTime2 = process.hrtime()
for (let i = 0; i < 1000000; i++) {
  arr.shift()
}

// stop time2
const elapsedSeconds2 = parseHrtimeToSeconds(process.hrtime(startTime2))
console.log('Array: ' + elapsedSeconds2 + 'seconds')
```

#### License
MIT

The original code is on `kevyuu/rapid-queue` and is not maintained.
