// @togo-framework/widget — THE BASE PLUGIN.
//
// Defines the widget contract + a process-wide registry. It imports nothing from
// `board` and nothing from any `widget-*` driver — the dependency arrows only ever
// point INTO this file. That decoupling is the whole point: the host renders
// whatever has registered itself; it never needs to know a "profile" or a "clock"
// exists.
import type { ComponentType } from "react";

export type Zone = "sidebar" | "body";

// What every widget component receives. Settings are the widget's own editable
// state (persisted by the host, mirroring the real useWidgetEditor → site_settings).
export interface WidgetContext {
  settings: Record<string, unknown>;
  setSettings: (patch: Record<string, unknown>) => void;
  editing: boolean;
}

export interface WidgetDef {
  key: string; // stable unique id, e.g. "clock"
  title: string; // human label shown in the card header
  Comp: ComponentType<WidgetContext>;
  defaultZone?: Zone; // placement HINT — the host decides final position
  defaultSettings?: Record<string, unknown>;
}

const REGISTRY = new Map<string, WidgetDef>();

// A driver calls this at module load (in its top-level side effect) to install
// itself. Because it runs on import, an app "installs" a widget simply by importing
// its package — exactly the blank-import model togo uses for Go plugins.
export function registerWidget(def: WidgetDef): void {
  if (REGISTRY.has(def.key)) {
    console.warn(`[widget] duplicate key "${def.key}" ignored`);
    return;
  }
  REGISTRY.set(def.key, def);
}

export function getWidgets(): WidgetDef[] {
  return [...REGISTRY.values()];
}

export function getWidget(key: string): WidgetDef | undefined {
  return REGISTRY.get(key);
}
