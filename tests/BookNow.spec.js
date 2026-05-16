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
await page.waitForTimeout(5000)
//await page.getByText('BL').click();
await page.getByText('BL', { exact: true }).click();
await page.getByText('Visit Website').click();
await page.locator('div.rounded-l-3xl').click();
await page.waitForTimeout(3000);
await page.locator('#schedule-slot-69f324272c06866fb445cadf-book-btn').click();
await page.getByPlaceholder("Enter child's full name")
          .fill('Rahul');
await page.locator('input[type="number"]')
          .fill('10');
await page.locator('input[type="date"]').fill('2026-05-12');
await page.locator('#scheduling-booking-flow-next-btn').click(); 
await page.getByPlaceholder("Enter your full name").fill('mathu headen');
await page.getByPlaceholder("your.email@example.com").fill('mathu12@gmail.com');
await page.getByPlaceholder('+852 1234 5678').fill('98765432');
await page.getByPlaceholder("Emergency contact name and phone number").fill('jonny');
await page.locator('#scheduling-booking-flow-next-btn').click();    
await page.getByText('Pay by Card').click();  
await page.locator('#scheduling-booking-flow-confirm-btn').click();
  
});