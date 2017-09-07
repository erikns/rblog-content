# Dag 5

Har vært litt kaos i dag med tanke på hvor
vi skulle sitte. WA holder på å etablere seg i nye lokaler som enda ikke er
klare.

Jobber videre med øvingsoppgaven. Den er mer eller mindre ferdig, så dagen har
stort sett gått med til å finpusse på detaljer, samt legge til funksjon for
registrering av nye brukere. Dukket opp et par hindre i denne prosessen; Jeg
hadde problemer med at kallet mot REST-apiet appen bruker ikke ville akseptere
innlogging av brukeren etter registreringsprosessen. Det viste seg at under
registrering på serversiden hadde ikke passordene blitt lagret i kryptert format,
selv om innloggingslogikken forventet slike. Oops... ønsker nå at jeg hadde tatt meg
tid til å skrive tester til logikken i API-koden.

[Redux](http://redux.js.org) er et bibliotek som danner et rammeverk for en funksjonell tilnærming til
applikasjoners tilstand. Dillemmaet er hvor mye av tilstanden som hører hjemme der.
Rammeverket krever en del oppsett, infrastruktur og at man tenker på tilstanden og
dens forandringer på en spesiell måte. Om all tilstand eller bare noe av dem hører hjemme
i Redux er (etter litt Googling) et mye debattert tema. Bestemte meg til slutt
for å holde det meste av tilstand som berører applikasjonen som helhet i Redux, og
resten i de respektive komponenter. Innloggingsstatus, og listen med oppgaver er
eksempel på tilstandsvariabler i min Redux-implementasjon.

Ble kort dag i dag grunnet jobb på ettermiddagen.
