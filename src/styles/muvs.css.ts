import { style, globalStyle } from '@vanilla-extract/css';

// Root container
export const root = style({
  height: '100vh',
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  position: 'relative',
  overflow: 'hidden',
  color: 'white',
});

// Background image container
export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: "url('/muvs1.png')", // background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
});

// Dark overlay on background
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

// Main content container
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
  flexWrap: 'wrap', // allows content to wrap on smaller screens
});

// MUVS name image
export const nameImg = style({
  maxWidth: '200px',
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
});

// Social link container
export const linkContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  alignItems: 'flex-start',
  marginBottom: '20px', // spacing before the form
});

// Style for each link button
globalStyle(`${linkContainer} a`, {
  color: '#1c1c1c',
  textDecoration: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '40px',
  background: 'linear-gradient(135deg, #c2b280, #8f8163)',
  boxShadow: '0 4px 16px rgba(194, 178, 128, 0.25)',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'all 0.3s ease-in-out',
  backdropFilter: 'blur(2px)',
  textAlign: 'center',
  display: 'inline-block', // restores natural width on desktop
  width: 'auto',
});

// Link hover effect
globalStyle(`${linkContainer} a:hover`, {
  transform: 'scale(1.05)',
  boxShadow: '0 0 18px rgba(194, 178, 128, 0.5)',
});

// Mailchimp form container
export const mailchimpForm = style({
  background: 'rgba(0, 0, 0, 0.65)',
  padding: '20px',
  borderRadius: '12px',
  maxWidth: '400px',
  width: '100%',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  fontSize: '1rem',
  fontWeight: 'bold',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(4px)',
  textAlign: 'left',
  marginTop: '20px',
  marginBottom: '20px',
  alignSelf: 'flex-start', // aligns left on desktop
});

// Mailchimp form nested elements
globalStyle(`${mailchimpForm} h2`, {
  margin: 0,
  textAlign: 'center',
  fontSize: '1.5rem',
  color: '#c2b280',
});

globalStyle(`${mailchimpForm} label`, {
  fontSize: '1rem',
  marginBottom: '4px',
});

globalStyle(`${mailchimpForm} input[type="email"]`, {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #c2b280',
  fontSize: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  color: '#1c1c1c',
  width: '100%',
});

globalStyle(`${mailchimpForm} button`, {
  background: 'linear-gradient(135deg, #c2b280, #8f8163)',
  color: '#1e1e1e',
  padding: '10px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background 0.3s ease-in-out',
  width: '100%',
});

globalStyle(`${mailchimpForm} button:hover`, {
  background: 'linear-gradient(135deg, #bfa066, #7e6f50)',
});

// Responsive adjustments for smaller screens
globalStyle('@media (max-width: 768px)', {
  [`${content}`]: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    gap: '2rem',
    padding: '0 2vw',
  },
  [`${linkContainer} a`]: {
    width: '100%',
    display: 'block',
  },
  [`${mailchimpForm}`]: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
  },
});
