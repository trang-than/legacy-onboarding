# **Onboarding Project: Test Automation Engineering**

### Setup env variable:

Create an `.env` file from `.env_sample`, provide env information before start tests

### Run test:

**Run all the tests for Janus Beta:** `npx codeceptjs run --grep '@janus_beta'`

**Run all of the Webdriver-based tests:** `npx codeceptjs run --grep '@webdriver_ui'`

**Run all of the REST-based tests:**`npx codeceptjs run --grep '@rest_api'`

**Run all the tests that are safe for production:** `npx codeceptjs run --grep '@safe_for_production'`

### Run Feature file:

**Run all of the Feature tests:** `npx codeceptjs run --features --steps`

**Run all of the Feature for Webdriver-based tests:** `npx codeceptjs run --features --grep '@webdriver_ui' --steps`

**Run all of the Feature for REST-based tests:** `npx codeceptjs run --features --grep '@rest_api' --steps`
