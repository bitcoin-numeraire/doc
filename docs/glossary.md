---
title: Bitcoin glossary
description: The terms you’ll see when using a SwissKnife wallet or integrating payments.
sidebar_position: 5
image: /img/social.png
---

## Account and wallet {#account-and-wallet}

An **account** identifies the person or organization authorized to manage one or more **wallets**. Each wallet holds a balance for one asset on one network. An API request that sends money identifies the wallet explicitly. BTC on regtest and BTC on the Bitcoin main network belong to different wallets. [How accounts and wallets work](./swissknife/architecture/index.mdx#account-and-asset-wallet-model)

## Satoshi and millisatoshi {#satoshi-and-millisatoshi}

One bitcoin equals 100,000,000 satoshis (sats). One satoshi equals 1,000 millisatoshis (msat). SwissKnife expresses native BTC balances in millisatoshis. For example, `available_msat: 125000` means 125 sats are available. [Read a wallet balance](./swissknife/usage/index.mdx#checking-your-balance)

## Available and reserved balance {#available-and-reserved-balance}

The **available** balance is the amount the wallet can spend. A **reservation** sets funds aside for an outgoing payment while its outcome is pending. If a request times out, check the payment before sending again. [Payment status and fees](./swissknife/usage/payments.mdx#fee-estimates-and-pending-payments)

## Node liquidity {#node-liquidity}

SwissKnife uses a Lightning node to settle payments. Its ability to send or receive over a route depends on available channel liquidity. Wallet balances are recorded separately in the SwissKnife ledger. Changing the node preserves those balances. [Liquidity providers](./swissknife/configuration/liquidity-providers.mdx)

## Lightning invoice and Lightning Address {#lightning-invoice-and-address}

A **BOLT11 invoice** gives the payer a Lightning payment request that expires. A **Lightning Address**, such as `alice@example.com`, is a reusable identifier. The payer’s wallet uses LNURL-pay to obtain an invoice for the requested amount. [Receive a Lightning payment](./swissknife/usage/payments.mdx#receiving)

## Bitcoin deposit address {#bitcoin-deposit-address}

A Bitcoin deposit address receives transactions on the Bitcoin network. SwissKnife associates the address with a wallet and tracks the deposit as the node observes it. Choose the correct network for the deposit. [Receive an on-chain payment](./swissknife/usage/payments.mdx#on-chain-bitcoin-address)

## Settlement and preimage {#settlement-and-preimage}

A settled Lightning payment has completed. The **preimage** is the value whose hash matches the payment hash in the invoice. For an LNURL-pay invoice from SwissKnife, an integration can use the returned LUD-21 verification URL to check settlement and retrieve the preimage once paid. [Verify an invoice](./swissknife/usage/payments.mdx#lud-21-invoice-verification)
