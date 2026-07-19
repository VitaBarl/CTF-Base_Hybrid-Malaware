const modules = [
  {
    id: "hybrid",
    kicker: "Modulo 1",
    title: "Hybrid Warfare",
    mission: "Correlare cyber, social, OSINT e impatto operativo per ricostruire una campagna ibrida senza forzare attribuzioni premature.",
    folder: "ctf/m06-hybrid-warfare",
    artifacts: ["telegram.csv", "x-posts.csv", "ais.csv", "cyber-log.log", "osint-image-notes.txt"],
    challenges: [
      {
        id: "hyb-timeline",
        type: "HYB",
        title: "Timeline multi-dominio",
        brief: "Unisci eventi tecnici, narrativi e operativi in una sola sequenza temporale.",
        evidence: ["DDoS durante una crisi diplomatica", "Post coordinati su leak non verificato", "AIS con salto fisicamente impossibile"],
        tasks: ["Separare fatti e inferenze", "Indicare ipotesi alternative", "Assegnare confidence level"]
      },
      {
        id: "hyb-attribution",
        type: "CTI",
        title: "Attribuzione prudente",
        brief: "Valuta TTP, infrastruttura e contesto senza basarti su un singolo indicatore.",
        evidence: ["Dominio typosquatting", "User-agent riusato", "Narrativa allineata a obiettivo geopolitico"],
        tasks: ["Raccogliere convergenza prove", "Scrivere limiti dell'analisi", "Preparare raccomandazioni difensive"]
      }
    ]
  },
  {
    id: "malware",
    kicker: "Modulo 2",
    title: "Malware Analysis",
    mission: "Eseguire triage statico e comportamentale su dati innocui per estrarre IOC, ipotesi e contromisure difensive.",
    folder: "ctf/m04-malware-analysis",
    artifacts: ["strings.txt", "pcap-summary.txt", "volatility-output.txt", "sample_note.txt", "yara_rule.yar"],
    challenges: [
      {
        id: "mal-static",
        type: "REV",
        title: "Static triage",
        brief: "Analizza stringhe e metadati senza eseguire campioni sospetti.",
        evidence: ["URL di test example.test", "Path in ProgramData", "Mutex didattico"],
        tasks: ["Classificare IOC host/network", "Scrivere cosa non si puo dedurre", "Proporre una regola YARA didattica"]
      },
      {
        id: "mal-behavior",
        type: "SOC",
        title: "Behavior summary",
        brief: "Ricostruisci persistenza, C2 e possibili effetti partendo da log sintetici.",
        evidence: ["Scheduled task simulato", "Beacon verso host non autorizzato", "Accesso a share di navigazione"],
        tasks: ["Individuare persistenza", "Descrivere C2", "Mappare mitigazioni"]
      }
    ]
  },
  {
    id: "final",
    kicker: "Modulo 3",
    title: "Final Brief",
    mission: "Produrre un mini-report esecutivo con timeline, IOC, confidence level e piano di contenimento.",
    folder: "ctf/final-mission",
    artifacts: ["final-brief.md", "final-scorecard.csv", "evidence-bundle-index.md"],
    challenges: [
      {
        id: "final-report",
        type: "FINAL",
        title: "Executive report",
        brief: "Trasforma le evidenze in una sintesi utile a un decisore operativo.",
        evidence: ["Timeline unica", "IOC validati", "Impatto cyber-sociale"],
        tasks: ["Sintesi in 5 righe", "Azioni immediate", "Azioni entro 24 ore"]
      },
      {
        id: "final-score",
        type: "SCORE",
        title: "Mission scoring",
        brief: "Motiva punteggio e readiness finale usando criteri chiari e ripetibili.",
        evidence: ["Detection time", "Incident response", "Riduzione impatto", "Coordinamento team"],
        tasks: ["Calcolare readiness", "Giustificare lacune", "Definire next steps"]
      }
    ]
  }
];

const domains = [
  { key: "cyber", label: "Cyber", points: 25 },
  { key: "information", label: "Information", points: 25 },
  { key: "cognitive", label: "Cognitive", points: 25 },
  { key: "physical", label: "Physical", points: 25 }
];

const timeline = [
  ["08:10", "Phishing mirato", "Email sospetta verso personale operativo e amministrativo."],
  ["09:00", "Amplificazione social", "Account coordinati spingono una narrativa su ordini falsi."],
  ["10:30", "Anomalia tecnica", "Log indicano accesso da subnet terza e tentativi su gateway."],
  ["11:15", "Leak manipolato", "Documento operativo pubblicato fuori contesto."],
  ["12:00", "Impatto missione", "Team deve verificare comando, rotta e canali di fiducia."]
];

const solvers = {
  "hyb-timeline": {
    playbook: "Costruisci la tabella Ora / Evento / Fonte / Dominio. Prima separa fatti e ipotesi, poi collega cyber, narrative, fiducia e impatto operativo.",
    tokens: {
      cyber: {
        flag: "DDOS_GATEWAY",
        accepted: ["ddos", "ddos gateway", "attacco ddos", "anomalia gateway", "accesso gateway", "subnet terza"],
        hints: ["Cerca l'evento tecnico piu' osservabile.", "Nel playbook: Cyber = log, gateway, DDoS, accessi anomali.", "Token flag: DDOS_GATEWAY"]
      },
      information: {
        flag: "LEAK_COORDINATO",
        accepted: ["leak coordinato", "post coordinati", "leak non verificato", "amplificazione social", "narrativa leak"],
        hints: ["Guarda cosa viene amplificato, non solo chi lo pubblica.", "Nel playbook: Information = post coordinati, leak, narrativa pubblica.", "Token flag: LEAK_COORDINATO"]
      },
      cognitive: {
        flag: "CONFUSIONE_COMANDO",
        accepted: ["confusione comando", "incertezza ordini", "fiducia ordini", "perdita fiducia", "pressione decisori"],
        hints: ["Chiediti quale fiducia viene colpita.", "Nel playbook: Cognitive = confusione nella catena di comando.", "Token flag: CONFUSIONE_COMANDO"]
      },
      physical: {
        flag: "AIS_IMPOSSIBILE",
        accepted: ["ais impossibile", "salto ais", "salto fisicamente impossibile", "rotta alterata", "anomalia ais"],
        hints: ["Cerca l'effetto osservabile sul mondo operativo.", "Nel playbook: Physical = AIS anomalo, rotta o missione.", "Token flag: AIS_IMPOSSIBILE"]
      }
    }
  },
  "hyb-attribution": {
    playbook: "Usa attribuzione prudente: TTP e convergenza prove pesano piu' di un singolo IOC. Scrivi sempre limiti e confidence level.",
    tokens: {
      cyber: {
        flag: "TTP_CONVERGENTI",
        accepted: ["ttp convergenti", "ttp coerenti", "convergenza ttp", "piu prove tecniche", "infrastruttura e ttp"],
        hints: ["Non fermarti a dominio o user-agent.", "Nel playbook: TTP coerenti hanno peso alto.", "Token flag: TTP_CONVERGENTI"]
      },
      information: {
        flag: "NARRATIVA_ALLINEATA",
        accepted: ["narrativa allineata", "obiettivo geopolitico", "narrativa geopolitica", "messaggio coordinato"],
        hints: ["Il contenuto dice qualcosa sull'obiettivo.", "Nel playbook: la narrativa aiuta a capire l'obiettivo, non prova da sola l'attore.", "Token flag: NARRATIVA_ALLINEATA"]
      },
      cognitive: {
        flag: "CONFIDENCE_MEDIO",
        accepted: ["confidence medio", "confidenza media", "livello medio", "medio", "attribuzione prudente"],
        hints: ["Serve un livello di confidenza, non una certezza assoluta.", "Le prove sono coerenti, ma non definitive.", "Token flag: CONFIDENCE_MEDIO"]
      },
      physical: {
        flag: "MITIGAZIONI_DIFENSIVE",
        accepted: ["mitigazioni difensive", "bloccare domini", "monitorare typosquatting", "verificare documenti", "preservare log"],
        hints: ["Chiudi con azioni pratiche.", "Nel playbook: bloccare domini, monitorare varianti, conservare log, verificare documenti.", "Token flag: MITIGAZIONI_DIFENSIVE"]
      }
    }
  },
  "mal-static": {
    playbook: "Static triage: estrai IOC da stringhe e metadati, poi separa osservazione e inferenza. Non dedurre comportamento certo da una sola stringa.",
    tokens: {
      cyber: {
        flag: "IOC_ESTRATTI",
        accepted: ["ioc estratti", "url path mutex", "example.test programdata mutex", "hash url path mutex", "indicatori estratti"],
        hints: ["Cerca URL, path e mutex.", "Nel playbook: classifica IOC host e network.", "Token flag: IOC_ESTRATTI"]
      },
      information: {
        flag: "FATTI_INFERENZE",
        accepted: ["fatti inferenze", "fatti vs inferenze", "osservazione inferenza", "separare fatti", "non dedurre"],
        hints: ["Distingui cosa vedi da cosa immagini.", "Una stringa URL non prova che ci sia stata connessione.", "Token flag: FATTI_INFERENZE"]
      },
      cognitive: {
        flag: "NON_ESEGUIRE",
        accepted: ["non eseguire", "non eseguire nulla", "no esecuzione", "analisi statica", "senza eseguire"],
        hints: ["La sicurezza e' parte della soluzione.", "Nel playbook: non eseguire campioni sospetti fuori sandbox.", "Token flag: NON_ESEGUIRE"]
      },
      physical: {
        flag: "YARA_DIDATTICA",
        accepted: ["yara didattica", "regola yara", "training mutex demo", "global_training_mutex", "filtro yara"],
        hints: ["Serve un riconoscimento, non una sentenza.", "La regola YARA cerca stringhe didattiche e puo' avere falsi positivi.", "Token flag: YARA_DIDATTICA"]
      }
    }
  },
  "mal-behavior": {
    playbook: "Behavior summary: collega persistenza, C2 e accesso a dati. Mappa il possibile comportamento su MITRE e chiudi con contenimento.",
    tokens: {
      cyber: {
        flag: "SCHEDULED_TASK",
        accepted: ["scheduled task", "task schedulato", "persistenza", "scheduled task simulato", "task pianificato"],
        hints: ["Quale meccanismo fa ripartire il codice?", "Nel playbook: Scheduled Task/Job = possibile persistenza.", "Token flag: SCHEDULED_TASK"]
      },
      information: {
        flag: "BEACON_C2",
        accepted: ["beacon c2", "c2", "beacon", "host non autorizzato", "comunicazione c2"],
        hints: ["Guarda la comunicazione esterna periodica.", "Nel playbook: beacon HTTP/HTTPS verso host non autorizzato.", "Token flag: BEACON_C2"]
      },
      cognitive: {
        flag: "ORDINI_NON_FIDATI",
        accepted: ["ordini non fidati", "perdita fiducia", "documenti non fidati", "fiducia documenti", "ordini falsi"],
        hints: ["Quale effetto produce toccare documenti operativi?", "Nel playbook: possibile perdita di fiducia in ordini/documenti.", "Token flag: ORDINI_NON_FIDATI"]
      },
      physical: {
        flag: "SHARE_NAVIGAZIONE",
        accepted: ["share navigazione", "navigation share", "accesso share", "dati navigazione", "share di navigazione"],
        hints: ["Cerca l'accesso a dati operativi.", "Nel playbook: accesso a share di navigazione = possibile impatto operativo.", "Token flag: SHARE_NAVIGAZIONE"]
      }
    }
  },
  "final-report": {
    playbook: "Executive report: sintesi, timeline, evidenze per dominio, IOC, ipotesi alternative, confidence level e raccomandazioni immediate/24h/7 giorni.",
    tokens: {
      cyber: {
        flag: "IOC_VALIDATI",
        accepted: ["ioc validati", "indicatori validati", "ioc", "evidenze cyber", "hash domini path"],
        hints: ["Il report deve distinguere indicatori validati da rumore.", "Nel template: sezione IOC con tipo, fonte e azione.", "Token flag: IOC_VALIDATI"]
      },
      information: {
        flag: "TIMELINE_UNICA",
        accepted: ["timeline unica", "timeline", "sequenza eventi", "eventi correlati", "tabella timeline"],
        hints: ["Senza timeline non puoi spiegare correlazione.", "Nel playbook: massimo 5-8 eventi principali.", "Token flag: TIMELINE_UNICA"]
      },
      cognitive: {
        flag: "CONFIDENCE_LEVEL",
        accepted: ["confidence level", "livello confidenza", "confidenza", "basso medio alto", "confidence"],
        hints: ["Il decisore deve sapere quanto sei sicuro.", "Nel playbook: basso, medio, alto con motivazione.", "Token flag: CONFIDENCE_LEVEL"]
      },
      physical: {
        flag: "AZIONI_24H",
        accepted: ["azioni 24h", "entro 24 ore", "azioni immediate 24 ore", "raccomandazioni 24h", "piano 24 ore"],
        hints: ["Il report deve portare ad azioni temporizzate.", "Nel playbook: raccomandazioni immediate, entro 24 ore, entro 7 giorni.", "Token flag: AZIONI_24H"]
      }
    }
  },
  "final-score": {
    playbook: "Mission scoring: usa scorecard pesata. Mission Success 30%, Detection 20%, Incident Response 20%, Impact Reduction 20%, Coordination 10%.",
    tokens: {
      cyber: {
        flag: "DETECTION_TIME",
        accepted: ["detection time", "tempo rilevazione", "rilevazione", "tempo di detection"],
        hints: ["Quale metrica misura quanto rapidamente hai visto l'evento?", "Nel playbook pesa 20%.", "Token flag: DETECTION_TIME"]
      },
      information: {
        flag: "IMPACT_REDUCTION",
        accepted: ["impact reduction", "riduzione impatto", "cyber social impact reduction", "riduzione amplificazione"],
        hints: ["Misura anche la riduzione della confusione pubblica e social.", "Nel playbook pesa 20%.", "Token flag: IMPACT_REDUCTION"]
      },
      cognitive: {
        flag: "TEAM_COORDINATION",
        accepted: ["team coordination", "coordinamento team", "coordinamento", "ruoli coordinati"],
        hints: ["La risposta non e' solo tecnica: conta il coordinamento dei ruoli.", "Nel playbook pesa 10%.", "Token flag: TEAM_COORDINATION"]
      },
      physical: {
        flag: "MISSION_SOSTENIBILE",
        accepted: ["missione sostenibile", "mission sostenibile", "missione continua", "mission success", "readiness 70"],
        hints: ["Interpreta il punteggio finale rispetto alla continuita della missione.", "70-84 significa missione sostenibile con rischio residuo.", "Token flag: MISSION_SOSTENIBILE"]
      }
    }
  }
};

const storageKey = "hybrid-malware-dashboard-v2";
let state = loadState();

function defaultState() {
  return {
    activeModule: "hybrid",
    completed: {},
    answers: {},
    hintLevels: {},
    feedback: {},
    log: []
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...defaultState(),
      activeModule: saved?.activeModule || "hybrid",
      completed: saved?.completed || {},
      answers: saved?.answers || {},
      hintLevels: saved?.hintLevels || {},
      feedback: saved?.feedback || {},
      log: Array.isArray(saved?.log) ? saved.log : []
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function q(selector, root = document) {
  return root.querySelector(selector);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeFlag(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[ -]+/g, "_");
}

function scoreByDomain(key) {
  return Object.entries(state.completed).reduce((sum, [token, done]) => {
    const domain = domains.find(item => item.key === key);
    return done && token.endsWith(`:${key}`) ? sum + domain.points : sum;
  }, 0);
}

function challengeDomainKey(challengeId, domainKey) {
  return `${challengeId}:${domainKey}`;
}

function answerKey(challengeId, domainKey) {
  return `${challengeId}:${domainKey}`;
}

function isDone(challengeId, domainKey) {
  return Boolean(state.completed[challengeDomainKey(challengeId, domainKey)]);
}

function challengeSolved(challenge) {
  return domains.every(domain => isDone(challenge.id, domain.key));
}

function modulePercent(module) {
  const total = module.challenges.length * domains.length;
  const done = module.challenges.reduce((sum, challenge) => {
    return sum + domains.filter(domain => isDone(challenge.id, domain.key)).length;
  }, 0);
  return Math.round((done / total) * 100);
}

function allDomainSlots() {
  return modules.reduce((sum, module) => sum + module.challenges.length * domains.length, 0);
}

function totalCompletedSlots() {
  return Object.values(state.completed).filter(Boolean).length;
}

function totalScore() {
  return domains.reduce((sum, domain) => sum + scoreByDomain(domain.key), 0);
}

function readiness() {
  return Math.round((totalCompletedSlots() / allDomainSlots()) * 100);
}

function expectedFlag(challengeId) {
  const solver = solvers[challengeId];
  return `FLAG{${domains.map(domain => solver.tokens[domain.key].flag).join("_")}}`;
}

function addLog(message) {
  state.log.unshift({
    at: new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }),
    message
  });
  state.log = state.log.slice(0, 30);
}

function validateDomain(challengeId, domainKey, currentAnswer = null) {
  const key = answerKey(challengeId, domainKey);
  if (currentAnswer !== null) state.answers[key] = currentAnswer;
  const answer = state.answers[key] || "";
  const solver = solvers[challengeId].tokens[domainKey];
  const normalized = normalize(answer);
  const accepted = [solver.flag, ...solver.accepted];
  const correct = accepted.some(item => normalized === normalize(item) || normalized.includes(normalize(item)));
  state.completed[key] = correct;
  state.feedback[key] = correct
    ? "Corretto. Dominio validato."
    : "Non ancora corretto. Rileggi evidenze e suggerimento del playbook.";
  return correct;
}

function validateFlag(challengeId, submitted) {
  const correct = normalizeFlag(submitted) === expectedFlag(challengeId);
  if (correct) {
    domains.forEach(domain => {
      const key = answerKey(challengeId, domain.key);
      state.completed[key] = true;
      state.answers[key] ||= solvers[challengeId].tokens[domain.key].flag;
      state.feedback[key] = "Corretto. Validato dalla flag finale.";
    });
  }
  state.feedback[`${challengeId}:flag`] = correct
    ? "Flag corretta. Challenge completata."
    : "Flag errata. Controlla ordine e token: Cyber, Information, Cognitive, Physical.";
  return correct;
}

function renderDashboard() {
  const ready = readiness();
  q("#readiness").textContent = `${ready}%`;
  q("#readiness-meter").value = ready;
  q("#total-score").textContent = totalScore();
  domains.forEach(domain => {
    q(`#score-${domain.key}`).textContent = scoreByDomain(domain.key);
  });
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach(button => {
    const module = modules.find(item => item.id === button.dataset.module);
    button.classList.toggle("active", button.dataset.module === state.activeModule);
    button.classList.toggle("done", modulePercent(module) === 100);
  });
}

function renderDomainSolver(challenge) {
  const solver = solvers[challenge.id];
  const rows = domains.map(domain => {
    const key = answerKey(challenge.id, domain.key);
    const done = isDone(challenge.id, domain.key);
    const hintLevel = state.hintLevels[key] || 0;
    const hints = solver.tokens[domain.key].hints.slice(0, hintLevel);
    const feedback = state.feedback[key] || "";
    return `
      <div class="domain-row ${done ? "done" : ""}">
        <label for="${key}">
          <span>${domain.label}</span>
          <input id="${key}" type="text" value="${escapeHtml(state.answers[key] || "")}" data-answer="${challenge.id}" data-domain="${domain.key}" placeholder="Risposta ${domain.label}">
        </label>
        <div class="domain-buttons">
          <button type="button" data-check-domain="${challenge.id}" data-domain="${domain.key}">Valida</button>
          <button type="button" data-hint="${challenge.id}" data-domain="${domain.key}">Suggerimento</button>
        </div>
        ${feedback ? `<p class="feedback ${done ? "ok" : "bad"}">${feedback}</p>` : ""}
        ${hints.length ? `<div class="hint-box">${hints.map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
      </div>
    `;
  }).join("");
  const allDone = challengeSolved(challenge);
  const flagFeedback = state.feedback[`${challenge.id}:flag`] || "";
  return `
    <details class="playbook-help">
      <summary>Aiuto playbook</summary>
      <p>${escapeHtml(solver.playbook)}</p>
    </details>
    <div class="domain-solver">${rows}</div>
    <form class="flag-form" data-flag-form="${challenge.id}">
      <label>
        <span>Flag finale</span>
        <input type="text" value="${allDone ? expectedFlag(challenge.id) : ""}" placeholder="FLAG{CYBER_INFORMATION_COGNITIVE_PHYSICAL}">
      </label>
      <button type="submit">Valida flag</button>
    </form>
    ${flagFeedback ? `<p class="feedback ${allDone ? "ok" : "bad"}">${flagFeedback}</p>` : ""}
  `;
}

function renderModule() {
  const module = modules.find(item => item.id === state.activeModule) || modules[0];
  q("#module-kicker").textContent = module.kicker;
  q("#module-title").textContent = module.title;
  q("#module-mission").textContent = module.mission;
  q("#module-percent").textContent = `${modulePercent(module)}%`;
  q("#artifact-list").innerHTML = module.artifacts.map(item => {
    const href = `${module.folder}/${item}`;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${item}</a>`;
  }).join("");

  const template = q("#challenge-template");
  const grid = q("#challenge-grid");
  grid.innerHTML = "";

  module.challenges.forEach(challenge => {
    const node = template.content.cloneNode(true);
    const card = q(".challenge", node);
    card.classList.toggle("solved", challengeSolved(challenge));
    q(".badge", node).textContent = challenge.type;
    q(".challenge-title", node).textContent = challenge.title;
    q(".challenge-brief", node).textContent = challenge.brief;
    q(".evidence", node).innerHTML = `<strong>Evidenze</strong>${challenge.evidence.map(item => `<span>${item}</span>`).join("")}`;
    q(".tasks", node).innerHTML = `<strong>Task</strong>${challenge.tasks.map(item => `<span>${item}</span>`).join("")}`;
    q(".domain-actions", node).innerHTML = renderDomainSolver(challenge);
    grid.appendChild(node);
  });
}

function renderTimeline() {
  q("#timeline-list").innerHTML = timeline.map(item => `
    <div class="timeline-item">
      <time>${item[0]}</time>
      <div>
        <strong>${item[1]}</strong>
        <span>${item[2]}</span>
      </div>
    </div>
  `).join("");
}

function renderLog() {
  q("#score-log").innerHTML = state.log.length
    ? state.log.map(entry => `
      <div class="score-log-entry">
        <time>${entry.at}</time>
        <span>${entry.message}</span>
      </div>
    `).join("")
    : `<div class="score-log-empty">Nessun progresso registrato. Valida i domini o invia una flag corretta.</div>`;
}

function render() {
  renderDashboard();
  renderTabs();
  renderModule();
  renderTimeline();
  renderLog();
  saveState();
}

document.addEventListener("input", event => {
  const input = event.target.closest("[data-answer][data-domain]");
  if (!input) return;
  const key = answerKey(input.dataset.answer, input.dataset.domain);
  state.answers[key] = input.value;
  saveState();
});

document.addEventListener("click", event => {
  const tab = event.target.closest(".tab");
  if (tab) {
    state.activeModule = tab.dataset.module;
    render();
    return;
  }

  const hintButton = event.target.closest("[data-hint][data-domain]");
  if (hintButton) {
    const key = answerKey(hintButton.dataset.hint, hintButton.dataset.domain);
    const maxHints = solvers[hintButton.dataset.hint].tokens[hintButton.dataset.domain].hints.length;
    state.hintLevels[key] = Math.min((state.hintLevels[key] || 0) + 1, maxHints);
    addLog(`Suggerimento richiesto per <strong>${hintButton.dataset.hint}</strong> / ${hintButton.dataset.domain}.`);
    render();
    return;
  }

  const checkButton = event.target.closest("[data-check-domain][data-domain]");
  if (checkButton) {
    const challenge = modules.flatMap(module => module.challenges).find(item => item.id === checkButton.dataset.checkDomain);
    const domain = domains.find(item => item.key === checkButton.dataset.domain);
    const row = checkButton.closest(".domain-row");
    const input = row?.querySelector("input[data-answer][data-domain]");
    const correct = validateDomain(challenge.id, domain.key, input?.value || "");
    addLog(`<strong>${challenge.title}</strong>: ${domain.label} ${correct ? "corretto" : "errato"}.`);
    render();
  }
});

document.addEventListener("submit", event => {
  const form = event.target.closest("[data-flag-form]");
  if (!form) return;
  event.preventDefault();
  const challenge = modules.flatMap(module => module.challenges).find(item => item.id === form.dataset.flagForm);
  const input = q("input", form);
  const correct = validateFlag(challenge.id, input.value);
  addLog(`<strong>${challenge.title}</strong>: flag ${correct ? "corretta" : "errata"}.`);
  render();
});

q("#reset-progress").addEventListener("click", () => {
  if (!confirm("Azzerare progressi, risposte, suggerimenti e registro della dashboard?")) return;
  state = defaultState();
  render();
});

q("#unlock-solutions").addEventListener("click", event => {
  const password = prompt("Password soluzioni");
  if (password !== "CrASte") {
    alert("Password non corretta.");
    return;
  }

  const link = document.createElement("a");
  link.href = "PLAYBOOK_RISOLUZIONE_CON_SOLUZIONI.md";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "solution-link";
  link.textContent = "Soluzioni";
  event.currentTarget.replaceWith(link);
  link.click();
});

render();
