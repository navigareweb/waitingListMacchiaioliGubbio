import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import copertina from "../public/copertina.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"100%"}
          className={"img"}
          alt="copertina"
        />
        <p>
          Aperta dal <strong>4 Novembre sino al 3 Marzo 2024</strong> a Gubbio
          alle <strong>Logge dei Tiratori</strong>, la mostra rappresenta
          un’occasione unica per scoprire uno dei tasselli fondamentali
          nell’evoluzione pittorica italiana e internazionale. La mostra
          racconta la nascita e l’evoluzione della{" "}
          <strong>pittura macchiaiola</strong> nei suoi più diversi aspetti,
          mettendo in risalto le origini e le ragioni di questa rivoluzione
          artistica, i suoi sviluppi e la sua importante eredità. Obiettivo
          della mostra è quello di indagare i protagonisti e l’evoluzione di
          questo importante movimento, fondamentale per la nascita della pittura
          moderna italiana.
        </p>
        <p>
          Il percorso espositivo presenta oltre <strong>settanta opere</strong>{" "}
          (provenienti da prestigiosi musei italiani, da importanti fondazioni
          specializzate sul tema e da collezioni private) firmate dai principali
          esponenti del gruppo dei Macchiaioli (Telemaco Signorini, Giovanni
          Fattori, Silvestro Lega, Cristiano Banti, Giuseppe Abbati, Vincenzo
          Cabianca, Adriano Cecioni, Vito d’Ancona, Raffaello Sernesi, Odoardo
          Borrani e altri) e da altri artisti che hanno avuto relazioni con il
          movimento o che possono servire da confronto.
        </p>
        <Link
          href={
            "https://www.navigaresrl.com/mostra/la-mostra-sui-macchiaioli-a-gubbio/"
          }
          className={styles.link}
        >
          Info Mostra
        </Link>
      </div>
      <div className={styles.iscrizione}>
        <h4>
          Iscriviti entro il 20 Ottobre alla nostra Waiting List per ricevere
          uno sconto del 30%
        </h4>
        <h5>* lo sconto verrà applicato SOLO all'acquisto in biglietteria</h5>
        <Link
          href={
            "mailto:web@navigaresrl.com?subject=Iscrizione Mailing List Macchiaioli Gubbio"
          }
        >
          <p>SCRIVICI NOME E COGNOME</p>
        </Link>
        <h6>N.B : Cliccando su Invia autorizzi il trattamento dei tuoi dati</h6>
      </div>
      <div className={styles.footer}>
        Una produzione di
        <Link href={"https://www.navigaresrl.com/"}>NavigareSrl</Link>
      </div>
    </main>
  );
}
