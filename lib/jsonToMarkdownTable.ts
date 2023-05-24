export function jsonToMarkdownTable(
  data: Record<string, string | number>[]
): string {
  const keys = Object.keys(data[0]);
  const header = keys.map((key) => `| ${key}`).join(" ") + " |";
  const divider = keys.map(() => "| --- ").join("") + "|";
  const rows = data.map(
    (row) => keys.map((key) => `| ${row[key]}`).join(" ") + " |"
  );

  return [header, divider, ...rows].join("\n");
}
