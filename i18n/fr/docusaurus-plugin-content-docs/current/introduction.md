---
title: À propos de Numeraire
sidebar_position: 1
image: /img/social.png
---

**Numeraire Technologies** développe en Suisse des logiciels et des services pour Bitcoin. Vous pouvez utiliser un compte hébergé, exploiter votre propre instance de SwissKnife ou intégrer les paiements à une application.

## Numeraire Account

Avec [Numeraire Account](account/index.mdx), Numeraire exploite SwissKnife et le nœud de paiement pour vous. Un compte peut contenir plusieurs portefeuilles. Le tableau de bord permet d’envoyer et de recevoir des paiements Lightning, d’enregistrer une adresse Lightning et de recevoir des *zaps* Nostr. Vous pouvez aussi accéder à vos portefeuilles par API.

[Créer un compte](account/register.mdx).

## SwissKnife

[SwissKnife](swissknife/index.mdx) est un logiciel libre écrit en Rust qui orchestre les portefeuilles et les transactions. En l’hébergeant avec votre propre nœud, vous administrez les comptes, les portefeuilles et les sauvegardes nécessaires à la récupération du nœud. SwissKnife se connecte à Core Lightning ou à LND via gRPC ou REST. Il gère les adresses et les transactions Bitcoin sur la chaîne ainsi que les paiements sur Lightning.

[Choisir un mode de déploiement](swissknife/deployment/index.mdx).

## Intégrer une application

L’instance hébergée et les instances auto-hébergées exposent la même API REST. Le [guide pour les développeurs](developers/index.mdx) explique comment créer une clé de compte et lire les paiements d’un portefeuille.

Retrouvez les produits, l’identité visuelle et les coordonnées de l’équipe sur le [site de Numeraire](https://numeraire.tech/fr).
