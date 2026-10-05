// ==UserScript==
// @name         Clubtone TOP Player Fix
// @author       Dmitriy Oshev
// @namespace    clubtone-player-fix
// @version      1.5.18
// @homepageURL  https://github.com/Emparda/clubtone-top-player-fix
// @supportURL   https://github.com/Emparda/clubtone-top-player-fix/issues
// @updateURL    https://raw.githubusercontent.com/Emparda/clubtone-top-player-fix/refs/heads/main/clubtone-player-fix.meta.js
// @downloadURL  https://raw.githubusercontent.com/Emparda/clubtone-top-player-fix/refs/heads/main/clubtone-player-fix.user.js
// @description  Быстрый стабильный TOP-плеер Clubtone через Soundfiles. Создан с помощью Codex GPT.
// @include      /^https?:\/\/(?:www\.)?clubtone\.(?:do\.am|net)\/.*$/
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIEUlEQVRogbXae9jecx0H8NfzjBwKWxsiqkVyqMumhm0sncQlp2gluZLmkF1XZB1IehyuJSVNVzohnWisKZZWxGRhIbVZiok5ZJhTYQfM3R/v791z735+93PfzzM+1/W97ue+f9/P4f39fk7f7+9Rq9WsIa2LHbAX1kdXBzxdZe5ehXfdQWtfAwDrYxR+ipV4HnOwLzZQDWQtDC1z5hSelUXGqCJzYDQIAK/BGPwCq1BrGi/hJnykzK3TMEzBA2VOM9+qInNME9/LBmAjjMOMCuXNY0Ux9Ehxj3XxLSxpAbp5zCi6NmpnVFetVtPV1a/bDsPb8Fkc2Ebe8mLkTPwc2+l1pRqewWEYj83EpfqjXwnwhXiqckaLHVgbm+O9mKX9ij2Hf+KrAvajuL08O62MGv4irrW3+P29eKED+bOKLZsX2/oF0I0ROL8Dwc9iQTFwBxxavjfO6Smj8be/4RDJQhfirg6B/BCbNoKo2sJP4g5cL+4zBm9omvMsFuHX4i6jcRm2r5BXRTvikqLna4X3IOyGrTWvMosL6HlF13biWn124D160Z4v7vAhCaqHxFXm42RZ8U+I6/S3alU70DzuxMfxAXxPdmRl0TkTH8MEzG7gmdAMYDgerRA+E2/EO3GMZIZPF+HttrxTAPXxoGSubfG5onMcbq6YuwjrdBfj15Mt3cTq9BS2EN9eKYE5TgJqiNbUX27u79ly7FMA3FR0HiMF7vmmuVtjaj0GNpC0Vqenxd/+iN9jF1yFLTEdU7Ez3l0+Rxa+xbgHt+HEBnmNsXaWrOyO2Lj8tqDouw5P4CvYXXbkNFxcdO1W9K2NF7F7vQ6MlgAcjzcVQX8vTEdjw4rV+hl+hLcUZWvJDj1UQNZX+guykueW712SgcbISv8Lc/EffEndt1en+3E2Hi8AtpUEsLAeA6djWhE+sqzMNTrz24sl+NcrK7S4KK0/vwgfLJ8PiOvdWUCPFJf5U4e6LpTMOLLImVbfgV3LhL2xn6THv8o2j5edWKdiZRppNr4tQX4pbimrTHZ0mvj4tVLMhkhvNLqN3JXS+N0oXvF2HIArMbsOYE8p/Rs3MC4Rf11UmMZhT+1b35nSAjwtC7J34bm+ANxZksIubeSswNUSzHeIq37R6rG6tO5CX9d62x7BCbLVU/BLLOtnfn1cUxZkG7y+jPs64FtWdEwpOk8oNlTOr+9AD05tsyKP4Zv4B96MXbG/+H4zXSd9z+NSZV8oxmyGPcpopuW4QrLRvVJtp+ib2lejgQCo0+M4RwJxywLkQMnVV8vKP4BXyerNlQo+SlxolWSR/aWeLBOXmydpc/vCN6ITYwYDoE5PSGpcKA3W6yTdwXGSABS53ZLbFZDfkSDeTtLnEmlbjpOOoHMqMdBpqa8aT0qxoTodtmolLi88JxYZg9Lf7kBxozRrzcfDRhomq7sc50nabaTuPhyhK6TvObONDfdLWh5fIfvmdgCmS9DeIOX/cGk7qmiqNH2XSPdYpyod0/FbvUWvihbhd5IM7sDDegHMVTrkdgCGi18uwp/L2AmT9G0vuuXk9D7JOF24QFZvuQCfJE3ZJCmWVbcQT0qw3yNVfqzs0m1SSy7Ff4v+Se2C+FTp0cfKefbHRdDz0h4cWsFzkhw+hkomuk9K/1IJ3BelJlxQwXuBNHarJNU+K2eD+dJj7YjX4sPSirQN4h4p442/PSO+PqQFT60Yc16Ze4644WJxQbIjVXzb6G0E62Ox7NgEqcqr8wwCQKOR/QGokrGwDd/7y+cC6UwvLN8fxQ/K37NxSvlsm4Veblra5vkT+LK42QjJgpeLOz4sRXKE1J3LMGNNARwtJ6b+OsqB6Li9jN9IIlgqgXyjxM1O5fdtpBMYv6YAHpNbhXpr/I6KOQ9JS9wJbS0XX9OlKJ6C43GE9FP1Kv19acsntyoyndIpmFwUn4WJsjJwa1G8ojzvhLaXonhAMXiiLEx3Mf5cOTwtkNZ+8mB3YFb5nFMUTJBUNx8Hl2ffkAPNvtiqQ7m3S6AfVMaVknkOl9S6hVzl7KmcCwYK4BY5fj4od0N3yr3RsXLtd5XeA88J0qkOhIZITG0i2Wu/Ms6W6nuyNI3/p04AbCIV+Exppcfi83iX5PNjJf1NlFPbmbLiAzWetCI9shCTJeP0FNmrmo1vBPDqFgKX4yg5WY2S/n1s4btLfHJTfFeOiDsNwuhGGiI+PkEus66VHV+qbyMXKoVsN9WF5SrpNnfF3U3PJhYRh1TwHSil/idNv8+pq20x9mj6fnfRPazY0penAOjSW+kax0oJqosk/35K77l2rBSWY+We9AwpQDW50fuDXA8eLOm2EwD1u9lFcsm8T9G9sNjSPH9G493o0MJYJXiFNHGnF2OPEHep4d9SLY/AW6UBfE6y0FCJofpBpx2A0XqzzLSic0WLuY9gePPt9AT9vwJaJgF9kly1ND5bItt8pFTKo8oOHS++3AmA8dIEzpeOt9W8upuqesHR04axJl3mvS2ePVbk1N3mDL3NXDsA93dgeE3vNWUlgPXkDDC7A0GtRqORPQMA0G7MLrb1Hm/7eUs5XIKqk3dkrzSAWcWWvjcWHbxmHSYp8fJBAjhNrukHA+BWSdPDWlo3iPfEVw8AwDxJt4dJV3p9hwDmSZ0Zod2/LgziTf2GkgHmqn7j/lKZ9xlJo93yQmIrvbcVrfjmFtlD2xq+BgAU4RtY/X8eGv9Xguo+q/5bK75W/2PR2pAO3tT3yy9Zq/5W5Qa9B/ZXgq8P/Q/JuhqUzSKY8QAAAABJRU5ErkJggg==
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_setValue
// @connect      clubtone.do.am
// @connect      clubtone.net
// @connect      soundfiles.eu
// @connect      storage.soundfiles.eu
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const VERSION = '1.5.18';

    const ROW_SELECTOR = '.t100';
    const PLAY_SELECTOR = '.pt-link';
    const ENTRY_SELECTOR = '.entryLink';

    const PLAYED_GM_KEY = 'clubtone-played-v2';
    const SFFILE_GM_KEY = 'clubtone-sffile-cache-v1';
    const OLD_PLAYED_KEY = 'clubtone-player-fix-played-v1';

    /*
     * v1.4.1:
     * теперь храним ПОЗИЦИЮ ползунка, а не audio.volume.
     */
    const VOLUME_SLIDER_KEY =
        'clubtone-player-fix-volume-slider-v2';

    const OLD_VOLUME_KEY =
        'clubtone-player-fix-volume';

    const MIRROR =
        'https://clubtone.do.am';

    /*
     * Это значение взято непосредственно
     * из штатной разметки Clubtone:
     *
     * визуально совпадает с нативным :visited цветом TOP
     */
    const PLAYED_COLOR =
        'rgb(123, 128, 146)';

    /*
     * Общий sffile-кэш прогревается в фоне только одним worker'ом,
     * чтобы не конкурировать с текущим аудио.
     * Мгновенное переключение обеспечивает отдельная
     * предзагрузка ТРЁХ следующих аудиопотоков.
     */
    const PRECACHE_DELAY = 1200;
    const PRECACHE_BETWEEN_TRACKS = 80;

    const IS_NET =
        /(^|\.)clubtone\.net$/i.test(
            location.hostname
        );

    let rows = [];

    const sfCache = new Map();
    const pendingSfRequests = new Map();

    let played = new Set();

    let player = null;
    let playerPlay = null;
    let playerPrevious = null;
    let playerNext = null;
    let playerDownload = null;
    let nativeDownload = null;

    let currentTitle = null;
    let currentTime = null;
    let durationElement = null;

    let scrubber = null;
    let progress = null;
    let loading = null;
    let wave = null;
    let cover = null;

    let volume = null;
    let volumeHandle = null;
    let volumeRange = null;

    let audio = null;

    let currentRow = null;
    let currentButton = null;
    let currentIndex = -1;
    let currentSfFile = null;

    let requestSerial = 0;
    let rafId = null;

    /*
     * Используется для приостановки precache,
     * когда пользователь сам запускает трек.
     */
    let userTrackLoading = false;


    /*
     * REAL AUDIO PRELOAD:
     * держим в готовности три следующих аудиопотока.
     * Обложки и визуальные состояния заранее НЕ переключаются.
     */
    const AUDIO_PRELOAD_AHEAD = 3;
    const audioWarmCache = new Map();

    function releaseWarmEntry(entry) {
        if (!entry?.audio) return;

        try {
            entry.audio.pause();
            entry.audio.removeAttribute('src');
            entry.audio.load();
        } catch {}
    }

    function trimAudioWarmCache(keepIndexes) {
        for (const [index, entry] of audioWarmCache) {
            if (keepIndexes.has(index)) {
                continue;
            }

            releaseWarmEntry(entry);
            audioWarmCache.delete(index);
        }
    }

    const pendingAudioWarm = new Map();

    async function warmAudioAhead(fromIndex) {
        if (!rows.length || fromIndex < 0 || currentIndex !== fromIndex) return;
        const serial = requestSerial;
        const keep = new Set();
        const jobs = [];
        const count = Math.min(AUDIO_PRELOAD_AHEAD, rows.length - 1);
        for (let step = 1; step <= count; step++) {
            const index = (fromIndex + step) % rows.length;
            keep.add(index);
            if (audioWarmCache.has(index)) continue;
            const pageUrl = getPageUrl(rows[index]);
            if (!pageUrl) continue;
            const key = `${serial}:${index}`;
            if (pendingAudioWarm.has(key)) {
                jobs.push(pendingAudioWarm.get(key));
                continue;
            }
            const job = (async () => {
                try {
                    const sfFile = await getSfFile(pageUrl);
                    // A -> B -> A still invalidates requests from the first A.
                    if (requestSerial !== serial || currentIndex !== fromIndex ||
                        audioWarmCache.has(index)) return;
                    const warmAudio = new Audio();
                    warmAudio.preload = 'auto';
                    warmAudio.src = getStreamUrl(sfFile);
                    warmAudio.load();
                    audioWarmCache.set(index, {audio: warmAudio, sfFile, pageUrl});
                } catch {} finally {
                    pendingAudioWarm.delete(key);
                }
            })();
            pendingAudioWarm.set(key, job);
            jobs.push(job);
        }
        trimAudioWarmCache(keep);
        await Promise.allSettled(jobs);
    }

    // =========================================================
    // LOG
    // =========================================================

    function log(...args) {
        console.log(
            `[Clubtone Player Fix v${VERSION}]`,
            ...args
        );
    }

    function warn(...args) {
        console.warn(
            `[Clubtone Player Fix v${VERSION}]`,
            ...args
        );
    }

    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    // =========================================================
    // HTTP
    // =========================================================

    function requestText(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url,
                timeout: 15000,

                onload(response) {
                    if (
                        response.status >= 200 &&
                        response.status < 400
                    ) {
                        resolve(response.responseText);
                    } else {
                        reject(
                            new Error(
                                `HTTP ${response.status}`
                            )
                        );
                    }
                },

                ontimeout() {
                    reject(
                        new Error('Timeout')
                    );
                },

                onerror() {
                    reject(
                        new Error('Network error')
                    );
                }
            });
        });
    }

    // =========================================================
    // .NET MIRROR REPAIR
    // =========================================================

    function isDeletedRow(row) {
        const link =
            row?.querySelector(
                ENTRY_SELECTOR
            );

        if (!link) {
            return true;
        }

        const text =
            (link.textContent || '')
                .trim()
                .toLowerCase()
                .replace(/ё/g, 'е');

        return (
            text === 'материал удален' ||
            !link.getAttribute('href')
        );
    }

    function getMirrorTopUrl() {
        return (
            MIRROR +
            location.pathname +
            location.search
        );
    }

    async function repairNetPage() {
        if (!IS_NET) {
            return;
        }

        const localRows =
            [...document.querySelectorAll(
                ROW_SELECTOR
            )];

        if (!localRows.length) {
            return;
        }

        if (
            !localRows.some(isDeletedRow)
        ) {
            return;
        }

        log(
            'На .net обнаружены повреждённые строки. ' +
            'Загружаю данные зеркала .do.am.'
        );

        try {
            const html =
                await requestText(
                    getMirrorTopUrl()
                );

            const mirrorDocument =
                new DOMParser()
                    .parseFromString(
                        html,
                        'text/html'
                    );

            const mirrorRows =
                [...mirrorDocument
                    .querySelectorAll(
                        ROW_SELECTOR
                    )];

            if (!mirrorRows.length) {
                throw new Error(
                    'На зеркале TOP-строки не найдены'
                );
            }

            const count =
                Math.min(
                    localRows.length,
                    mirrorRows.length
                );

            let repaired = 0;

            for (
                let index = 0;
                index < count;
                index++
            ) {
                const target =
                    localRows[index];

                const source =
                    mirrorRows[index];

                if (
                    !isDeletedRow(target)
                ) {
                    continue;
                }

                const targetName =
                    target.querySelector(
                        '.topEntryName'
                    );

                const sourceName =
                    source.querySelector(
                        '.topEntryName'
                    );

                if (
                    targetName &&
                    sourceName
                ) {
                    targetName.innerHTML =
                        sourceName.innerHTML;

                    repaired++;
                }

                const targetCover =
                    target.querySelector('.tc');

                const sourceCover =
                    source.querySelector('.tc');

                if (
                    targetCover &&
                    sourceCover
                ) {
                    targetCover.innerHTML =
                        sourceCover.innerHTML;
                }

                /*
                 * Не копируем сломанный старый
                 * Zippyshare URL.
                 */
                let playButton =
                    target.querySelector(
                        PLAY_SELECTOR
                    );

                if (!playButton) {
                    playButton =
                        document.createElement('a');

                    playButton.className =
                        'pt-link';

                    playButton.href = '#';

                    target.prepend(
                        playButton
                    );
                }
            }

            log(
                `Восстановлено строк: ${repaired}`
            );

        } catch (error) {
            warn(
                'Не удалось восстановить .net:',
                error
            );
        }
    }

    // =========================================================
    // TRACK ID
    // =========================================================

    function canonicalTrackId(row) {
        const link =
            row?.querySelector(
                ENTRY_SELECTOR
            );

        if (!link) {
            return null;
        }

        const href =
            link.getAttribute('href') || '';

        const match =
            href.match(
                /(?:^|\/)\d+-\d+-\d+-(\d+)(?:[/?#]|$)/
            );

        if (match?.[1]) {
            return `id:${match[1]}`;
        }

        const title =
            (link.textContent || '')
                .trim()
                .toLowerCase()
                .replace(/\s+/g, ' ');

        if (
            title &&
            title !== 'материал удален' &&
            title !== 'материал удалён'
        ) {
            return `title:${title}`;
        }

        return null;
    }

    // =========================================================
    // SHARED PLAYED HISTORY
    // =========================================================

    async function loadPlayed() {
        let stored = [];

        try {
            stored =
                await GM_getValue(
                    PLAYED_GM_KEY,
                    []
                );

            if (!Array.isArray(stored)) {
                stored = [];
            }

        } catch {
            stored = [];
        }

        played =
            new Set(stored);

        /*
         * Миграция старой localStorage-истории.
         */
        try {
            const raw =
                localStorage.getItem(
                    OLD_PLAYED_KEY
                );

            if (raw) {
                const old =
                    JSON.parse(raw);

                if (Array.isArray(old)) {
                    for (
                        const oldUrl of old
                    ) {
                        try {
                            const url =
                                new URL(
                                    oldUrl,
                                    location.href
                                );

                            const match =
                                url.pathname.match(
                                    /(?:^|\/)\d+-\d+-\d+-(\d+)/
                                );

                            if (match?.[1]) {
                                played.add(
                                    `id:${match[1]}`
                                );
                            }

                        } catch {}
                    }
                }
            }

        } catch {}

        await savePlayed();
    }

    // =========================================================
    // PLAYED COLOR
    // =========================================================

    // Site-wide history is independent of the TOP player and performs no requests.
    const historyLinks = new Map();
    const linkHistoryIds = new WeakMap();
    const historyRoots = new Set();
    const dirtyHistoryIds = new Set();
    let historyTimer = null;
    let historySave = Promise.resolve();

    function trackIdFromHref(href) {
        try {
            const url = new URL(href, location.href);
            if (!/^https?:$/.test(url.protocol) ||
                !/^(?:www\.)?clubtone\.(?:do\.am|net)$/i.test(url.hostname)) return null;
            const match = url.pathname.match(/(?:^|\/)2-\d+-\d+-(\d+)\/?$/);
            return match ? `id:${match[1]}` : null;
        } catch { return null; }
    }

    function historyIdForLink(link) {
        const id = trackIdFromHref(link.getAttribute('href'));
        if (id) return id;
        // Preserve legacy title-only TOP entries, without matching unrelated links.
        if (link.matches('.t100 .entryLink')) return canonicalTrackId(link.closest('.t100'));
        return null;
    }

    function paintHistoryLink(link, id) {
        const marked = !!id && played.has(id);
        link.classList.toggle('ct-history-played', marked);
        // Remove only an old color that this script owned.
        if (link.dataset.ctPlayed === '1') {
            if (link.style.color === PLAYED_COLOR) link.style.removeProperty('color');
            delete link.dataset.ctPlayed;
        }
    }

    function indexHistoryLink(link) {
        const previous = linkHistoryIds.get(link);
        const id = link.isConnected ? historyIdForLink(link) : null;
        if (previous && previous !== id) {
            const bucket = historyLinks.get(previous);
            bucket?.delete(link);
            if (!bucket?.size) historyLinks.delete(previous);
        }
        if (id) {
            if (!historyLinks.has(id)) historyLinks.set(id, new Set());
            historyLinks.get(id).add(link);
            linkHistoryIds.set(link, id);
        } else linkHistoryIds.delete(link);
        paintHistoryLink(link, id);
    }

    function scheduleHistory() {
        if (historyTimer !== null) return;
        historyTimer = setTimeout(flushHistory, 40);
    }

    function flushHistory() {
        historyTimer = null;
        for (const root of historyRoots) {
            if (root.matches?.('a')) indexHistoryLink(root);
            for (const link of root.querySelectorAll('a')) indexHistoryLink(link);
        }
        historyRoots.clear();
        for (const id of dirtyHistoryIds) {
            for (const link of historyLinks.get(id) || []) {
                if (link.isConnected) paintHistoryLink(link, id);
            }
        }
        dirtyHistoryIds.clear();
    }

    function mergePlayed(values) {
        if (!Array.isArray(values)) return;
        for (const id of values) {
            if (typeof id !== 'string' || !/^(?:id:\d+|title:.+)$/.test(id) || played.has(id)) continue;
            played.add(id);
            dirtyHistoryIds.add(id);
        }
    }

    function savePlayed() {
        historySave = historySave.then(async () => {
            const stored = await GM_getValue(PLAYED_GM_KEY, []);
            mergePlayed(stored);
            scheduleHistory();
            await GM_setValue(PLAYED_GM_KEY, [...played]);
        }).catch(error => warn('History save failed:', error));
        return historySave;
    }

    function applyPlayedVisual(row) {
        const link = row?.querySelector(ENTRY_SELECTOR);
        if (link) indexHistoryLink(link);
    }

    function restorePlayedVisuals() {
        historyRoots.add(document.documentElement);
        scheduleHistory();
    }

    function markPlayed(row) {
        const id = canonicalTrackId(row);
        rememberHistoryId(id);
    }

    function rememberHistoryId(id) {
        if (!id) return;
        const fresh = !played.has(id);
        played.add(id);
        dirtyHistoryIds.add(id);
        scheduleHistory();
        if (fresh) void savePlayed();
    }

    async function initSiteHistory() {
        await loadPlayed();
        const style = document.createElement('style');
        style.textContent = `a.ct-history-played, a.ct-history-played:link,
            a.ct-history-played:visited { color: ${PLAYED_COLOR} !important; }`;
        document.head.appendChild(style);
        // Only an actual document navigation counts as a visit. Fetching track
        // HTML for Soundfiles/preload never executes this initialization.
        if (window.top === window.self) rememberHistoryId(trackIdFromHref(location.href));
        restorePlayedVisuals();
        new MutationObserver(records => {
            for (const record of records) {
                if (record.type === 'attributes') {
                    if (record.target.matches('a')) historyRoots.add(record.target);
                } else {
                    for (const node of [...record.addedNodes, ...record.removedNodes]) {
                        if (node.nodeType === 1 && (node.matches('a') || node.querySelector('a'))) {
                            historyRoots.add(node);
                        }
                    }
                }
            }
            if (historyRoots.size) scheduleHistory();
        }).observe(document.documentElement, {childList: true, subtree: true,
            attributes: true, attributeFilter: ['href']});
        if (typeof GM_addValueChangeListener === 'function') {
            GM_addValueChangeListener(PLAYED_GM_KEY, (_key, _old, value, remote) => {
                if (!remote || !Array.isArray(value)) return;
                mergePlayed(value);
                scheduleHistory();
                // Reconcile simultaneous writes from two open mirrors.
                const incoming = new Set(value);
                if ([...played].some(id => !incoming.has(id))) void savePlayed();
            });
        }
        // Refresh after a suspended tab is restored, even if an event was missed.
        window.addEventListener('pageshow', () => {
            Promise.resolve(GM_getValue(PLAYED_GM_KEY, [])).then(values => {
                mergePlayed(values); scheduleHistory();
            }).catch(error => warn('History refresh failed:', error));
        });
    }


    // =========================================================
    // TRACK HELPERS
    // =========================================================

    function getEntry(row) {
        return (
            row?.querySelector(
                ENTRY_SELECTOR
            ) || null
        );
    }

    function getPageUrl(row) {
        const link =
            getEntry(row);

        if (!link) {
            return null;
        }

        const href =
            link.getAttribute('href');

        if (!href) {
            return null;
        }

        try {
            const url =
                new URL(
                    href,
                    location.href
                );

            /*
             * Всегда используем do.am
             * как единый источник страницы
             * с sffile.
             */
            return (
                MIRROR +
                url.pathname +
                url.search
            );

        } catch {
            return null;
        }
    }

    function getTitle(row) {
        return (
            getEntry(row)
                ?.textContent
                ?.trim() ||
            'Неизвестный трек'
        );
    }

    function getCover(row) {
        return (
            row
                ?.querySelector('.tc img')
                ?.src ||
            null
        );
    }

    function getButton(row) {
        return (
            row?.querySelector(
                PLAY_SELECTOR
            ) || null
        );
    }

    function formatTime(seconds) {
        if (
            !Number.isFinite(seconds) ||
            seconds < 0
        ) {
            return '--:--';
        }

        seconds =
            Math.floor(seconds);

        const minutes =
            Math.floor(
                seconds / 60
            );

        const remainder =
            seconds % 60;

        return (
            minutes +
            ':' +
            String(remainder)
                .padStart(2, '0')
        );
    }

    // =========================================================
    // ROW STATE
    // =========================================================

    function setActiveRow(row) {
        for (const item of rows) {
            item.classList.toggle(
                'ct-fix-active',
                item === row
            );
        }
    }

    function resetRowButton(button) {
        if (!button) {
            return;
        }

        button.classList.remove(
            'ct-fix-playing',
            'ct-fix-paused',
            'ct-fix-loading',
            'pt-playing',
            'pt-paused',
            'pt-loading',
            'pt-buffering',
            'pt-error'
        );

        button.style.removeProperty(
            'display'
        );

        button.style.removeProperty(
            'position'
        );

        button.style.removeProperty(
            'opacity'
        );

        button.style.removeProperty(
            'visibility'
        );

        button.title =
            'Воспроизвести';
    }

    function setRowState(
        button,
        state
    ) {
        if (!button) {
            return;
        }

        button.classList.remove(
            'ct-fix-playing',
            'ct-fix-paused',
            'ct-fix-loading',
            'pt-playing',
            'pt-paused',
            'pt-loading',
            'pt-buffering',
            'pt-error'
        );

        if (state === 'loading') {
            button.classList.add(
                'ct-fix-loading'
            );

            button.title =
                'Загрузка...';

            return;
        }

        if (state === 'playing') {
            button.classList.add(
                'ct-fix-playing'
            );

            button.title =
                'Пауза';

            return;
        }

        if (state === 'paused') {
            button.classList.add(
                'ct-fix-paused'
            );

            button.title =
                'Продолжить';

            return;
        }

        resetRowButton(
            button
        );
    }

    // =========================================================
    // WAVEFORM
    // =========================================================

    function getWaveUrl(sfFile) {
        return (
            'https://storage.soundfiles.eu/' +
            'wavefroms/' +
            encodeURIComponent(sfFile) +
            '.png'
        );
    }

    function setWaveHref(url) {
        if (!wave) {
            return;
        }

        wave.setAttribute(
            'href',
            url
        );

        wave.setAttribute(
            'xlink:href',
            url
        );

        try {
            wave.setAttributeNS(
                'http://www.w3.org/1999/xlink',
                'xlink:href',
                url
            );
        } catch {}
    }

    let waveformTimer = null;
    let displayedWaveFile = null;

    function clearWaveform() {
        clearTimeout(waveformTimer);
        displayedWaveFile = null;
        setWaveHref('');

        setProgress(0);

        if (loading) {
            loading.setAttribute(
                'width',
                '0%'
            );

            loading.style.width =
                '0%';
        }
    }

    /*
     * v1.4.1:
     *
     * waveform больше НЕ скачивается через
     * GM_xmlhttpRequest, НЕ декодируется,
     * НЕ прогоняется через Canvas.
     *
     * Браузер просто получает исходный PNG.
     *
     * Более того, waveform назначается
     * только ПОСЛЕ начала воспроизведения.
     */
    function loadWaveformAfterPlayback() {
        if (
            !currentSfFile ||
            !wave
        ) {
            return;
        }

        const sfFile =
            currentSfFile;

        /*
         * Даём аудио получить сетевой приоритет.
         */
        if (displayedWaveFile === sfFile) return;
        clearTimeout(waveformTimer);
        const serial = requestSerial;
        waveformTimer = setTimeout(() => {
            if (
                requestSerial !== serial || currentSfFile !== sfFile
            ) {
                return;
            }

            displayedWaveFile = sfFile;
            setWaveHref(
                getWaveUrl(sfFile)
            );

        }, 250);
    }

    // =========================================================
    // PROGRESS
    // =========================================================

    function setProgress(percent) {
        percent =
            Math.max(
                0,
                Math.min(
                    100,
                    Number(percent) || 0
                )
            );

        if (!progress) {
            return;
        }

        progress.setAttribute(
            'width',
            `${percent}%`
        );

        progress.style.width =
            `${percent}%`;
    }

    function updateProgress() {
        if (
            !audio ||
            !Number.isFinite(
                audio.duration
            ) ||
            audio.duration <= 0
        ) {
            return;
        }

        setProgress(
            (
                audio.currentTime /
                audio.duration
            ) * 100
        );

        if (currentTime) {
            currentTime.textContent =
                formatTime(
                    audio.currentTime
                );
        }
    }

    function stopProgressLoop() {
        if (rafId !== null) {
            cancelAnimationFrame(
                rafId
            );

            rafId = null;
        }
    }

    function progressLoop() {
        updateProgress();

        if (
            !audio.paused &&
            !audio.ended
        ) {
            rafId =
                requestAnimationFrame(
                    progressLoop
                );
        } else {
            rafId = null;
        }
    }

    function startProgressLoop() {
        stopProgressLoop();

        rafId =
            requestAnimationFrame(
                progressLoop
            );
    }

    // =========================================================
    // SFFILE
    // =========================================================

    async function loadSfCache() {
        try {
            const stored = await GM_getValue(SFFILE_GM_KEY, {});
            if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return;
            for (const [url, sfFile] of Object.entries(stored)) {
                if (typeof url === 'string' && typeof sfFile === 'string' && sfFile) {
                    sfCache.set(url, sfFile);
                }
            }
        } catch (error) {
            warn('Не удалось загрузить sffile-кэш:', error);
        }
    }

    let sfCacheSaveTimer = null;

    function scheduleSfCacheSave() {
        clearTimeout(sfCacheSaveTimer);
        sfCacheSaveTimer = setTimeout(async () => {
            try {
                const object = Object.fromEntries(sfCache);
                await GM_setValue(SFFILE_GM_KEY, object);
            } catch (error) {
                warn('Не удалось сохранить sffile-кэш:', error);
            }
        }, 100);
    }

    function extractSfFile(html) {
        let match =
            html.match(
                /\b(?:var\s+)?sffile\s*=\s*["']([^"']+)["']/i
            );

        if (match?.[1]) {
            return match[1].trim();
        }

        match =
            html.match(
                /sffile[\s\S]{0,100}?["']([A-Za-z0-9_-]{5,})["']/i
            );

        return (
            match?.[1]?.trim() ||
            null
        );
    }

    async function getSfFile(
        pageUrl
    ) {
        if (!pageUrl) {
            throw new Error(
                'Нет URL страницы трека'
            );
        }

        if (
            sfCache.has(pageUrl)
        ) {
            return sfCache.get(
                pageUrl
            );
        }

        if (
            pendingSfRequests.has(
                pageUrl
            )
        ) {
            return pendingSfRequests.get(
                pageUrl
            );
        }

        const promise =
            (async () => {
                try {
                    const html =
                        await requestText(
                            pageUrl
                        );

                    const sfFile =
                        extractSfFile(
                            html
                        );

                    if (!sfFile) {
                        throw new Error(
                            'sffile не найден'
                        );
                    }

                    sfCache.set(
                        pageUrl,
                        sfFile
                    );
                    scheduleSfCacheSave();

                    return sfFile;

                } finally {
                    pendingSfRequests.delete(
                        pageUrl
                    );
                }
            })();

        pendingSfRequests.set(
            pageUrl,
            promise
        );

        return promise;
    }

    function getStreamUrl(sfFile) {
        return (
            'https://soundfiles.eu/' +
            encodeURIComponent(sfFile) +
            '/file/stream'
        );
    }

    function getDownloadUrl(sfFile) {
        return (
            'https://soundfiles.eu/' +
            encodeURIComponent(sfFile) +
            '/file'
        );
    }


    // =========================================================
    // PLAYER INFORMATION
    // =========================================================

    function updateTrackInfo(row) {
        const title =
            getTitle(row);

        if (currentTitle) {
            currentTitle.textContent =
                title;

            currentTitle.title =
                title;
        }

        const image =
            getCover(row);

        if (
            cover &&
            image
        ) {
            cover.src =
                image;
        }

        if (currentTime) {
            currentTime.textContent =
                '0:00';
        }

        if (durationElement) {
            durationElement.textContent =
                '--:--';
        }

        stopProgressLoop();
        clearWaveform();

        player.style.bottom =
            '0px';
    }

    function updateDownload() {
        if (!currentSfFile) {
            return;
        }

        const url =
            getDownloadUrl(
                currentSfFile
            );

        for (
            const element of [
                playerDownload,
                nativeDownload
            ]
        ) {
            if (!element) {
                continue;
            }

            element.href =
                url;

            element.target =
                '_blank';

            element.rel =
                'noopener noreferrer';
            element.title = 'Открыть страницу загрузки трека (F)';
        }
    }

    function openCurrentTrackPage() {
        if (!currentRow || !currentSfFile) return;
        const pageUrl = getPageUrl(currentRow);
        if (!pageUrl) return;
        // Open the track on the mirror the user is currently browsing.
        const track = new URL(pageUrl);
        const url = new URL(track.pathname + track.search, location.origin);
        window.open(url.href, '_blank', 'noopener');
    }

    function openCurrentDownload() {
        if (!currentSfFile) {
            return;
        }

        window.open(
            getDownloadUrl(
                currentSfFile
            ),
            '_blank',
            'noopener'
        );
    }

    // =========================================================
    // SELECT TRACK
    // =========================================================

    async function selectTrack(
        index,
        autoplay = true
    ) {
        if (
            index < 0 ||
            index >= rows.length
        ) {
            return;
        }

        // Repeated clicks during page resolution must not replay old audio.
        if (currentIndex === index && userTrackLoading && !currentSfFile) return;

        const row =
            rows[index];

        const button =
            getButton(row);

        const pageUrl =
            getPageUrl(row);

        if (!pageUrl) {
            warn(
                'Нет страницы трека:',
                getTitle(row)
            );

            return;
        }

        /*
         * Повторное нажатие на текущий трек:
         * обычный Play / Pause без пересоздания потока.
         */
        if (
            currentIndex === index &&
            currentSfFile && !audio.error &&
            audio.src
        ) {
            if (!autoplay) {
                return;
            }

            if (audio.paused) {
                audio.play()
                    .catch(error => {
                        warn(
                            'play():',
                            error
                        );
                    });
            } else {
                audio.pause();
            }

            return;
        }

        const serial =
            ++requestSerial;

        userTrackLoading =
            true;

        const previousButton =
            currentButton;

        /*
         * Сначала отвязываем UI от старой кнопки,
         * чтобы pause старого Audio не оставлял на ней состояние Pause.
         */
        currentButton =
            null;

        stopProgressLoop();

        const previousAudio =
            audio;

        const previousVolume =
            previousAudio.volume;

        const previousMuted =
            previousAudio.muted;

        /*
         * Если этот индекс был реально прогрет как один
         * из трёх следующих — забираем уже готовый Audio.
         */
        const warmEntry =
            audioWarmCache.get(
                index
            );

        const canAdoptWarm =
            !!warmEntry &&
            warmEntry.pageUrl === pageUrl && !warmEntry.audio.error;

        if (canAdoptWarm) {
            audioWarmCache.delete(index);
            audio = warmEntry.audio;
        } else {
            if (warmEntry) {
                releaseWarmEntry(warmEntry);
                audioWarmCache.delete(index);
            }
            // Isolate delayed media events from the previous track.
            audio = new Audio();
            audio.preload = 'auto';
        }
        audio.volume = previousVolume;
        audio.muted = previousMuted;
        bindAudioEvents(audio);
        playerPlay?.classList.remove('pt-playing');

        /*
         * Старый поток освобождаем уже ПОСЛЕ того,
         * как новый Audio стал текущим. Его pause-событие
         * больше не может менять UI нового трека.
         */
        try {
            previousAudio.pause();

            if (
                previousAudio !== audio
            ) {
                previousAudio
                    .removeAttribute(
                        'src'
                    );

                previousAudio.load();
            }
        } catch {}

        if (previousButton) {
            resetRowButton(
                previousButton
            );
        }

        currentIndex =
            index;

        currentRow =
            row;

        setActiveRow(
            row
        );

        currentButton =
            button;

        currentSfFile =
            null;

        setRowState(
            button,
            'loading'
        );

        updateTrackInfo(
            row
        );

        try {
            let sfFile = null;

            if (canAdoptWarm) {
                /*
                 * Никакого запроса страницы и никакого нового audio.src:
                 * используем уже загруженный MediaElement.
                 */
                sfFile =
                    warmEntry.sfFile;

            } else {
                sfFile =
                    await getSfFile(
                        pageUrl
                    );
            }

            if (
                serial !==
                requestSerial
            ) {
                return;
            }

            currentSfFile =
                sfFile;

            if (!canAdoptWarm) {
                audio.src =
                    getStreamUrl(
                        sfFile
                    );
            }

            if (autoplay) {
                await audio.play();
            } else if (!canAdoptWarm) {
                audio.load();
            }

            if (
                serial !==
                requestSerial
            ) {
                return;
            }

            updateDownload();

            /*
             * Самое важное для следующего переключения:
             * три следующих AUDIO начинают грузиться параллельно
             * уже после старта текущего трека.
             */
            warmAudioAhead(
                index
            ).catch(
                () => {}
            );

        } catch (error) {
            if (
                serial !==
                requestSerial
            ) {
                return;
            }

            resetRowButton(button);
            playerPlay?.classList.remove('pt-playing');

            warn(
                'Ошибка запуска трека:',
                error
            );

        } finally {
            if (
                serial ===
                requestSerial
            ) {
                userTrackLoading =
                    false;
            }
        }
    }

    // =========================================================
    // NAVIGATION
    // =========================================================

    function nextTrack() {
        if (!rows.length) {
            return;
        }

        let index =
            currentIndex + 1;

        if (
            index >= rows.length
        ) {
            index = 0;
        }

        selectTrack(
            index,
            true
        );
    }

    function previousTrack() {
        if (!rows.length) {
            return;
        }

        let index =
            currentIndex - 1;

        if (index < 0) {
            index =
                rows.length - 1;
        }

        selectTrack(
            index,
            true
        );
    }

    function togglePlayback() {
        // selectTrack owns loading, retry, play and pause state consistently.
        selectTrack(currentIndex < 0 ? 0 : currentIndex, true);
    }

    // =========================================================
    // PERCEPTUAL VOLUME
    // =========================================================

    /*
     * position:
     * 0.0 = левый край
     * 1.0 = правый край
     *
     * Для Web Audio мы могли бы работать
     * непосредственно в dB.
     *
     * HTMLMediaElement.volume принимает
     * только линейное значение 0..1.
     *
     * Поэтому используем степенную
     * перцептивную кривую.
     *
     * Фактическая амплитуда:
     *
     * volume = position ^ 2
     *
     * Получаем:
     *
     * slider  0% -> volume 0.000
     * slider 25% -> volume 0.063
     * slider 50% -> volume 0.250
     * slider 75% -> volume 0.563
     * slider100% -> volume 1.000
     *
     * Это существенно естественнее
     * линейного регулятора.
     */
    function sliderToVolume(position) {
        position =
            Math.max(
                0,
                Math.min(
                    1,
                    Number(position) || 0
                )
            );

        if (position <= 0.005) {
            return 0;
        }

        return (
            position *
            position
        );
    }

    function applyVolumePosition(
        position,
        save = true
    ) {
        position =
            Math.max(
                0,
                Math.min(
                    1,
                    Number(position) || 0
                )
            );

        /*
         * Совсем левый край всегда
         * становится математическим нулём.
         */
        if (position <= 0.005) {
            position = 0;
        }

        const actualVolume =
            sliderToVolume(
                position
            );

        audio.volume =
            actualVolume;

        audio.muted =
            position === 0;

        /*
         * ВАЖНО:
         * ручка показывает POSITION,
         * а не audio.volume.
         */
        const percent =
            position * 100;

        if (volumeHandle) {
            volumeHandle.style.left =
                `${percent}%`;

            volumeHandle.setAttribute(
                'aria-valuenow',
                String(
                    Math.round(
                        percent
                    )
                )
            );
        }

        if (volumeRange) {
            volumeRange.style.width =
                `${percent}%`;
        }

        if (save) {
            try {
                localStorage.setItem(
                    VOLUME_SLIDER_KEY,
                    String(position)
                );
            } catch {}
        }
    }

    function getVolumePositionFromPointer(
        event
    ) {
        if (!volume) {
            return null;
        }

        const rect =
            volume
                .getBoundingClientRect();

        if (!rect.width) {
            return null;
        }

        return Math.max(
            0,
            Math.min(
                1,
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width
            )
        );
    }

    function applyVolumeFromPointer(
        event
    ) {
        const position =
            getVolumePositionFromPointer(
                event
            );

        if (position === null) {
            return;
        }

        applyVolumePosition(
            position
        );
    }

    function initVolume() {
        /*
         * По умолчанию ручка = 70%.
         */
        let initialPosition =
            0.70;

        try {
            const stored =
                localStorage.getItem(
                    VOLUME_SLIDER_KEY
                );

            if (stored !== null) {
                const value =
                    Number(stored);

                if (
                    Number.isFinite(
                        value
                    )
                ) {
                    initialPosition =
                        value;
                }

            } else {
                /*
                 * Миграция старого audio.volume.
                 *
                 * Если раньше было:
                 *
                 * volume = 0.49
                 *
                 * новая позиция:
                 *
                 * sqrt(0.49) = 0.7
                 */
                const oldRaw =
                    localStorage.getItem(
                        OLD_VOLUME_KEY
                    );

                if (oldRaw !== null) {
                    const oldVolume =
                        Number(oldRaw);

                    if (
                        Number.isFinite(
                            oldVolume
                        )
                    ) {
                        initialPosition =
                            Math.sqrt(
                                Math.max(
                                    0,
                                    Math.min(
                                        1,
                                        oldVolume
                                    )
                                )
                            );
                    }
                }
            }

        } catch {}

        applyVolumePosition(
            initialPosition,
            true
        );

        if (!volume) {
            return;
        }

        volume.style.cursor =
            'pointer';

        let dragging = false;
        let pointerId = null;

        volume.addEventListener(
            'pointerdown',
            event => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                dragging = true;

                pointerId =
                    event.pointerId;

                try {
                    volume.setPointerCapture(
                        pointerId
                    );
                } catch {}

                applyVolumeFromPointer(
                    event
                );
            },
            true
        );

        volume.addEventListener(
            'pointermove',
            event => {
                if (
                    !dragging ||
                    event.pointerId !==
                        pointerId
                ) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                applyVolumeFromPointer(
                    event
                );
            },
            true
        );

        volume.addEventListener(
            'pointerup',
            event => {
                if (!dragging) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                applyVolumeFromPointer(
                    event
                );

                dragging = false;

                try {
                    volume.releasePointerCapture(
                        pointerId
                    );
                } catch {}

                pointerId = null;
            },
            true
        );

        volume.addEventListener(
            'pointercancel',
            () => {
                dragging = false;
                pointerId = null;
            },
            true
        );

        /*
         * Глушим старый click-handler сайта,
         * чтобы jQuery UI не перезаписывал
         * нашу громкость.
         */
        volume.addEventListener(
            'click',
            event => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
            },
            true
        );
    }

    // =========================================================
    // PLAYER EVENTS
    // =========================================================

    function bindAudioEvents(media) {
        if (
            !media ||
            media.dataset.ctFixBound === '1'
        ) {
            return;
        }

        media.dataset.ctFixBound =
            '1';

        media.addEventListener(
            'playing',
            () => {
                if (media !== audio) {
                    return;
                }

                if (media.paused || media.error) return;
                if (currentRow) markPlayed(currentRow);
                loadWaveformAfterPlayback();
            }
        );

        media.addEventListener(
            'play',
            () => {
                if (media !== audio || media.paused || media.error) {
                    return;
                }

                playerPlay
                    ?.classList
                    .add(
                        'pt-playing'
                    );

                setRowState(
                    currentButton,
                    'playing'
                );

                startProgressLoop();
            }
        );

        media.addEventListener(
            'pause',
            () => {
                if (media !== audio || !media.paused) {
                    return;
                }

                playerPlay
                    ?.classList
                    .remove(
                        'pt-playing'
                    );

                stopProgressLoop();

                updateProgress();

                if (
                    currentButton &&
                    !media.ended
                ) {
                    setRowState(
                        currentButton,
                        'paused'
                    );
                }
            }
        );

        media.addEventListener(
            'loadedmetadata',
            () => {
                if (media !== audio) {
                    return;
                }

                if (durationElement) {
                    durationElement.textContent =
                        formatTime(
                            media.duration
                        );
                }

                updateProgress();
            }
        );

        media.addEventListener(
            'durationchange',
            () => {
                if (media !== audio) {
                    return;
                }

                if (
                    durationElement &&
                    Number.isFinite(
                        media.duration
                    )
                ) {
                    durationElement.textContent =
                        formatTime(
                            media.duration
                        );
                }
            }
        );

        media.addEventListener(
            'timeupdate',
            () => {
                if (media === audio) {
                    updateProgress();
                }
            }
        );

        media.addEventListener(
            'ended',
            () => {
                if (media !== audio) {
                    return;
                }

                stopProgressLoop();
                setProgress(100);
                nextTrack();
            }
        );

        media.addEventListener(
            'error',
            () => {
                if (media !== audio) {
                    return;
                }

                playerPlay?.classList.remove('pt-playing');
                resetRowButton(currentButton);
                stopProgressLoop();
                warn(
                    'HTMLAudioElement error:',
                    media.error
                );
            }
        );
    }

    function bindEvents() {
        bindAudioEvents(
            audio
        );

        function captureClick(
            element,
            callback
        ) {
            if (!element) {
                return;
            }

            element.addEventListener(
                'click',
                event => {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();

                    callback();
                },
                true
            );
        }

        captureClick(
            playerPlay,
            togglePlayback
        );

        captureClick(
            playerPrevious,
            previousTrack
        );

        captureClick(
            playerNext,
            nextTrack
        );

        captureClick(
            playerDownload,
            openCurrentDownload
        );

        captureClick(
            nativeDownload,
            openCurrentDownload
        );

        /*
         * Кнопки конкретных строк TOP.
         */
        document.addEventListener(
            'click',
            event => {
                const button =
                    event.target.closest(
                        PLAY_SELECTOR
                    );

                if (!button) {
                    return;
                }

                const row =
                    button.closest(
                        ROW_SELECTOR
                    );

                if (!row) {
                    return;
                }

                const index =
                    rows.indexOf(row);

                if (index < 0) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                selectTrack(
                    index,
                    true
                );
            },
            true
        );

        /*
         * Seek.
         */
        if (scrubber) {
            scrubber.addEventListener(
                'click',
                event => {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();

                    if (
                        !Number.isFinite(
                            audio.duration
                        ) ||
                        audio.duration <= 0
                    ) {
                        return;
                    }

                    const rect =
                        scrubber
                            .getBoundingClientRect();

                    if (!rect.width) {
                        return;
                    }

                    const ratio =
                        Math.max(
                            0,
                            Math.min(
                                1,
                                (
                                    event.clientX -
                                    rect.left
                                ) /
                                rect.width
                            )
                        );

                    audio.currentTime =
                        ratio *
                        audio.duration;

                    updateProgress();
                },
                true
            );
        }

        /*
         * Горячие клавиши сайта:
         *
         * A = предыдущий
         * S = play/pause
         * D = следующий
         * W = страница текущего трека на Clubtone
         * F = Soundfiles/download page
         */
        document.addEventListener(
            'keydown',
            event => {
                const target =
                    event.target;

                const tag =
                    target
                        ?.tagName
                        ?.toLowerCase();

                if (
                    tag === 'input' ||
                    tag === 'textarea' ||
                    tag === 'select' ||
                    target?.isContentEditable
                ) {
                    return;
                }

                if (
                    event.ctrlKey ||
                    event.altKey ||
                    event.metaKey
                ) {
                    return;
                }

                switch (
                    event.code
                ) {
                    case 'KeyA':
                        event.preventDefault();
                        previousTrack();
                        break;

                    case 'KeyS':
                        event.preventDefault();
                        togglePlayback();
                        break;

                    case 'KeyD':
                        event.preventDefault();
                        nextTrack();
                        break;

                    case 'KeyW':
                    case 'KeyF':
                        event.preventDefault();
                        // Block the site's old W shortcut and held-key repeats.
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        if (event.repeat) break;
                        if (event.code === 'KeyW') openCurrentTrackPage();
                        else openCurrentDownload();
                        break;
                }
            },
            true
        );
    }

    // =========================================================
    // LOW PRIORITY PRECACHE
    // =========================================================

    async function startPrecache() {
        for (const row of rows) {
            const url =
                getPageUrl(
                    row
                );

            if (!url) {
                continue;
            }

            if (
                sfCache.has(url) ||
                pendingSfRequests.has(url)
            ) {
                continue;
            }

            while (userTrackLoading) {
                await sleep(100);
            }

            await sleep(
                PRECACHE_BETWEEN_TRACKS
            );

            if (
                sfCache.has(url) ||
                pendingSfRequests.has(url)
            ) {
                continue;
            }

            try {
                await getSfFile(
                    url
                );
            } catch {}
        }

        log(
            'Фоновый precache завершён'
        );
    }

    // =========================================================
    // INIT
    // =========================================================

    async function init() {
        await initSiteHistory();
        /*
         * Только .net с реально повреждёнными
         * строками делает запрос к зеркалу.
         */
        await repairNetPage();

        rows =
            [...document.querySelectorAll(
                ROW_SELECTOR
            )]
                .filter(
                    row =>
                        row.querySelector(
                            ENTRY_SELECTOR
                        )
                );

        if (!rows.length) {
            return;
        }

        player =
            document.querySelector(
                '#pageplayer'
            );

        if (!player) {
            return;
        }

        /*
         * Активная обложка выглядит как штатное состояние hover,
         * но только у реально выбранного трека.
         * Меняем фоновую картинку кнопки, сохраняя геометрию .pt-link.
         */
        const activeCoverStyle =
            document.createElement('style');

        activeCoverStyle.textContent = `
            /* TOP рисует Play фоном, а текстовый ::before скрыт text-indent.
             * Меняем только фон. При паузе/сбросе возвращается фон сайта.
             * Ни новых элементов, ни изменений геометрии строки.
             */
            ${ROW_SELECTOR} ${PLAY_SELECTOR}.ct-fix-playing {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3E%3Cpath d='M25 23h7v24h-7zM38 23h7v24h-7z' fill='white'/%3E%3C/svg%3E") !important;
                background-position: center !important;
                background-size: 100% 100% !important;
                background-repeat: no-repeat !important;
                opacity: 1 !important;
            }
            ${ROW_SELECTOR}.ct-fix-active .tc {
                opacity: 1 !important;
            }

            ${ROW_SELECTOR}.ct-fix-active .tc img {
                filter: none !important;
                -webkit-filter: none !important;
                opacity: 1 !important;
                outline: none !important;
                box-shadow: none !important;
            }
        `;

        document.head.appendChild(
            activeCoverStyle
        );

        playerPlay =
            player.querySelector(
                '.pt-play-pause'
            );

        playerPrevious =
            player.querySelector(
                '.pt-previous'
            );

        playerNext =
            player.querySelector(
                '.pt-next'
            );

        playerDownload =
            player.querySelector(
                '.pt-dl'
            );

        nativeDownload =
            player.querySelector(
                '#download a'
            );

        currentTitle =
            player.querySelector(
                '.pt-current-track-title'
            );

        currentTime =
            player.querySelector(
                '.pt-current-time'
            );

        durationElement =
            player.querySelector(
                '.pt-duration'
            );

        scrubber =
            player.querySelector(
                '.pt-scrubber'
            );

        progress =
            player.querySelector(
                '.pt-position'
            );

        loading =
            player.querySelector(
                '.pt-loading'
            );

        wave =
            player.querySelector(
                '#wave'
            );

        /* Soundfiles PNG: waveform is opaque, background is transparent.
         * The native color matrix forces alpha=1, making the background opaque
         * and turning the waveform into dark holes. Use the PNG alpha directly.
         * One-time SVG setup: no canvas, fetching, decoding or audio-path work.
         */
        const waveformMask = wave?.closest('mask');
        if (waveformMask) {
            waveformMask.style.setProperty('mask-type', 'alpha', 'important');
            wave.style.setProperty('filter', 'none', 'important');
        }

        cover =
            player.querySelector(
                '#pimg img'
            );

        volume =
            player.querySelector(
                '#volume'
            );

        volumeHandle =
            volume?.querySelector(
                '.ui-slider-handle'
            );

        volumeRange =
            volume?.querySelector(
                '.ui-slider-range'
            );

        /*
         * Один Audio на весь TOP.
         */
        audio =
            new Audio();

        audio.preload =
            'auto';

        /*
         * Постоянный sffile-кэш загружаем до первого клика.
         * Уже известные треки запускаются без запроса страницы трека.
         */
        await loadSfCache();

        /*
         * История сначала загружается,
         * затем красим строки.
         */
        restorePlayedVisuals();

        /*
         * Убираем старые состояния
         * штатного сломанного player.js.
         */
        for (const row of rows) {
            const button =
                getButton(row);

            button
                ?.classList
                .remove(
                    'pt-playing'
                );

            resetRowButton(
                button
            );
        }

        playerPlay
            ?.classList
            .remove(
                'pt-playing',
                'pt-paused'
            );

        setProgress(0);

        initVolume();
        bindEvents();

        /*
         * Precache намеренно запускается
         * значительно позже и только
         * в одном потоке.
         */
        setTimeout(
            () => {
                startPrecache()
                    .catch(error => {
                        warn(
                            'Precache:',
                            error
                        );
                    });
            },
            PRECACHE_DELAY
        );

        log(
            'Активирован',
            {
                domain:
                    location.hostname,

                tracks:
                    rows.length,

                played:
                    played.size,

                volumeCurve:
                    'position²',

                precacheWorkers:
                    1,

                audioPreloadAhead:
                    AUDIO_PRELOAD_AHEAD
            }
        );
    }

    init().catch(error => {
        console.error(
            `[Clubtone Player Fix v${VERSION}] INIT ERROR:`,
            error
        );
    });

})();