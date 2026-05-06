import { Fragment, type ReactNode } from "react";

type Props = {
  filename: string;
  code: string;
};

const KEYWORDS = new Set([
  "const",
  "let",
  "var",
  "true",
  "false",
  "null",
  "undefined",
  "return",
  "import",
  "export",
  "from",
  "function",
]);

type Token = { kind: string; value: string };

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  const re =
    /("(?:[^"\\]|\\.)*")|(\/\/.*$)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\s*:)|([A-Za-z_$][\w$]*)|([{}[\]()<>,;:.=])|(\s+)|(.)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(line)) !== null) {
    const [
      raw,
      str,
      comment,
      num,
      key,
      ident,
      punct,
      ws,
      other,
    ] = match;
    if (str !== undefined) tokens.push({ kind: "string", value: str });
    else if (comment !== undefined) tokens.push({ kind: "comment", value: comment });
    else if (num !== undefined) tokens.push({ kind: "number", value: num });
    else if (key !== undefined) {
      tokens.push({
        kind: KEYWORDS.has(key) ? "keyword" : "key",
        value: key,
      });
    } else if (ident !== undefined) {
      tokens.push({
        kind: KEYWORDS.has(ident) ? "keyword" : "ident",
        value: ident,
      });
    } else if (punct !== undefined) tokens.push({ kind: "punct", value: punct });
    else if (ws !== undefined) tokens.push({ kind: "ws", value: ws });
    else tokens.push({ kind: "other", value: other ?? raw });
  }
  return tokens;
}

const KIND_CLASS: Record<string, string> = {
  string: "text-[#cc785c]",
  number: "text-[#e8a55a]",
  keyword: "text-[#5db8a6]",
  key: "text-[#e8a55a]",
  ident: "text-on-dark",
  punct: "text-on-dark-soft",
  comment: "text-muted-soft italic",
  ws: "",
  other: "text-on-dark",
};

function renderLine(line: string, lineKey: number): ReactNode {
  const tokens = tokenizeLine(line);
  return (
    <Fragment key={lineKey}>
      {tokens.map((t, i) => (
        <span key={i} className={KIND_CLASS[t.kind] ?? ""}>
          {t.value}
        </span>
      ))}
      {"\n"}
    </Fragment>
  );
}

export function CodeWindow({ filename, code }: Props) {
  const lines = code.split("\n");
  return (
    <div className="rounded-lg bg-surface-dark border border-surface-dark-elevated overflow-hidden shadow-[0_30px_60px_-20px_rgba(20,20,19,0.25)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-dark-elevated bg-surface-dark-soft">
        <span className="block w-3 h-3 rounded-full bg-[#3a3733]" />
        <span className="block w-3 h-3 rounded-full bg-[#3a3733]" />
        <span className="block w-3 h-3 rounded-full bg-[#3a3733]" />
        <span className="ml-3 text-[12px] font-mono text-on-dark-soft tracking-wide">
          {filename}
        </span>
      </div>
      <pre className="px-6 py-5 text-[13px] leading-[1.7] font-mono overflow-x-auto">
        <code className="block whitespace-pre">
          {lines.map((line, i) => (
            <span key={i} className="grid grid-cols-[2.25rem_1fr]">
              <span className="text-muted-soft select-none pr-4 text-right">
                {i + 1}
              </span>
              <span>{renderLine(line, i)}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
