# HOPR net

HOPR is a privacy-preserving messaging protocol that incentivizes users to participate in the network. It provides privacy by relaying messages via several relay nodes to the recipient. Relay nodes are getting paid via payment channels for their services.

## hopr-ethereum

Hopr-ethereum contains the on-chain logic that is used to process payments for [hoprnet.org](https://hoprnet.org) on the Ethereum blockchain.

## Table of Contents

- [HOPR net](#hopr-net)
  - [hopr-ethereum](#hopr-ethereum)
  - [Table of Contents](#table-of-contents)
- [Requirements](#requirements)
- [Install](#install)
- [Build](#build)
- [Testing](#testing)
- [Coverage](#coverage)
- [Migrating](#migrating)
- [Audits](#audits)
- [Linting](#linting)

# Requirements

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

# Install

```bash
# 1. Installs dependancies
yarn
```

# Build

```bash
# 1. Runs linter
# 2. Compiles smart contracts
# 3. Generates smart contracts' typescript types
# 4. Compiles migrations to `.js`
yarn build
```

# Testing

```bash
yarn test
```

> tip: we can use truffle's [debug](https://www.trufflesuite.com/docs/truffle/getting-started/debugging-your-contracts#debugging-your-contracts) feature to seemingly debug our tests, take look at this [example](./examples/test/DebugExample.test.ts)

# Coverage

```bash
npx hardhat coverage
```

> tip: see coverage results by launching `./coverage/index.html`

# Deploy

To deploy locally, run

```bash
rm -rf deployments/hardhat-localhost deployments/hardhat-localhost2 && yarn deploy:local
```

# Migrating

For public network migrations (rinkeby, kovan, [etc](./utils/networks.ts)), you will have to create a [.env](./.env.example) file within the root directory of this project.

```bash
# local migration
yarn network

# public migration
yarn migrate --network matic
```

# Audits

You can follow the auditing process over at [hopr-audits](https://github.com/hoprnet/hopr-audits).

# Linting

We use solhint's recommended preset to perform linting onto our smart contracts.
