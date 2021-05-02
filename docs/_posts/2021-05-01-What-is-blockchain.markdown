---
layout: post
title:  "What is Blockchain?"
date:   2021-05-01 23:09:43 +0200
categories: bitcoin decentralisation cryptocurrency blockchain
---

This article is not about bitcoin. It is about the technology underlying bitcoin. If you are looking to cut through the hype and understand how bitcoin works from a technical perspective, then you have come to the right place. This article will not tell you if you should invest in bitcoin. It will, however, help you develop your own opinion on the matter. Moreover, the applications of blockchain go well and beyond bitcoin.

## When did the first blockchain start?

Bitcoin was released in 2008, throwing blockchain into the limelight. However, the first blockchain was started in 1995. They publish the hash value of their blockchain in the New York Times each week. In their 1991 paper titled [“How to Time-Stamp a Digital Document”](https://link.springer.com/article/10.1007/BF00196791), Haber and Stornetta laid the foundations for what is today known as blockchain. They were not trying to develop a decentralised currency, but were trying to solve a much more boring problem, namely, how to timestamp a document digitally.

![Stuart Haber holding up the NYT page with the hash value](/assets/blckchain/haber.jpg)

This article covers the innovations from the said paper and [“Improving the Efficiency and Reliability of Digital Time-Stamping”](https://link.springer.com/chapter/10.1007/978-1-4613-9323-8_24) (1995, Haber and Stornetta). I will also talk about how these papers relate to bitcoin.

Before we can begin, we need to understand two cryptographic concepts, namely, cryptographic hash functions and digital signatures.

## Cryptographic Hash Functions

A **hash function** is a function which satisfies the following properties:

 1. **Flexible input size :** Its input can be of any size.

 2. **Fixed output:** It has a fixed length output. For our purposes, we will assume this to be 256 bits.

 3. **Efficient:** It is efficient to compute. In more technical terms, what this means is that the computation time is *O(n)*, for an input string of size *n*.

![Sample hash function. It generates a fixed length output for any input.](/assets/blockchain/hash.png)

For a hash function to be called a **cryptographic hash function**, the following properties need to be satisfied as well:

 1. **Collision resistance:** What this means is that for any input *x* such that *h(x)= y*, we cannot easily find another input, say z, such that *y = h(z).*

 2. **Computationally non-invertible:** Given the output of a hash function, it is difficult to find the input from which that output was computed.

 3. **Puzzle-friendly:** Given an input-output pair of a hash function, does not convey any information about any other input-output pair. This is an important property of cryptographic hash functions, and bitcoin relies heavily on this.

We will not go into how hash functions are created. For our purposes, it is sufficient to say that such a function exists. One of the most commonly used hash functions is **SHA-256.**

As a side-note, I have only listed the properties of hash functions which are relevant for blockchain and bitcoin. In different applications of hash functions, slightly different properties might be needed.

## Digital Signatures

A digital signature is a scheme for verifying the authenticity of a message. A valid signature serves two purposes:

 1. It verifies the sender of the message.

 2. It verifies the integrity of the message, i.e. the message was not altered in transit.

Both these properties are important for us in the blockchain context. I briefly cover how digital signatures work below.

![Alice generates a secret key and a public key so that she can join the blockchain network](/assets/blockchain/keys.png)

Let’s say Alice decides to join our blockchain network. For this, she needs to generate a public key(pk), which is known to everyone on the network, and a secret key(sk), which she keeps to herself. Note that, the public key can double up as a unique username for Alice, acting as an anonymisation layer. It is hard to identify Alice as a person from her public key.

Now Alice wants to transmit a message to Bob who is also on the network.

![Alice signs a message and transmits it](/assets/blockchain/digital_sign.png)

She first appends her signature to the message and then transmits it to Bob.

![Bob verifies that the transmission is from Alice](/assets/blockchain/sign_verify.png)

Bob can verify the message and the signature using Alice’s public key. If either the message or the signature are invalid, then Bob will know something is wrong and can ask Alice to re-transmit the message.

Note that it is sufficient that Bob knows just Alice’s public key and does not need her private key to verify her message and signature. This is based on a branch of cryptography known as asymmetric cryptography. The details of this are beyond the scope of this article.

## The Digital Time-Stamping Problem

We live in a digital world and consume music, movies and documents in digital form. In a lot of cases, the time at which a document is created is important. It is hard to prevent someone from post-dating or pre-dating digital content, as things in the digital world can be copied easily.

### Naive Solution

One possible solution would be to have a central authority store digital content at the time of creation. If there is a dispute, the central authority can be asked to check their records. This approach could work, but has the following drawbacks:

* **Bandwidth and storage**: Large files need to be transferred and stored

* **Trust**: There is no way to check if the central authority is not corrupt

* **Incompetence**: The central authority could make a mistake in timestamping or processing of the document.

* **Privacy**: The document could get leaked during transmission. Furthermore, the central authority could get hacked.

With a bit of cryptography, we are able to arrive at a much better solution.

### Improvements on the solution

The first change is to transmit the hash of the document to the central authority rather than the document itself. This solves the issue of bandwidth and storage. It also addresses the privacy concern.

The central authority upon receiving the hash value appends the time at which it receives the hash. It digitally signs this sequence and sends back the signature to the client. This acts as a receipt for the client, allowing him to verify that the document was correctly received and processed. This is the second change. This solves the trust issue.

We still have the incompetence issue. For example, the central authority could assign a wrong timestamp. Even though the client can find out the timestamp through the signature, it is difficult for him to correct this without a dispute. In order to solve this, we use a linking structure, where a document can only be added to the end of the chain.

![A sample blockchain stored by a central authority](/assets/blockchain/bc.png)

The central authority on receiving the document hash appends the client ID, the transaction ID and the timestamp. This is called a block. On receiving a new request, it appends the hash of the previous block, and appends all the new information to form the new block. This forms a chain of blocks and is called a blockchain.

To summarise our timestamping service works as follows:

 1. The client sends a hash of a document to the central authority.

 2. The central authority forms a block out of this hash by appending it to the previous hash, the client and transaction ID, and the timestamp. This block is appended to the existing chain stored by the central authority.

 3. The central authority sends back a digital signature of the block to the client verifying that the document has been processed correctly.

In this setup, if the central authority tries to change a particular timestamp, it would have to change all the hashes of the successive blocks. It would also have to issue new signatures to each of the clients.

In case a challenger wishes to check the timestamp of a document, it is possible to ask the client for the hash of the document and locate it in the blockchain.

### A De-centralised Solution

So far, we have talked about building a blockchain which is dependent on a central authority. However, a major factor in the success of blockchain has been its decentralised nature. This is what the bitcoin paper provides us with: A decentralised framework for a blockchain.

But where would the blockchain be stored if it was decentralised?

One idea is to have a network of peers store a copy of the blockchain. This leads us to two problems:

 1. **Adding new blocks**: Who can add new blocks to the chain? How is this done?

 2. **Synchronisation**: How are the blockchains synchronised across the network of peers?

We discuss one possible protocol to resolve this issue. The key idea is that computational work is something of value. A blockchain with more computational work is considered to be the correct one.

When a user wants to add a new document, he can broadcast the hash of the document to the network of peers. In order to add this document to the chain, the peers need to do some amount of computational work. The idea is to append a sequence of bits to the block so that the hash always begins with a certain number of zeros. Due to the puzzle-friendly nature of hash functions, the best strategy to find this sequence is to use a brute force strategy.

The number of zeros depends on the implementation of the blockchain. Bitcoin changes the number of zeros, such that it takes approximately 10 minutes to calculate it. Note that, this is also the reason that bitcoin consumes so much energy and can only process around 7 transactions per second (as compared to visa which does between 30,000–70,000 transactions per second).

![A blockchain with proof of work](/assets/blockchain/bcpow.png)

Once this sequence of bits is found, the block can be added to the chain. In case there are two different versions of the chain between peers, we can just use the longest chain as our point of truth, as it has the most amount of work put into it. In case two different chains have the same length on the network, just wait till one of them becomes longer, and use that as the point of truth.

## Conclusion

Blockchain uses a bunch of existing concepts from cryptography and computer science to come up with a new protocol. It is important to understand each concept, to understand the various design choices and applications of blockchain.

We are already seeing blockchain being applied to a large number of fields. Some of these are currently being explored by the community. Blockchain is going to impact our lives in the coming years. Only time will tell how big this impact will be.
