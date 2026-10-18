"use client";

import { useState } from "react";
import { monkeys, type MonkeyId } from "@/config/site";
import { asset } from "@/lib/asset";

export default function MonkeyPicker() {
  const [chosen, setChosen] = useState<MonkeyId>("see");
  const picked = monkeys.find((monkey) => monkey.id === chosen) ?? monkeys[0];

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const index = monkeys.findIndex((monkey) => monkey.id === chosen);
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setChosen(monkeys[(index + 1) % monkeys.length].id);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setChosen(monkeys[(index - 1 + monkeys.length) % monkeys.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      setChosen(monkeys[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      setChosen(monkeys[monkeys.length - 1].id);
    }
  }

  return (
    <section className="pick" id="pick" data-section="pick" aria-labelledby="pick-heading">
      <div className="wrap">
        <h2 className="display" id="pick-heading">PICK YOUR<br />MONKEY.</h2>
        <div className="monkey-tabs" role="radiogroup" aria-label="Pick your monkey" onKeyDown={onKeyDown}>
          {monkeys.map((monkey) => (
            <button
              key={monkey.id}
              type="button"
              role="radio"
              aria-checked={chosen === monkey.id}
              aria-label={monkey.id === "see" ? "See no evil" : monkey.id === "hear" ? "Hear no evil" : "Speak no evil"}
              className={`monkey-tab${chosen === monkey.id ? " active" : ""}`}
              onClick={() => setChosen(monkey.id)}
            >
              {monkey.emoji}
            </button>
          ))}
        </div>
        <div className="pick-stage">
          <img key={picked.id} src={asset(picked.image)} alt={`${picked.title.join(" ")} monkey`} width={900} height={900} />
        </div>
        <div className="pick-reaction" key={`${picked.id}-caption`} aria-live="polite">{picked.pickerCaption}</div>
      </div>
    </section>
  );
}
