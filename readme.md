# Vue Email List

## Obiettivo

Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

## Procedimento

- Importiamo la cdn di axios da mettere sull'index.html
- Sul mounted del main.js eseguiamo la richiesta di axios tramite il link fornito per una mail random e usiamo .then per ottenere la risposta
- Creaiamo una costante e assegnaole come valore l'email generata
- Creiamo un array per contenere le email e pushiamo l'email generata dentro l'array
- Mettiamo il meccanismo di generazione di email dentro un ciclo for per generarne 10
- In html usare un v-for per stamparle sul DOM
