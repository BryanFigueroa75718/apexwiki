document.addEventListener('DOMContentLoaded', () => {
  // Navegación principal
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.section).classList.add('active');
    });
  });

  // Fallback limpio sin depender de servicios externos caídos
  function fallbackImg(label) {
    const safe = encodeURIComponent(label || 'Apex');
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%231e242c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%238b94a3" font-family="sans-serif" font-size="16" font-weight="bold">${safe}</text></svg>`;
  }

  // Renderizar Leyendas
  const legendGrid = document.getElementById('legend-grid');
  const legendFilters = document.querySelectorAll('#legend-filters .filter-btn');

  function renderLegends(filter = 'all') {
    if (!legendGrid) return;
    legendGrid.innerHTML = '';
    LEGENDS.filter(l => filter === 'all' || l.cls === filter).forEach(legend => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img class="card-img" src="${legend.img}" alt="${legend.name}" loading="lazy">
        <div class="card-body">
          <h3>${legend.name}</h3>
          <span class="tag">${legend.cls}</span>
        </div>
      `;
      const imgEl = card.querySelector('img');
      imgEl.addEventListener('error', () => {
        imgEl.src = fallbackImg(legend.name);
      });
      card.addEventListener('click', () => openLegendModal(legend));
      legendGrid.appendChild(card);
    });
  }

  legendFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      legendFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderLegends(btn.dataset.class);
    });
  });
  renderLegends();

  // Renderizar Armas
  const weaponGrid = document.getElementById('weapon-grid');
  const weaponTabs = document.querySelectorAll('#weapon-tabs .filter-btn');

  function renderWeapons(tab = 'Ligera') {
    if (!weaponGrid) return;
    weaponGrid.innerHTML = '';

    if (tab === 'Accesorios') {
      const genHeader = document.createElement('div');
      genHeader.style.gridColumn = '1 / -1';
      genHeader.innerHTML = '<h3>Accesorios Generales</h3>';
      weaponGrid.appendChild(genHeader);

      ATTACHMENTS.general.forEach(att => {
        const div = document.createElement('div');
        div.className = 'info-card';
        div.innerHTML = `<h3>${att.name}</h3><p>${att.desc}</p><p style="color:var(--accent-2);font-size:.9rem;margin-top:.4rem;">${att.weapons}</p>`;
        weaponGrid.appendChild(div);
      });

      const hopHeader = document.createElement('div');
      hopHeader.style.gridColumn = '1 / -1';
      hopHeader.style.marginTop = '1rem';
      hopHeader.innerHTML = `<h3>Hop-Ups</h3><p style="color:var(--muted);margin-bottom:.5rem;">${ATTACHMENTS.note}</p>`;
      weaponGrid.appendChild(hopHeader);

      ATTACHMENTS.hopups.forEach(hop => {
        const div = document.createElement('div');
        div.className = 'info-card';
        div.innerHTML = `<h3>${hop.name}</h3><p>${hop.desc}</p><p style="color:var(--accent-2);font-size:.9rem;margin-top:.4rem;">${hop.weapons}</p>`;
        weaponGrid.appendChild(div);
      });
      return;
    }

    WEAPONS.filter(w => w.cat === tab).forEach(weapon => {
      const card = document.createElement('div');
      card.className = 'card';
      const badgeText = weapon.tag ? `${weapon.cat} · ${weapon.tag}` : weapon.cat;
      card.innerHTML = `
        <img class="card-img" src="${weapon.img}" alt="${weapon.name}" loading="lazy">
        <div class="card-body">
          <h3>${weapon.name}</h3>
          <span class="tag">${badgeText}</span>
        </div>
      `;
      const imgEl = card.querySelector('img');
      imgEl.addEventListener('error', () => {
        imgEl.src = fallbackImg(weapon.name);
      });
      card.addEventListener('click', () => openWeaponModal(weapon));
      weaponGrid.appendChild(card);
    });
  }

  weaponTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      weaponTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWeapons(btn.dataset.tab);
    });
  });

  // Añadir pestaña de Accesorios si no está en el HTML
  if (document.getElementById('weapon-tabs') && !document.querySelector('#weapon-tabs [data-tab="Accesorios"]')) {
    const accBtn = document.createElement('button');
    accBtn.className = 'filter-btn';
    accBtn.dataset.tab = 'Accesorios';
    accBtn.textContent = 'Accesorios';
    document.getElementById('weapon-tabs').appendChild(accBtn);
    accBtn.addEventListener('click', () => {
      weaponTabs.forEach(b => b.classList.remove('active'));
      accBtn.classList.add('active');
      renderWeapons('Accesorios');
    });
  }
  renderWeapons();

  // Renderizar Consumibles
  const consumableGrid = document.getElementById('consumable-grid');
  if (consumableGrid) {
    CONSUMIBLES.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="card-body">
          ${item.cat ? `<span class="tag">${item.cat}</span>` : ''}
          <h3>${item.name}</h3>
          <p style="color:var(--muted);font-size:.9rem;margin-top:.25rem;">${item.info}</p>
        </div>
      `;
      const imgEl = card.querySelector('img');
      imgEl.addEventListener('error', () => {
        imgEl.src = fallbackImg(item.name);
      });
      consumableGrid.appendChild(card);
    });
  }

  // Renderizar Movement (con guía, cómo hacerlo, cuándo usarlo y consejo)
  const movementGrid = document.getElementById('movement-grid');
  if (movementGrid) {
    MOVEMENT.forEach(tier => {
      const div = document.createElement('div');
      div.className = `movement-tier ${tier.cls}`;
      const noteHtml = tier.guideNote
        ? `<p style="color:var(--muted);font-size:.9rem;margin-bottom:.9rem;">${tier.guideNote}</p>`
        : '';
      const tricksHtml = tier.tricks.map(t => {
        const extra = (t.howTo || t.whenToUse || t.tip)
          ? `
            ${t.howTo ? `<p style="margin-top:.3rem;"><strong style="color:var(--text);">Cómo hacerlo:</strong> ${t.howTo}</p>` : ''}
            ${t.whenToUse ? `<p style="margin-top:.2rem;"><strong style="color:var(--accent-2);">Cuándo usarlo:</strong> ${t.whenToUse}</p>` : ''}
            ${t.tip ? `<p style="margin-top:.2rem;color:var(--accent);font-size:.88rem;"><strong>Tip:</strong> ${t.tip}</p>` : ''}
          `
          : `<p>${t.d || ''}</p>`;
        return `<div class="trick"><strong>${t.n}</strong>${extra}</div>`;
      }).join('');
      div.innerHTML = `<h3>${tier.tier}</h3>${noteHtml}${tricksHtml}`;
      movementGrid.appendChild(div);
    });
  }

  // Añadir Configuración, Desbloqueo y Ranked a la sección Inicio
  const inicioSection = document.getElementById('inicio');
  if (inicioSection && !document.getElementById('extra-info')) {
    const extra = document.createElement('div');
    extra.id = 'extra-info';
    extra.style.marginTop = '2rem';
    extra.innerHTML = `
      <h2 style="margin-top:2rem;">Configuración Recomendada</h2>
      <div class="cards-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr));">
        ${SETTINGS.map(s => `<div class="info-card"><h3>${s.name}</h3><p style="color:var(--accent-2);font-weight:600;margin-bottom:.3rem;">${s.value}</p><p style="color:var(--muted);font-size:.9rem;">${s.desc}</p></div>`).join('')}
      </div>
      <h2 style="margin-top:2rem;">Desbloqueo de Leyendas</h2>
      <div class="cards-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr));">
        ${UNLOCK_INFO.map(u => `<div class="info-card"><h3>${u.title}</h3><p>${u.desc}</p></div>`).join('')}
      </div>
      <h2 style="margin-top:2rem;">Ranked para Principiantes</h2>
      <div class="info-card">
        <p>${RANKED_INFO.req}</p>
        <table style="width:100%;margin-top:.8rem;border-collapse:collapse;">
          <tr style="border-bottom:1px solid var(--border);"><th style="text-align:left;padding:.3rem;">Rango</th><th style="text-align:left;padding:.3rem;">Coste / Nivel</th></tr>
          ${RANKED_INFO.costs.map(c => `<tr style="border-bottom:1px solid var(--border);"><td style="padding:.3rem;">${c.rank}</td><td style="padding:.3rem;">${c.cost}</td></tr>`).join('')}
        </table>
        <p style="color:var(--accent-2);margin-top:.5rem;font-size:.9rem;">${RANKED_INFO.tip}</p>
      </div>
    `;
    inicioSection.appendChild(extra);
  }

  // Funciones de Modal
  window.openLegendModal = (legend) => {
    const modal = document.getElementById('modal-content');
    modal.innerHTML = `
      <button class="modal-close" onclick="closeModal()">×</button>
      <div class="modal-header">
        <img id="modal-legend-img" src="${legend.img}" alt="${legend.name}">
        <div>
          <h2>${legend.name}</h2>
          <span class="tag">${legend.cls}${legend.origin ? ` · ${legend.origin}` : ''}</span>
        </div>
      </div>
      <p class="lore">${legend.lore}</p>
      <p style="margin-top:.5rem;color:var(--accent-2);font-size:.9rem;"><strong>Bonificación de clase:</strong> ${legend.classPerk}</p>
      <div style="margin-top:1rem;">
        ${legend.abilities.map(a => `<div class="ability"><strong>${a.n}</strong><p>${a.d}</p></div>`).join('')}
      </div>
      <p style="margin-top:.8rem;color:var(--accent);font-weight:600;">Tip: ${legend.tip}</p>
    `;
    const mImg = document.getElementById('modal-legend-img');
    if (mImg) mImg.addEventListener('error', () => { mImg.src = fallbackImg(legend.name); });
    document.getElementById('modal-overlay').classList.add('open');
  };

  window.openWeaponModal = (weapon) => {
    const modal = document.getElementById('modal-content');
    let recoilSvg = '';

    if (Array.isArray(weapon.recoil) && weapon.recoil.length > 0) {
      const xs = weapon.recoil.map(p => p[0]);
      const ys = weapon.recoil.map(p => p[1]);
      const maxX = Math.max(12, ...xs.map(x => Math.abs(x)));
      const maxY = Math.max(40, ...ys.map(y => Math.abs(y)));
      const padX = Math.ceil(maxX * 1.45);
      const minY = -12;
      const maxPlotY = Math.ceil(maxY * 1.15);
      const widthVb = padX * 2;
      const heightVb = maxPlotY - minY;
      const points = weapon.recoil.map(p => `${p[0]},${p[1]}`).join(' ');

      recoilSvg = `
        <div class="recoil-box">
          <p style="color:var(--muted);font-size:.85rem;margin-bottom:.4rem;">Patrón de retroceso (ascenso del impacto)</p>
          <svg viewBox="${-padX} ${minY} ${widthVb} ${heightVb}" width="220" height="240">
            <line x1="0" y1="${minY}" x2="0" y2="${maxPlotY}" stroke="#2a3039" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="${-padX}" y1="0" x2="${padX}" y2="0" stroke="#2a3039" stroke-width="1" stroke-dasharray="3,3"/>
            <polyline points="${points}" fill="none" stroke="#e8432c" stroke-width="2.2"/>
            ${weapon.recoil.map((p, idx) => `<circle cx="${p[0]}" cy="${p[1]}" r="${idx === 0 ? 3 : 2.2}" fill="${idx === 0 ? '#4ade80' : '#ffb700'}"/>`).join('')}
          </svg>
          <p class="recoil-tip">${weapon.tip}</p>
        </div>
      `;
    } else {
      recoilSvg = `
        <div class="recoil-box">
          <p style="color:var(--muted);font-size:.9rem;">Esta arma o ítem especial no usa patrón de retroceso estándar de bala.</p>
          <p class="recoil-tip">${weapon.tip}</p>
        </div>
      `;
    }

    const subTag = weapon.tag ? `${weapon.cat} · ${weapon.tag}` : weapon.cat;
    modal.innerHTML = `
      <button class="modal-close" onclick="closeModal()">×</button>
      <div class="modal-header">
        <img id="modal-weapon-img" src="${weapon.img}" alt="${weapon.name}">
        <div>
          <h2>${weapon.name}</h2>
          <span class="tag">${subTag}</span>
        </div>
      </div>
      <p><strong>Daño:</strong> ${weapon.dmg} | <strong>Cadencia:</strong> ${weapon.rate}</p>
      ${recoilSvg}
    `;
    const wImg = document.getElementById('modal-weapon-img');
    if (wImg) wImg.addEventListener('error', () => { wImg.src = fallbackImg(weapon.name); });
    document.getElementById('modal-overlay').classList.add('open');
  };

  window.closeModal = () => {
    document.getElementById('modal-overlay').classList.remove('open');
  };

  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
});