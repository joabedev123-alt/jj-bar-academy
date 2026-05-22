import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      raf = requestAnimationFrame(tick);
    };

    const onHoverIn = (_e: Event) => {
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(201,168,76,0.9)';
      ring.style.background = 'rgba(201,168,76,0.06)';
      dot.style.opacity = '0';
    };

    const onHoverOut = () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(201,168,76,0.6)';
      ring.style.background = 'transparent';
      dot.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    const interactives = document.querySelectorAll('a, button, [role="button"], .course-card, input');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onHoverIn);
      el.addEventListener('mouseleave', onHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[99999]"
        style={{
          width: '6px',
          height: '6px',
          background: 'var(--gold-primary)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s',
          boxShadow: '0 0 8px rgba(201,168,76,0.8)',
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[99998]"
        style={{
          width: '32px',
          height: '32px',
          border: '1.5px solid rgba(201,168,76,0.6)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease',
          backdropFilter: 'none',
        }}
      />
    </>
  );
}
