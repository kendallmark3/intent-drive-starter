# intent-drive-starter

> A starter template for **Intent-Driven Software Engineering** — describe *what* you want, let tools and AI handle *how*.

---

## What is Intent-Driven Software Engineering?

Intent-Driven SE is a modern approach where developers write clear, human-readable **intent specifications** that describe the desired behaviour of a system. From those specs, tooling, AI assistants, and automated pipelines generate, validate, and maintain the implementation.

Key principles:

| Principle | Description |
|---|---|
| **Declare intent, not instructions** | Express *what* must be true, not *how* to achieve it |
| **Living specifications** | Specs are the source of truth and stay in sync with the code |
| **AI-assisted implementation** | Use tools like GitHub Copilot to translate intent into working code |
| **Automated verification** | Tests are derived directly from the intent specs |
| **Continuous feedback** | CI/CD pipelines validate that implementations still match intent |

---

## Project Structure

```
intent-drive-starter/
├── intents/              # Human-readable intent specifications
│   └── example.intent.md
├── src/                  # Implementation derived from intents
│   └── example.js
├── tests/                # Tests generated from intent specs
│   └── example.test.js
├── package.json
└── README.md
```

---

## Quick Start

```bash
# Install dependencies
npm install

# Run tests to verify the implementation matches the intents
npm test

# Lint the code
npm run lint
```

---

## Workflow

1. **Write an intent** — create a file in `intents/` describing the desired behaviour in plain language.
2. **Implement** — write (or generate with AI) the corresponding code in `src/`.
3. **Test** — add tests in `tests/` that directly validate each intent statement.
4. **CI** — push; the pipeline confirms that every intent is satisfied.

---

## Example

See [`intents/example.intent.md`](./intents/example.intent.md) for a worked example that shows an intent spec, its implementation in [`src/example.js`](./src/example.js), and the matching tests in [`tests/example.test.js`](./tests/example.test.js).

---

## Contributing

1. Fork this repository.
2. Write your intent in `intents/`.
3. Implement it and add tests.
4. Open a pull request — the CI pipeline will verify your intent is satisfied.

---

## License

MIT
