import Head from "next/head";
import Navigation from "./Components/js/navigation.js";


export default function Home() {
  return (
    <>
      <Head>
        <title>Wout Van Laecke</title>
        <meta name="description" content="Wout Van Laecke" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <Navigation/>
        <main>
        
        </main>
        <footer>
         
        </footer>
    </>
  );
}
