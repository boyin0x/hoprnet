[@hoprnet/hopr-ethereum](../README.md) / [Exports](../modules.md) / HoprDistributor

# Interface: HoprDistributor

## Hierarchy

- `BaseContract`

  ↳ **`HoprDistributor`**

## Table of contents

### Properties

- [\_deployedPromise](HoprDistributor.md#_deployedpromise)
- [\_runningEvents](HoprDistributor.md#_runningevents)
- [\_wrappedEmits](HoprDistributor.md#_wrappedemits)
- [address](HoprDistributor.md#address)
- [callStatic](HoprDistributor.md#callstatic)
- [contractName](HoprDistributor.md#contractname)
- [deployTransaction](HoprDistributor.md#deploytransaction)
- [estimateGas](HoprDistributor.md#estimategas)
- [filters](HoprDistributor.md#filters)
- [functions](HoprDistributor.md#functions)
- [interface](HoprDistributor.md#interface)
- [off](HoprDistributor.md#off)
- [on](HoprDistributor.md#on)
- [once](HoprDistributor.md#once)
- [populateTransaction](HoprDistributor.md#populatetransaction)
- [provider](HoprDistributor.md#provider)
- [removeListener](HoprDistributor.md#removelistener)
- [resolvedAddress](HoprDistributor.md#resolvedaddress)
- [signer](HoprDistributor.md#signer)

### Methods

- [MULTIPLIER](HoprDistributor.md#multiplier)
- [\_checkRunningEvents](HoprDistributor.md#_checkrunningevents)
- [\_deployed](HoprDistributor.md#_deployed)
- [\_wrapEvent](HoprDistributor.md#_wrapevent)
- [addAllocations](HoprDistributor.md#addallocations)
- [addSchedule](HoprDistributor.md#addschedule)
- [allocations](HoprDistributor.md#allocations)
- [attach](HoprDistributor.md#attach)
- [claim](HoprDistributor.md#claim)
- [claimFor](HoprDistributor.md#claimfor)
- [connect](HoprDistributor.md#connect)
- [deployed](HoprDistributor.md#deployed)
- [emit](HoprDistributor.md#emit)
- [fallback](HoprDistributor.md#fallback)
- [getClaimable](HoprDistributor.md#getclaimable)
- [getSchedule](HoprDistributor.md#getschedule)
- [listenerCount](HoprDistributor.md#listenercount)
- [listeners](HoprDistributor.md#listeners)
- [maxMintAmount](HoprDistributor.md#maxmintamount)
- [owner](HoprDistributor.md#owner)
- [queryFilter](HoprDistributor.md#queryfilter)
- [removeAllListeners](HoprDistributor.md#removealllisteners)
- [renounceOwnership](HoprDistributor.md#renounceownership)
- [revokeAccount](HoprDistributor.md#revokeaccount)
- [startTime](HoprDistributor.md#starttime)
- [token](HoprDistributor.md#token)
- [totalMinted](HoprDistributor.md#totalminted)
- [totalToBeMinted](HoprDistributor.md#totaltobeminted)
- [transferOwnership](HoprDistributor.md#transferownership)
- [updateStartTime](HoprDistributor.md#updatestarttime)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:102

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:77

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addAllocations` | (`accounts`: `string`[], `amounts`: `BigNumberish`[], `scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `addSchedule` | (`durations`: `BigNumberish`[], `percents`: `BigNumberish`[], `name`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `allocations` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `amount`: `BigNumber` ; `claimed`: `BigNumber` ; `lastClaim`: `BigNumber` ; `revoked`: `boolean`  }\> |
| `claim` | (`scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimFor` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getClaimable` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSchedule` | (`name`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]]\> |
| `maxMintAmount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `revokeAccount` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `startTime` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalMinted` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalToBeMinted` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateStartTime` | (`_startTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:393

___

### contractName

• **contractName**: ``"HoprDistributor"``

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:199

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:97

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `addAllocations` | (`accounts`: `string`[], `amounts`: `BigNumberish`[], `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addSchedule` | (`durations`: `BigNumberish`[], `percents`: `BigNumberish`[], `name`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `allocations` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `claim` | (`scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimFor` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getClaimable` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getSchedule` | (`name`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `maxMintAmount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `revokeAccount` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `startTime` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalMinted` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalToBeMinted` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateStartTime` | (`_startTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:517

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AllocationAdded` | (`account?`: `string`, `amount?`: ``null``, `scheduleName?`: ``null``) => `AllocationAddedEventFilter` |
| `AllocationAdded(address,uint128,string)` | (`account?`: `string`, `amount?`: ``null``, `scheduleName?`: ``null``) => `AllocationAddedEventFilter` |
| `Claimed` | (`account?`: `string`, `amount?`: ``null``, `scheduleName?`: ``null``) => `ClaimedEventFilter` |
| `Claimed(address,uint128,string)` | (`account?`: `string`, `amount?`: ``null``, `scheduleName?`: ``null``) => `ClaimedEventFilter` |
| `OwnershipTransferred` | (`previousOwner?`: `string`, `newOwner?`: `string`) => `OwnershipTransferredEventFilter` |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: `string`, `newOwner?`: `string`) => `OwnershipTransferredEventFilter` |
| `ScheduleAdded` | (`durations?`: ``null``, `percents?`: ``null``, `name?`: ``null``) => `ScheduleAddedEventFilter` |
| `ScheduleAdded(uint128[],uint128[],string)` | (`durations?`: ``null``, `percents?`: ``null``, `name?`: ``null``) => `ScheduleAddedEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:473

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `addAllocations` | (`accounts`: `string`[], `amounts`: `BigNumberish`[], `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addSchedule` | (`durations`: `BigNumberish`[], `percents`: `BigNumberish`[], `name`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `allocations` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `amount`: `BigNumber` ; `claimed`: `BigNumber` ; `lastClaim`: `BigNumber` ; `revoked`: `boolean`  }\> |
| `claim` | (`scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimFor` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getClaimable` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getSchedule` | (`name`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[], `BigNumber`[]]\> |
| `maxMintAmount` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `revokeAccount` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `startTime` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalMinted` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalToBeMinted` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateStartTime` | (`_startTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:225

___

### interface

• **interface**: `HoprDistributorInterface`

#### Overrides

BaseContract.interface

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:204

___

### off

• **off**: `OnEvent`<[`HoprDistributor`](HoprDistributor.md)\>

#### Overrides

BaseContract.off

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:220

___

### on

• **on**: `OnEvent`<[`HoprDistributor`](HoprDistributor.md)\>

#### Overrides

BaseContract.on

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:221

___

### once

• **once**: `OnEvent`<[`HoprDistributor`](HoprDistributor.md)\>

#### Overrides

BaseContract.once

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:222

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `MULTIPLIER` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `addAllocations` | (`accounts`: `string`[], `amounts`: `BigNumberish`[], `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addSchedule` | (`durations`: `BigNumberish`[], `percents`: `BigNumberish`[], `name`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `allocations` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claim` | (`scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimFor` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getClaimable` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getSchedule` | (`name`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `maxMintAmount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `revokeAccount` | (`account`: `string`, `scheduleName`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `startTime` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `token` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalMinted` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalToBeMinted` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateStartTime` | (`_startTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:592

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:80

___

### removeListener

• **removeListener**: `OnEvent`<[`HoprDistributor`](HoprDistributor.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

packages/ethereum/src/types/HoprDistributor.ts:223

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:96

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/ethers/node_modules/@ethersproject/contracts/lib/index.d.ts:79

## Methods

### MULTIPLIER

▸ **MULTIPLIER**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

___

### addAllocations

▸ **addAllocations**(`accounts`, `amounts`, `scheduleName`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `string`[] |
| `amounts` | `BigNumberish`[] |
| `scheduleName` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### addSchedule

▸ **addSchedule**(`durations`, `percents`, `name`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `durations` | `BigNumberish`[] |
| `percents` | `BigNumberish`[] |
| `name` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### allocations

▸ **allocations**(`arg0`, `arg1`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `amount`: `BigNumber` ; `claimed`: `BigNumber` ; `lastClaim`: `BigNumber` ; `revoked`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `amount`: `BigNumber` ; `claimed`: `BigNumber` ; `lastClaim`: `BigNumber` ; `revoked`: `boolean`  }\>

___

### attach

▸ **attach**(`addressOrName`): [`HoprDistributor`](HoprDistributor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`HoprDistributor`](HoprDistributor.md)

#### Overrides

BaseContract.attach

___

### claim

▸ **claim**(`scheduleName`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduleName` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### claimFor

▸ **claimFor**(`account`, `scheduleName`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `scheduleName` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### connect

▸ **connect**(`signerOrProvider`): [`HoprDistributor`](HoprDistributor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`HoprDistributor`](HoprDistributor.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`HoprDistributor`](HoprDistributor.md)\>

#### Returns

`Promise`<[`HoprDistributor`](HoprDistributor.md)\>

#### Overrides

BaseContract.deployed

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

___

### getClaimable

▸ **getClaimable**(`account`, `scheduleName`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `scheduleName` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getSchedule

▸ **getSchedule**(`name`, `overrides?`): `Promise`<[`BigNumber`[], `BigNumber`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`[], `BigNumber`[]]\>

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

___

### maxMintAmount

▸ **maxMintAmount**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`HoprDistributor`](HoprDistributor.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |

#### Returns

[`HoprDistributor`](HoprDistributor.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`HoprDistributor`](HoprDistributor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`HoprDistributor`](HoprDistributor.md)

#### Overrides

BaseContract.removeAllListeners

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### revokeAccount

▸ **revokeAccount**(`account`, `scheduleName`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `scheduleName` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### startTime

▸ **startTime**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### token

▸ **token**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

___

### totalMinted

▸ **totalMinted**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### totalToBeMinted

▸ **totalToBeMinted**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### updateStartTime

▸ **updateStartTime**(`_startTime`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_startTime` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>
