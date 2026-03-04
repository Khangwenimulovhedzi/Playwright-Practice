// Question: 

// Playwright "Secure Login" Automation (10 Marks)

// Scenario: Create a resilient automation script for the Flash Merchant Portal.

// 1.1 Scripting (7 Marks)

// Write an async/await Playwright test that:
// •	Navigates to https://portal.flash.co.za/login.
// •	Uses a Locator to enter "admin_qa" into the Username field.
// •	Enters "SecurePass123!" into the Password field.
// •	Clicks the "Sign In" button.
// •	Asserts that the URL contains the word "dashboard".


// Answer:

import { test, expect } from '@playwright/test';

test('Secure Login to Flash Merchant Portal', async ({ page }) => {
await page. goto('https://portal.flash.co.za/login');
await page.getByLabel('Username'). Fill('admin_qa');
await page.getByLabel('Password') .Fill('SecurePass123!');
await page.getByRole('button', {name: 'Sign In'}) .Click();
await expect(page) .toHaveURL(/dashboard/);
});
