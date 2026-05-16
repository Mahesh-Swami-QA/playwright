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
await page.waitForTimeout(3000);
//await page.getByText('School Gymnastics').click();
await page.locator('#header-nav-school-gymnastics')
.click();
await page.getByRole('link', { name: 'Book Trial Class' })
.first()
.click();
//await page.waitForTimeout(3000);
await page.locator('input[placeholder="John Doe"]').fill('dynamic');
await page.locator('input[placeholder="john@example.com"]').fill('dynamic12@gmail.com');
await page.locator('input[placeholder="Enter phone number"]').fill('98765432');
await page.getByPlaceholder("Child's name")
.fill('mathu');
await page.locator('select[name="childAge"]')
.selectOption('5');
await page.locator('select[name="location"]')
          .selectOption('Cyberport');
await page.locator('select[name="program"]').selectOption('Gymnastics');          
await page.locator('input[name="preferredDate"]').fill('2026-05-15');
await page.waitForTimeout(3000);
//await page.locator('select[name="preferredTime"]').selectOption('Morning(10.00 AM');
await page.locator('select[name="preferredTime"]')
          .selectOption('morning');
await page.locator('#marketing-book-trial-btn').click();          
await page.waitForTimeout(3000);
});