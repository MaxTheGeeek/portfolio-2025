"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const TWEAKS_STYLE = `
  .twk-panel {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 2147483646;
    width: 280px;
    max-height: calc(100vh - 32px);
    display: flex;
    flex-direction: column;
    background: rgba(20, 24, 48, 0.85);
    color: #e8eaf5;
    -webkit-backdrop-filter: blur(24px) saturate(160%);
    backdrop-filter: blur(24px) saturate(160%);
    border: 0.5px solid rgba(255, 255, 255, 0.15);
    border-radius: 14px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 12px 40px rgba(0, 0, 0, 0.5);
    font: 11.5px/1.4 ui-sans-serif, system-ui, -apple-system, sans-serif;
    overflow: hidden;
  }
  .twk-hd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px 10px 14px;
    cursor: move;
    user-select: none;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
  }
  .twk-hd b {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.01em;
  }
  .twk-x {
    appearance: none;
    border: 0;
    background: transparent;
    color: rgba(232, 234, 245, 0.55);
    width: 22px;
    height: 22px;
    border-radius: 6px;
    cursor: default;
    font-size: 13px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .twk-x:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #e8eaf5;
  }
  .twk-body {
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
  }
  .twk-sect {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(232, 234, 245, 0.45);
    padding-top: 4px;
  }
  .twk-sect-sub {
    font-size: 9px;
    color: rgba(232, 234, 245, 0.3);
    margin-bottom: 6px;
    margin-top: -2px;
  }
  .twk-row {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .twk-lbl {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: rgba(232, 234, 245, 0.72);
  }
  .twk-lbl > span:first-child {
    font-weight: 500;
  }
  .twk-val {
    color: rgba(232, 234, 245, 0.5);
    font-variant-numeric: tabular-nums;
  }
  .twk-slider {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    margin: 6px 0;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
    outline: none;
  }
  .twk-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  .twk-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

interface TweaksPanelProps {
  intensity: number;
  setIntensity: (val: number) => void;
}

export function TweaksPanel({ intensity, setIntensity }: TweaksPanelProps) {
  const [open, setOpen] = useState(false);

  const dragRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 16, y: 16 });
  const PAD = 16;


  const clampToViewport = useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth;
    const h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + "px";
    panel.style.bottom = offsetRef.current.y + "px";
  }, []);

  useEffect(() => {
    if (!open) return;
    clampToViewport();
    window.addEventListener("resize", clampToViewport);
    return () => window.removeEventListener("resize", clampToViewport);
  }, [open, clampToViewport]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const t = e?.data?.type;
      if (t === "__activate_edit_mode") setOpen(true);
      else if (t === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    
    // Support keyboard shortcut 't' to open tweaks locally
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "t" || e.key === "T") {
        // Only trigger if not typing in inputs
        if (
          document.activeElement?.tagName !== "INPUT" &&
          document.activeElement?.tagName !== "TEXTAREA"
        ) {
          setOpen((prev) => !prev);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Announce edit mode availability
    if (window.parent) {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    }

    return () => {
      window.removeEventListener("message", onMsg);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    if (window.parent) {
      window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
    }
  };

  const onDragStart = (e: React.MouseEvent) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX;
    const sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;

    const move = (ev: MouseEvent) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };

    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  if (!open) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TWEAKS_STYLE }} />
      <div
        ref={dragRef}
        className="twk-panel"
        style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}
      >
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>Tweaks</b>
          <button className="twk-x" aria-label="Close tweaks" onClick={dismiss}>
            ✕
          </button>
        </div>
        <div className="twk-body">
          <div className="twk-sect">3D Intensity</div>
          <div className="twk-sect-sub">Glow, parallax & motion strength</div>
          
          <div className="twk-row">
            <div className="twk-lbl">
              <span>Strength</span>
              <span className="twk-val">{intensity}%</span>
            </div>
            <input
              type="range"
              className="twk-slider"
              min={0}
              max={120}
              step={5}
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
            />
          </div>

          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
              marginTop: 4,
            }}
          >
            {intensity < 30 && "Subtle — gentle backdrop"}
            {intensity >= 30 && intensity < 70 && "Balanced — recommended"}
            {intensity >= 70 && intensity < 100 && "Vivid — neon showreel"}
            {intensity >= 100 && "Maximum — full cinematic"}
          </div>
        </div>
      </div>
    </>
  );
}
