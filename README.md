# THEORY GRID

An endless streak game for revising the UK car theory test. Four answers, like the real test. Get one wrong and the screen goes red, the phone buzzes, and you are shown the right answer and why. Reach a streak of 43 to cross the pass line.

## Get it

- **Android app:** download `theory-grid.apk` from the [latest release](https://github.com/joycemakes/theory-grid/releases/latest) and open it on your phone.
- **Browser or desktop:** https://joycemakes.github.io/theory-grid/

## How it plays

- Every 5 in a row raises the score multiplier; answering fast adds a speed bonus.
- Every 10 in a row earns a shield (two at most) that absorbs one wrong answer.
- Missed questions come back for a rematch until answered right twice.
- 30 right answers in a day builds a day streak, with an optional 7 pm reminder.

## Build the Android app

Needs Node, the Android SDK and a JDK. `npm install`, then `node build-www.js && npx cap sync android`, then `gradlew assembleRelease` inside `android/`. Release signing reads `android/keystore.properties`, which is not in the repo.

## Questions

All 202 questions in `questions.js` are original. They were written from The Highway Code and other GOV.UK guidance and are not copied from the official DVSA revision question bank, which needs a paid DVSA licence to reuse.

Contains public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). Source: [The Highway Code](https://www.gov.uk/guidance/the-highway-code), Department for Transport and Driver and Vehicle Standards Agency.

This is a revision aid, not an official DVSA product. Check anything you are unsure of against the current Highway Code.
