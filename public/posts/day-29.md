# Dag 29 & 30 - Mer vedlikehold av tester

Store deler av kodebasen er nå inne i en større omskrivingsprosess. Har tidligere
omtalt at tester ikke enda er en integrert del av areidsflyten for teamet, og som
resultat har mange av testene ikke blitt oppdatert i takt med endringer.

Har satt meg som mål at alle tester skal være grønne når jeg forlater kontoret
om dagene, men etter en uke uten innblanding er det ganske mange tester som ikke
validerer. I tillegg er noen komponenter sjekket inn i kodeversjoneringssystemet
halvferdige.

Både torsdagen og fredagen denne uken går med til å endre både tester og rette
opp små mangler i halvferdig kode, men får ikke tid til å få mer enn ca 1/4 av
de feilende testene til å kjøre skikkelig. Spesielt siden jeg ikke ønsker å reversere
påbegynte omskrivinger...

Av gode nyheter er fiksen tidligere omtalt på testkjøringsverktøyet jeg bruker
for Jest (testrammeverk) i VS Code innkorporert og sluppet med siste versjon
av vscode-jest (versjon 2.5.0) :)
