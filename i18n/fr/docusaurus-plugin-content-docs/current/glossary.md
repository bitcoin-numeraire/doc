---
title: Glossaire Bitcoin
description: Les termes employés pour utiliser un portefeuille SwissKnife ou intégrer des paiements.
sidebar_position: 5
image: /img/social.png
---

## Compte et portefeuille {#account-and-wallet}

Un **compte** identifie la personne ou l’organisation autorisée à gérer un ou plusieurs **portefeuilles**. Chaque portefeuille tient un solde pour un actif sur un réseau donné. Lors d’un envoi par API, la requête désigne explicitement le portefeuille à débiter. Les BTC sur regtest et ceux du réseau principal Bitcoin appartiennent à des portefeuilles distincts. [Fonctionnement des comptes et portefeuilles](./swissknife/architecture/index.mdx#account-and-asset-wallet-model)

## Satoshi et millisatoshi {#satoshi-and-millisatoshi}

Un bitcoin vaut 100 000 000 satoshis (sats). Un satoshi vaut 1 000 millisatoshis (msat). SwissKnife exprime les soldes en BTC natifs en millisatoshis. Par exemple, `available_msat: 125000` indique un solde disponible de 125 sats. [Consulter un solde](./swissknife/usage/index.mdx#checking-your-balance)

## Solde disponible et montant réservé {#available-and-reserved-balance}

Le **solde disponible** est le montant que le portefeuille peut dépenser. Une **réservation** met des fonds de côté tant que l’issue d’un paiement sortant est en attente. Si une requête expire, vérifiez l’état du paiement avant tout nouvel envoi. [État des paiements et frais](./swissknife/usage/payments.mdx#fee-estimates-and-pending-payments)

## Liquidité du nœud {#node-liquidity}

SwissKnife utilise un nœud Lightning pour régler les paiements. Sa capacité à émettre ou recevoir par une route donnée dépend de la liquidité disponible dans les canaux. Les soldes des portefeuilles sont comptabilisés séparément dans le registre SwissKnife. Un changement de nœud conserve ces soldes. [Fournisseurs de liquidité](./swissknife/configuration/liquidity-providers.mdx)

## Facture et adresse Lightning {#lightning-invoice-and-address}

Une **facture BOLT11** fournit au payeur une demande de paiement Lightning assortie d’une échéance. Une **adresse Lightning**, comme `alice@example.com`, est un identifiant réutilisable. Le portefeuille du payeur utilise LNURL-pay pour obtenir une facture au montant demandé. [Recevoir un paiement Lightning](./swissknife/usage/payments.mdx#receiving)

## Adresse de dépôt Bitcoin {#bitcoin-deposit-address}

Une adresse de dépôt Bitcoin reçoit des transactions sur la chaîne. SwissKnife associe l’adresse à un portefeuille et suit le dépôt à partir des observations du nœud. Vérifiez le réseau choisi pour le dépôt. [Recevoir un paiement sur la chaîne](./swissknife/usage/payments.mdx#on-chain-bitcoin-address)

## Règlement et préimage {#settlement-and-preimage}

Un paiement Lightning réglé est arrivé à son terme. La **préimage** est la valeur dont l’empreinte correspond au hachage de paiement de la facture. Pour une facture LNURL-pay émise par SwissKnife, une application peut interroger l’URL de vérification LUD-21 fournie pour connaître l’état du règlement et obtenir la préimage après paiement. [Vérifier une facture](./swissknife/usage/payments.mdx#lud-21-invoice-verification)
