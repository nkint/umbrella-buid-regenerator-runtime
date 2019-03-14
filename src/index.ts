// import '@babel/polyfill'

import { Vec2 } from '@thi.ng/vectors'
import * as tx from '@thi.ng/transducers'

const v: Vec2 = new Vec2()
v[0] = 42
const r = [...tx.map(x => x[0], [v])]
const itr = Vec2.iterator(v, 1, 0, 0, 0)

console.log(r, itr, itr.next())
