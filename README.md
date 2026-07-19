# Hybrid Warfare & Malware Analysis CTF Dashboard

Dashboard statica per una lezione/laboratorio CTF di base su **Hybrid Warfare** e **Malware Analysis**, ispirata allo stile operativo di TRIDENT SHIELD.
L'obiettivo e' guidare gli studenti nell'analisi di una campagna ibrida simulata, nella classificazione delle evidenze per dominio e nella validazione progressiva delle risposte tramite flag.

## Funzioni principali

- Dashboard HTML/CSS/JavaScript completamente statica.
- Tre moduli didattici:
  - Hybrid Warfare
  - Malware Analysis
  - Final Brief
- Materiali CTF apribili direttamente dalla dashboard: CSV, log, note OSINT, brief e scorecard.
- Validazione per dominio:
  - Cyber
  - Information
  - Cognitive
  - Physical
- Suggerimenti progressivi allineati al playbook.
- Validazione della flag finale nel formato:

```text
FLAG{CYBER_INFORMATION_COGNITIVE_PHYSICAL}
```

- Readiness, punteggio e registro progressi salvati nel browser tramite `localStorage`.
- Playbook studente senza soluzioni.
- Playbook docente con soluzioni, accessibile dal menu dopo inserimento password.

## Struttura del progetto

```text
hybrid-malware-dashboard/
├── index.html
├── style.css
├── app.js
├── PLAYBOOK_RISOLUZIONE.md
├── PLAYBOOK_RISOLUZIONE_CON_SOLUZIONI.md
├── assets/
│   └── logos/
└── ctf/
    ├── m04-malware-analysis/
    ├── m06-hybrid-warfare/
    └── final-mission/
```

## Uso locale

Aprire direttamente il file:

```text
index.html
```

Non serve un server web: la dashboard funziona anche con doppio click sul file HTML.

Per azzerare lo stato della sessione, usare il pulsante:

```text
Reset progressi
```

## Percorso consigliato per gli studenti

1. Aprire la dashboard.
2. Leggere il `Playbook`.
3. Selezionare un modulo.
4. Aprire i materiali CTF collegati.
5. Analizzare le evidenze.
6. Inserire una risposta per ogni dominio.
7. Usare i suggerimenti solo se necessario.
8. Validare i quattro domini.
9. Validare la flag finale.
10. Preparare il report conclusivo.

## Materiali inclusi

### Hybrid Warfare

- `telegram.csv`
- `x-posts.csv`
- `ais.csv`
- `cyber-log.log`
- `osint-image-notes.txt`
- `student-brief.md`

### Malware Analysis

- `strings.txt`
- `pcap-summary.txt`
- `volatility-output.txt`
- `sample_note.txt`
- `yara_rule.yar`
- `student-brief.md`

### Final Mission

- `final-brief.md`
- `final-scorecard.csv`
- `evidence-bundle-index.md`

## Playbook

Il progetto contiene due playbook:

- `PLAYBOOK_RISOLUZIONE.md`: versione per studenti, senza soluzioni.
- `PLAYBOOK_RISOLUZIONE_CON_SOLUZIONI.md`: versione docente, con token e flag finali.

Nel menu della dashboard il playbook docente e' protetto da una password lato client.

> Nota: questa protezione serve solo per uso didattico in aula. In una repository pubblica, una password dentro JavaScript non e' una protezione reale. Se il repository e' pubblico e gli studenti non devono vedere le soluzioni, non pubblicare `PLAYBOOK_RISOLUZIONE_CON_SOLUZIONI.md` oppure tienilo in una repository privata/separata.

## Pubblicazione su GitHub Pages

Per pubblicare la dashboard:

1. Creare una repository GitHub.
2. Caricare tutto il contenuto della cartella `hybrid-malware-dashboard`.
3. Abilitare GitHub Pages da:

```text
Settings -> Pages -> Deploy from branch
```
4. Selezionare il branch e la cartella root.
5. Aprire l'URL pubblicato da GitHub Pages.

## Note etiche e di sicurezza

Questo materiale e' pensato per formazione, difesa, threat intelligence e incident response.

Non include malware reale e non richiede l'esecuzione di campioni malevoli. Gli esercizi sono basati su file innocui, log sintetici e indicatori didattici.

Non usare queste tecniche su sistemi, reti o dati senza autorizzazione.

## Licenza

Materiale didattico per uso formativo. Prima della pubblicazione pubblica, verificare loghi, brand, materiali docente e policy dell'ente o corso.
