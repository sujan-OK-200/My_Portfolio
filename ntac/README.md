# NTAC static website

An original single-page static website concept for NTAC (Nepal Technology and Cybersecurity), built with semantic HTML, CSS, and vanilla JavaScript.

## Run locally

1. Extract the ZIP archive.
2. Open `index.html` in a modern browser. No build step or package install is required.
3. For a local development server, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Project structure

- `index.html` — page content and section structure
- `assets/css/styles.css` — design tokens, components, layout, and theme styles
- `assets/css/responsive.css` — responsive breakpoints and reduced-motion behavior
- `assets/js/main.js` — theme switch, progress indicator, reveal effects, footer year
- `assets/js/navigation.js` — sticky navigation, mobile menu, active section state
- `assets/js/interactions.js` — concept terminal and frontend-only contact form notice
- `assets/images/ntac-mark.svg` — original vector mark

## Included interactions

- Sticky navigation with active-section indication and mobile menu
- Dark/light theme toggle; attempts to remember selection in browser local storage
- Section progress indicator and subtle reveal effects
- Clickable concept terminal commands
- Contact form validation with an explicit demo-only message

## Important limitations

This is a frontend prototype only. The contact form does not send or save information. No authentication, database, analytics, scanning engine, or backend service is included. Connect a secure backend or trusted form service before collecting real inquiries. Configure HTTPS and suitable security headers on the production host. Use VAPT and social-engineering techniques only with explicit written authorization and agreed scope.

## Framework references

OWASP, NIST Cybersecurity Framework, ISO/IEC 27001, CIS Controls, and MITRE ATT&CK are listed as informational references. Their inclusion does not imply certification, endorsement, or formal partnership.
