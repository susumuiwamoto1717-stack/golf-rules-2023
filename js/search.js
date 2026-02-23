/**
 * ゴルフ規則 全文検索エンジン
 * 軽量なクライアントサイド検索
 */

class GolfRuleSearch {
  constructor() {
    this.index = [];
    this.buildIndex();
  }

  buildIndex() {
    // Index rules
    if (typeof RULES_DATA !== 'undefined') {
      RULES_DATA.forEach(rule => {
        // Index rule title
        this.index.push({
          type: 'rule',
          id: rule.id,
          number: rule.number,
          title: rule.title,
          shortTitle: rule.shortTitle,
          text: rule.title + ' ' + rule.shortTitle,
          display: rule.title
        });

        // Index subsections
        rule.subsections.forEach(sub => {
          this.index.push({
            type: 'rule-sub',
            id: rule.id,
            ruleNumber: rule.number,
            subNumber: sub.number,
            title: sub.title,
            content: sub.content || '',
            text: sub.number + ' ' + sub.title + ' ' + (sub.content || ''),
            display: sub.title
          });
        });
      });
    }

    // Index definitions
    if (typeof DEFINITIONS_DATA !== 'undefined') {
      DEFINITIONS_DATA.forEach(def => {
        this.index.push({
          type: 'definition',
          term: def.term,
          definition: def.definition,
          text: def.term + ' ' + def.definition + ' ' + (def.reading || ''),
          display: def.term
        });
      });
    }

    // Index quick guide
    if (typeof QUICKGUIDE_DATA !== 'undefined') {
      QUICKGUIDE_DATA.categories.forEach(cat => {
        cat.situations.forEach(sit => {
          this.index.push({
            type: 'guide',
            categoryId: cat.id,
            categoryTitle: cat.title,
            categoryIcon: cat.icon,
            question: sit.question,
            answer: sit.answer,
            rule: sit.rule,
            procedure: sit.procedure,
            text: sit.question + ' ' + sit.answer + ' ' + sit.procedure + ' ' + sit.rule,
            display: sit.question
          });
        });
      });
    }

    // Index updates
    if (typeof UPDATES_DATA !== 'undefined') {
      // Main changes
      UPDATES_DATA.mainChanges2023.forEach(ch => {
        this.index.push({
          type: 'update',
          rule: ch.rule,
          title: ch.title,
          summary: ch.summary,
          text: ch.rule + ' ' + ch.title + ' ' + ch.summary,
          display: ch.title
        });
      });

      // Detailed additions
      UPDATES_DATA.detailedAdditions.forEach(da => {
        this.index.push({
          type: 'update',
          rule: da.rule,
          title: da.title,
          summary: da.summary,
          date: da.date,
          text: da.rule + ' ' + da.title + ' ' + da.summary,
          display: da.title
        });
      });
    }
  }

  /**
   * Search the index
   * @param {string} query - Search query
   * @returns {Array} Search results
   */
  search(query) {
    if (!query || query.trim().length === 0) return [];

    const q = query.trim().toLowerCase();

    // Check if query is a rule number (e.g., "14.3", "規則14", "rule 14")
    const ruleNumMatch = q.match(/^(?:規則|rule|r)?(\d{1,2})(?:\.(\d{1,2}))?(?:[a-z])?$/i);

    let results = [];

    if (ruleNumMatch) {
      // Rule number search
      const majorNum = ruleNumMatch[1];
      const minorNum = ruleNumMatch[2];

      results = this.index.filter(item => {
        if (item.type === 'rule') {
          return item.number === parseInt(majorNum);
        }
        if (item.type === 'rule-sub') {
          if (minorNum) {
            return item.subNumber === `${majorNum}.${minorNum}` ||
                   item.subNumber.startsWith(`${majorNum}.${minorNum}`);
          }
          return item.ruleNumber === parseInt(majorNum);
        }
        if (item.type === 'guide') {
          return item.rule === `${majorNum}.${minorNum || ''}` ||
                 item.rule.startsWith(`${majorNum}.`);
        }
        if (item.type === 'update') {
          if (minorNum) {
            return item.rule && item.rule.startsWith(`${majorNum}.${minorNum}`);
          }
          return item.rule && item.rule.startsWith(`${majorNum}.`);
        }
        return false;
      });
    }

    // Keyword search (always add keyword results, even for rule number searches)
    const keywords = q.split(/\s+/).filter(k => k.length > 0);

    const keywordResults = this.index
      .map(item => {
        let score = 0;
        const text = item.text.toLowerCase();

        for (const keyword of keywords) {
          if (text.includes(keyword)) {
            score += 1;
            // Bonus for title match
            if ((item.title || item.term || item.question || '').toLowerCase().includes(keyword)) {
              score += 3;
            }
            // Bonus for exact match in display
            if ((item.display || '').toLowerCase().includes(keyword)) {
              score += 2;
            }
          }
        }

        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    // Merge rule number results with keyword results, removing duplicates
    if (ruleNumMatch && results.length > 0) {
      const seen = new Set(results.map(r => r.type + ':' + (r.display || r.term)));
      const additional = keywordResults.filter(r => !seen.has(r.type + ':' + (r.display || r.term)));
      results = [...results, ...additional];
    } else {
      results = keywordResults;
    }

    return results.slice(0, 50); // Limit to 50 results
  }

  /**
   * Highlight search terms in text
   * @param {string} text - Original text
   * @param {string} query - Search query
   * @returns {string} HTML with highlights
   */
  highlight(text, query) {
    if (!query || !text) return text;
    const keywords = query.trim().split(/\s+/).filter(k => k.length > 0);
    let result = text;
    for (const keyword of keywords) {
      const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    }
    return result;
  }
}

// Search history management
class SearchHistory {
  constructor(maxItems = 10) {
    this.maxItems = maxItems;
    this.key = 'golf-rules-search-history';
  }

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch {
      return [];
    }
  }

  add(query) {
    if (!query || query.trim().length === 0) return;
    let history = this.get();
    // Remove duplicate
    history = history.filter(h => h !== query.trim());
    // Add to front
    history.unshift(query.trim());
    // Limit
    history = history.slice(0, this.maxItems);
    localStorage.setItem(this.key, JSON.stringify(history));
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}
