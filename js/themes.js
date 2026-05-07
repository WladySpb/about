/**
 * themes.js — Theme system for info.wladyspb.pro
 *
 * • On first visit: picks a random theme, stores it in localStorage
 * • On subsequent visits: uses the stored theme
 * • Easter egg: click the theme-specific trigger element to switch
 *   to a random different theme
 *
 * Themes: default (futuristic), matrix (hacker), steampunk, console
 */
(function () {
  'use strict';

  /* ═════════════════════════════════════════════════════════
     CONSTANTS
  ═════════════════════════════════════════════════════════ */
  var THEME_KEY  = 'site-theme';
  var ALL_THEMES = ['default', 'matrix', 'steampunk', 'console'];

  /* ═════════════════════════════════════════════════════════
     SVG ICON PATHS (shared across all themes)
  ═════════════════════════════════════════════════════════ */
  var P = {
    github:   'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    twitter:  'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    telegram: 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
    mastodon: 'M23.268 5.313c-.35-2.578-2.617-4.61-5.288-5.188C17.335-.036 15.026 0 12.207 0h-.07c-2.82 0-5.129-.036-5.775.125C3.675.7 1.408 2.724 1.058 5.31.706 7.85.719 10.7.725 13.493c.01 2.805-.008 5.617.354 8.17.35 2.578 2.617 4.608 5.288 5.19C7.025 27.198 9.334 27.162 12.153 27.162h.07c2.82 0 5.127.036 5.774-.127 2.672-.582 4.938-2.612 5.289-5.19.35-2.551.358-5.363.367-8.165.01-2.795 0-5.642-.385-8.367zm-5.151 14.08c-.436.184-.897.3-1.38.374-.965.145-1.942.19-2.921.173h-.1c-.979.017-1.956-.028-2.92-.173a6.678 6.678 0 01-1.381-.374 3.66 3.66 0 01-1.437-1.001 3.694 3.694 0 01-.763-1.62c-.108-.58-.163-1.17-.163-1.761v-5.3c0-.72.19-1.296.571-1.727.382-.43.907-.645 1.577-.645.78 0 1.378.3 1.79.9l.387.617.387-.617c.412-.6 1.01-.9 1.79-.9.67 0 1.195.215 1.577.645.382.431.57 1.007.57 1.727v5.3c0 .59-.054 1.18-.162 1.761a3.694 3.694 0 01-.763 1.62 3.66 3.66 0 01-1.437 1.001z',
    steam:    'M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.009 2.455-.397.957-1.494 1.41-2.455 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.662 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z',
    email:    'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
  };

  /* ═════════════════════════════════════════════════════════
     CONTENT DATA
  ═════════════════════════════════════════════════════════ */
  var SOCIALS = [
    { href: 'https://github.com/WladySpb',                              icon: 'github',   name: 'GitHub',      label: 'github' },
    { href: 'https://www.linkedin.com/in/vladimir-golubev-944060182/', icon: 'linkedin', name: 'LinkedIn',    label: 'linkedin' },
    { href: 'https://x.com/WladySpb',                                  icon: 'twitter',  name: 'Twitter / X', label: 'twitter' },
    { href: 'https://t.me/WladySpb',                                   icon: 'telegram', name: 'Telegram',    label: 'telegram' },
    { href: 'https://mastodon.wladyspb.pro/@wlady',                    icon: 'mastodon', name: 'Mastodon',    label: 'mastodon' },
    { href: 'https://steamcommunity.com/id/wladyspb/',                 icon: 'steam',    name: 'Steam',       label: 'steam' },
    { href: 'mailto:wladyspb85@gmail.com',                             icon: 'email',    name: 'Email',       label: 'email', mail: true }
  ];

  var PROJECTS_AI = [
    { href: 'https://github.com/no-more-care/master-claw',  title: 'Master Claw',         i18n: 'proj_masterclaw_desc',     tags: ['AI', 'GameDev', 'GitHub'], perm: '-rwxr-xr-x', featured: true },
    { href: 'https://www.moltbook.com/u/jinny_mnemonic',    title: 'Jinny Mnemonic',      i18n: 'proj_jinny_desc',          tags: ['AI', 'Agent'],             perm: '-rwxr-xr-x', featured: true },
    { href: 'https://nomorecare.gg',                        title: 'No More Care Studio', i18n: 'proj_nomorecare_desc',     tags: ['Studio', 'GameDev'],       perm: '-rwxr-xr-x', featured: true },
    { href: 'https://nomorecare.gg',                        title: 'Terminal Stake',      i18n: 'proj_terminal_stake_desc', tags: ['Roguelike', 'GameDev'],    perm: '-rwxr-xr-x', featured: true },
    { href: null,                                           title: 'IncreMemory',         i18n: 'proj_increMemory_desc',    tags: ['Auto-battler'],            perm: '-rw-------', soon: true },
    { href: null,                                           title: 'Increvolution',       i18n: 'proj_increvolution_desc',  tags: ['Roguelike'],               perm: '-rw-------', soon: true }
  ];

  var PROJECTS_QSP = [
    { href: 'https://qsp.org/games/25-pohozdenia-bravogo-kota-filimona',             i18n_title: 'proj_filimon1_title',   i18n_desc: 'proj_filimon1_desc',   perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/113-novye-prikliuceniia-bravogo-kota-filimona',   i18n_title: 'proj_filimon2_title',   i18n_desc: 'proj_filimon2_desc',   perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/58-otnositelnaia-realnost',                       i18n_title: 'proj_relreal_title',    i18n_desc: 'proj_relreal_desc',    perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/49-konkurenty',                                   i18n_title: 'proj_competitors_title',i18n_desc: 'proj_competitors_desc',perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/60-zombi-po-imeni-son',                           i18n_title: 'proj_zombie_title',     i18n_desc: 'proj_zombie_desc',     perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/47-kladbise',                                     i18n_title: 'proj_cemetery_title',   i18n_desc: 'proj_cemetery_desc',   perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/86-novogodnie-skazki',                            i18n_title: 'proj_newyear_title',    i18n_desc: 'proj_newyear_desc',    perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/15-ty-millioner',                                 i18n_title: 'proj_millioner_title',  i18n_desc: 'proj_millioner_desc',  perm: '-rw-r--r--' },
    { href: 'https://qsp.org/games/26-terminator-t-xt-i-spasitel-umret',             i18n_title: 'proj_terminator_title', i18n_desc: 'proj_terminator_desc', perm: '-rw-r--r--' }
  ];

  var SKILLS = ['JavaScript', 'PHP', 'HTML', 'CSS', 'Go', 'C#', 'GraphQL', 'ClickHouse', 'AWS', 'Docker', 'Linux', 'Git', 'QSP', 'Godot', 'Unity', 'Claude Code', 'Agentic Network'];

  /* ═════════════════════════════════════════════════════════
     HTML HELPERS
  ═════════════════════════════════════════════════════════ */
  function svg(iconKey) {
    return '<svg viewBox="0 0 24 24"><path d="' + P[iconKey] + '"/></svg>';
  }

  var LANG_ITEMS = [
    { code: 'en', label: 'EN — English' },
    { code: 'ru', label: 'RU — Русский' },
    { code: 'sr', label: 'SR — Српски' },
    { code: 'uk', label: 'UK — Українська' },
    { code: 'ka', label: 'KA — ქართული' },
    { code: 'he', label: 'HE — עברית' }
  ];

  function langOptions() {
    return LANG_ITEMS.map(function (l) {
      return '<li><button class="lang-option" data-lang="' + l.code + '">' + l.label + '</button></li>';
    }).join('');
  }

  /** Standard lang switcher used by default/matrix/steampunk */
  function stdLangSwitcher() {
    return '<div class="lang-switcher" id="lang-switcher">' +
      '<button class="lang-current" id="lang-toggle" aria-haspopup="listbox" aria-expanded="false">' +
      '<span id="lang-current-code">EN</span>' +
      '<span class="lang-arrow" aria-hidden="true">▾</span></button>' +
      '<ul class="lang-menu" id="lang-menu" role="listbox">' + langOptions() + '</ul></div>';
  }

  /* ═════════════════════════════════════════════════════════
     THEME: DEFAULT (futuristic / cyberpunk-lite)
     Easter egg: click the "W" avatar circle
  ═════════════════════════════════════════════════════════ */
  var themeDefault = {
    cssFile: 'css/theme-default.css',
    switchSelector: '.avatar-core',

    render: function () {
      var socialCards = SOCIALS.map(function (s) {
        return '<a href="' + s.href + '"' +
          (s.mail ? '' : ' target="_blank" rel="noopener noreferrer"') +
          ' class="social-card" aria-label="' + s.name + '">' +
          '<span class="social-icon">' + svg(s.icon) + '</span>' +
          '<span class="social-name">' + s.name + '</span></a>';
      }).join('');

      var aiCards = PROJECTS_AI.map(function (p) {
        if (p.href) {
          return '<a href="' + p.href + '" target="_blank" rel="noopener noreferrer" class="project-card featured">' +
            '<div class="card-tags">' + p.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
            '<h4 class="card-title">' + p.title + '</h4>' +
            '<p class="card-desc" data-i18n="' + p.i18n + '"></p>' +
            '<span class="card-arrow">→</span></a>';
        }
        return '<div class="project-card coming-soon">' +
          '<div class="card-tags"><span class="tag">Game</span><span class="tag tag-soon" data-i18n="coming_soon">Coming Soon</span></div>' +
          '<h4 class="card-title">' + p.title + '</h4>' +
          '<p class="card-desc" data-i18n="' + p.i18n + '"></p>' +
          '<span class="card-arrow lock">◈</span></div>';
      }).join('');

      var qspCards = PROJECTS_QSP.map(function (p) {
        return '<a href="' + p.href + '" target="_blank" rel="noopener noreferrer" class="project-card">' +
          '<h4 class="card-title" data-i18n="' + p.i18n_title + '"></h4>' +
          '<p class="card-desc" data-i18n="' + p.i18n_desc + '"></p>' +
          '<span class="card-arrow">→</span></a>';
      }).join('');

      var skillTags = SKILLS.map(function (s) { return '<span class="skill-tag">' + s + '</span>'; }).join('');

      return (
        '<canvas id="bg-canvas" aria-hidden="true"></canvas>' +
        '<nav class="nav" role="navigation">' +
          '<div class="nav-brand">W://</div>' +
          '<div class="nav-links">' +
            '<a href="#about"    class="nav-link" data-i18n="nav_about">About</a>' +
            '<a href="#projects" class="nav-link" data-i18n="nav_projects">Projects</a>' +
            '<a href="#contact"  class="nav-link" data-i18n="nav_contact">Contact</a>' +
          '</div>' +
          stdLangSwitcher() +
        '</nav>' +
        '<main>' +
          '<section class="hero" id="home">' +
            '<div class="hero-content">' +
              '<p class="hero-greeting"><span class="terminal-prompt">~/</span><span data-i18n="hero_greeting">Hello, World.</span></p>' +
              '<h1 class="hero-name">Wlady</h1>' +
              '<p class="hero-tagline" data-i18n="hero_tagline">Engineer · Game Developer · System Architect</p>' +
              '<div class="hero-cta">' +
                '<a href="#projects" class="btn-primary"   data-i18n="cta_projects">View Projects</a>' +
                '<a href="#contact"  class="btn-secondary" data-i18n="cta_contact">Get in Touch</a>' +
              '</div>' +
            '</div>' +
            '<div class="hero-visual" aria-hidden="true"><div class="avatar-wrap">' +
              '<div class="avatar-core">W</div>' +
              '<div class="av-ring av-ring-1"></div>' +
              '<div class="av-ring av-ring-2"></div>' +
              '<div class="av-ring av-ring-3"></div>' +
            '</div></div>' +
          '</section>' +
          '<section class="section" id="about"><div class="container">' +
            '<h2 class="section-title" data-i18n="about_title">About</h2>' +
            '<div class="about-blocks">' +
              '<div class="about-block"><div class="block-stat"><span class="block-num">30</span><span class="block-unit" data-i18n="about_b3_years">years</span></div><h3 class="block-title" data-i18n="about_b3_title">Gaming &amp; Gamedev</h3><p class="block-text" data-i18n="about_b3_text"></p></div>' +
              '<div class="about-block"><div class="block-stat"><span class="block-num">15</span><span class="block-unit" data-i18n="about_b1_years">years</span></div><h3 class="block-title" data-i18n="about_b1_title">Web Development</h3><p class="block-text" data-i18n="about_b1_text"></p></div>' +
              '<div class="about-block"><div class="block-stat"><span class="block-num">3</span><span class="block-unit" data-i18n="about_b2_years">years</span></div><h3 class="block-title" data-i18n="about_b2_title">AI &amp; Agents</h3><p class="block-text" data-i18n="about_b2_text"></p></div>' +
            '</div>' +
            '<blockquote class="about-quote"><span data-i18n="about_quote"></span></blockquote>' +
            '<div class="about-stack"><p class="skills-label">// Stack</p><div class="skills-wrap">' + skillTags + '</div></div>' +
          '</div></section>' +
          '<section class="section" id="projects"><div class="container">' +
            '<h2 class="section-title" data-i18n="projects_title">Projects</h2>' +
            '<div class="projects-group"><h3 class="group-title" data-i18n="group_ai">AI &amp; Gamedev</h3><div class="projects-grid">' + aiCards + '</div></div>' +
            '<div class="projects-group"><h3 class="group-title" data-i18n="group_qsp">Text Adventure Games</h3><div class="projects-grid games-grid">' + qspCards + '</div></div>' +
          '</div></section>' +
          '<section class="section" id="contact"><div class="container">' +
            '<h2 class="section-title" data-i18n="contact_title">Contact</h2>' +
            '<p class="contact-sub" data-i18n="contact_subtitle">Find me across the network</p>' +
            '<div class="social-grid">' + socialCards + '</div>' +
          '</div></section>' +
        '</main>' +
        '<footer><div class="footer-inner"><span class="footer-copy">Wlady &copy; 2026</span><span class="footer-domain">info.wladyspb.pro</span></div></footer>'
      );
    },

    initEffects: function () {
      // Nav scroll effect
      var nav = document.querySelector('.nav');
      if (nav) {
        window.addEventListener('scroll', function () {
          nav.classList.toggle('scrolled', window.scrollY > 30);
        });
      }

      // Particle neural-net canvas
      var canvas = document.getElementById('bg-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var pts = [];
      var W, H;

      function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      for (var i = 0; i < 65; i++) {
        pts.push({
          x:  Math.random() * window.innerWidth,
          y:  Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28
        });
      }

      function draw() {
        ctx.clearRect(0, 0, W, H);
        for (var a = 0; a < pts.length; a++) {
          var p = pts[a];
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0,229,255,0.55)';
          ctx.fill();
          for (var b = a + 1; b < pts.length; b++) {
            var q = pts[b];
            var dx = p.x - q.x, dy = p.y - q.y;
            var d  = Math.sqrt(dx * dx + dy * dy);
            if (d < 130) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = 'rgba(0,229,255,' + (0.11 * (1 - d / 130)) + ')';
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(draw);
      }
      draw();

      // Scroll-reveal via IntersectionObserver
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.about-block, .project-card, .social-card').forEach(function (el) { obs.observe(el); });
    }
  };

  /* ═════════════════════════════════════════════════════════
     THEME: MATRIX (hacker / green rain)
     Easter egg: click the nav brand "root@wlady:~#"
  ═════════════════════════════════════════════════════════ */
  var themeMatrix = {
    cssFile: 'css/theme-matrix.css',
    switchSelector: '.nav-brand',

    render: function () {
      var connItems = SOCIALS.map(function (s) {
        var displayURL = s.mail
          ? 'wladyspb85@gmail.com'
          : s.href.replace(/^https?:\/\//, '').replace(/\/$/, '');
        return '<a href="' + s.href + '"' +
          (s.mail ? '' : ' target="_blank" rel="noopener"') +
          ' class="conn-item">' +
          '<span class="conn-status active">ACTIVE</span>' +
          '<span class="conn-name">' + displayURL + '</span></a>';
      }).join('');

      var aiFiles = PROJECTS_AI.map(function (p) {
        var slug = p.title.toLowerCase().replace(/ /g, '-') + '/';
        if (p.href) {
          return '<a href="' + p.href + '" target="_blank" rel="noopener" class="file-item">' +
            '<span class="file-perm">' + p.perm + '</span>' +
            '<div class="file-info"><div class="file-name">' + slug + '</div>' +
            '<div class="file-desc" data-i18n="' + p.i18n + '"></div></div>' +
            '<span class="file-tag tag-feat">AI</span></a>';
        }
        return '<div class="file-item">' +
          '<span class="file-perm">' + p.perm + '</span>' +
          '<div class="file-info"><div class="file-name">' + slug + '</div>' +
          '<div class="file-desc" data-i18n="' + p.i18n + '"></div></div>' +
          '<span class="file-tag tag-soon" data-i18n="coming_soon">Coming Soon</span></div>';
      }).join('');

      var qspFiles = PROJECTS_QSP.map(function (p) {
        return '<a href="' + p.href + '" target="_blank" rel="noopener" class="file-item">' +
          '<span class="file-perm">' + p.perm + '</span>' +
          '<div class="file-info">' +
          '<div class="file-name" data-i18n="' + p.i18n_title + '"></div>' +
          '<div class="file-desc" data-i18n="' + p.i18n_desc + '"></div></div>' +
          '<span class="file-tag">QSP</span></a>';
      }).join('');

      var skillTags = SKILLS.map(function (s) { return '<span class="skill-tag">' + s + '</span>'; }).join('');

      return (
        '<canvas id="bg-canvas"></canvas>' +
        '<nav class="nav">' +
          '<span class="nav-brand">wlady</span>' +
          '<div class="nav-links">' +
            '<a href="#about"    class="nav-link" data-i18n="nav_about">About</a>' +
            '<a href="#projects" class="nav-link" data-i18n="nav_projects">Projects</a>' +
            '<a href="#contact"  class="nav-link" data-i18n="nav_contact">Contact</a>' +
          '</div>' +
          stdLangSwitcher() +
        '</nav>' +
        '<main>' +
          '<section class="hero" id="hero">' +
            '<div class="boot-header">' +
              '<span class="ok">[  OK  ] Loaded kernel modules</span>' +
              '<span class="ok">[  OK  ] Started identity resolver</span>' +
              '<span class="warn">[ WARN ] Human detected — switching to display mode</span>' +
              '<span class="ok">[  OK  ] Profile loaded</span>' +
            '</div>' +
            '<div class="hero-name">WLADY</div>' +
            '<div class="hero-tagline"><span data-i18n="hero_tagline">Engineer · Game Developer · System Architect</span><span class="tw-cursor">_</span></div>' +
            '<div class="hero-cta">' +
              '<a href="#projects" class="btn"     data-i18n="cta_projects">View Projects</a>' +
              '<a href="#contact"  class="btn btn-sec" data-i18n="cta_contact">Get in Touch</a>' +
            '</div>' +
          '</section>' +
          '<section class="section" id="about">' +
            '<h2 class="section-title" data-i18n="about_title">About</h2>' +
            '<div class="about-grid">' +
              '<div class="stat-row"><div class="stat-label"><span class="stat-name" data-i18n="about_b3_title">Gaming &amp; Gamedev</span><span class="stat-val">30 <span data-i18n="about_b3_years">years</span></span></div><div class="stat-bar"><div class="stat-fill" style="width:100%"></div></div><div class="stat-meta" data-i18n="about_b3_text"></div></div>' +
              '<div class="stat-row"><div class="stat-label"><span class="stat-name" data-i18n="about_b1_title">Web Development</span><span class="stat-val">15 <span data-i18n="about_b1_years">years</span></span></div><div class="stat-bar"><div class="stat-fill" style="width:50%"></div></div><div class="stat-meta" data-i18n="about_b1_text"></div></div>' +
              '<div class="stat-row"><div class="stat-label"><span class="stat-name" data-i18n="about_b2_title">AI &amp; Agents</span><span class="stat-val">3 <span data-i18n="about_b2_years">years</span></span></div><div class="stat-bar"><div class="stat-fill" style="width:10%"></div></div><div class="stat-meta" data-i18n="about_b2_text"></div></div>' +
            '</div>' +
            '<div class="about-quote" data-i18n="about_quote"></div>' +
            '<div class="skills-row">' + skillTags + '</div>' +
          '</section>' +
          '<section class="section" id="projects">' +
            '<h2 class="section-title" data-i18n="projects_title">Projects</h2>' +
            '<div class="projects-group"><div class="group-title" data-i18n="group_ai">AI &amp; Gamedev</div><div class="file-list">' + aiFiles + '</div></div>' +
            '<div class="projects-group"><div class="group-title" data-i18n="group_qsp">Text Adventure Games</div><div class="file-list">' + qspFiles + '</div></div>' +
          '</section>' +
          '<section class="section" id="contact">' +
            '<h2 class="section-title" data-i18n="contact_title">Contact</h2>' +
            '<div class="conn-grid">' + connItems + '</div>' +
          '</section>' +
        '</main>' +
        '<footer><span>Wlady &copy; 2026</span><span>info.wladyspb.pro</span></footer>'
      );
    },

    initEffects: function () {
      var canvas = document.getElementById('bg-canvas');
      if (!canvas) return;
      var ctx    = canvas.getContext('2d');
      var chars  = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*';
      var cols, drops;

      function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        cols  = Math.floor(canvas.width / 16);
        drops = [];
        for (var i = 0; i < cols; i++) drops.push(Math.random() * -50);
      }
      resize();
      window.addEventListener('resize', resize);

      setInterval(function () {
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '14px JetBrains Mono, monospace';
        for (var i = 0; i < cols; i++) {
          var ch = chars[Math.floor(Math.random() * chars.length)];
          var b  = Math.random();
          ctx.fillStyle = b > 0.92 ? '#ccffdd' : b > 0.7 ? '#00cc44' : '#004418';
          ctx.fillText(ch, i * 16, drops[i] * 16);
          if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i] += 0.5 + Math.random() * 0.5;
        }
      }, 50);
    }
  };

  /* ═════════════════════════════════════════════════════════
     THEME: STEAMPUNK (Victorian / brass & gears)
     Easter egg: click the ⚙ gear span in the nav
  ═════════════════════════════════════════════════════════ */
  var themeSteampunk = {
    cssFile: 'css/theme-steampunk.css',
    switchSelector: '.nav-gear',

    render: function () {
      var contactCards = SOCIALS.map(function (s) {
        return '<a href="' + s.href + '"' +
          (s.mail ? '' : ' target="_blank" rel="noopener"') +
          ' class="contact-card">' +
          '<svg class="contact-icon" viewBox="0 0 24 24"><path d="' + P[s.icon] + '"/></svg>' +
          '<span class="contact-name">' + s.name + '</span></a>';
      }).join('');

      var aiBlueprints = PROJECTS_AI.map(function (p) {
        if (p.href) {
          return '<a href="' + p.href + '" target="_blank" rel="noopener" class="blueprint">' +
            '<div class="bp-tags">' + p.tags.slice(0, 2).map(function (t) { return '<span class="bp-tag">' + t + '</span>'; }).join('') + '</div>' +
            '<div class="bp-title">' + p.title + '</div>' +
            '<div class="bp-desc" data-i18n="' + p.i18n + '"></div>' +
            '<span class="bp-arrow">→</span></a>';
        }
        return '<div class="blueprint">' +
          '<div class="bp-tags"><span class="bp-tag-soon" data-i18n="coming_soon">Coming Soon</span></div>' +
          '<div class="bp-title">' + p.title + '</div>' +
          '<div class="bp-desc" data-i18n="' + p.i18n + '"></div></div>';
      }).join('');

      var qspBlueprints = PROJECTS_QSP.map(function (p) {
        return '<a href="' + p.href + '" target="_blank" rel="noopener" class="blueprint">' +
          '<div class="bp-title" data-i18n="' + p.i18n_title + '"></div>' +
          '<div class="bp-desc"  data-i18n="' + p.i18n_desc  + '"></div>' +
          '<span class="bp-arrow">→</span></a>';
      }).join('');

      return (
        '<canvas id="bg-canvas"></canvas>' +
        '<nav class="nav">' +
          '<span class="nav-brand">WLADY</span>' +
          '<div class="nav-links">' +
            '<a href="#about"    class="nav-link" data-i18n="nav_about">About</a>' +
            '<a href="#projects" class="nav-link" data-i18n="nav_projects">Projects</a>' +
            '<a href="#contact"  class="nav-link" data-i18n="nav_contact">Contact</a>' +
          '</div>' +
          stdLangSwitcher() +
          '<span class="nav-gear" title="⚙ Switch theme">⚙</span>' +
        '</nav>' +
        '<main>' +
          '<section class="hero" id="hero">' +
            '<div class="hero-content">' +
              '<div class="hero-eyebrow">⚙ The Analytical Engine ⚙</div>' +
              '<div class="hero-name">WLADY</div>' +
              '<div class="hero-divider"></div>' +
              '<div class="hero-tagline"><span data-i18n="hero_tagline">Engineer · Game Developer · System Architect</span><span class="tw-cursor">|</span></div>' +
              '<div class="hero-cta">' +
                '<a href="#projects" class="btn btn-primary" data-i18n="cta_projects">View Projects</a>' +
                '<a href="#contact"  class="btn btn-sec"     data-i18n="cta_contact">Get in Touch</a>' +
              '</div>' +
            '</div>' +
            '<div class="hero-visual">' +
              '<div class="gear-outer"></div><div class="gear-mid"></div>' +
              '<div class="gear-inner"></div><div class="gear-center"></div>' +
            '</div>' +
          '</section>' +
          '<section class="section" id="about">' +
            '<div class="section-header"><span class="section-ornament">⚙ ✦ ⚙</span><h2 class="section-title" data-i18n="about_title">About</h2><div class="section-rule"></div></div>' +
            '<div class="about-cols">' +
              '<div class="dossier-block"><div class="dossier-num">30</div><div class="dossier-unit" data-i18n="about_b3_years">years</div><div class="dossier-title" data-i18n="about_b3_title">Gaming &amp; Gamedev</div><div class="dossier-text" data-i18n="about_b3_text"></div></div>' +
              '<div class="dossier-block"><div class="dossier-num">15</div><div class="dossier-unit" data-i18n="about_b1_years">years</div><div class="dossier-title" data-i18n="about_b1_title">Web Development</div><div class="dossier-text" data-i18n="about_b1_text"></div></div>' +
              '<div class="dossier-block"><div class="dossier-num">3</div><div class="dossier-unit"   data-i18n="about_b2_years">years</div><div class="dossier-title" data-i18n="about_b2_title">AI &amp; Agents</div><div class="dossier-text" data-i18n="about_b2_text"></div></div>' +
              '<div class="about-quote-block"><p data-i18n="about_quote"></p></div>' +
            '</div>' +
          '</section>' +
          '<section class="section" id="projects">' +
            '<div class="section-header"><span class="section-ornament">⚙ ✦ ⚙</span><h2 class="section-title" data-i18n="projects_title">Projects</h2><div class="section-rule"></div></div>' +
            '<div style="margin-bottom:2rem">' +
              '<div style="font-family:var(--font-h);font-size:0.65rem;letter-spacing:2px;color:var(--brass);margin-bottom:1rem;text-transform:uppercase" data-i18n="group_ai">AI &amp; Gamedev</div>' +
              '<div class="projects-cols">' + aiBlueprints + '</div>' +
            '</div>' +
            '<div style="font-family:var(--font-h);font-size:0.65rem;letter-spacing:2px;color:var(--brass);margin-bottom:1rem;text-transform:uppercase" data-i18n="group_qsp">Text Adventures</div>' +
            '<div class="projects-cols">' + qspBlueprints + '</div>' +
          '</section>' +
          '<section class="section" id="contact">' +
            '<div class="section-header"><span class="section-ornament">⚙ ✦ ⚙</span><h2 class="section-title" data-i18n="contact_title">Contact</h2><div class="section-rule"></div>' +
              '<p style="font-style:italic;color:var(--cream-d);margin-top:0.7rem;font-size:0.9rem" data-i18n="contact_subtitle"></p></div>' +
            '<div class="contact-grid">' + contactCards + '</div>' +
          '</section>' +
        '</main>' +
        '<footer><span>WLADY &copy; 2026</span><span>info.wladyspb.pro</span></footer>'
      );
    },

    initEffects: function () {
      var canvas = document.getElementById('bg-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');

      function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      var gears = [
        { x: 0.12, y: 0.22, r: 75, teeth: 12, angle: 0, speed:  0.005 },
        { x: 0.88, y: 0.55, r: 55, teeth: 10, angle: 0, speed: -0.008 },
        { x: 0.50, y: 0.88, r: 42, teeth:  8, angle: 0, speed:  0.012 },
        { x: 0.75, y: 0.18, r: 38, teeth:  8, angle: 0, speed: -0.007 }
      ];

      function drawGear(g) {
        var cx = g.x * canvas.width, cy = g.y * canvas.height;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(g.angle);
        ctx.beginPath();
        var th = g.r * 0.2;
        for (var i = 0; i < g.teeth * 2; i++) {
          var a = (i / (g.teeth * 2)) * Math.PI * 2;
          var r = (i % 2 === 0) ? g.r + th : g.r;
          ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(200,134,10,0.55)';
        ctx.lineWidth   = 1.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, g.r * 0.28, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(200,134,10,0.35)';
        ctx.stroke();
        ctx.restore();
        g.angle += g.speed;
      }

      (function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        gears.forEach(drawGear);
        requestAnimationFrame(loop);
      })();
    }
  };

  /* ═════════════════════════════════════════════════════════
     THEME: CONSOLE (minimalist terminal)
     Easter egg: click the three colored dots in the titlebar
  ═════════════════════════════════════════════════════════ */
  var themeConsole = {
    cssFile: 'css/theme-console.css',
    switchSelector: '.tb-dots',

    render: function () {
      var loginDate = new Date().toDateString();

      var aiRows = PROJECTS_AI.map(function (p) {
        var slug = p.perm + '  ' + p.title.toLowerCase().replace(/ /g, '-') + '/';
        if (p.href) {
          return '<div class="proj-row">' +
            '<a href="' + p.href + '" target="_blank" rel="noopener" class="proj-name">' + slug + '</a>' +
            '<span class="proj-meta">[AI · gamedev · github]</span>' +
            '<div class="proj-desc" data-i18n="' + p.i18n + '"></div></div>';
        }
        return '<div class="proj-row">' +
          '<span class="proj-name dim">' + slug + '</span>' +
          '<span class="proj-meta yellow" data-i18n="coming_soon">coming soon</span>' +
          '<div class="proj-desc" data-i18n="' + p.i18n + '"></div></div>';
      }).join('');

      var qspRows = PROJECTS_QSP.map(function (p) {
        return '<div class="proj-row">' +
          '<a href="' + p.href + '" target="_blank" rel="noopener" class="proj-name" data-i18n="' + p.i18n_title + '"></a>' +
          '<span class="proj-meta">[qsp.org]</span>' +
          '<div class="proj-desc" data-i18n="' + p.i18n_desc + '"></div></div>';
      }).join('');

      var contactRows = SOCIALS.map(function (s) {
        var url = s.mail
          ? 'wladyspb85@gmail.com'
          : s.href.replace(/^https?:\/\//, '').replace(/\/$/, '');
        return '<div class="link-row">' +
          '<span class="link-label dim">' + s.label + '</span>' +
          '<a href="' + s.href + '"' + (s.mail ? '' : ' target="_blank" rel="noopener"') + '>' + url + '</a></div>';
      }).join('');

      var total = PROJECTS_AI.length + PROJECTS_QSP.length;

      return (
        '<div class="titlebar">' +
          '<div class="tb-dots">' +
            '<div class="tb-dot close"></div>' +
            '<div class="tb-dot min"></div>' +
            '<div class="tb-dot max"></div>' +
          '</div>' +
          '<div class="tb-title">wlady@info.wladyspb.pro — bash</div>' +
          '<div class="tb-lang" id="lang-switcher">' +
            '<button class="tb-lang-btn" id="lang-toggle" aria-haspopup="listbox" aria-expanded="false">[<span id="lang-current-code">EN</span> ▾]</button>' +
            '<ul class="tb-lang-menu lang-menu" id="lang-menu" role="listbox">' + langOptions() + '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="terminal">' +
          '<div class="output dim">Last login: ' + loginDate + ' from 127.0.0.1</div>' +
          '<div class="output dim" style="margin-bottom:1.2rem">Type `help` for available commands.</div>' +

          '<div class="prompt-line"><span class="p-user">wlady</span><span class="p-at">@</span><span class="p-host">info</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-sym">$</span><span class="p-cmd">whoami</span></div>' +
          '<div class="output"><div><span class="hi">WLADY</span> — <span data-i18n="hero_tagline">Engineer · Game Developer · System Architect</span><span class="cur">_</span></div></div>' +

          '<div class="prompt-line"><span class="p-user">wlady</span><span class="p-at">@</span><span class="p-host">info</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-sym">$</span><span class="p-cmd">cat /etc/profile.d/skills.conf</span></div>' +
          '<div class="output" id="about" style="padding-top:0.3rem">' +
            '<div class="sep"># ── <span data-i18n="about_title">About</span> ──────────────────────────────────</div>' +
            '<div class="stat-line"><span class="stat-name dim" data-i18n="about_b3_title">Gaming &amp; Gamedev</span><span class="stat-bar green">████████████████████</span><span class="stat-num">30 <span data-i18n="about_b3_years">years</span></span></div>' +
            '<div style="padding-left:1.5rem;color:var(--text-dim);font-size:0.75rem;margin-bottom:0.6rem" data-i18n="about_b3_text"></div>' +
            '<div class="stat-line"><span class="stat-name dim" data-i18n="about_b1_title">Web Development</span><span class="stat-bar green">██████████</span><span class="stat-bar dim">██████████</span><span class="stat-num">15 <span data-i18n="about_b1_years">years</span></span></div>' +
            '<div style="padding-left:1.5rem;color:var(--text-dim);font-size:0.75rem;margin-bottom:0.6rem" data-i18n="about_b1_text"></div>' +
            '<div class="stat-line"><span class="stat-name dim" data-i18n="about_b2_title">AI &amp; Agents</span><span class="stat-bar green">██</span><span class="stat-bar dim">██████████████████</span><span class="stat-num">3 <span data-i18n="about_b2_years">years</span></span></div>' +
            '<div style="padding-left:1.5rem;color:var(--text-dim);font-size:0.75rem;margin-bottom:0.8rem" data-i18n="about_b2_text"></div>' +
            '<div style="margin-top:0.5rem"><span class="dim"># </span><span style="font-style:italic" data-i18n="about_quote"></span></div>' +
            '<div style="margin-top:1rem;color:var(--text-dim);font-size:0.72rem"><span class="dim">SKILLS=</span><span class="string">"' + SKILLS.join(' ') + '"</span></div>' +
          '</div>' +

          '<div class="prompt-line" style="margin-top:1rem"><span class="p-user">wlady</span><span class="p-at">@</span><span class="p-host">info</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-sym">$</span><span class="p-cmd">ls -la ./projects/</span></div>' +
          '<div class="output" id="projects">' +
            '<div class="sep"># ── <span data-i18n="projects_title">Projects</span> ─────────────────────────────────</div>' +
            '<div class="dim" style="margin-bottom:0.5rem">total ' + total + '  drwxr-xr-x  wlady  ./</div>' +
            '<div class="dim" style="font-size:0.7rem;margin-bottom:0.4rem"># <span data-i18n="group_ai">AI &amp; Gamedev</span></div>' +
            aiRows +
            '<div class="dim" style="font-size:0.7rem;margin:0.8rem 0 0.4rem"># <span data-i18n="group_qsp">Text Adventure Games</span></div>' +
            qspRows +
          '</div>' +

          '<div class="prompt-line" style="margin-top:1.5rem" id="contact"><span class="p-user">wlady</span><span class="p-at">@</span><span class="p-host">info</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-sym">$</span><span class="p-cmd">cat ~/.config/contacts</span></div>' +
          '<div class="output">' +
            '<div class="sep"># ── <span data-i18n="contact_title">Contact</span> ──────────────────────────────────</div>' +
            contactRows +
          '</div>' +

          '<div class="prompt-line" style="margin-top:1.5rem"><span class="p-user">wlady</span><span class="p-at">@</span><span class="p-host">info</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-sym">$</span><span class="cur">█</span></div>' +
        '</div>' +
        '<div class="footer"><span class="dim">wlady@info.wladyspb.pro © 2026 — </span><span class="green">exit code: 0</span></div>'
      );
    },

    initEffects: function () {
      // Console theme has no canvas effects — minimal is beautiful
    }
  };

  /* ═════════════════════════════════════════════════════════
     THEME REGISTRY
  ═════════════════════════════════════════════════════════ */
  var THEMES = {
    'default':   themeDefault,
    'matrix':    themeMatrix,
    'steampunk': themeSteampunk,
    'console':   themeConsole
  };

  /* ═════════════════════════════════════════════════════════
     LOADER — runs immediately (inject CSS) + on DOM ready
  ═════════════════════════════════════════════════════════ */
  function pickTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored && THEMES[stored]) return stored;
    // First visit: random pick
    var rand = ALL_THEMES[Math.floor(Math.random() * ALL_THEMES.length)];
    localStorage.setItem(THEME_KEY, rand);
    return rand;
  }

  var activeThemeName = pickTheme();
  var activeTheme     = THEMES[activeThemeName];

  // Inject CSS link immediately — before DOMContentLoaded — to minimise FOUC
  (function injectCSS() {
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = activeTheme.cssFile;
    document.head.appendChild(link);
  })();

  // Render & bind effects after DOM is ready
  // (registered BEFORE i18n.js, so fires first in the DOMContentLoaded queue)
  document.addEventListener('DOMContentLoaded', function () {

    // Render the theme HTML into <body>
    document.body.innerHTML = activeTheme.render();

    // Fade body in
    setTimeout(function () {
      document.body.style.transition = 'opacity 0.35s ease';
      document.body.style.opacity    = '1';
    }, 40);

    // Start canvas / scroll effects
    activeTheme.initEffects();

    // ── Easter egg: click trigger → switch to random different theme ──
    var trigger = document.querySelector(activeTheme.switchSelector);
    if (trigger) {
      trigger.style.cursor = 'pointer';
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var others = ALL_THEMES.filter(function (t) { return t !== activeThemeName; });
        var next   = others[Math.floor(Math.random() * others.length)];
        document.body.style.transition = 'opacity 0.4s ease';
        document.body.style.opacity    = '0';
        setTimeout(function () {
          localStorage.setItem(THEME_KEY, next);
          location.reload();
        }, 420);
      });
    }

  }, false); // false = bubble phase; registered before i18n.js

})();
