import { Challenge } from './index.js'
import { u8aToHex, stringToU8a } from '../u8a/index.js'
import { SECP256K1_CONSTANTS } from '../crypto/index.js'
import type { HalfKey } from './index.js'

import secp256k1 from 'secp256k1'

const MOCK_RESPONSE = '0x0364e9fee43e1625e38aaf4b1efa44b265e2403377e8fed0963ed8b698f14b66'

export class Response {
  constructor(private readonly arr: Uint8Array) {
    if (typeof Buffer !== 'undefined' && Buffer.isBuffer(arr)) {
      throw Error(`Expected a Uint8Array but got a Buffer`)
    }

    if (arr.length != Response.SIZE) {
      throw new Error('Incorrect size Uint8Array for hash')
    }

    if (!secp256k1.privateKeyVerify(arr)) {
      throw new Error(`Invalid input argument. Given value is not a valid field element.`)
    }
  }

  static fromHalfKeys(firstHalfKey: HalfKey, secondHalfKey: HalfKey): Response {
    return new Response(secp256k1.privateKeyTweakAdd(firstHalfKey.clone().serialize(), secondHalfKey.serialize()))
  }

  static deserialize(arr: Uint8Array): Response {
    return new Response(arr)
  }

  toHex(): string {
    return u8aToHex(this.arr)
  }

  serialize(): Uint8Array {
    return this.arr
  }

  toChallenge(): Challenge {
    return new Challenge(secp256k1.publicKeyCreate(this.arr))
  }

  static SIZE = SECP256K1_CONSTANTS.PRIVATE_KEY_LENGTH

  static createMock(): Response {
    return new Response(stringToU8a(MOCK_RESPONSE))
  }
}
