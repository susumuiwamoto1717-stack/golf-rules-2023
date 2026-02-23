/**
 * ゴルフ規則 PWA - メインアプリケーション
 */

(function() {
  'use strict';

  // ============================================
  // State
  // ============================================
  let currentView = 'viewHome';
  let searchEngine;
  let searchHistory;
  let bookmarks = loadBookmarks();

  // ============================================
  // Initialization
  // ============================================
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    searchEngine = new GolfRuleSearch();
    searchHistory = new SearchHistory();

    initTheme();
    initFontSize();
    renderHome();
    renderRules();
    renderDefinitions();
    renderUpdates();
    renderBookmarks();
    initNavigation();
    initSearch();
    initModals();
    registerServiceWorker();
  }

  // ============================================
  // Font Size
  // ============================================
  const FONT_SIZE_KEY = 'golf-rules-fontsize';
  const FONT_SIZE_MIN = 12;
  const FONT_SIZE_MAX = 24;
  const FONT_SIZE_STEP = 2;
  const FONT_SIZE_DEFAULT = 16;

  function initFontSize() {
    const saved = localStorage.getItem(FONT_SIZE_KEY);
    if (saved) {
      const size = parseInt(saved, 10);
      if (size >= FONT_SIZE_MIN && size <= FONT_SIZE_MAX) {
        document.documentElement.style.fontSize = size + 'px';
      }
    }

    document.getElementById('fontIncrease').addEventListener('click', () => {
      changeFontSize(FONT_SIZE_STEP);
    });
    document.getElementById('fontDecrease').addEventListener('click', () => {
      changeFontSize(-FONT_SIZE_STEP);
    });
  }

  function changeFontSize(delta) {
    const current = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const next = Math.min(FONT_SIZE_MAX, Math.max(FONT_SIZE_MIN, current + delta));
    document.documentElement.style.fontSize = next + 'px';
    localStorage.setItem(FONT_SIZE_KEY, next);
  }

  // ============================================
  // Theme
  // ============================================
  function initTheme() {
    const saved = localStorage.getItem('golf-rules-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('darkModeToggle').querySelector('.icon').textContent = '🌙';
    }

    document.getElementById('darkModeToggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const icon = document.getElementById('darkModeToggle').querySelector('.icon');
      if (current === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('golf-rules-theme', 'light');
        icon.textContent = '☀️';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('golf-rules-theme', 'dark');
        icon.textContent = '🌙';
      }
    });
  }

  // ============================================
  // Navigation
  // ============================================
  function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetView = item.dataset.view;
        switchView(targetView);
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }

  function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add('active');
      currentView = viewId;
    }
    // Close any open modals
    closeAllModals();
    // Scroll to top
    window.scrollTo(0, 0);
  }

  // ============================================
  // Home / Quick Guide
  // ============================================
  function renderHome() {
    const grid = document.getElementById('quickGrid');
    let html = '';

    QUICKGUIDE_DATA.categories.forEach(cat => {
      html += `
        <div class="quick-card" data-category="${cat.id}" style="border-left-color: ${cat.color}">
          <div class="quick-card-icon">${cat.icon}</div>
          <div class="quick-card-title">${cat.title}</div>
          <div class="quick-card-count">${cat.situations.length}項目</div>
        </div>
      `;
    });

    grid.innerHTML = html;

    // Add updates link
    const updatesLink = document.createElement('div');
    updatesLink.className = 'home-updates-link';
    updatesLink.innerHTML = `
      <div class="home-updates-title">📢 更新情報・変更点</div>
      <div class="home-updates-desc">2026年1月追加詳説 / 2023年規則の変更点</div>
    `;
    updatesLink.addEventListener('click', () => {
      switchView('viewUpdates');
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    });
    grid.parentElement.appendChild(updatesLink);

    // Category click handlers
    grid.querySelectorAll('.quick-card').forEach(card => {
      card.addEventListener('click', () => {
        const catId = card.dataset.category;
        showCategorySituations(catId);
      });
    });
  }

  function showCategorySituations(categoryId) {
    const cat = QUICKGUIDE_DATA.categories.find(c => c.id === categoryId);
    if (!cat) return;

    const modal = document.getElementById('situationModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    const bookmarkBtn = document.getElementById('modalBookmark');

    title.textContent = cat.icon + ' ' + cat.title;
    bookmarkBtn.style.display = 'none';

    let html = '<div class="situation-list">';
    cat.situations.forEach((sit, idx) => {
      html += `
        <div class="situation-item" data-cat="${categoryId}" data-idx="${idx}">
          <div class="situation-question">${sit.question}</div>
          <div class="situation-rule-ref">規則 ${sit.rule}</div>
        </div>
      `;
    });
    html += '</div>';
    body.innerHTML = html;

    // Situation click handlers
    body.querySelectorAll('.situation-item').forEach(item => {
      item.addEventListener('click', () => {
        const catId = item.dataset.cat;
        const idx = parseInt(item.dataset.idx);
        showSituationDetail(catId, idx);
      });
    });

    modal.classList.add('active');
  }

  function showSituationDetail(categoryId, situationIdx) {
    const cat = QUICKGUIDE_DATA.categories.find(c => c.id === categoryId);
    if (!cat) return;
    const sit = cat.situations[situationIdx];
    if (!sit) return;

    const modal = document.getElementById('situationModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    const bookmarkBtn = document.getElementById('modalBookmark');

    title.textContent = sit.question;
    bookmarkBtn.style.display = 'block';

    const bmKey = `guide:${categoryId}:${situationIdx}`;
    bookmarkBtn.textContent = isBookmarked(bmKey) ? '★' : '☆';
    bookmarkBtn.className = 'modal-bookmark' + (isBookmarked(bmKey) ? ' bookmarked' : '');
    bookmarkBtn.onclick = () => {
      toggleBookmark(bmKey, {
        type: 'guide',
        icon: cat.icon,
        title: sit.question,
        sub: `規則 ${sit.rule}`,
        categoryId,
        situationIdx
      });
      bookmarkBtn.textContent = isBookmarked(bmKey) ? '★' : '☆';
      bookmarkBtn.className = 'modal-bookmark' + (isBookmarked(bmKey) ? ' bookmarked' : '');
    };

    body.innerHTML = `
      <div class="detail-answer">
        <div class="detail-answer-label">回答</div>
        <div class="detail-answer-text">${sit.answer}</div>
      </div>
      <div class="detail-procedure">
        <div class="detail-procedure-label">具体的な手順</div>
        <div class="detail-procedure-text">${sit.procedure}</div>
      </div>
      <button class="detail-rule-link" data-rule="${sit.rule}">
        📖 規則 ${sit.rule} を見る
      </button>
    `;

    // Rule link handler
    body.querySelector('.detail-rule-link').addEventListener('click', (e) => {
      const ruleRef = e.target.dataset.rule;
      openRuleByRef(ruleRef);
    });

    modal.classList.add('active');
  }

  // ============================================
  // Rules List
  // ============================================
  const RULE_GROUPS = [
    { title: 'I ゲームの基礎', rules: [1, 2, 3, 4] },
    { title: 'II ラウンドとホールをプレーする', rules: [5, 6] },
    { title: 'III 球をプレーすること', rules: [7, 8, 9, 10, 11] },
    { title: 'IV バンカーとパッティンググリーン', rules: [12, 13] },
    { title: 'V 球を拾い上げて、プレーに戻す', rules: [14] },
    { title: 'VI 罰なしの救済', rules: [15, 16] },
    { title: 'VII 罰ありの救済', rules: [17, 18, 19] },
    { title: 'VIII 規則適用の問題', rules: [20] },
    { title: 'IX プレーの他の形式', rules: [21, 22, 23, 24] },
    { title: 'X 障がいを持つプレーヤー', rules: [25] },
  ];

  function renderRules() {
    const container = document.getElementById('rulesList');
    let html = '';

    RULE_GROUPS.forEach(group => {
      html += `<div class="rules-group">`;
      html += `<div class="rules-group-title">${group.title}</div>`;

      group.rules.forEach(ruleNum => {
        const rule = RULES_DATA.find(r => r.number === ruleNum);
        if (!rule) return;

        html += `
          <div class="rule-item" data-rule-id="${rule.id}">
            <div class="rule-header">
              <span class="rule-number">${rule.number}</span>
              <span class="rule-title">${rule.shortTitle}</span>
              <span class="rule-arrow">▶</span>
            </div>
            <div class="rule-subsections">
              ${rule.subsections.map(sub => `
                <div class="subsection-item" data-sub="${sub.number}">
                  <div class="subsection-number">${sub.number}</div>
                  <div class="subsection-title">${sub.title.replace(sub.number + ' ', '')}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      });

      html += `</div>`;
    });

    container.innerHTML = html;

    // Accordion behavior
    container.querySelectorAll('.rule-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('expanded');
      });
    });

    // Subsection click
    container.querySelectorAll('.subsection-item').forEach(sub => {
      sub.addEventListener('click', (e) => {
        e.stopPropagation();
        const subNum = sub.dataset.sub;
        openRuleByRef(subNum);
      });
    });
  }

  function openRuleByRef(ref) {
    // Parse rule reference like "14.3" or "18.2"
    const parts = ref.split('.');
    const ruleNum = parseInt(parts[0]);
    const rule = RULES_DATA.find(r => r.number === ruleNum);
    if (!rule) return;

    const modal = document.getElementById('ruleModal');
    const title = document.getElementById('ruleModalTitle');
    const body = document.getElementById('ruleModalBody');
    const bookmarkBtn = document.getElementById('ruleModalBookmark');

    title.textContent = rule.title;

    const bmKey = `rule:${ruleNum}`;
    bookmarkBtn.textContent = isBookmarked(bmKey) ? '★' : '☆';
    bookmarkBtn.className = 'modal-bookmark' + (isBookmarked(bmKey) ? ' bookmarked' : '');
    bookmarkBtn.onclick = () => {
      toggleBookmark(bmKey, {
        type: 'rule',
        icon: '📖',
        title: rule.title,
        sub: `${rule.subsections.length}サブセクション`,
        ruleNumber: ruleNum
      });
      bookmarkBtn.textContent = isBookmarked(bmKey) ? '★' : '☆';
      bookmarkBtn.className = 'modal-bookmark' + (isBookmarked(bmKey) ? ' bookmarked' : '');
    };

    let html = '';
    rule.subsections.forEach(sub => {
      const isTarget = sub.number === ref || sub.number.startsWith(ref);
      const displayContent = sub.content || '（詳細はゴルフ規則書を参照してください）';
      html += `
        <div class="rule-detail-section" id="sub-${sub.number.replace(/\./g, '-')}" ${isTarget ? 'style="background:#e8f5e9; padding:12px; border-radius:8px; margin:-12px; margin-bottom:8px;"' : ''}>
          <div class="rule-detail-number">${sub.number}</div>
          <div class="rule-detail-title">${sub.title.replace(sub.number + ' ', '')}</div>
          <div class="rule-detail-content">${displayContent.replace(/\n/g, '<br>')}</div>
        </div>
      `;
    });

    body.innerHTML = html;
    modal.classList.add('active');

    // Scroll to target subsection
    setTimeout(() => {
      const targetId = `sub-${ref.replace(/\./g, '-')}`;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }

  // ============================================
  // Search
  // ============================================
  function initSearch() {
    const input = document.getElementById('globalSearch');
    const clearBtn = document.getElementById('searchClear');
    let debounceTimer;

    input.addEventListener('input', () => {
      clearBtn.classList.toggle('visible', input.value.length > 0);

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(input.value);
      }, 300);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        clearTimeout(debounceTimer);
        performSearch(input.value);
        input.blur();
      }
    });

    input.addEventListener('focus', () => {
      if (!input.value) {
        switchView('viewSearch');
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById('navSearch').classList.add('active');
        showSearchHistory();
      }
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.remove('visible');
      showSearchHistory();
    });
  }

  function performSearch(query) {
    if (!query || query.trim().length === 0) {
      showSearchHistory();
      return;
    }

    // Switch to search view
    switchView('viewSearch');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('navSearch').classList.add('active');

    const results = searchEngine.search(query);
    searchHistory.add(query);

    const info = document.getElementById('searchInfo');
    const container = document.getElementById('searchResults');

    info.textContent = `「${query}」の検索結果: ${results.length}件`;

    if (results.length === 0) {
      container.innerHTML = '<p class="empty-message">検索結果が見つかりませんでした。<br>別のキーワードで試してください。</p>';
      return;
    }

    let html = '';
    results.forEach(result => {
      const typeLabel = getResultTypeLabel(result.type);
      const typeClass = getResultTypeClass(result.type);

      let excerpt = '';
      if (result.type === 'guide') {
        excerpt = searchEngine.highlight(result.answer || '', query);
      } else if (result.type === 'definition') {
        excerpt = searchEngine.highlight(result.definition || '', query);
      } else if (result.type === 'rule-sub') {
        excerpt = searchEngine.highlight((result.content || '').substring(0, 150), query);
      } else if (result.type === 'update') {
        excerpt = searchEngine.highlight(result.summary || '', query);
      } else {
        excerpt = searchEngine.highlight(result.display || '', query);
      }

      const titleText = result.type === 'definition' ? result.term : (result.title || result.question || result.display);

      html += `
        <div class="search-result-item" data-type="${result.type}" data-result='${JSON.stringify({
          type: result.type,
          categoryId: result.categoryId,
          situationIdx: result.categoryId ? QUICKGUIDE_DATA.categories.find(c => c.id === result.categoryId)?.situations.findIndex(s => s.question === result.question) : -1,
          ruleNumber: result.ruleNumber || result.number,
          subNumber: result.subNumber,
          term: result.term,
          rule: result.rule
        }).replace(/'/g, '&#39;')}'>
          <span class="search-result-type ${typeClass}">${typeLabel}</span>
          <div class="search-result-title">${searchEngine.highlight(titleText, query)}</div>
          <div class="search-result-excerpt">${excerpt}</div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Click handlers
    container.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        try {
          const data = JSON.parse(item.dataset.result);
          handleSearchResultClick(data);
        } catch (e) {
          console.error('Error parsing result data', e);
        }
      });
    });
  }

  function handleSearchResultClick(data) {
    switch (data.type) {
      case 'guide':
        if (data.categoryId && data.situationIdx >= 0) {
          showSituationDetail(data.categoryId, data.situationIdx);
        }
        break;
      case 'rule':
        if (data.ruleNumber || data.number) {
          openRuleByRef(String(data.ruleNumber || data.number));
        }
        break;
      case 'rule-sub':
        if (data.subNumber) {
          openRuleByRef(data.subNumber);
        }
        break;
      case 'definition':
        switchView('viewDefs');
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.nav-item')[3].classList.add('active');
        setTimeout(() => {
          const defItems = document.querySelectorAll('.def-item');
          defItems.forEach(item => {
            if (item.querySelector('.def-term').textContent === data.term) {
              item.classList.add('expanded');
              item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
        }, 100);
        break;
      case 'update':
        switchView('viewUpdates');
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        break;
    }
  }

  function showSearchHistory() {
    const container = document.getElementById('searchResults');
    const info = document.getElementById('searchInfo');
    info.textContent = '';

    const history = searchHistory.get();

    // Popular search suggestions
    const popular = ['OB', 'バンカー', '救済', 'ドロップ', 'ペナルティーエリア', '紛失球', 'アンプレヤブル', 'グリーン', '暫定球', '旗竿'];

    let html = '';

    if (history.length > 0) {
      html += `
        <div class="search-history">
          <div class="search-history-title">最近の検索</div>
          <div class="search-history-items">
            ${history.map(h => `<div class="search-history-chip" data-query="${h}">${h}</div>`).join('')}
          </div>
        </div>
      `;
    }

    html += `
      <div class="search-history" style="margin-top: 16px;">
        <div class="search-history-title">よく使うキーワード</div>
        <div class="search-history-items">
          ${popular.map(p => `<div class="search-history-chip" data-query="${p}">${p}</div>`).join('')}
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Chip click handlers
    container.querySelectorAll('.search-history-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.dataset.query;
        document.getElementById('globalSearch').value = query;
        document.getElementById('searchClear').classList.add('visible');
        performSearch(query);
      });
    });
  }

  function getResultTypeLabel(type) {
    switch (type) {
      case 'rule': return '規則';
      case 'rule-sub': return '規則';
      case 'guide': return 'ガイド';
      case 'definition': return '定義';
      case 'update': return '更新';
      default: return '';
    }
  }

  function getResultTypeClass(type) {
    switch (type) {
      case 'guide': return 'type-guide';
      case 'definition': return 'type-def';
      case 'update': return 'type-update';
      default: return '';
    }
  }

  // ============================================
  // Definitions
  // ============================================
  function renderDefinitions() {
    const container = document.getElementById('defsList');
    const searchInput = document.getElementById('defsSearch');

    // Sort by reading (hiragana order)
    const sorted = [...DEFINITIONS_DATA].sort((a, b) =>
      (a.reading || a.term).localeCompare(b.reading || b.term, 'ja')
    );

    function renderDefs(defs) {
      let html = '';
      defs.forEach(def => {
        html += `
          <div class="def-item">
            <div class="def-header">
              <span class="def-term">${def.term}</span>
              <span class="def-arrow">▶</span>
            </div>
            <div class="def-body">
              <p>${def.definition}</p>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;

      // Accordion
      container.querySelectorAll('.def-header').forEach(header => {
        header.addEventListener('click', () => {
          header.parentElement.classList.toggle('expanded');
        });
      });
    }

    renderDefs(sorted);

    // Filter
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      if (!q) {
        renderDefs(sorted);
        return;
      }
      const filtered = sorted.filter(d =>
        d.term.toLowerCase().includes(q) ||
        d.definition.toLowerCase().includes(q) ||
        (d.reading && d.reading.includes(q))
      );
      renderDefs(filtered);
    });
  }

  // ============================================
  // Updates
  // ============================================
  function renderUpdates() {
    const container = document.getElementById('updatesContent');
    let html = '';

    // Detailed additions (newest first)
    html += `
      <div class="updates-section">
        <div class="updates-section-title">📋 追加の詳説 (2026年1月更新)</div>
        ${UPDATES_DATA.detailedAdditions.map(da => `
          <div class="update-item">
            <div class="update-rule">規則 ${da.rule}</div>
            <div class="update-title">${da.title}</div>
            <div class="update-summary">${da.summary}</div>
            ${da.date ? `<div class="update-date">${da.date}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;

    // Local rule additions
    html += `
      <div class="updates-section">
        <div class="updates-section-title">📌 ローカルルール追加・更新</div>
        ${UPDATES_DATA.localRuleAdditions.map(lr => `
          <div class="update-item">
            <div class="update-rule">ローカルルールひな型 ${lr.type}</div>
            <div class="update-title">${lr.title}</div>
            <div class="update-summary">${lr.summary}</div>
            ${lr.date ? `<div class="update-date">${lr.date}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;

    // 2023 main changes
    html += `
      <div class="updates-section">
        <div class="updates-section-title">🔄 2023年ゴルフ規則の主要変更点</div>
        ${UPDATES_DATA.mainChanges2023.map(ch => `
          <div class="update-item">
            <div class="update-rule">規則 ${ch.rule}</div>
            <div class="update-title">${ch.title}</div>
            <div class="update-summary">${ch.summary}</div>
          </div>
        `).join('')}
      </div>
    `;

    // General changes
    html += `
      <div class="updates-section">
        <div class="updates-section-title">📝 一般的な変更</div>
        ${UPDATES_DATA.generalChanges2023.map(gc => `
          <div class="update-item">
            <div class="update-title">${gc.title}</div>
            <div class="update-summary">${gc.summary}</div>
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  // ============================================
  // Bookmarks
  // ============================================
  function loadBookmarks() {
    try {
      return JSON.parse(localStorage.getItem('golf-rules-bookmarks')) || {};
    } catch {
      return {};
    }
  }

  function saveBookmarks() {
    localStorage.setItem('golf-rules-bookmarks', JSON.stringify(bookmarks));
  }

  function isBookmarked(key) {
    return !!bookmarks[key];
  }

  function toggleBookmark(key, data) {
    if (bookmarks[key]) {
      delete bookmarks[key];
    } else {
      bookmarks[key] = data;
    }
    saveBookmarks();
    renderBookmarks();
  }

  function renderBookmarks() {
    const container = document.getElementById('bookmarksList');
    const keys = Object.keys(bookmarks);

    if (keys.length === 0) {
      container.innerHTML = '<p class="empty-message">ブックマークはまだありません。<br>規則やガイドの<span class="star-demo">☆</span>をタップして追加できます。</p>';
      return;
    }

    let html = '';
    keys.forEach(key => {
      const bm = bookmarks[key];
      html += `
        <div class="bookmark-item" data-key="${key}">
          <span class="bookmark-icon">${bm.icon || '📖'}</span>
          <div class="bookmark-info">
            <div class="bookmark-title">${bm.title}</div>
            <div class="bookmark-sub">${bm.sub || ''}</div>
          </div>
          <button class="bookmark-remove" data-key="${key}" aria-label="削除">&times;</button>
        </div>
      `;
    });

    container.innerHTML = html;

    // Click to open
    container.querySelectorAll('.bookmark-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('bookmark-remove')) return;
        const key = item.dataset.key;
        const bm = bookmarks[key];
        if (bm.type === 'guide') {
          showSituationDetail(bm.categoryId, bm.situationIdx);
        } else if (bm.type === 'rule') {
          openRuleByRef(String(bm.ruleNumber));
        }
      });
    });

    // Remove button
    container.querySelectorAll('.bookmark-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.dataset.key;
        delete bookmarks[key];
        saveBookmarks();
        renderBookmarks();
      });
    });
  }

  // ============================================
  // Modals
  // ============================================
  function initModals() {
    document.getElementById('modalBack').addEventListener('click', () => {
      document.getElementById('situationModal').classList.remove('active');
    });

    document.getElementById('ruleModalBack').addEventListener('click', () => {
      document.getElementById('ruleModal').classList.remove('active');
    });
  }

  function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  }

  // ============================================
  // Service Worker
  // ============================================
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(reg => {
          console.log('Service Worker registered:', reg.scope);
        })
        .catch(err => {
          console.log('Service Worker registration failed:', err);
        });
    }
  }

})();
