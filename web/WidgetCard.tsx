// @togo-framework/widget — the shared card shell every widget renders inside.
// Presentational only; the host supplies the drag handle + edit affordances.
import type { ReactNode } from "react";

export function WidgetCard(props: { title: string; handle?: ReactNode; children: ReactNode }) {
  return (
    <section className="wcard">
      <header className="wcard-head">
        <span className="wcard-title">{props.title}</span>
        {props.handle}
      </header>
      <div className="wcard-body">{props.children}</div>
    </section>
  );
}
