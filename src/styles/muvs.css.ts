import { style, globalStyle } from '@vanilla-extract/css';

export const root = style({
  height: '100vh',
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
});

export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: "url('/muvs1.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.45)',
  backdropFilter: 'blur(3px)',
  zIndex: 2,
});

export const content = style({
  position: 'relative',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '0 5vw',
  gap: '5vw',
});

export const nameImg = style({
  maxWidth: '200px',
  height: 'auto',
});

export const linkContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  alignItems: 'flex-start',
});

globalStyle(`${linkContainer} a`, {
  color: '#fff',
  textDecoration: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '40px',
  background: 'linear-gradient(135deg, #ff6ec4, #7873f5)',
  boxShadow: '0 4px 20px rgba(255, 110, 196, 0.4)',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
});

globalStyle(`${linkContainer} a:hover`, {
  transform: 'scale(1.05)',
  boxShadow: '0 6px 30px rgba(255, 110, 196, 0.6)',
});

globalStyle('@media (max-width: 768px)', {
  [`${content}`]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  [`${linkContainer}`]: {
    alignItems: 'center',
  },
});