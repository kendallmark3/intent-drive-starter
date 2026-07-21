# Intent: Greeting Service

## Summary

The system must be able to greet a user by name.

## Intent Statements

1. **GIVEN** a user's name **WHEN** a greeting is requested **THEN** the response must begin with "Hello" and include the user's name.
2. **GIVEN** no name is provided **WHEN** a greeting is requested **THEN** the response must use a sensible default ("World").
3. The greeting function must be a pure function (no side effects).
4. The greeting must return a `string`.

## Acceptance Criteria

- `greet("Alice")` → `"Hello, Alice!"`
- `greet("")` → `"Hello, World!"`
- `greet()` → `"Hello, World!"`
