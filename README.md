# Vitest Mock Demo

This repo demonstrates a Vitest module mocking issue in CI (GitHub Actions) with a minimal Vite + React setup.

## Setup

Clone the repo and install dependencies:

```sh
npm install
npm install --save-dev jsdom
```

## Run Tests Locally

```sh
npx vitest run src/__tests__/ApiMock.test.js
```

## GitHub Actions CI

The workflow file `.github/workflows/ci.yml` will automatically run the minimal test on push or pull request.

## Files

- `src/api.js`: Example API module using axios.
- `src/__tests__/ApiMock.test.js`: Minimal Vitest test with inline mock.
- `vite.config.js`: Vite and Vitest configuration.
- `.github/workflows/ci.yml`: CI workflow for GitHub Actions.

## Issue

- The test passes locally but fails in CI with a module mocking error.
- This repo is intended for reporting and reproducing the issue for the Vitest maintainers.

## Useful Commands

```sh
npm install
npm install --save-dev jsdom
npx vitest run src/__tests__/ApiMock.test.js
```

---
**If you encounter the error in CI, please see the workflow logs and link this repo in your Vitest GitHub issue.**
