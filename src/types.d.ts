import type BN from 'bn.js'
import type HoprCoreConnector from '.'

declare namespace AccountId {
  const SIZE: number
}

declare interface AccountId extends Uint8Array {}

declare namespace Balance {
  const SIZE: number

  /**
   * Abbreviation of the currency, e.g. `HOPR`
   */
  const SYMBOL: string

  /**
   * Decimals of the currency, e.g. 18
   */
  const DECIMALS: number
}
declare interface Balance extends BN {}

declare namespace NativeBalance {
  const SIZE: number

  /**
   * Abbreviation of the currency, e.g. `ETH`
   */
  const SYMBOL: string

  /**
   * Decimals of the currency, e.g. 18
   */
  const DECIMALS: number
}
declare interface NativeBalance extends Balance {}

declare namespace Channel {
  function createFunded(channelBalance: ChannelBalance): Channel

  function createActive(channelBalance: ChannelBalance): Channel

  function createPending(pending: Moment, balance: ChannelBalance): Channel
}
declare interface Channel {
  toU8a(): Uint8Array
}

declare namespace ChannelBalance {
  const SIZE: number

  function create(
    arr?: {
      bytes: ArrayBuffer
      offset: number
    },
    struct?: {
      balance: Balance | BN
      balance_a: Balance | BN
    }
  ): ChannelBalance
}
declare interface ChannelBalance {
  balance: Balance
  balance_a: Balance

  toU8a(): Uint8Array
}

declare namespace Hash {
  const SIZE: number
}
declare interface Hash extends Uint8Array {}

declare namespace Moment {
  const SIZE: number
}
declare interface Moment extends BN {}

declare namespace Signature {
  const SIZE: number

  function create(
    arr?: {
      bytes: ArrayBuffer
      offset: number
    },
    struct?: {
      onChainSignature: Uint8Array
      signature: Uint8Array
      recovery: number
      msgPrefix?: Uint8Array
    }
  ): Signature
}
declare interface Signature extends Uint8Array {
  onChainSignature: Uint8Array
  signature: Uint8Array
  recovery: number
  msgPrefix: Uint8Array
}

declare namespace SignedChannel {
  const SIZE: number

  function create(
    coreConnector: HoprCoreConnector,
    arr?: { bytes: ArrayBuffer; offset: number },
    struct?: {
      channel: Channel
      signature?: Signature
    }
  ): Promise<SignedChannel>
}
declare interface SignedChannel extends Uint8Array {
  channel: Channel
  signature: Signature
  signer: Promise<Uint8Array>
}

declare namespace SignedTicket {
  const SIZE: number

  function create(
    arr?: {
      bytes: ArrayBuffer
      offset: number
    },
    struct?: {
      ticket: Ticket
      signature: Signature
    }
  ): SignedTicket
}
declare interface SignedTicket extends Uint8Array {
  ticket: Ticket
  signature: Signature
  signer: Promise<Uint8Array>
}

declare namespace State {
  const SIZE: number
}
declare interface State {
  toU8a(): Uint8Array
}

declare namespace Ticket {
  const SIZE: number

  /**
   * Constructs a ticket to use in a probabilistic payment channel.
   * @param amount amount of funds to include
   * @param challenge a challenge that has to be solved be the redeemer
   */
  function create(
    amount: Balance,
    challenge: Hash,
    arr?: {
      bytes: ArrayBuffer
      offset: number
    }
  ): Promise<SignedTicket>

  /**
   * Checks a previously issued ticket for its validity.
   * @param signedTicket a previously issued ticket to check
   * @param props additional arguments
   */
  function verify(signedTicket: SignedTicket): Promise<boolean>

  /**
   * BIG TODO
   * Aggregate previously issued tickets. Still under active development!
   * @param tickets array of tickets to aggregate
   * @param props additional arguments
   */
  // aggregate(channel: any, tickets: Ticket[], ...props: any[]): Promise<Ticket>

  /**
   * Submits a signed to the blockchain.
   * @param signedTicket a signed ticket
   */
  function submit(signedTicket: SignedTicket): Promise<void>
}
declare interface Ticket {
  channelId: Hash
  challenge: Hash
  epoch: TicketEpoch
  amount: Balance
  winProb: Hash
  onChainSecret: Hash

  getEmbeddedFunds(): Balance

  toU8a(): Uint8Array
}

declare namespace TicketEpoch {
  const SIZE: number
}
declare interface TicketEpoch extends BN {
  toU8a(): Uint8Array
}

export { AccountId, Balance, NativeBalance, Channel, ChannelBalance, Hash, Moment, State, Signature, SignedChannel, SignedTicket, Ticket, TicketEpoch }
