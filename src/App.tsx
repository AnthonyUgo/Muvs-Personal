import React, { useState } from 'react';
import * as styles from './styles/muvs.css';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <img src="/image6.png" alt="MUVS" className={styles.nameImg} />

        {/* Social Links */}
        <div className={styles.linkContainer}>
          <a
            href="https://www.instagram.com/manlikemuvs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://open.spotify.com/artist/0kp4u1JezANHopBAg5o2P7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
          <a
            href="https://music.apple.com/us/artist/muvs/1538764598"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Music
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowForm(!showForm);
            }}
            rel="noopener noreferrer"
          >
            Join Mailing List
          </a>
        </div>

        {/* Mailchimp Form */}
        {showForm && (
          <form
            action="https://azurestaticapps.us14.list-manage.com/subscribe/post?u=ac67bdc447a1e530353a8ef2e&amp;id=f3634806c3&amp;f_id=00a1c2e1f0"
            method="post"
            target="_blank"
            className={styles.mailchimpForm}
          >
            <h2>Subscribe</h2>
            <div>
              <label htmlFor="mce-EMAIL">
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                placeholder="Enter your email"
              />
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_ac67bdc447a1e530353a8ef2e_f3634806c3"
                tabIndex={-1}
                value=""
                readOnly
              />
            </div>
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  );
}
