# TransitApp – Manual & Automated Tests

This repository contains both manual and automated tests for the [TransitApp Trip Planner](https://transitapp.com/en/trip).

---

## How to install and run tests

```
npm ci
npm test
npm run report
```

---

## Why Playwright

I considered both Cypress and Playwright.  
I chose Playwright because:

- It supports multiple browsers (Chromium, Firefox, WebKit) out of the box, while Cypress runs only in Chromium-based browsers.
- Playwright has built-in waiting mechanisms and reliable locators, which makes tests less flaky.
- It provides a single package with test runner, parallel execution, HTML reports, and trace viewer — no need to add extra plugins.
- Easier to configure for CI/CD and headless runs.

---

## Improvements

Developers could add data-testid attributes to key elements.  
This would make automated tests more reliable and easier to maintain.

## Use of LLMs

I wrote about 90% of the code myself.  
I used an LLM mainly for:

- structuring the test cases and Page Object,
- debugging some Playwright issues,
- and especially for resolving the geolocation permission popup problem.

All generated suggestions were validated by me: I ran the tests locally, adjusted selectors, and simplified the logic until it worked reliably. The final implementation and decisions (test design, naming, structure) were made by me.
