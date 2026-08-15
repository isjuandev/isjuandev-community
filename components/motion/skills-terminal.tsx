const LOG_LINES = [
  { text: '$ pnpm isjuandev@skills init', cls: 'prompt' },
  { text: '✓ cargando .NET Core / C#', cls: 'ok' },
  { text: '✓ cargando React / TypeScript', cls: 'ok' },
  { text: '✓ cargando AWS / Azure DevOps', cls: 'ok' },
  { text: '✓ cargando Astro / Tailwind', cls: 'ok' },
  { text: 'stack listo.', cls: 'prompt' },
]

export function SkillsTerminal() {
  return (
    <div className="terminal mx-auto">
      <div className="terminal-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="fname">isjuandev@skills — zsh</span>
      </div>
      <div className="terminal-body">
        {LOG_LINES.map((line, i) => (
          <div key={i} className={line.cls}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  )
}