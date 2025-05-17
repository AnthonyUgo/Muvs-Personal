// styles/muvs.css.ts
import { style } from '@vanilla-extract/css';

export const body = style({
  backgroundColor: '#000',
  color: '#eee',
  fontFamily: "'Space Grotesk', sans-serif",
  margin: 0,
  padding: 0,
  lineHeight: 1.6,
});

export const logo = style({
  fontSize: '4rem',
  fontWeight: 700,
  textAlign: 'center',
  marginTop: '2rem',
  marginBottom: '1rem',
  letterSpacing: '0.1em',
  color: '#fff',
  textShadow: '0 0 15px rgba(255, 255, 255, 0.25)',
  borderRadius: '12px',
});

export const tagline = style({
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#ccc',
  marginBottom: '2rem',
});

export const cta = style({
  display: 'block',
  margin: '0 auto',
  padding: '14px 28px',
  backgroundColor: '#111',
  border: '1px solid #444',
  borderRadius: '50px',
  color: '#fff',
  textAlign: 'center',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'all 0.3s ease-in-out',
  ':hover': {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export const musicLinks = style({
  padding: '3rem 1rem',
  textAlign: 'center',
});

export const btn = style({
  display: 'inline-block',
  margin: '0.5rem',
  padding: '12px 24px',
  borderRadius: '10px',
  backgroundColor: '#1a1a1a',
  color: '#f1f1f1',
  textDecoration: 'none',
  fontWeight: '600',
  border: '1px solid #333',
  transition: '0.3s',
  ':hover': {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export const about = style({
  padding: '2rem',
  textAlign: 'center',
  color: '#ccc',
  fontSize: '1rem',
  maxWidth: '600px',
  margin: 'auto',
});

export const socials = style({
  textAlign: 'center',
  padding: '2rem',
});

export const icon = style({
  display: 'inline-block',
  margin: '0.5rem',
  padding: '10px 20px',
  backgroundColor: '#222',
  color: '#ddd',
  textDecoration: 'none',
  borderRadius: '8px',
  border: '1px solid #444',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export const footer = style({
  textAlign: 'center',
  padding: '1rem',
  fontSize: '0.85rem',
  color: '#777',
});
