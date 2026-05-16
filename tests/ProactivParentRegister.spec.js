import { test,expect } from "@playwright/test";
test('Parent registrstion',async ({page})=>{
    await page.goto('https://proactiv-fitness-fe.vercel.app/register');
    //maximize window
    await page.setViewportSize({width:1536,height:864});
    //Fill the email
    await page.locator('input[placeholder="your.email@example.com"]').fill('shaw137@gmail.com');
    //Fill the password
    await page.locator('input[name="password"]')
.fill('Ricky121@');
// Fill the confirm password
await page.locator('input[name="confirmPassword"]')
.fill('Ricky121@');
//click on continue button
//await page.waitForTimeout(2000);
await page.locator('#auth-register-step1-btn-continue').click();
await page.waitForTimeout(1000);
//fill for step 2
await page.locator('input[name="firstName"]').fill('shaw');
// fill the last name
await page.locator('input[name="lastName"]').fill('prithvi');
//fill the phone number
await page.locator('input[placeholder="9876543210"]').fill('89898998');
//await page.waitForTimeout(3000);
await page.locator('input[name="dateOfBirth"]').fill('2000-04-03');
//click on gender
await page.locator('#select-components-auth-RegisterStep2-1').selectOption({ label: 'Male' });
await page.waitForTimeout(1000);
await page.locator('#auth-register-step2-btn-continue').click();
//await page.waitForTimeout(3000);
//step-3
await page.locator('input[placeholder="123 Main Street"]').fill('Gachawali hyderabad 123');
//fill city
await page.locator('input[placeholder="New York"]').fill('hyderabad');
await page.locator('input[placeholder="NY"]').fill('Telengana');
await page.locator('input[placeholder="10001"]').fill('411034');
await page.locator('input[placeholder="United States"]').fill('india');
await page.locator('#auth-register-step3-btn-continue').click();
//await page.waitForTimeout(3000);
//step-4
await page.locator('#auth-register-step4-btn-2').click();
await page.locator('input[placeholder="First name"]').fill('kufu');
await page.locator('input[placeholder="Last name"]').fill('panda');
await page.locator('input[name="students.0.dateOfBirth"]').fill('2000-03-05');
await page.locator('#select-components-auth-RegisterStep4-1').click();
await page.locator('input[placeholder="School name"]').fill('rsv scholl');
await page.locator('textarea[placeholder="Any allergies, medical conditions, or special needs..."]').fill('No medical issue');
await page.locator('#auth-register-step4-btn-continue').click();
//await page.waitForTimeout(3000);
// step-5
await page.locator('#auth-register-step5-btn-2').click();
await page.locator('input[placeholder="First name"]').fill('tiger');
await page.locator('input[placeholder="Last name"]').fill('chita');
await page.locator('#select-components-auth-RegisterStep5-1')
.selectOption('parent');
await page.locator('input[placeholder="9876543210"]').fill('89765654');
await page.locator('input[placeholder="email@example.com"]').fill('tiger@gmail.com');
await page.locator('#auth-register-step5-btn-continue').click();
//await page.waitForTimeout(3000);
await page.locator('input[name="acceptTerms"]').check();
await page.locator('input[name="acceptPrivacy"]').check();
await page.locator('#auth-register-step6-btn').click();
await page.waitForTimeout(7000);
//await page.locator('#auth-register-step6-btn').click();

// Wait for Login Page
await page.waitForURL(/login/, { timeout: 60000 });

// Verify Login Page
await expect(
page.getByRole('heading', { name: 'Welcome Back' })
).toBeVisible();

// Login
await page.locator('input[type="email"]')
.fill('shaw137@gmail.com');

await page.locator('input[type="password"]')
.fill('Ricky121@');

await page.locator('#auth-login-btn')
.click();

// Wait for Parent Dashboard
await page.waitForURL(/dashboard/, { timeout: 60000 });

// Verify Dashboard
await expect(page.locator('text=Parent Dashboard'))
.toBeVisible();
await page.waitForTimeout(7000)
});



