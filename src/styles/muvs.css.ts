// src/styles/muvs.css.ts
import { style } from '@vanilla-extract/css';

export const root = style({
  height: '100%',
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
});

export const background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: "url('muvs1.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(4px)',
  zIndex: 2,
});

export const content = style({
  position: 'relative',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
});

export const nameImg = style({
  maxWidth: '80%',
  height: 'auto',
  marginBottom: '2rem',
});

export const links = style({
  display: 'flex',
  gap: '2rem',
  fontSize: '1rem',

  selectors: {
    '& a': {
      color: 'rgba(255, 255, 255, 0.85)',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '999px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
    },
    '& a:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transform: 'scale(1.05)',
    },
  },
});
