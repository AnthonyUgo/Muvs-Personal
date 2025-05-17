import { style, globalStyle } from '@vanilla-extract/css';

export const root = style({
  height: '100%',
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#000',
  color: 'white',
  overflow: 'hidden',
  position: 'relative',
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
  height: '100vh',
  padding: '2rem',
  textAlign: 'center',
});

export const nameImg = style({
  maxWidth: '85%',
  height: 'auto',
  marginBottom: '2rem',
});

export const linkContainer = style({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: '1rem',
});

globalStyle(`${linkContainer} a`, {
  color: '#fff',
  textDecoration: 'none',
  padding: '0.6rem 1.2rem',
  borderRadius: '30px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(6px)',
});

globalStyle(`${linkContainer} a:hover`, {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  transform: 'scale(1.05)',
});

globalStyle('@media (max-width: 600px)', {
  [`${linkContainer}`]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
});
