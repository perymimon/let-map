# let-map
javascript Map with let() method

one dependency only for node events on browsers

```js
import LetMap from '@perymimon/let-map'

let letMap = new LetMap([])

letMap.let('key1').push(2)
console.log(letMap.has('key1'))
// true
console.log(letMap.let('key1'))
// [2]
letMap.let('key2').push(4)
console.log(letMap.let('key2'))
// [4]

```
