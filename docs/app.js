const styles = Array.isArray(window.LOOMA_STYLES) ? window.LOOMA_STYLES : [];
const stylesById = new Map(styles.map((style) => [style.id, style]));
const defaultStyleId = 'modern-saas-clean';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const activeMotions = new WeakMap();

const styleTrigger = document.querySelector('[data-style-trigger]');
const styleIndex = document.querySelector('[data-style-index]');
const styleList = document.querySelector('[data-style-list]');
const styleScrim = document.querySelector('[data-style-scrim]');
const styleClose = document.querySelector('[data-style-close]');
const styleAnnouncer = document.querySelector('[data-style-announcer]');
const themeColor = document.querySelector('[data-theme-color]');

let activeStyleId = defaultStyleId;
let lastPickerFocus = null;

function fadeBlur(element, delay = 0) {
  if (!element) return null;

  const current = activeMotions.get(element);
  if (current) current.cancel();

  const reduced = reduceMotion.matches;
  const animation = element.animate(
    reduced
      ? [{ opacity: 0 }, { opacity: 1 }]
      : [
          { transform: 'translateY(110%)', opacity: 0, filter: 'blur(14px)' },
          { transform: 'translateY(0)', opacity: 1, filter: 'blur(0)' }
        ],
    {
      duration: reduced ? 180 : 900,
      delay: reduced ? 0 : delay,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'both'
    }
  );

  activeMotions.set(element, animation);
  animation.finished
    .then(() => {
      if (activeMotions.get(element) === animation) activeMotions.delete(element);
    })
    .catch(() => {});

  return animation;
}

function renderStyleOptions() {
  styleList.innerHTML = styles
    .map(
      (style) => `
        <button
          class="style-option"
          id="style-option-${style.id}"
          type="button"
          role="option"
          aria-selected="false"
          data-style-option="${style.id}"
          style="--option-accent:${style.colors[3]}"
        >
          <span class="style-option-number">${style.index}</span>
          <span class="style-option-copy">
            <strong>${style.name}</strong>
            <small>${style.zh} · ${style.bestFor}</small>
          </span>
          <span class="style-option-swatches" aria-hidden="true">
            ${style.colors.map((color) => `<i style="--swatch:${color}"></i>`).join('')}
          </span>
        </button>`
    )
    .join('');
}

function readStoredStyle() {
  const urlStyle = new URL(window.location.href).searchParams.get('style');
  if (stylesById.has(urlStyle)) return urlStyle;

  try {
    const stored = window.localStorage.getItem('looma-style-id');
    if (stylesById.has(stored)) return stored;
  } catch {
    // Local storage can be unavailable in strict file contexts.
  }

  return defaultStyleId;
}

function writeStyleUrl(styleId, replace = false) {
  const url = new URL(window.location.href);
  url.searchParams.set('style', styleId);
  const method = replace ? 'replaceState' : 'pushState';
  window.history[method]({ styleId }, '', url);
}

const swissSignalKeywords = {
  blue: ['ai', 'tech', 'product', 'digital', 'saas', 'console', 'tool', '科技', '产品', '数字', '控制台', '工具', '人工智能'],
  red: ['red', 'poster', 'culture', 'gallery', 'architecture', 'manifesto', 'precision', 'strength', '红', '海报', '文化', '画廊', '建筑', '宣言', '精确', '力量']
};

function resolveSwissSignal() {
  const requested = new URL(window.location.href).searchParams.get('signal')?.toLowerCase();
  if (requested === 'blue' || requested === 'red') {
    return { value: requested, source: 'override' };
  }

  const context = [
    '.brand',
    '#hero-title',
    '[data-hero-claim]',
    '[data-hero-support]',
    '[data-product-title]',
    '#capabilities-title',
    '#workflow-title',
    '#cta-title'
  ]
    .map((selector) => document.querySelector(selector)?.textContent || '')
    .join(' ')
    .toLowerCase();

  const score = (keywords) => keywords.reduce((total, keyword) => total + Number(context.includes(keyword)), 0);
  const blueScore = score(swissSignalKeywords.blue);
  const redScore = score(swissSignalKeywords.red);

  return { value: redScore > blueScore ? 'red' : 'blue', source: 'auto' };
}

function updateSwissSignal(style) {
  if (style.id !== 'swiss-international') {
    delete document.body.dataset.swissSignal;
    delete document.body.dataset.swissSignalSource;
    return;
  }

  const route = resolveSwissSignal();
  document.body.dataset.swissSignal = route.value;
  document.body.dataset.swissSignalSource = route.source;
}

function updateStyleContent(style) {
  document.body.dataset.style = style.id;
  document.body.dataset.layout = style.layout;
  document.documentElement.style.colorScheme = style.id === 'linear-vercel-dark' ? 'dark' : 'light';
  document.title = `${style.name} · Looma AI`;
  themeColor.setAttribute('content', style.themeColor);

  document.querySelector('[data-style-trigger-label]').textContent = `${style.index} / ${style.shortName}`;
  document.querySelector('[data-style-eyebrow]').textContent = `STYLE ${style.index} · ${style.zh}`;
  document.querySelector('[data-hero-claim]').textContent = style.claim;
  document.querySelector('[data-hero-support]').textContent = style.support;
  document.querySelector('#capabilities-title').textContent = style.capabilityTitle;
  document.querySelector('#workflow-title').textContent = style.workflowTitle;
  document.querySelector('#cta-title').textContent = style.ctaTitle;
  document.querySelector('[data-active-style-number]').textContent = style.index;
  document.querySelector('[data-active-style-name]').textContent = style.name;
  document.querySelector('[data-active-style-fit]').textContent = style.bestFor;
  document.querySelector('[data-style-count]').textContent = `${style.index} / 12`;
  document.querySelector('[data-style-index-description]').textContent = style.description;
  updateSwissSignal(style);

  styleList.querySelectorAll('[data-style-option]').forEach((option) => {
    option.setAttribute('aria-selected', String(option.dataset.styleOption === style.id));
  });
}

function applyStyle(styleId, options = {}) {
  const style = stylesById.get(styleId) || stylesById.get(defaultStyleId);
  const isInitial = options.initial === true;
  const shouldUpdateUrl = options.updateUrl !== false;
  const shouldAnnounce = options.announce !== false;

  const commit = () => updateStyleContent(style);
  if (!isInitial && !reduceMotion.matches && document.startViewTransition) {
    document.startViewTransition(commit);
  } else {
    commit();
  }

  activeStyleId = style.id;

  try {
    window.localStorage.setItem('looma-style-id', style.id);
  } catch {
    // The URL remains the durable fallback.
  }

  if (shouldUpdateUrl) writeStyleUrl(style.id, isInitial);
  if (shouldAnnounce) styleAnnouncer.textContent = `已切换至 ${style.name}，${style.zh}`;
}

function openStyleIndex() {
  if (document.body.classList.contains('style-index-open')) return;
  lastPickerFocus = document.activeElement;
  document.body.classList.add('style-index-open');
  document.body.style.overflow = 'hidden';
  styleIndex.setAttribute('aria-hidden', 'false');
  styleTrigger.setAttribute('aria-expanded', 'true');

  window.requestAnimationFrame(() => {
    styleList.querySelector(`[data-style-option="${activeStyleId}"]`)?.focus();
  });
}

function closeStyleIndex(restoreFocus = true) {
  if (!document.body.classList.contains('style-index-open')) return;
  document.body.classList.remove('style-index-open');
  document.body.style.overflow = '';
  styleIndex.setAttribute('aria-hidden', 'true');
  styleTrigger.setAttribute('aria-expanded', 'false');

  if (restoreFocus) (lastPickerFocus || styleTrigger).focus();
}

renderStyleOptions();
applyStyle(readStoredStyle(), { initial: true, announce: false });

document.querySelectorAll('.reveal-line > *').forEach((element, index) => {
  fadeBlur(element, index * 130);
});
fadeBlur(document.querySelector('[data-product-shell]'), 520);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      fadeBlur(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

styleTrigger.addEventListener('click', () => {
  if (document.body.classList.contains('style-index-open')) closeStyleIndex();
  else openStyleIndex();
});

styleClose.addEventListener('click', () => closeStyleIndex());
styleScrim.addEventListener('click', () => closeStyleIndex());

styleList.addEventListener('click', (event) => {
  const option = event.target.closest('[data-style-option]');
  if (!option) return;
  applyStyle(option.dataset.styleOption);
  closeStyleIndex(false);
  styleTrigger.focus();
});

styleList.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
  const options = [...styleList.querySelectorAll('[data-style-option]')];
  const currentIndex = options.indexOf(document.activeElement);
  let nextIndex = currentIndex;

  if (event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % options.length;
  if (event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + options.length) % options.length;
  if (event.key === 'Home') nextIndex = 0;
  if (event.key === 'End') nextIndex = options.length - 1;

  event.preventDefault();
  options[nextIndex].focus();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeStyleIndex();
});

window.addEventListener('popstate', () => {
  const styleId = new URL(window.location.href).searchParams.get('style');
  if (!stylesById.has(styleId)) return;

  if (styleId === activeStyleId) {
    updateSwissSignal(stylesById.get(styleId));
  } else {
    applyStyle(styleId, { updateUrl: false });
  }
});

const input = document.querySelector('[data-source-input]');
const generateButton = document.querySelector('[data-generate]');
const generateLabel = document.querySelector('[data-generate-label]');
const output = document.querySelector('[data-output]');
const summary = document.querySelector('[data-summary]');
const taskList = document.querySelector('[data-task-list]');
const risk = document.querySelector('[data-risk]');
const toast = document.querySelector('[data-toast]');

const demoResults = [
  {
    summary: '本周完成新版定价页定稿，文案、设计与埋点方案并行推进。',
    risk: '埋点方案尚未确认',
    tasks: [
      ['完成最终文案', '小林 · 周五'],
      ['组织设计稿评审', '设计团队 · 周三'],
      ['对齐埋点方案', '阿哲 · 今天']
    ]
  },
  {
    summary: '团队需要先确认负责人和验收日期，再把讨论中的共识推进为可执行任务。',
    risk: '两个任务缺少明确日期',
    tasks: [
      ['确认本轮交付目标', '待指定负责人'],
      ['补充任务验收日期', '项目负责人 · 待确认'],
      ['同步关键结论给团队', '会议发起人 · 今天']
    ]
  }
];

function renderTasks(tasks) {
  taskList.innerHTML = tasks
    .map(
      ([title, meta], index) => `
        <article class="task-row">
          <span class="task-check" aria-hidden="true"></span>
          <div><h3>${title}</h3><p>${meta}</p></div>
          <span class="source-ref">原文 ${index + 1}</span>
        </article>`
    )
    .join('');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

generateButton.addEventListener('click', () => {
  const hasDefaultSignals = /小林|定价页|埋点/.test(input.value);
  const result = hasDefaultSignals ? demoResults[0] : demoResults[1];

  generateButton.disabled = true;
  generateButton.classList.add('is-loading');
  generateLabel.textContent = '正在整理…';
  output.setAttribute('aria-busy', 'true');

  window.setTimeout(() => {
    summary.textContent = result.summary;
    risk.textContent = result.risk;
    renderTasks(result.tasks);
    fadeBlur(output);

    generateButton.disabled = false;
    generateButton.classList.remove('is-loading');
    generateLabel.textContent = '重新生成';
    output.setAttribute('aria-busy', 'false');
    showToast('行动页已更新');
  }, reduceMotion.matches ? 180 : 620);
});

document.querySelector('[data-toggle-sources]').addEventListener('click', (event) => {
  const isVisible = output.classList.toggle('show-sources');
  event.currentTarget.textContent = isVisible ? '隐藏原文依据' : '显示原文依据';
});

document.querySelector('[data-copy]').addEventListener('click', async () => {
  const text = `${summary.textContent}\n\n${[...taskList.querySelectorAll('.task-row')]
    .map((row) => `- ${row.querySelector('h3').textContent}（${row.querySelector('p').textContent}）`)
    .join('\n')}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast('行动页已复制');
  } catch {
    showToast('当前浏览器未开放剪贴板权限');
  }
});

const signalRanges = {
  '7d': {
    decisions: '12',
    rate: '86%',
    risks: '03',
    label: '7 日趋势',
    series: 'M0 145 C70 132 88 135 152 112 S250 92 312 104 S416 58 480 70 S566 28 640 34',
    area: 'M0 145 C70 132 88 135 152 112 S250 92 312 104 S416 58 480 70 S566 28 640 34 L640 168 L0 168 Z'
  },
  '30d': {
    decisions: '48',
    rate: '79%',
    risks: '09',
    label: '30 日趋势',
    series: 'M0 132 C56 118 96 142 150 126 S236 78 302 94 S392 112 452 72 S554 50 640 44',
    area: 'M0 132 C56 118 96 142 150 126 S236 78 302 94 S392 112 452 72 S554 50 640 44 L640 168 L0 168 Z'
  }
};

document.querySelectorAll('[data-signal-range]').forEach((button) => {
  button.addEventListener('click', () => {
    const range = signalRanges[button.dataset.signalRange];
    if (!range) return;

    document.querySelectorAll('[data-signal-range]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelector('[data-signal-decisions]').textContent = range.decisions;
    document.querySelector('[data-signal-rate]').textContent = range.rate;
    document.querySelector('[data-signal-risks]').textContent = range.risks;
    document.querySelector('[data-signal-chart-label]').textContent = range.label;
    document.querySelector('[data-signal-series]').setAttribute('d', range.series);
    document.querySelector('[data-signal-area]').setAttribute('d', range.area);
    document.querySelector('[data-signal-point]').setAttribute('cy', button.dataset.signalRange === '7d' ? '34' : '44');
  });
});
