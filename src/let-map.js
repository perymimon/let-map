import EventEmitter from 'events';
import { NEW , UPDATE , DELETE } from './CONSTANT.js'


export class LetMap extends Map {
    #emitter = new EventEmitter();

    constructor(struct) {
        super();
        this.setStruct(struct);
    }

    on(...args) {
        return this.#emitter.on(...args)
    }

    off(...args) {
        return this.#emitter.off(...args)
    }

    // #emit(...args) {
    //     this.#emitter.emit(...args);
    //     this.#emitter.emit('update', ...args);
    // }

    /**
     * @param struct can be object function or primitive
     */
    setStruct(struct) {
        this.struct = struct;
    }

    set(k, nv) {
        let ov = super.get(k);
        super.set(k, nv);
        const event = {key: k, phase: UPDATE, value: nv, oldValue: ov}
        this.#emitter.emit(k /*event name*/, event);
        if (ov === void 0)
            this.#emitter.emit('new', event); /*no event update for that*/
        this.#emitter.emit('update', event);
        return nv;
    }

    delete(k) {
        let ov = super.get(k);
        super.delete(k);
        const event = {key: k, phase: DELETE, value: ov}
        this.#emitter.emit(k /*event name*/, event);
        this.#emitter.emit('delete', event);
        this.#emitter.emit('update', event);
    }

    let(k, ...args) {
        const {struct} = this;
        if (struct && !super.has(k)) {
            const s = typeof struct == 'function' ?
                struct(k, ...args) : structuredClone(struct)
            this.set(k, s)
        }
        return super.get(k);
    }
}

export default LetMap