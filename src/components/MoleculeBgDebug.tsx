'use client';

import { useEffect } from 'react';

const INGEST = 'http://127.0.0.1:7245/ingest/ad50f471-fc68-4b11-98f6-0b16f9eabd22';

function log(payload: Record<string, unknown>) {
  fetch(INGEST, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      timestamp: Date.now(),
      sessionId: 'debug-session',
    }),
  }).catch(() => {});
}

export default function MoleculeBgDebug() {
  useEffect(() => {
    // #region agent log
    const bg = document.querySelector('.molecule-bg');
    const dots = document.querySelectorAll('.molecule-bg__dot');
    const firstInner = document.querySelector('.molecule-bg__dot-inner');
    const firstDot = document.querySelector('.molecule-bg__dot');
    log({
      hypothesisId: 'H1',
      location: 'MoleculeBgDebug.tsx:useEffect',
      message: 'Molecule DOM presence',
      data: {
        hasMoleculeBg: !!bg,
        dotCount: dots.length,
        hasFirstInner: !!firstInner,
        hasFirstDot: !!firstDot,
      },
    });
    // #endregion

    if (firstInner) {
      const s = getComputedStyle(firstInner);
      const rect = firstInner.getBoundingClientRect();
      // #region agent log
      log({
        hypothesisId: 'H2',
        location: 'MoleculeBgDebug.tsx:computed-inner',
        message: 'First dot-inner computed style',
        data: {
          opacity: s.opacity,
          width: s.width,
          height: s.height,
          backgroundImage: s.backgroundImage?.slice(0, 80),
          rectWidth: rect.width,
          rectHeight: rect.height,
          rectTop: rect.top,
          rectLeft: rect.left,
        },
      });
      // #endregion
    }

    if (bg) {
      const s = getComputedStyle(bg);
      // #region agent log
      log({
        hypothesisId: 'H4',
        location: 'MoleculeBgDebug.tsx:computed-bg',
        message: 'molecule-bg stacking/visibility',
        data: {
          zIndex: s.zIndex,
          display: s.display,
          visibility: s.visibility,
          position: s.position,
        },
      });
      // #endregion
    }

    // #region agent log
    const layoutWrapper = document.querySelector('body > div:not(.molecule-bg)');
    if (layoutWrapper) {
      const s = getComputedStyle(layoutWrapper);
      log({
        hypothesisId: 'H5',
        location: 'MoleculeBgDebug.tsx:layout-wrapper',
        message: 'Layout wrapper covering molecules?',
        data: {
          backgroundColor: s.backgroundColor,
          opacity: s.opacity,
          zIndex: s.zIndex,
          className: layoutWrapper.className?.slice(0, 100),
        },
      });
    }
    // #endregion

    // #region agent log
    fetch('/molecule.png', { method: 'HEAD' })
      .then((r) => {
        log({
          hypothesisId: 'H3',
          location: 'MoleculeBgDebug.tsx:image-fetch',
          message: 'molecule.png fetch',
          data: { ok: r.ok, status: r.status },
        });
      })
      .catch((e) => {
        log({
          hypothesisId: 'H3',
          location: 'MoleculeBgDebug.tsx:image-fetch',
          message: 'molecule.png fetch error',
          data: { error: String(e?.message || e) },
        });
      });
    // #endregion
  }, []);

  return null;
}
