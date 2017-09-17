# Dag 7

Litt avkortet dag grunnet jobb, men fortsetter med testing av enkeltkomponenter.

Klientsiden av applikasjonen er skrevet i Javascript. All infrastruktur og
byggesystemer er også basert på dette.

Når man skriver tester hjelper det mye på
effektiviteten at testene kjøres med en gang når noe endres. Dette har vært kilden
til noe problemer i dag. Testene på klientsiden kjører ved hjelp av et verktøy som
heter `jest`, som også har mulighet til å overvåke filendringer og kjøre de testene
der det har vært endringer siden sist. Jest er avhenging av komponenter i
operativsystemet for å tilby denne muligheten.

Brukte store deler av dagen på å få installert riktige versjoner av operativsystem-
infrastruktur for å få denne funksjonen til å virke. Alternativet hadde vært å
kjøre tester manuelt hver gang.
