# TOOLMAG — l’edicola di Due Dritte

Sito: https://lucasx153.github.io/toolmag/

TOOLMAG è il sito; Due Dritte è la rivista. Questo repository contiene la versione editoriale approvata, le raccolte AI e Creativi e la ricerca visiva. Nessuna registrazione, automazione social o tracciamento aggiunto.

## Aggiungere un numero

1. Aggiungere il numero in `numeri.json`: chiave breve stabile, etichetta, titolo e introduzione. Aggiungere in `contenuti.json` dieci progetti nello stesso ordine delle slide. Copiare un record esistente senza cambiare i nomi dei campi: `issue`, `number`, `position`, `id`, `group`, nome, gancio, descrizione, due consigli, requisito, link, immagine, pagina e personaggio. Gli ID e i file già pubblicati restano stabili.
2. Aggiungere copertina `assets-speciale-CHIAVE.webp`, immagini originali, pagine e personaggi. Usare nomi nuovi e univoci; conservare proporzioni, provenienza, autore e licenza. Per nuovi schemi esportare la sola dimostrazione, impostare `visualKind: illustration` e dichiararlo nel credito, in `alt` e in `visualNote`. `visualKind: authentic` è riservato a demo e immagini autentiche. `visualKind: schema` resta per i ritagli delle otto pagine AI originali.
3. Eseguire `python build_site.py` dalla cartella del sito: rigenera raccolte e ricerca, inclusi filtri e conteggio. Non modifica la homepage. In `index.html` aggiornare il numero in evidenza e aggiungere una voce all’archivio copiando un articolo esistente, cambiando copertina, anticipazioni, link e testi. In `editoriale.js` aggiungere le due pagine per lo sfoglio del nuovo numero. Non cambiare griglia, font, colori o proporzioni.
4. Avviare `python -m http.server 8793` e controllare homepage, archivio, tutte le nuove schede, ricerca, modal e link a 390 e 1440 px. Controllare anche 320 px. Se un testo non entra, riscriverlo: non ridurre i font. Riconoscere subito il vantaggio nel gancio; demo pertinente; due consigli specifici; umorismo solo nelle reazioni.
5. Conservare un commit ripristinabile, caricare i file e verificare il sito pubblico dopo il completamento di GitHub Pages. Il link in bio resta sempre lo stesso.

Le assegnazioni dei personaggi si prendono dal registro della rivista: 1–30 in sequenza, poi si ricomincia. Una revisione mantiene la stessa persona. Non duplicare un personaggio all’interno del numero.

## File e compatibilità

- `index.html`: apertura, selezione e archivio; `editoriale.css/js`: identità e sfoglio.
- `contenuti.json`: unica fonte delle schede; `numeri.json`: intestazioni delle raccolte.
- `build_site.py`: generatore statico senza dipendenze esterne (Python standard).
- `interni.css/js`: raccolte, ricerca, indice e modale. L’indice parte chiuso sotto 1100 px.
- `speciale-ai.html`, `speciale-creativi.html`: indirizzi storici conservati, senza reindirizzamenti.
- `FONTI-IMMAGINI.json` e le note nelle schede: fonti delle demo. Gli schemi AI non sono prove eseguite nel software.

I file sono alla radice per un caricamento unico nel browser GitHub. I percorsi sono relativi, compatibili con `/toolmag/`. Non distribuire le copie Windows di Impact e Arial Black: il CSS usa i font locali quando presenti e gli equivalenti Anton e Archivo Black con licenza SIL OFL inclusa come fallback web. I file immagine dei caroselli restano quelli approvati.

La demo LibreSprite è stata sostituita esclusivamente sul sito: sprite originale TOOLMAG, importato ed esportato realmente in LibreSprite 1.3. I file sorgenti e lo sprite sheet sono inclusi. L’artwork collaborativo dalla licenza specifica incerta non è distribuito nella nuova edicola. Il carosello master è conservato intatto localmente.

## Ripristino

Versione precedente: commit `c6af44f1da27cf37f062ed31f916af7715456383`. Prima della pubblicazione è stato conservato un clone e un bundle Git completo nella cartella locale `pubblicazione/release-2026-11-08/`. Per tornare indietro, creare un commit di ripristino della release nella cronologia Git; non cancellare la cronologia e non cambiare l’indirizzo Pages.

La verifica mobile è una prova in viewport browser, non un test su telefono fisico né una certificazione completa di accessibilità.
