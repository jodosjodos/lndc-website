import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function counters() {
  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter);
    if (reduced) {
      el.textContent = String(target);
      return;
    }
    const state = { v: 0 };
    el.textContent = '0';
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: target,
          duration: target > 10 ? 1.8 : 1.1,
          ease: 'power2.out',
          onUpdate: () => (el.textContent = String(Math.round(state.v))),
        }),
    });
  });
}

function init() {
  if (reduced) {
    counters();
    return;
  }
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const lenis = new Lenis({ lerp: 0.11 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      if (id.length < 2) return;
      e.preventDefault();
      lenis.scrollTo(id, { offset: -90 });
    }),
  );

  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    // Wait for the web font so lines are measured with the real glyph widths.
    document.fonts.ready.then(() => {
      SplitText.create(el, {
        type: 'lines,words',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { visibility: 'visible' });
          const inHero = el.closest('[data-hero]');
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.05,
            ease: 'expo.out',
            stagger: 0.09,
            delay: inHero ? 0.25 : 0,
            scrollTrigger: inHero ? undefined : { trigger: el, start: 'top 88%', once: true },
          });
        },
      });
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const inHero = el.closest('[data-hero]');
    const delay = Number(el.dataset.revealDelay || 0);
    gsap.fromTo(
      el,
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: inHero ? 0.55 + delay : delay,
        scrollTrigger: inHero ? undefined : { trigger: el, start: 'top 90%', once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
    const items = group.querySelectorAll(':scope > *');
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: 'top 86%', once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 12);
    gsap.fromTo(
      el,
      { yPercent: -amount / 2 },
      { yPercent: amount / 2, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-clip-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(12% 12% 12% 12% round 2rem)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 1.75rem)',
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 35%', scrub: 0.6 },
      },
    );
  });

  counters();
}

init();
root.classList.add('motion-ready');
