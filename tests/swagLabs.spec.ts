import {test, expect} from "@playwright/test"

//writting test for login
test.skip("Login", async({page})=>{

    //redirecting to the login page
    await page.goto("https://www.saucedemo.com/");

    //Enter user name
    await page.locator("#user-name").fill("standard_user");

    //Enter password
    await page.locator("#password").fill("secret_sauce");

    //Click Login button
    await page.locator(".submit-button").click();

    //Redirecting to the dashboard
    await page.goto("https://www.saucedemo.com/inventory.html");

    //click On first Item name and go inside the product
    await page.getByTestId("item-4-title-link").click();

    //Click on Back To Product
    await page.locator("#back-to-products").hover();
    await page.waitForTimeout(3000);
    await page.locator("#back-to-products").click();
    await page.waitForTimeout(3000);

    //Redirected to dashboard
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(3000);

    // const testExpect  = await expect(page.getByTestId("item-4-title-link")).toBeVisible();
    // console.log(testExpect);
})


//Click On menu icon for select options

test.skip("click On menu icon", async({page})=>{

     //redirecting to the login page
     await page.goto("https://www.saucedemo.com/");

     //Enter user name
     await page.locator("#user-name").fill("standard_user");
 
     //Enter password
     await page.locator("#password").fill("secret_sauce");
 
     //Click Login button
     await page.locator(".submit-button").click();
 
     //Redirecting to the dashboard
     await page.goto("https://www.saucedemo.com/inventory.html");

     //click on menu button
     await page.locator("#react-burger-menu-btn").click();

     //click on About 
     await page.locator("#about_sidebar_link").click();

     //redirect to the about page
     await page.goto("https://saucelabs.com/");

})


test.skip("Add to cart functionality", async({page})=>{
    //redirecting to the login page
    await page.goto("https://www.saucedemo.com/");

    //Enter user name
    await page.locator("#user-name").fill("standard_user");

    //Enter password
    await page.locator("#password").fill("secret_sauce");

    //Click Login button
    await page.locator(".submit-button").click();

    //Redirecting to the dashboard
    await page.goto("https://www.saucedemo.com/inventory.html");

    const items = page.locator('.inventory_item');

    //wait untill the items are visible
    await items.first().waitFor();

    //get the third item
    const thirdItem = items.nth(2);

    //click Add To Cart button in 3rd item
    await thirdItem.getByTestId("add-to-cart-sauce-labs-bolt-t-shirt").click();

    //Click On cart icon n
    await page.locator("#shopping_cart_container").click();

    ///avigate to Your cart page
    await page.goto("https://www.saucedemo.com/cart.html");

    //click On continue shopping button
    await page.locator("#continue-shopping").click();

    //await expect(thirdItem.getByTestId("add-to-cart-sauce-labs-bolt-t-shirt")).toHaveRole('button');

    await page.waitForTimeout(3000);
})


test.skip("Remove from cart", async({page})=>{
    //redirecting to the login page
    await page.goto("https://www.saucedemo.com/");

    //Enter user name
    await page.locator("#user-name").fill("standard_user");

    //Enter password
    await page.locator("#password").fill("secret_sauce");

    //Click Login button
    await page.locator(".submit-button").click();

    //Redirecting to the dashboard
    await page.goto("https://www.saucedemo.com/inventory.html");

    const items = page.locator('.inventory_item');

    //wait untill the items are visible
    await items.first().waitFor();

    //get the third item
    const thirdItem = items.nth(2);

    //click Add To Cart button in 3rd item
    await thirdItem.getByTestId("add-to-cart-sauce-labs-bolt-t-shirt").click();

    //Click On cart icon n
    await page.locator("#shopping_cart_container").click();

    ///avigate to Your cart page
    await page.goto("https://www.saucedemo.com/cart.html");

    //click On continue shopping button
    await page.getByRole("button", {name: 'Remove'}).click();

    //await expect(thirdItem.getByTestId("add-to-cart-sauce-labs-bolt-t-shirt")).toHaveRole('button');

    await page.waitForTimeout(3000);
})


test("Click On Social Media links", async({page})=>{
    //redirecting to the login page
    await page.goto("https://www.saucedemo.com/");

    //Enter user name
    await page.locator("#user-name").fill("standard_user");

    //Enter password
    await page.locator("#password").fill("secret_sauce");

    //Click Login button
    await page.locator(".submit-button").click();

    //Redirecting to the dashboard
    await page.goto("https://www.saucedemo.com/inventory.html");

    //select the first socal media link
    // const socialMediaItems = await page.getByRole("listitem").nth(1);
    // socialMediaItems.click();

    await page.locator("//a[normalize-space()='Twitter']").click();
    await page.waitForTimeout(3000);
})


test("check drop down", async({page})=>{
    //redirecting to the login page
    await page.goto("https://www.saucedemo.com/");

    //Enter user name
    await page.locator("#user-name").fill("standard_user");

    //Enter password
    await page.locator("#password").fill("secret_sauce");

    //Click Login button
    await page.locator(".submit-button").click();

    //Redirecting to the dashboard
    await page.goto("https://www.saucedemo.com/inventory.html");

    //select the option from the dropdown
    await page.locator(".product_sort_container").selectOption({label: "Name (Z to A)"});

    await page.waitForTimeout(5000);

})







