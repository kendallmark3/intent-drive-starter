#!/usr/bin/env bash
# Claude Code PreToolUse hook for Edit and Write. Reads the tool call as JSON on stdin.
# Blocks code edits while the project's intent is not sufficient (see pre-implement.sh).
# Does nothing in projects without intent/current-feature.md, and never blocks Markdown files.
set -uo pipefail

input="$(cat)"
project="${CLAUDE_PROJECT_DIR:-$PWD}"
intent="$project/intent/current-feature.md"

[ -f "$intent" ] || exit 0

target="$(printf '%s' "$input" | sed -n 's/.*"file_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -n 1)"
case "$target" in
  *.md|*.MD|*.markdown) exit 0 ;;
esac

here="$(cd "$(dirname "$0")" && pwd)"
if ! out="$(bash "$here/pre-implement.sh" "$intent" 2>&1)"; then
  echo "$out" >&2
  echo "Write the intent first (Markdown files are not blocked), then continue." >&2
  exit 2
fi
exit 0
