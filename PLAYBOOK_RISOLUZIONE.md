# Playbook di Risoluzione CTF

Dashboard: Hybrid Warfare & Malware Analysis  
Obiettivo: risolvere i moduli in modo ordinato, difensivo e documentabile.

---

## 0. Metodo generale

Prima di risolvere una challenge, lavora sempre in questo ordine:

1. Leggi lo scenario.
2. Estrai le evidenze osservabili.
3. Separa fatti, ipotesi e inferenze.
4. Costruisci una timeline.
5. Classifica ogni evidenza nei domini:
   - Cyber
   - Information
   - Cognitive
   - Physical
6. Scrivi almeno una ipotesi alternativa.
7. Assegna un confidence level:
   - Basso: pochi indizi, molte spiegazioni possibili.
   - Medio: piu' indizi coerenti, ma manca conferma forte.
   - Alto: evidenze convergenti da fonti diverse.
8. Produci raccomandazioni difensive.

Regola pratica: una singola evidenza non basta per attribuire una campagna.

---

## 1. Mappa dei domini

### Cyber

Include tutto cio' che riguarda sistemi, reti, file, log, malware, accessi, IOC e vulnerabilita.

Esempi:

- IP sospetti.
- Domini typosquatting.
- Hash.
- PowerShell anomalo.
- Scheduled task.
- Beacon C2.
- Connessioni insolite.
- Modifiche a file o configurazioni.

Domande guida:

- Quale sistema e' stato toccato?
- Quale vettore iniziale e' plausibile?
- Quali IOC posso estrarre?
- C'e' persistenza?
- C'e' comunicazione verso C2?
- Quale mitigazione immediata riduce il rischio?

### Information

Include contenuti, narrative, leak, propaganda, manipolazione documentale e coordinamento social.

Esempi:

- Hashtag coordinati.
- Documenti pubblicati fuori contesto.
- Leak non verificati.
- Account che amplificano lo stesso messaggio.
- Notizie costruite su prove tecniche deboli.

Domande guida:

- Quale messaggio viene diffuso?
- Chi lo amplifica?
- Il contenuto e' verificato?
- La tempistica coincide con eventi tecnici?
- C'e' un obiettivo politico, reputazionale o operativo?

### Cognitive

Include impatto su fiducia, stress, percezione, decisioni e morale.

Esempi:

- Pressione sugli equipaggi.
- Confusione nella catena di comando.
- Paura generata da leak o deepfake.
- Dubbio sull'autenticita' degli ordini.

Domande guida:

- Quale decisione viene influenzata?
- Chi e' il target psicologico?
- Quale fiducia viene indebolita?
- Come si puo' ristabilire una fonte autorevole?

### Physical

Include effetti operativi, continuita missione, navigazione, asset fisici e infrastrutture.

Esempi:

- Rotta alterata.
- Servizio indisponibile.
- Ritardo operativo.
- Infrastruttura critica sotto pressione.
- Asset fisico esposto a rischio.

Domande guida:

- Qual e' l'effetto reale sul mondo fisico?
- La missione puo' continuare?
- Serve procedura alternativa?
- C'e' rischio per persone, mezzi o infrastrutture?

---

## 2. Modulo 1 - Hybrid Warfare

### Obiettivo

Ricostruire una campagna ibrida correlando eventi cyber, informativi, cognitivi e fisici.

### Challenge 1: Timeline multi-dominio

Evidenze nella dashboard:

- DDoS durante una crisi diplomatica.
- Post coordinati su leak non verificato.
- AIS con salto fisicamente impossibile.

#### Passo 1: crea una tabella eventi

Usa questa struttura:

| Ora | Evento | Fonte | Dominio | Fatto o ipotesi | Note |
|---|---|---|---|---|---|
| 08:10 | Phishing mirato | Email/log | Cyber | Fatto | Possibile accesso iniziale |
| 09:00 | Amplificazione social | X/Telegram | Information | Fatto | Account coordinati |
| 10:30 | Anomalia gateway | Cyber log | Cyber | Fatto | Feed o accesso anomalo |
| 11:15 | Leak manipolato | Social/web | Information | Ipotesi | Verificare integrita documento |
| 12:00 | Impatto missione | Operations | Physical/Cognitive | Ipotesi | Verificare rotta e ordini |

#### Passo 2: classifica i segnali

- Cyber: DDoS, accessi anomali, domini sospetti, log gateway.
- Information: post coordinati, leak, narrativa pubblica.
- Cognitive: incertezza sugli ordini, pressione su decisori/equipaggi.
- Physical: AIS anomalo, rotta alterata, indisponibilita servizi.

#### Passo 3: cerca correlazioni

Segnali forti:

- evento tecnico seguito da amplificazione informativa;
- leak pubblicato in un momento utile alla crisi;
- anomalia AIS compatibile con obiettivo operativo;
- stessi account o messaggi ripetuti da piu' fonti.

Segnali deboli:

- coincidenza temporale senza collegamento;
- un solo account social;
- un solo IOC isolato;
- fonte non verificabile.

#### Passo 4: scrivi ipotesi

Ipotesi principale:

> Una campagna ibrida usa pressione cyber e narrativa informativa per creare confusione sulla situazione operativa.

Ipotesi alternative:

- DDoS opportunistico non collegato al leak.
- AIS anomalo dovuto a errore tecnico o dato corrotto.
- Leak autentico ma amplificato da attori terzi.

#### Passo 5: output atteso

Per validare la challenge, devi poter dire:

- quali eventi sono tecnici;
- quali sono informativi;
- quale effetto cognitivo cercano;
- quale effetto fisico/operativo producono;
- quanto sei sicuro della correlazione.

### Challenge 2: Attribuzione prudente

Evidenze nella dashboard:

- Dominio typosquatting.
- User-agent riusato.
- Narrativa allineata a obiettivo geopolitico.

#### Passo 1: valuta ogni indicatore

Dominio typosquatting:

- utile come IOC;
- puo' indicare preparazione mirata;
- non basta per attribuire.

User-agent riusato:

- puo' collegare attivita tecniche;
- puo' essere copiato da altri;
- va confrontato con infrastruttura, tempi e TTP.

Narrativa geopolitica:

- utile per capire obiettivo;
- non prova l'attore;
- va correlata con fonti tecniche e contesto.

#### Passo 2: costruisci matrice attribuzione

| Evidenza | Peso | Perche' |
|---|---:|---|
| TTP coerenti | Alto | Piu' difficili da falsificare rispetto a singoli IOC |
| Infrastruttura riusata | Medio | Puo' essere compromessa o condivisa |
| Dominio typosquatting | Medio | Indica target, non necessariamente attore |
| User-agent | Basso/Medio | Facile da imitare |
| Narrativa social | Medio | Forte per obiettivo, debole per attribuzione tecnica |

#### Passo 3: formula confidence level

Esempio:

> Confidence medio: le evidenze tecniche e informative sono coerenti con una campagna coordinata, ma non bastano per attribuire con certezza a un attore specifico.

#### Passo 4: raccomandazioni

- Bloccare domini sospetti.
- Monitorare varianti typosquatting.
- Conservare log e campioni in catena di custodia.
- Verificare documenti tramite fonte autorevole.
- Comunicare internamente quali canali sono affidabili.

---

## 3. Modulo 2 - Malware Analysis

### Obiettivo

Eseguire triage malware sicuro usando file innocui, stringhe, log sintetici e indicatori didattici.

Importante: non serve eseguire malware reale.

### Challenge 1: Static triage

Evidenze nella dashboard:

- URL di test `example.test`.
- Path in `ProgramData`.
- Mutex didattico.

#### Passo 1: identifica il tipo di dato

Se hai un file testuale o un estratto `strings.txt`, cerca:

- URL;
- domini;
- IP;
- path;
- nomi file;
- mutex;
- user-agent;
- comandi;
- chiavi di registro;
- riferimenti a API o librerie.

#### Passo 2: classifica gli IOC

| IOC | Tipo | Dominio |
|---|---|---|
| `http://example.test/gate` | Network IOC | Cyber |
| `C:\ProgramData\training\agent.exe` | Host IOC | Cyber |
| `global_training_mutex` | Host artifact | Cyber |
| `TrainingClient/1.0` | Network/User-Agent | Cyber |

#### Passo 3: distingui osservazione e inferenza

Osservazione:

- la stringa contiene un URL;
- la stringa contiene un path;
- la stringa contiene un mutex.

Inferenza:

- potrebbe esserci comunicazione C2;
- potrebbe esserci persistenza;
- potrebbe esserci un singolo eseguibile che evita doppia esecuzione.

Non puoi dedurre con certezza:

- che il file sia malware;
- che l'URL sia stato contattato;
- che la persistenza sia stata creata;
- che ci sia compromissione reale.

#### Passo 4: regola YARA didattica

Esempio sicuro:

```yara
rule Training_Mutex_Demo
{
    meta:
        description = "Rileva una stringa didattica non malevola"
        author = "training"
    strings:
        $mutex = "global_training_mutex"
        $ua = "TrainingClient/1.0"
    condition:
        any of them
}
```

Spiegazione:

- La regola cerca stringhe note.
- Non prova da sola che un file sia malevolo.
- Serve come filtro iniziale, non come attribuzione.

#### Passo 5: output atteso

Per completare la challenge:

- lista IOC;
- classificazione host/network;
- note su cosa non e' dimostrabile;
- eventuale regola YARA;
- prossime azioni difensive.

### Challenge 2: Behavior summary

Evidenze nella dashboard:

- Scheduled task simulato.
- Beacon verso host non autorizzato.
- Accesso a share di navigazione.

#### Passo 1: ricostruisci comportamento

Scheduled task:

- possibile persistenza;
- controlla nome task, comando eseguito, utente, orario.

Beacon:

- possibile C2;
- controlla dominio, IP, porta, frequenza, user-agent.

Accesso a share:

- possibile discovery o raccolta dati;
- controlla path, file letti, orario, account.

#### Passo 2: mappa su MITRE ATT&CK

Possibili tecniche:

| Evidenza | Possibile tecnica |
|---|---|
| Scheduled task | Scheduled Task/Job |
| Beacon HTTP/HTTPS | Application Layer Protocol |
| Accesso a share | Network Share Discovery o Data from Network Shared Drive |
| Comandi PowerShell | PowerShell |

Nota: usa "possibile" finche' non hai log sufficienti.

#### Passo 3: identifica impatto

- Cyber: persistenza e comunicazione C2.
- Information: possibile modifica o esfiltrazione di documenti.
- Cognitive: ordini falsi o perdita di fiducia nei documenti.
- Physical: navigazione o missione condizionata da dati alterati.

#### Passo 4: mitigazioni immediate

- Isolare host sospetto.
- Bloccare dominio/IP C2.
- Disabilitare scheduled task sospetto.
- Acquisire immagine disco/memoria se previsto.
- Ruotare credenziali coinvolte.
- Verificare integrita documenti operativi.
- Cercare lateral movement.

#### Passo 5: domande per chiudere la challenge

- Qual e' il meccanismo di persistenza?
- Quale comunicazione esterna e' sospetta?
- Quali dati potrebbero essere stati letti o modificati?
- Quale azione difensiva fai per prima?

---

## 4. Modulo 3 - Final Brief

### Obiettivo

Produrre un report finale breve, chiaro e utilizzabile da un decisore.

### Challenge 1: Executive report

Struttura consigliata:

#### Executive summary

Esempio:

> Abbiamo osservato una campagna multi-dominio che combina anomalie cyber, amplificazione informativa e pressione cognitiva. Le evidenze indicano una possibile operazione coordinata, ma l'attribuzione resta a confidence medio finche' non vengono confermati ulteriori log e fonti indipendenti.

#### Timeline

Includi massimo 5-8 eventi principali:

- primo evento osservato;
- accesso o anomalia tecnica;
- amplificazione social;
- impatto operativo;
- contenimento;
- ripristino.

#### Evidenze tecniche

Elenca:

- IOC;
- host coinvolti;
- domini/IP;
- file/path;
- comportamenti;
- log piu' importanti.

#### Evidenze informative

Elenca:

- narrativa;
- canali;
- account/gruppi;
- documenti manipolati;
- tempistica.

#### Impatto

Descrivi:

- impatto su sistemi;
- impatto su fiducia e decisioni;
- impatto su missione;
- rischio residuo.

#### Raccomandazioni

Dividi in:

- immediate;
- entro 24 ore;
- entro 7 giorni.

### Challenge 2: Mission scoring

Usa questa scorecard:

| Dimensione | Peso | Domanda |
|---|---:|---|
| Mission Success | 30% | La missione continua? |
| Detection Time | 20% | Quanto rapidamente e' stato rilevato l'evento? |
| Incident Response | 20% | Le azioni di contenimento sono efficaci? |
| Cyber-Social Impact Reduction | 20% | E' stata ridotta confusione e amplificazione? |
| Team Coordination | 10% | I ruoli hanno comunicato bene? |

Esempio di calcolo:

| Dimensione | Punteggio | Peso | Risultato |
|---|---:|---:|---:|
| Mission Success | 80 | 0.30 | 24 |
| Detection Time | 70 | 0.20 | 14 |
| Incident Response | 75 | 0.20 | 15 |
| Cyber-Social Impact Reduction | 65 | 0.20 | 13 |
| Team Coordination | 80 | 0.10 | 8 |
| Totale |  |  | 74 |

Readiness finale: 74%.

Interpretazione:

- 0-49: missione a rischio.
- 50-69: recupero parziale.
- 70-84: missione sostenibile con rischio residuo.
- 85-100: risposta solida.

---

## 5. Checklist finale di risoluzione

Prima di marcare un dominio come completato nella dashboard, verifica:

### Cyber

- Ho estratto IOC?
- Ho capito vettore, persistenza o comunicazione?
- Ho indicato una mitigazione tecnica?
- Ho separato evidenza da ipotesi?

### Information

- Ho identificato narrativa e canali?
- Ho verificato se il contenuto e' autentico?
- Ho distinto amplificazione da origine?
- Ho proposto una risposta comunicativa?

### Cognitive

- Ho spiegato chi viene influenzato?
- Ho descritto quale fiducia viene colpita?
- Ho proposto una verifica out-of-band?
- Ho valutato stress, confusione o decisioni errate?

### Physical

- Ho collegato l'evento a un impatto operativo?
- Ho valutato continuita della missione?
- Ho indicato una procedura alternativa?
- Ho stimato rischio residuo?

---

## 6. Template report pronto

```markdown
# Report CTF - Hybrid Warfare & Malware Analysis

## Executive summary

[Sintesi in 5 righe]

## Timeline

| Ora | Evento | Dominio | Fonte | Confidence |
|---|---|---|---|---|
| | | | | |

## Evidenze Cyber

- 

## Evidenze Information

- 

## Evidenze Cognitive

- 

## Evidenze Physical

- 

## IOC

| Indicatore | Tipo | Fonte | Azione |
|---|---|---|---|
| | | | |

## Ipotesi

Ipotesi principale:

- 

Ipotesi alternative:

- 

## Confidence level

[Basso / Medio / Alto] perche':

- 

## Raccomandazioni

Immediate:

- 

Entro 24 ore:

- 

Entro 7 giorni:

- 

## Score finale

| Dimensione | Punteggio | Note |
|---|---:|---|
| Mission Success | | |
| Detection Time | | |
| Incident Response | | |
| Cyber-Social Impact Reduction | | |
| Team Coordination | | |
```

---

## 7. Come usare la dashboard

1. Apri `index.html`.
2. Scegli un modulo.
3. Leggi challenge, evidenze e task.
4. Usa questo playbook per produrre analisi e report.
5. Inserisci una risposta per ogni dominio: Cyber, Information, Cognitive, Physical.
6. Se sei bloccato, premi `Suggerimento`: gli aiuti sono progressivi e seguono il metodo del playbook.
7. Premi `Valida` per controllare se la risposta del dominio e' corretta.
8. Quando i quattro domini sono corretti, la dashboard mostra la flag finale nel formato:

```text
FLAG{CYBER_INFORMATION_COGNITIVE_PHYSICAL}
```

9. Puoi anche inserire direttamente una flag e premere `Valida flag`: se e' corretta, la challenge viene completata.
10. Controlla readiness e registro progressi.
11. Alla fine prepara il report usando il template.

Nota: le risposte dominio accettano varianti ragionevoli, mentre la flag finale richiede ordine e token corretti.
