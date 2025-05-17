import * as React from 'react';
import * as styles from './styles/muvs.css';

export default function App() {
  return (
    <div className={styles.root}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <img src="/image6.png" alt="MUVS" className={styles.nameImg} />
        <div className={styles.linkContainer}>
          <a href="https://www.instagram.com/manlikemuvs/" target="_blank">Instagram</a>
          <a href="https://open.spotify.com/artist/0kp4u1JezANHopBAg5o2P7" target="_blank">Spotify</a>
          <a href="https://music.apple.com/us/artist/muvs/1538764598" target="_blank">Apple Music</a>
        </div>
      </div>
    </div>
  );
}
