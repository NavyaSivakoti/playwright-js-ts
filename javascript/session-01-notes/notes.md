# Session 01 — JavaScript & V8 Engine Architecture
*Jan 29, 2026 | My Notes*

---

## Why JavaScript First

Playwright works best with TypeScript (TS), and TS sits on top of JS. Without learning JS first, you can't really understand TS. So JS is the starting point.

- Playwright + TypeScript = good combination
- JS is the base — TS builds on top of it
- Browser understands only JavaScript — not TS directly

---

## Browser Engine (JavaScript Engine)

Every browser has a built-in JavaScript engine. This engine is already installed when you download the browser. Its job is to convert code into JavaScript so the browser can understand it.

Each browser uses a different JS engine:

| Browser | JS Engine |
|---|---|
| Google Chrome | V8 |
| Mozilla Firefox | Gecko |
| Edge | V8 |
| Internet Explorer | Chakra |

Chromium is the platform that the browser is built on top of — it designs the browser structure.

---

## What Runs the Code I Write in VS Code?

If JS runs in the browser, what runs it when I write code locally in VS Code? That's where Node.js comes in — it provides the environment outside the browser.

- Node.js lets me write and run JS code on my machine (outside the browser)
- It comes with everything needed — no extra setup
- It has V8 engine built inside it — that's what actually runs the code
- It also talks to my file system and C drive

---

## V8 Architecture — How JS Code Actually Runs

```
JS Code (.js file)
  ↓
Parser  →  checks syntax errors, removes unwanted spaces & comments
  ↓
AST  →  converts code into tree format, separating variables, functions, loops
  ↓
Interpreter  →  converts AST to Byte Code
  ↓
Byte Code  →  machine readable only
  ↓
Profiler  →  checks if it's HOT or COLD code
  ↓
Machine Readable Code  →  Output
```

### Parser
Reads the JS file and cleans it up before passing it on. Removes:
- Syntax errors
- Comments
- Unwanted spaces

### AST — Abstract Syntax Tree
Takes the cleaned code and converts it into a tree structure. Divides everything into:
- Variables
- Functions
- Expressions
- Classes
- Objects
- Loops

### Profiler — Hot Code vs Cold Code
After Byte Code is ready, the Profiler checks how often each piece of code runs:

**HOT code — runs repeatedly (multiple times)**
- Sent to JIT — Just In Time compiler (TurboFan)
- TurboFan optimises the code and manages memory
- Output: optimised machine code → faster execution

**COLD code — runs rarely**
- Runs as normal — no special optimisation

Both paths end up producing Machine Readable Code → Output.

---

## One Thing to Remember

> *"JS is a run-time language — everything is executed at run time."*

This is why JS behaves differently from compiled languages. Nothing is pre-compiled and sitting ready — it all happens live when the code runs.
