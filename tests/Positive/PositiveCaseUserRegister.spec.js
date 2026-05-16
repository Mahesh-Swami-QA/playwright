import { test, expect } from '@playwright/test';

test('Valid User Registration', async ({ page }) => {

  await page.goto('https://proactiv-fitness-fe.vercel.app/account/register');

  //await page.getByPlaceholder('John').fill('Ricky');
  await page.locator('input[placeholder="John"]').fill('james');
  await page.locator('input[placeholder="Doe"]').fill('dino')
  await page.waitForTimeout(4000);

 // await page.getByPlaceholder('Doe').fill('Trump');

  await page.locator('#input-email-account-register')
    .fill('ricky121@gmail.com');
    await page.locator('input[placeholder="9876543210"]').fill('98766789');
    await page.locator('#input-date-account-register').fill('2010-05-04');
await page.locator('input[placeholder="e.g. Test@1234"]').fill('Ricky88@')
await page.locator('input[placeholder="Re-enter password"]').fill('Ricky88@');
await page.locator('#account-register-btn').click();
await page.waitForTimeout(4000);

  await expect(page).toHaveURL(/login/);

});