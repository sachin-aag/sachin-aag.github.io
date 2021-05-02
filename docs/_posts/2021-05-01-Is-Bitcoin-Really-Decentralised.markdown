---
layout: post
title:  "Is Bitcoin Really Decentralised?"
date:   2021-05-01 23:09:43 +0200
categories: capitalism brave chrome advertising
---
>  I’ve been working on a new electronic cash system that’s fully
peer-to-peer, with no trusted third party. — Satoshi Nakamoto

This is the promise of bitcoin: A decentralized cash system, which works without any third party.
>  As long as honest nodes control the most CPU power on the network, they can generate the longest chain and outpace any attackers. — Satoshi Nakamoto

As long as honest nodes control the most computing power on the network, the network cannot be compromised. In this article I discuss how bitcoin is not as decentralized as most people think it to be and why this has come to be the case.

## Proof of Work

Let’s take a step back and talk about bitcoin mining. Bitcoin works on a proof of work consensus model. What this means, is that in order to approve a bitcoin transaction, some amount of computational work needs to be performed. Computational work in the case of bitcoin is the computation of a hash function with different inputs. Computational power is measured in terms of hash rate or the number of hashes one can perform per second.

Computational work is done by a network of miners, who get paid for their services, either in the form of a transaction fees or in newly generated bitcoins. The amount of bitcoin that gets generated with each block is fixed and gets halved each year.

Once a miner has performed the work needed to add a block, the other miners start working on the next block based on this block. The longest chain is considered to be the point of truth. In case of two blockchains of the same length, one just has to wait till one of them becomes longer.

![A sample blockchain. The purple blocks are stale blocks.](/assets/decentralised/sidechain.jpeg)

For example, in the above diagram, the black blocks represent the true version of the blockchain. The purple blocks are blocks for which a miner performed the proof of work and tried to add it to the blockchain. However, this was not included in the main chain as some other blocks were picked by the miners to be included in the chain.

## Brief History of Bitcoin Mining

![Aggregate hash rate of bitcoin miners in Tera hashes/s over time](/assets/decentralised/mining.png)

The amount of computing power for bitcoin mining has grown over time. The plot below has the y axis in the log scale. As can be seen, mining power has increased rather quickly over the years. This is due to rapid improvements in hardware used for bitcoin mining.

![A timeline of bitcoin mining hardware](/assets/decentralised/mininghw.png)

When bitcoin was launched, people started mining bitcoin on their personal computers. Using a CPU, people were able to achieve a hash rate of 2–20 mega hashes per second, i.e. they could perform between 2 million and 20 million hashes in one second.

Pretty quickly, people figured out that GPUs could compute a hash function much more quickly as compared to a CPU. GPUs remained useful for mining bitcoin for a few years.

However, as bitcoin mining started to become a profitable venture, companies started to manufacture hardware designed specifically to mine bitcoin. These ASICs(application specific integrated circuits) consumed less power than GPUs and had a much higher hash rate than GPUs.

These days, most bitcoin mining is done in mining factories, where hundreds or thousands of ASICs are running together. This has made the barrier to entry for bitcoin mining extremely high.

As a sidenote, most ASICs for mining bitcoin are manufactured by a chinese company called [Bitmain](https://www.bitmain.com/). By some estimates [around 70% of the mining hardware is manufactured by them.](https://spectrum.ieee.org/computing/networks/why-the-biggest-bitcoin-mines-are-in-china)

## Mining Pools

It became quite difficult for people to mine bitcoin by themselves as individual users as most people did not have the required hardware. Some people decided to pool their resources and split the computational work and rewards. The first mining pool was started in 2010 called [slushpool](https://slushpool.com/home/).

![Bitcoin mining pool share of hash rates](/assets/decentralised/btcpools.png)

Today there are quite a few mining pools to choose from, although a large number of these are located in China, due to cheap availability of electricity.

Hence, if you wanted to start mining bitcoin today, you would have to invest in an ASIC, and join a mining pool, which would reward you based on the amount of computational work you do.

It is important to note that the top 5 mining pools control 63.4% of the computing power. However, individual miners can join and leave mining pools quite easily. If a mining pool acts unethically, the hope is that people will leave that pool and join another one. This has happened at least once with bitcoin, where GHash obtained more than 51% of the mining power. In this case, GHash raised their pool fees, encouraging miners to join another pool.

However, there have been instances of malicious 51% attacks on smaller cryptocurrencies, such as Bitcoin Gold and Ethereum classic. This goes against the promise of blockchain being unhackable and decentralized.

## Quantifying Bitcoin Decentralization

[Balaji Srinivasan](https://en.wikipedia.org/wiki/Balaji_Srinivasan) does a great job of quantifying decentralization in [this article](https://news.earn.com/quantifying-decentralization-e39db233c28e). The basic idea is to identify the minimum number of parties that need to be compromised to compromise the blockchain.

In case of bitcoin mining, if the top 4 mining pools are compromised, it can lead to problems, at least up until the point the participants of the pool realise that something is wrong. At certain points in time, when only one pool controls a majority of the computing power, this party could act unethically, leading to price swings in the short term and allowing for illicit gains.

## 51% Attack

What happens if one pool or a group of pools collude and take control of more than 51% of the computational power? Satoshi Nakamoto warns in his [bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf) that in such cases bitcoin will no longer be decentralized.

There are two ways to exploit a 51% attack. The attacker could choose to double spend his cryptocurrency. The attacker could also choose to block specific transactions , for example, to target certain addresses. Lets talk about how these could happen.

Note that the pre-condition is that the attacker controls 51% of the mining power. Hence, he is able to mine blocks faster than anybody else. In order to double spend his cryptocurrency, the attacker could start mining a private fork of the chain and not announce it to the world. He could choose to spend all his cryptocurrency and use it to buy a house or a car.

![A double spend attack once an attacker controls 51% of mining power](/assets/decentralised/hacksidechain.png)

The attacker announces these transactions to the public blockchain. He also maintains a private blockchain where he does not mine these transactions. After a certain amount of time, he announces his private blockchain, and the community accepts this as it has the most amount of work put into it. Hence, the attacker would possess the cryptocurrency as well as the assets he bought.

Note that, at this stage everybody becomes aware of the fraud. This would drive down the price of the cryptocurrency. The community could choose to collectively fix the fraud. Or they could abandon the cryptocurrency altogether. They might also choose to not accept the attacker’s blockchain causing a hard fork in the blockchain. This would technically be breaking the protocol.

The other thing the attacker could do, is to block certain transactions for a prolonged period of time. This would also drive the price of the cryptocurrency down and reduce trust in the overall system. Eventually, the attacker will lose his majority share of mining power, allowing things to proceed smoothly. That being said, if this happens a few times, people will lose trust in the system.

It is quite difficult to pull off a 51% attack on large cryptocurrencies like bitcoin. The amount of computing power used for bitcoin is a lot, and attaining that much computing power is difficult. Furthermore, the electricity costs to run such a system would also add to the problem. Some sources estimate that this would cost around 15 billion USD. This makes it quite difficult to pull off a 51% attack on bitcoin in a profitable manner.

A malicious government might want to do this in order to take control of the bitcoin network. However, if this happens, it would cause a fork in the bitcoin chain as soon as the users realize what has happened. Nobody would want to stay on the compromised blockchain.

<iframe width="420" height="315" src="https://www.youtube.com/embed/ncPyMUfNyVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video summarizes this brilliantly. Note that a 51% attack might still be profitable for smaller cryptocurrencies.

While the long term effects of a 51% attack may not be detrimental, it will definitely have some undesirable short term consequences. [These include hard forks in the cryptocurrency, price swings, loss of trust in the algorithm, illegal gains by attackers through double spending, and stolen cryptocurrency](https://www.technologyreview.com/2019/02/19/239592/once-hailed-as-unhackable-blockchains-are-now-getting-hacked/).

Furthermore, the people worst hit by such an attack would be the ones who do not fully understand how cryptocurrencies work, as they would sell in a panic at a loss. This would most likely be the poorer sections of society.

## Can Decentralization and Capitalism co-exist?

Anybody can mine bitcoin. However, certain parties have invested so much money into computational resources for mining bitcoin that it is virtually impossible for an ordinary person to gain anything from mining bitcoin.

This brings us to the heart of the problem. Bitcoin made the possession of computational resources profitable. Computational resources can be bought for money. Hence, the distribution of computational resources would end up matching the wealth structure of our society, assuming everybody has the same amount of information. This would make income inequality worse as the rich would be able to successfully mine bitcoin, while the poor with the small amount of resources they have, would never be able to mine a block successfully.

One could enforce a rule limiting the number of blocks one miner can add to the blockchain in a day. However, this is like a communist regime limiting the income of its citizens. I find it hard to imagine a capitalist set of rules, where a cryptocurrency could be truly decentralized for a sustained period of time.

**Society shapes financial systems and financial systems shape society. However, bitcoin is too small to have any impact on society. Hence, the inequality inherent in society has leaked into bitcoin in more than one ways.**

## Some Possible Solutions?

A lot of blockchains are trying to democratize and decentralize. The best example is Ethereum which is resistant to ASICs and can be mined to GPU. This is partially helpful as it allows more people to mine Ethereum. However, the concentration of ethereum mining power into pools is far from democratic.

![Ethereum mining pool shares](/assets/decentralised/ethpools.png)

Miners can switch mining pools easily, so perhaps mining pool power concentration is not such a bad thing. It is still possible for a set of people to buy up GPUs making it harder and less profitable to mine Ethereum.

One solution Ethereum is experimenting with is sharding, where the mining fees gets reduced and splits the ethereum chain into shards allowing more people to mine Ethereum. However, this does compromise the security of the overall Ethereum chain opening it up to single shard takeover attacks. For example, if 10% of the Ethereum miners always act in a deceptive manner (refusing transactions in order to drive the costs up for example), eventually they would be able to slow down a particular shard.

It is yet to be seen how successful Sharding will be as a protocol.

## Final Thoughts

Cryptocurrencies are supposed to provide an alternative to the mismanagement of currencies by central banks. In order to successfully do this, they need to be decentralized. While Bitcoin and Ethereum are quite large, and are quite difficult to attack, smaller cryptocurrencies are still extremely vulnerable. Hence, there is a need for a protocol which can allow smaller cryptocurrencies to successfully operate.

Furthermore, Bitcoin and Ethereum are still vulnerable to a 51% attack, even though such an attack would require a large number of resources, and most likely, be unprofitable. Perhaps a different consensus protocol might serve better in building a truly decentralized cryptocurrency.
