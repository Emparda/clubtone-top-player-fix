// ==UserScript==
// @name         Clubtone TOP Player Fix
// @author       Dmitriy Oshev
// @namespace    clubtone-player-fix
// @version      1.5.23
// @homepageURL  https://github.com/Emparda/clubtone-top-player-fix
// @supportURL   https://github.com/Emparda/clubtone-top-player-fix/issues
// @updateURL    https://raw.githubusercontent.com/Emparda/clubtone-top-player-fix/refs/heads/main/clubtone-player-fix.meta.js
// @downloadURL  https://raw.githubusercontent.com/Emparda/clubtone-top-player-fix/refs/heads/main/clubtone-player-fix.user.js
// @description  Быстрый стабильный TOP-плеер Clubtone через Soundfiles. Создан с помощью Codex GPT.
// @include      /^https?:\/\/(?:www\.)?clubtone\.(?:do\.am|net)\/.*$/
// @icon         data:image/png;base64,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
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_setValue
// @connect      clubtone.do.am
// @connect      clubtone.net
// @connect      soundfiles.eu
// @connect      storage.soundfiles.eu
// @run-at       document-start
// ==/UserScript==
