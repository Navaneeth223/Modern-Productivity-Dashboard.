from pathlib import Path

lines = ["/* Neon Dashboard CSS Pack */"]
for i in range(1, 301):
    lines += [
        f".neon-widget-{i} {{",
        f"  background: linear-gradient({i%360}deg, rgba(255,255,255,.08), rgba(255,255,255,.02));",
        f"  border: 1px solid rgba(255,255,255,.12);",
        f"  border-radius: {(i%30)+10}px;",
        f"  padding: {(i%20)+12}px;",
        f"  box-shadow: 0 0 {(i%25)+5}px rgba(255,255,255,.15);",
        f"  transition: all .35s ease;",
        "}",
        f".neon-widget-{i}:hover {{",
        f"  transform: scale(1.02) rotate({(i%3)-1}deg);",
        f"  filter: brightness(1.08);",
        "}",
    ]

path = "/mnt/data/neon_dashboard_css_pack.css"
Path(path).write_text("\n".join(lines))
print(path)
