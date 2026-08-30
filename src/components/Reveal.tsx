/**
 * Section reveal wrapper. The animation itself is pure CSS (see globals.css):
 * runs on load, ends fully visible, and collapses under prefers-reduced-motion.
 * No JS observer — content can never be stuck hidden (factory first-paint law).
 */
export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
