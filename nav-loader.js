/* nav-loader.js — injects nav.html into #nav-mount on every page */
(async function () {
  const mount = document.getElementById('nav-mount');
  if (!mount) return;
  try {
    const res = await fetch('nav.html');
    const html = await res.text();
    mount.innerHTML = html;
  } catch (e) {
    // fallback: inline minimal nav
    mount.innerHTML = `<nav><a class="nav-logo" href="index.html">Hogarth<sup>MC</sup></a></nav>`;
  }
  // run shared init after nav is in DOM
  if (typeof initNav === 'function') initNav();
})();