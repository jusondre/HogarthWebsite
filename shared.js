/* shared.js — nav, toast, lore dropdown */

function initNav() {
  // Mark active tab based on current page filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-tab[data-page]').forEach(tab => {
    const tp = tab.dataset.page;
    const match =
      (tp === 'home' && (path === 'index.html' || path === '')) ||
      path === tp + '.html' ||
      path.startsWith(tp);
    if (match) tab.classList.add('active');
  });
  // Lore sub-items
  const lorePaths = ['about', 'spells', 'subjects'];
  lorePaths.forEach(id => {
    if (path === id + '.html') {
      document.getElementById('lore-nav-btn')?.classList.add('active');
      document.querySelector(`.lore-dd-item[data-lore="${id}"]`)?.classList.add('active');
    }
  });
}

function toggleLoreDropdown(e) {
  e.stopPropagation();
  const wrap = document.getElementById('lore-nav-wrap');
  const open = wrap.classList.contains('open');
  closeAllDropdowns();
  if (!open) wrap.classList.add('open');
}

function closeAllDropdowns() {
  document.getElementById('lore-nav-wrap')?.classList.remove('open');
}

document.addEventListener('click', closeAllDropdowns);

let _toastTimer;
function showToast(title, msg) {
  const el = document.getElementById('toast');
  document.getElementById('tt').textContent = title;
  document.getElementById('tm').textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

function copyIP() {
  navigator.clipboard.writeText('mc.hogarth.net')
    .then(() => showToast('Copied!', 'mc.hogarth.net — paste into Minecraft.'))
    .catch(() => showToast('Server IP', 'mc.hogarth.net'));
}

document.addEventListener('DOMContentLoaded', initNav);