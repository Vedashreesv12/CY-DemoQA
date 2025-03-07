import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'
import path from "path";


async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
    e2e: {
        specPattern: 'cypress/Features/**/*.feature',
        setupNodeEvents,
        viewportWidth: 1080,
        viewportHeight: 520,
    },
    env: {
        stepDefinitions: path.join(__dirname, "cypress/Steps/**/*.ts")  // Ensures Cypress can locate step definitions
    }
})
