# TranslateBot
Multilingual translation bot for Discord

Works, but is basically a proof of concept.

Current Features:

1. Uses Yandex.Translate as the backend. Free API key for up to 10,000,000 chars/month

2. Hard coded to translate into Russian, English and Spanish, they can be changed, others added, or removed easily, but not on the fly (yet). Input language is autodetected, so anything yandex supports should work as input.

3. You can use +speak to tell it not to translate into your language ie. +speak en will only translate into es and ru (es and ru will translate into en)

4. Supports a single channel where all messages are automatically translated

5. Supports translating any channel with +tb:lang code:message (ie. ```+tb:es:hello``` would return hola)

Future Plans: Support different backends, especially self-hosted options like
Apapche Joshua - https://cwiki.apache.org/confluence/display/JOSHUA/Apache+Joshua+(Incubating)+Home

Still defining a good feature list of ideas, so far:

1. Auto selecting languages based on what users input with +speak (don't translate into en if only ru and es speakers are active in channel)

2. Support other backends: bing, joshua, moses, etc.

3. Support multiple auto translate channels per server.

4. Maybe support multiple isolated channels. for example a post in general-en would be translated and posted in general-es, general-ru, etc

5. Maybe a better name.

6. Better thought out commands
