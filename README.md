# Laminitas

Keep track of your sticker album progress and easily exchange stickers with other people!

## Premise

When completing a sticker album, you usually exchange repeated stickers with a lot of people. The process goes something like this:

* The other person gives you a stack of their repeated stickers. Hopefully sorted but most likely not.
* You go through it one by one and cross check it against the list of the stickers you need.
* You give your stack of repeated stickers to the other person and they do the same.
* After both have finished, you see how many of their stickers you need and how many of your stickers they need, and agree on which stickers to exchange if the amounts are different.

4 years ago I was completing the Panini FIFA World Cup sticker album, and I started thinking about ways of automating this process, that is, to quickly find out which stickers you can exchange with the other person. Now that the World Cup is upon us once again, I decided to finally work on the idea.

## Details

I wanted the solution to work without a centralized server or database. That would be simpler for the user (no need to create an account) but also for me (less coding). That's when I thought about using QR codes. The process goes like this:

* Users are keeping track of their progress using the website.
* When A wants to exchange stickers with B, they both scan each other's QR codes and navigate to the given URL.
* The website immediately shows them which stickers they can exchange.

Since all the state is stored on the client, it could be made to work entirely offline as a PWA (pending).

Initially I was hardcoding the amount of stickers according to this year's World Cup album, but I realized this could work for any sticker album if I made the amount of stickers configurable.

The exchange functionality is really only useful if everyone you exchange stickers with is already using the website. That's why I see this project more as a proof-of-concept.
