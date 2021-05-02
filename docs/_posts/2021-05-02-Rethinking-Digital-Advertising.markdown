---
layout: post
title:  "Rethinking Digital Advertising"
date:   2021-05-01 23:09:43 +0200
categories: capitalism brave chrome advertising
---

>  Old George Orwell got it backward. Big Brother isn’t watching. He’s singing and dancing. He’s pulling rabbits out of a hat. Big Brother’s busy holding your attention every moment you’re awake. He’s making sure you’re always distracted. He’s making sure you’re fully absorbed. He’s making sure your imagination withers. Until it’s as useful as your appendix. He’s making sure your attention is always filled.And this being fed, it’s worse than being watched. With the world always filling you, no one has to worry about what’s in your mind. With everyone’s imagination atrophied, no one will ever be a threat to the world. — Chuck Palahniuk

![](/assets/surveillance_cap/cap1.jpg)

## Digital Advertising is Broken

Google and Facebook make most of their revenue through ads. However, in the beginning, both companies hated the idea of showing ads. In fact, the founders of Google were very clear on this point: [“we expect that advertising funded search engines will be inherently biased towards the advertisers and away from the needs of the consumers.”](http://infolab.stanford.edu/~backrub/google.html)

![All data collected is used to improve the product](/assets/surveillance_cap/cap2.png)

Google would collect user data in order to improve its search results. The more people used search, the better search became over time. This was a fair tradeoff and a valid reason for Google to collect data.

The problem with this model is that it makes no money. In order to start making money, user data started being used to serve ads. Not just that, it was used to predict our future behaviors, in order to predict which ads to serve us at which times.

![Data collected is also used to serve ads and predict behavior](/assets/surveillance_cap/cap3.png)

In the new model, Google and Facebook would use most of their machine learning prowess not for product improvement, but for advertising and for predicting our future behaviors. It is also important to note the sheer market share Google and Facebook control in terms of online advertising. Together they claim over 54% of online digital ad revenue. Amazon seems to be catching up quickly, controlling 10% of online digital ad revenue.

Forget the cliche, “if it’s free, you are the product”.You are not the product. You are the abandoned carcass of what is left after extracting every bit of information about you and using it to get you hooked.

[91% of adults agree or strongly agree that users have lost control of how personal information is collected and used by companies.](https://www.pewresearch.org/fact-tank/2016/09/21/the-state-of-privacy-in-america/) A large majority, 64%, believe that the government should do more to regulate advertisers regarding how they use and store personal information. This is not surprising, given that a visit to a popular media site can often have 70 trackers set loose on the reader.

![Amount of data consumed by some ad publishers](/assets/surveillance_cap/extra_data.png)

Ads also lead to more data consumption and more battery consumption which can lead to a terrible experience, especially on mobile phones.

There are many more problems with digital advertising industry as of today. The main problem here is that the industry is not built for the users. It is meant to extract as much value as possible from users. Uncertainty is the enemy, and both Google and Facebook have gone to great lengths to remove any uncertainty about their user’s lives. All this comes at the cost of privacy and our right to the future.

## Is Google becoming Privacy-First?

![Browser share](/assets/surveillance_cap/browser_share.png)

Google recently announced that they will be phasing out the use of 3rd party cookies by 2022 for tracking users from its Chrome browser. Google is kind of late to the party, as many browsers have already stopped supporting 3rd party cookies. However, Chrome does contain the largest market share. Hence, this was an important announcement. Google has also said that it will not use alternative identifiers to track individuals as they browse across the web.

At first this might seem like Google is finally starting to respect the privacy of users. But looking at Google’s past actions, I highly doubt this.

The removal of 3rd party cookies without another alternative for collecting user data would lead to a significant drop in ad revenue ([by 52% as per some estimates](https://www.blog.google/products/chrome/building-a-more-private-web)). This might lead to websites using more aggressive means of tracking like [browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), which, as the name suggests, is a way to collect information allowing websites to identify your browser uniquely. There are a lot of innovative ways to do this, [including playing millisecond audio files through a website and checking how they respond](https://fingerprintjs.com/blog/audio-fingerprinting/). If such practices go mainstream, it would be terrible for privacy.

Google recently announced FLoC as a “privacy respecting” alternative to 3rd party cookies.

### What the Heck is FLoC?

FLoC stands for Federated learning of cohorts. Essentially, Google would assign you to a cohort based on your browsing history. Google has also said that they would only start using a cohort for targeted advertising if it is bigger than a certain size allowing for [k-anonymity](https://en.wikipedia.org/wiki/K-anonymity#:~:text=The%20concept%20of%20k%2Danonymity,subjects%20of%20the%20data%20cannot).

This enables interest based targeted advertising, while keeping your identity anonymous. Your cohort is determined using Federated learning, which means that nobody really knows what the interests of a cohort are. This needs to be figured out by the advertisers.

The main point here is that your cohort is a number derived from your recent browsing history. Which also means that your browsing history will follow you around the internet.

While this does solve some of the anonymity issues around privacy, it still does not solve the major issues. This sort of algorithm can still be used to manipulate user behaviour, which can lead to all sorts of bad consequences, especially when it comes to political ads. **The biggest problem here is that digital advertising is still about the user and not for the user. In order to fix digital advertising, we need to [design a mechanism](https://en.wikipedia.org/wiki/Mechanism_design#:~:text=Mechanism%20design%20is%20a%20field,settings%2C%20where%20players%20act%20rationally.) which works in the best interests of the user.** How can we do this?

## Enter Brave Browser

![Brave icon](/assets/surveillance_cap/brave.png)

[Brave ](https://brave.com/)is a new privacy respecting browser. Led by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)(founder of Mozilla and inventor of Javascript), not only does Brave provide an amazing browsing experience, it also re-thinks the economics of digital advertising.

Receiving ads is an opt-in service which the browser provides. It incentivises users to opt-in for ads by paying them the lion’s share of the ad revenue in cryptocurrency. This is also one of the best uses for a cryptocurrency out there as of today. Furthermore, users’ data never leaves their machines, and all analytics is done on the user’s device itself.

![Brave pays the user to watch ads and does not collect you data](/assets/surveillance_cap/cap4.png)

Essentially, Brave makes the internet for the users and not just about the users. The only problem is that it leads to lesser ad revenues for publishers, as the data available to them is less rich, and not everybody is going to opt-in for ads.

However, ad revenues are already on the decline for publishers. In recent times there has been an increase in the number of ad blockers on devices. Furthermore, other revenue streams such as merchandise and patreon have increased in importance for individual creators.

Brave re-thinks the economics of digital advertising in a radical way. It shows that it is possible to serve ads to users while respecting their privacy and providing direct benefit to them, instead of robbing users of every shred of behavioral surplus.

## The Future of Advertising?

Google’s business model is to collect your data and sell it to advertisers. They have claimed that governments and regulation are bad for progress. In order to keep the money coming in, they are always on the lookout for new methods of data collection from Android to Maps to Waymo. Google has entered every aspect of our life and it does not plan to stop. I would argue that the main purpose of IoT is to collect your data. Why else would I want my fridge talking to my phone?

It is also hard to imagine an internet without Google and Facebook. These companies are not going away anytime soon, irrespective of their attitudes towards the law. While there are attempts to re-think digital advertising, at the moment they have not achieved the scale needed to challenge the incumbents. In the mean time, Google and Facebook continue to find new avenues for data collection and advertising.

While consumers and regulators push for a privacy first internet, most people( and especially regulators) do not understand the technologies which are constantly evolving, allowing internet companies to use jargon and rhetoric to advance their agenda.

With the chips stacked against privacy, it will be a long and hard battle before the internet becomes a place which puts the consumers interests at the forefront.
