/**
 * FAQ collapse per design contract §5: native <details>/<summary> (accessible,
 * zero JS). Styled: mono uppercase summary, brass marker, --dur-1 transitions,
 * 44px target, --signal focus ring.
 */
export default function Faq({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="faq">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{heading}</h2>
      <div className="faq-list">
        {items.map((it) => (
          <details key={it.q} className="faq-item">
            <summary>
              <span className="faq-marker" aria-hidden="true">
                +
              </span>
              {it.q}
            </summary>
            <p>{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
