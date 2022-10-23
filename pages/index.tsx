import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { MintPartyPanda2 } from '../components/MintPartyPanda2'
import { MintNounsGlasses } from '../components/MintNounsGlasses'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Party Panda 2.0</title>
        <meta
          name="description"
          content="Party Panda 2.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Party Panda 2.0
        </h1>
        <ConnectButton />

        <Image src="/partypanda.2.0.svg" alt="Party Panda" width={200} height={200} />

        <p className={styles.description}>
        Party Panda 2.0. ERC4883 composable NFT. <br />
        Created by Alex Party Panda.
        </p>

        <div>
          <div>
            <h2>Party Panda 2.0</h2>
          <MintPartyPanda2 />
          </div>

          <div>
            <h2>Nouns Glasses</h2>
          <MintNounsGlasses />
          </div>
        </div>


      </main>

      <footer className={styles.footer}>
      <a href="https://qx.app/collection/party-panda-2-0">🛍️ Quix market</a>
      <a href="https://twitter.com/teampartypanda">🐦 Twitter</a>
      <a href="https://optimistic.etherscan.io/address/0x07ae2d181de9D3C5BA58ef4de616ea70a65A401D">🧭 Etherscan</a>
      <a href="https://github.com/TeamPartyPanda/party-panda-2.0">🐱 GitHub</a>
      </footer>
    </div>
  );
};

export default Home;
