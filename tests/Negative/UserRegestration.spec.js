import { test, expect } from '@playwright/test';

// 1. Empty First Name
test('Register with Empty First Name', async ({ page }) => {

  await page.goto('https://proactiv-fitness-fe.vercel.app/account/register');

  await page.locator('input[placeholder="John"]').fill('');
  await page.locator('input[placeholder="Doe"]').fill('dino');

  await page.locator('#input-email-account-register')
    .fill('james1@gmail.com');

  await page.locator('input[placeholder="9876543210"]')
    .fill('9876543210');

  await page.locator('#input-date-account-register')
    .fill('2010-05-04');

  await page.locator('input[placeholder="e.g. Test@1234"]')
    .fill('Ricky88@');

  await page.locator('input[placeholder="Re-enter password"]')
    .fill('Ricky88@');

  await page.locator('#account-register-btn').click();

  await page.waitForTimeout(3000);

});


// 2. Empty Last Name
test('Register with Empty Last Name', async ({ page }) => {

  await page.goto('https://proactiv-fitness-fe.vercel.app/account/register');

  await page.locator('input[placeholder="John"]').fill('james');
  await page.locator('input[placeholder="Doe"]').fill('');

  await page.locator('#input-email-account-register')
    .fill('james2@gmail.com');

  await page.locator('input[placeholder="9876543210"]')
    .fill('9876543210');

  await page.locator('#input-date-account-register')
    .fill('2010-05-04');

  await page.locator('input[placeholder="e.g. Test@1234"]')
    .fill('Ricky88@');

  await page.locator('input[placeholder="Re-enter password"]')
    .fill('Ricky88@');

  await page.locator('#account-register-btn').click();

  await page.waitForTimeout(3000);

});


// 3. Invalid Email Format
test('Register with Invalid Email', async ({ page }) => {

  await page.goto('https://proactiv-fitness-fe.vercel.app/account/register');

  await page.locator('input[placeholder="John"]').fill('james');
  await page.locator('input[placeholder="Doe"]').fill('dino');

  await page.locator('#input-email-account-register')
    .fill('jamesgmail.com');

  await page.locator('input[placeholder="9876543210"]')
    .fill('9876543210');

  await page.locator('#input-date-account-register')
    .fill('2010-05-04');

  await page.locator('input[placeholder="e.g. Test@1234"]')
    .fill('Ricky88@');

  await page.locator('input[placeholder="Re-enter password"]')
    .fill('Ricky88@');

  await page.locator('#account-register-btn').click();

  await page.waitForTimeout(3000);

});


// 4. Invalid Mobile Number
test('Register with Invalid Mobile Number', async ({ page }) => {

  await page.goto('https://proactiv-fitness-fe.vercel.app/account/register');

  await page.locator('input[placeholder="John"]').fill('james');
  await page.locator('input[placeholder="Doe"]').fill('dino');

  await page.locator('#input-email-account-register')
    .fill('james4@gmail.com');

  await page.locator('input[placeholder="9876543210"]')
    .fill('9676866');

  await page.locator('#input-date-account-register')
    .fill('2010-05-04');

  await page.locator('input[placeholder="e.g. Test@1234"]')
    .fill('Ricky88@');

  await page.locator('input[placeholder="Re-enter password"]')
    .fill('Ricky88@');

  await page.locator('#account-register-btn').click();

  await page.waitForTimeout(3000);

});


// 5. Password Mismatch
test('Register with Password Mismatch', async ({ page }) => {

  await page.goto('https://proactiv-fitness-fe.vercel.app/account/register');

  await page.locator('input[placeholder="John"]').fill('james');
  await page.locator('input[placeholder="Doe"]').fill('dino');

  await page.locator('#input-email-account-register')
    .fill('james5@gmail.com');

  await page.locator('input[placeholder="9876543210"]')
    .fill('9876543210');

  await page.locator('#input-date-account-register')
    .fill('2010-05-04');

  await page.locator('input[placeholder="e.g. Test@1234"]')
    .fill('Ricky88@');

  await page.locator('input[placeholder="Re-enter password"]')
    .fill('Ricky99@');

  await page.locator('#account-register-btn').click();

  await page.waitForTimeout(3000);

});


// 6. Empty All Fields
test('Register with Empty All Fields', async ({ page }) => {

  await page.goto('https://proactiv-fitness-fe.vercel.app/account/register');

  await page.locator('input[placeholder="John"]').fill('');
  await page.locator('input[placeholder="Doe"]').fill('');

  await page.locator('#input-email-account-register')
    .fill('');

  await page.locator('input[placeholder="9876543210"]')
    .fill('');

  await page.locator('#input-date-account-register')
    .fill('');

  await page.locator('input[placeholder="e.g. Test@1234"]')
    .fill('');

  await page.locator('input[placeholder="Re-enter password"]')
    .fill('');

  await page.locator('#account-register-btn').click();

  await page.waitForTimeout(3000);

});