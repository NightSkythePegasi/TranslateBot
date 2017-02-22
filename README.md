# TranslateBot
Multilingual translation bot for Discord

Works, but is basically a proof of concept.

Current Features:

1. Uses Yandex.Translate as the backend. Free API key for up to 10,000,000 chars/month

2. Hard coded to translate into Russian, English and Spanish, they can be changed, others added, or removed easily, but not on the fly (yet). Input language is autodetected, so anything yandex supports should work as input.

3. You can use +speak to tell it not to translate into your language ie. +speak en will only translate into es and ru (es and ru will translate into en)

4. Supports a single channel where all messages are automatically translated

5. Supports translating any channel with +tb:lang code:message (ie. ```+tb:es:hello``` would return hola)

Future Plans: Total Rewrite, Proposed Features:

1. Single channel translation - translates into multiple languages in channel. Possible language role support. 

2. Multi channel translation - for example one channel for en, one for es, one for ru.

3. Selectable backends - allows local backend(s) as well as online backends. Configurable with admin commands.

4. Channel will time out in x minutes, admin command to configure, any post resets timer or starts translation. A special command to start translation/reset timer without translating to other channels

Proposed Commands:

Probably all commands will use +translatebot then:

info - Display bot info - what languages are supported, which are enabled, what backends are assigned to each language pair

ping - enable translation without posting to other channels

del - remove last message by user (may autodetect and del or edit as needed)

admin:rescan - rescan language channels and enable translation

admin:backend:\<LC\>:\<Backend\> - assign language pait to backend

admin:timeout:\<min\> - timeout in minutes 0 to disable

admin:writeconfig - save configuration (optional, may be more trouble than it's worth)
