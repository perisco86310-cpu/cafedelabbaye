import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

type LeafSpec = {
  left: number;
  scale: number;
  fall: number;
  delay: number;
  sway: number;
  swayTime: number;
  spin: number;
  opacity: number;
  blur: number;
  tone: string;
  shape: 0 | 1 | 2;
};

/**
 * Feuilles d'automne dessinées en SVG (大 = nervures visibles) :
 * 0 : feuille large (tilleul), 1 : feuille allongée (peuplier), 2 : feuille de vigne.
 * Teintées avec les tokens dorés du site, opacité basse pour rester discret.
 */
const SHAPES = [
  <svg viewBox="0 0 24 24" key="tilleul" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 1.6c5.2 4 7.9 9.7 5.9 15.5-.9 2.8-3.2 5.1-5.9 6.4-2.7-1.3-5-3.6-5.9-6.4C4.1 11.3 6.8 5.6 12 1.6Z"
    />
    <g
      stroke="hsl(var(--warm-dark))"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    >
      <path d="M12 4.5v15.5" />
      <path d="M12 9.5l3.6-2.6M12 9.5l-3.6-2.6M12 14l4-2.8M12 14l-4-2.8M12 18l3-2.4M12 18l-3-2.4" />
    </g>
  </svg>,
  <svg viewBox="0 0 24 24" key="peuplier" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 1.2c3.5 5 4.3 11.4 2 17-.7 1.7-1.3 3-2 4.3-.7-1.3-1.3-2.6-2-4.3-2.3-5.6-1.5-12 2-17Z"
    />
    <g stroke="hsl(var(--warm-dark))" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5">
      <path d="M12 4.5v16" />
      <path d="M12 10l2.3-2M12 10l-2.3-2M12 15l2.5-2.2M12 15l-2.5-2.2" />
    </g>
  </svg>,
  <svg viewBox="0 0 24 24" key="vigne" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2.4c1.1 1.9 2.7 2.9 4.7 3.1-.4 2 .2 3.5 1.7 4.6-1.5 1.1-2.1 2.6-1.7 4.6-2 .2-3.6 1.2-4.7 3.1-1.1-1.9-2.7-2.9-4.7-3.1.4-2-.2-3.5-1.7-4.6 1.5-1.1 2.1-2.6 1.7-4.6 2-.2 3.6-1.2 4.7-3.1Z"
    />
    <g stroke="hsl(var(--warm-dark))" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.45">
      <path d="M12 5.5v11" />
      <path d="M12 9l3.2-1.4M12 9l-3.2-1.4M12 13l3.4-1.5M12 13l-3.4-1.5" />
    </g>
    <path d="M12 17.6V23" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" />
  </svg>,
];

const LEAVES: LeafSpec[] = [
  { left: 2,  scale: 0.8,  fall: 24, delay: -3,  sway: 34, swayTime: 9,  spin: 12, opacity: 0.42, blur: 0.4, tone: "text-gold",         shape: 0 },
  { left: 8,  scale: 1.25, fall: 18, delay: -11, sway: 52, swayTime: 7,  spin: 9,  opacity: 0.6,  blur: 0,   tone: "text-autumn-amber", shape: 2 },
  { left: 14, scale: 0.7,  fall: 27, delay: -18, sway: 26, swayTime: 11, spin: 14, opacity: 0.36, blur: 0.5, tone: "text-cream",        shape: 1 },
  { left: 19, scale: 1.0,  fall: 21, delay: -1,  sway: 44, swayTime: 8,  spin: 11, opacity: 0.55, blur: 0,   tone: "text-gold",         shape: 2 },
  { left: 25, scale: 0.85, fall: 25, delay: -14, sway: 30, swayTime: 10, spin: 13, opacity: 0.45, blur: 0.4, tone: "text-gold-light",   shape: 0 },
  { left: 31, scale: 1.45, fall: 16, delay: -7,  sway: 58, swayTime: 6,  spin: 8,  opacity: 0.62, blur: 0,   tone: "text-autumn-honey", shape: 0 },
  { left: 37, scale: 0.75, fall: 28, delay: -22, sway: 28, swayTime: 11, spin: 15, opacity: 0.38, blur: 0.5, tone: "text-cream",        shape: 0 },
  { left: 43, scale: 1.1,  fall: 20, delay: -5,  sway: 46, swayTime: 7,  spin: 10, opacity: 0.58, blur: 0,   tone: "text-autumn-amber", shape: 1 },
  { left: 49, scale: 0.6,  fall: 30, delay: -9,  sway: 22, swayTime: 12, spin: 16, opacity: 0.32, blur: 0.5, tone: "text-cream",        shape: 1 },
  { left: 55, scale: 1.3,  fall: 19, delay: -16, sway: 50, swayTime: 7,  spin: 9,  opacity: 0.6,  blur: 0,   tone: "text-autumn-rust",  shape: 0 },
  { left: 61, scale: 0.8,  fall: 23, delay: -2,  sway: 34, swayTime: 9,  spin: 12, opacity: 0.46, blur: 0.3, tone: "text-gold",         shape: 1 },
  { left: 67, scale: 1.5,  fall: 17, delay: -12, sway: 56, swayTime: 6,  spin: 8,  opacity: 0.62, blur: 0,   tone: "text-gold",         shape: 2 },
  { left: 73, scale: 0.65, fall: 29, delay: -20, sway: 26, swayTime: 12, spin: 15, opacity: 0.34, blur: 0.5, tone: "text-cream",        shape: 0 },
  { left: 79, scale: 1.05, fall: 22, delay: -6,  sway: 42, swayTime: 8,  spin: 11, opacity: 0.55, blur: 0,   tone: "text-autumn-amber", shape: 1 },
  { left: 85, scale: 0.9,  fall: 26, delay: -17, sway: 38, swayTime: 9,  spin: 13, opacity: 0.48, blur: 0.4, tone: "text-gold",         shape: 0 },
  { left: 91, scale: 1.35, fall: 18, delay: -8,  sway: 50, swayTime: 7,  spin: 9,  opacity: 0.6,  blur: 0,   tone: "text-autumn-honey", shape: 2 },
  { left: 97, scale: 0.7,  fall: 27, delay: -13, sway: 28, swayTime: 11, spin: 14, opacity: 0.4,  blur: 0.5, tone: "text-cream",        shape: 1 },
];

const AutumnLeaves = () => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {LEAVES.map((leaf, i) => (
        <span
          key={i}
          className="leaf"
          style={
            {
              left: `${leaf.left}%`,
              "--leaf-scale": leaf.scale,
              "--leaf-fall": `${leaf.fall}s`,
              "--leaf-delay": `${leaf.delay}s`,
              "--leaf-sway": `${leaf.sway}px`,
              "--leaf-sway-time": `${leaf.swayTime}s`,
              "--leaf-spin-time": `${leaf.spin}s`,
              "--leaf-opacity": leaf.opacity,
              "--leaf-blur": `${leaf.blur}px`,
            } as CSSProperties
          }
        >
          <span className="leaf-sway">
            <span className={`leaf-spin ${leaf.tone}`}>{SHAPES[leaf.shape]}</span>
          </span>
        </span>
      ))}
    </div>
  );
};

export default AutumnLeaves;
