import LetMap from './index.js'

console.log(LetMap);

const letMap = new LetMap()

console.assert(letMap instanceof LetMap,  "error in import LetMap")

import  {LetMapBasic} from './index.js'

const letMapBasic = new LetMapBasic() 

console.assert(letMapBasic instanceof LetMapBasic,  "error in import LetMapBasic")  