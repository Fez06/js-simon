Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

RISOLUZIONE:

1-Creo una funzione per creare 5 numeri casuali univoci che vengono sia visualizzati a schermo, sia registrati in un array.

2-Dopo 30 secondi che i numeri sono stati visti li faccio scomparire con l'uso di setTimeout e dal 31esimo secondo faro' comparire a schermo dei prompt in cui il player deve inserire i numeri che ha visto.

3-I prompt devono continuare ad apparire fino a quando il player non mette 5 numeri.(while)

4-Dopo che finalmente ho ottenuto dai prompt i 5 numeri devo far controllare quali di questi numeri corrispondono a quelli visti all'inizio e quindi presenti nell'array.
