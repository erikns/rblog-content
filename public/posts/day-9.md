# Dag 9 - Komponenter med avhengigheter

Har etterhvert bevget meg oppover i komponenthierirarkiet og kommet opp til
komponenter som er avhengig av eksterne ting. Dette kompliserer testingen en del.
Når komponenten man tester for eksempel er avhengig av å kalle HTTP-endepunkter,
er du avhengig av å ha muligheten til å styre disse kallene og hva de sender
tilbake.

Store deler av dagen går med på å fikle med noen få tester for å verfisere at de
bruker de eksterne tjenestene riktig, og reagerer korrekt på gitt input fra
eksterne tjenester.

Flere av komponentene som påbegynnes blir satt på vent da ikke alle avhengigheter
er trivielle å simulere i en test.
