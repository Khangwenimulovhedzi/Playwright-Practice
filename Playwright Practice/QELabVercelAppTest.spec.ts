import { test, expect } from '@playwright/test';

test('Selling airtime to a customer', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Sell' }).click();
  await page.getByTestId('input-phone').fill('0725837683');
  await page.getByTestId('input-customer-name').click();
  await page.getByTestId('input-customer-name').fill('Khangweni');
  await page.getByTestId('select-product').selectOption('airtime');
  await page.getByTestId('select-provider').selectOption('Vodacom');
  await page.getByTestId('input-pin').click();
  await page.getByTestId('input-pin').fill('1235');
  await page.getByTestId('quick-R50').click();
  await page.getByTestId('input-reference').click();
  await page.getByTestId('input-reference').fill('This Airtime is issured by Rendani');
  await page.getByTestId('check-terms').check();
  await page.getByTestId('submit-btn').click();
    await expect(page.getByTestId('success-message')).toBeVisible();
});