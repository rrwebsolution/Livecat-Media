import { ChevronDown, ExternalLink } from "lucide-react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import type { InstallNeed, Spec } from "@/config/content";
import { cn } from "@/lib/utils";

const tabs = ["What you need", "Requirements", "How to install"] as const;
type Tab = (typeof tabs)[number];

/**
 * A download card's details in three tabs. The card stays short: the tab's text is cut off with a fade until
 * "View more" opens all of it.
 */
export function InstallGuide({
  needs,
  specs,
  steps,
}: {
  needs: InstallNeed[];
  specs: Spec[];
  steps: string[];
}) {
  const [tab, setTab] = useState<Tab>("What you need");
  const [open, setOpen] = useState(false);
  const id = useId();
  const panel = useRef<HTMLDivElement>(null);
  // "View more" only when the tab has more than fits: measured, since it depends on the tab and the width
  const [cut, setCut] = useState(false);
  useLayoutEffect(() => {
    const el = panel.current;
    if (!el) return;
    const measure = () => setCut(el.scrollHeight > el.clientHeight + 4);
    measure();
    const watch = new ResizeObserver(measure);
    watch.observe(el);
    return () => watch.disconnect();
  }, [tab, open]);

  return (
    <div className="mt-6 border-t border-white/10 pt-5">
      <div
        role="tablist"
        aria-label="Installation details"
        className="flex gap-1 rounded-lg bg-white/5 p-1"
      >
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            id={`${id}-${t}`}
            aria-selected={tab === t}
            aria-controls={`${id}-panel`}
            onClick={() => {
              setTab(t);
              setOpen(false);
            }}
            className={cn(
              "min-h-9 flex-1 rounded-md px-2 text-xs font-semibold transition-colors sm:text-sm",
              tab === t
                ? "bg-brand text-white"
                : "text-muted-foreground hover:text-white",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        ref={panel}
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-${tab}`}
        className={cn("relative mt-4 overflow-hidden", !open && "max-h-44")}
      >
        {tab === "What you need" && (
          <ul className="space-y-3">
            {needs.map(({ name, forWhat, href, how }) => (
              <li key={name} className="text-sm leading-relaxed">
                <p className="font-semibold">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand hover:underline"
                    >
                      {name}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    name
                  )}
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    · {forWhat}
                  </span>
                </p>
                {how && <p className="text-muted-foreground">{how}</p>}
              </li>
            ))}
          </ul>
        )}

        {tab === "Requirements" && (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground uppercase">
                <th scope="col" className="pb-2 font-semibold">
                  <span className="sr-only">Part</span>
                </th>
                <th scope="col" className="pb-2 font-semibold">
                  Minimum
                </th>
                <th scope="col" className="pb-2 font-semibold">
                  Recommended
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map(({ label, minimum, recommended }) => (
                <tr key={label} className="border-t border-white/5 align-top">
                  <th scope="row" className="py-2 pr-3 font-semibold">
                    {label}
                  </th>
                  <td className="py-2 pr-3 text-muted-foreground">{minimum}</td>
                  <td className="py-2 text-muted-foreground">{recommended}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {tab === "How to install" && (
          <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        )}

        {!open && cut && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-navy to-transparent"
          />
        )}
      </div>

      {(cut || open) && (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((o) => !o)}
          className="mt-2 inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
        >
          {open ? "View less" : "View more"}
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}
