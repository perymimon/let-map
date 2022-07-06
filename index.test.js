
import LetMapDefault  from './index.js'

console.log(LetMapDefault);

const letMapDefault = new LetMapDefault()

console.assert(letMapDefault instanceof LetMap,  "error in import LetMap")

import  {LetMapBasic} from './index.js'

const letMapBasic = new LetMapBasic()

import  {LetMap} from './index.js'

const letMap = new LetMap()