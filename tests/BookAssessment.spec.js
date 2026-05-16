import{test,expect} from'@playwright/test';

test('Book class', async ({ page }) => {
await page.goto('https://proactiv-fitness-fe.vercel.app/');
//await page.getByText('School Gymnastics').click();
await page.getByText('Login').click();
await page.waitForTimeout(4000);
await page.locator('#input-email-login').fill('brock1234@gmail.com');
await page.locator('input[placeholder="Enter your password"]').fill('Brock1234@');
await page.locator('#auth-login-btn').click();
//await page.waitForTimeout(4000);

// Wait for Parent Dashboard
await page.waitForURL(/dashboard/, { timeout: 60000 });

// Verify Dashboard
await expect(page.locator('text=Parent Dashboard'))
.toBeVisible();
await page.waitForTimeout(7000)
//await page.getByText('BL').click();
await page.getByText('BL', { exact: true }).click();
await page.getByText('Visit Website').click();
await page.getByText('Book Assessment').click();
await page.waitForTimeout(3000);
await page.locator('#assessment-card-69e52fe6873f5f031d99853a-book-btn')
          .click({ force: true });
await page.getByRole('button', { name: 'Multi-Sports' })
          .click({ force: true });
await page.getByRole('button', { name: 'Next Step' }).click();
await expect(page.locator('#childName'))
      .toBeVisible();
await page.locator('#childName').fill('jonny');
await page.locator('#childAge').selectOption('5');
await page.locator('#child-details-gender-boy-btn').click();
await page.locator('#booking-booking-flow-btn-next-step').click();
// Wait for next page element
await expect(page.locator('#select-location-east-btn'))
      .toBeVisible();
      //await page.waitForTimeout(2000);
await page.locator('#select-location-east-btn')
          .click({ force: true });
await page.locator('#booking-booking-flow-btn-next-step')
          .click({ force: true });
// Wait for Date & Time page

await page.locator('#select-datetime-date-4-btn')
          .click({ force: true });
await page.waitForTimeout(2000);
await page.locator('[id="select-datetime-time-16:00-btn"]')
          .click();
await page.locator('#booking-booking-flow-btn-next-step').click();
await expect(page.locator('#parentName'))
      .toBeVisible();
await page.locator('#parentName').fill('Raymond');
await page.locator('#parentEmail').fill('raymond@gmail.com');
await page.locator('#parentPhone').fill('9876543398');
await page.locator('input[type="checkbox"]')
          .first()
          .check();
          await page.locator('#booking-booking-flow-btn-next-step').click();
          await expect(
    page.locator('#booking-steps-review-confirm-btn')
).toBeVisible();
await page.waitForTimeout(2000);
          await page.locator('#booking-steps-review-confirm-btn').click();
          await page.waitForTimeout(4000);
});




