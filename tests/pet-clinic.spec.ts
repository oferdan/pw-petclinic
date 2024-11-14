import { test, expect } from '@playwright/test';
import { PetTypesPage } from './pages/petTypes.page';
import { HeaderNavPage } from './pages/headerNav.page';


test('has title', async ({ page }) => {
    await page.goto('http://35.246.211.127:81/petclinic/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Petclinic Angular");
});

test('POM test', async ({ page }) => {
    const petTypePage = new PetTypesPage(page);
    const headerNavPage = new HeaderNavPage(page);

    await page.goto('http://35.246.211.127:81/petclinic/');

    await   headerNavPage.clickPetTypesButton();
    await   petTypePage.clickAddNewPet();
    await   petTypePage.inputNewPetName("dogo");
    await   petTypePage.clickSaveNewPetButton();

    // await expect(petTypePage.lastAddedPetName).toHaveText("dogo"); // not working
    await expect(petTypePage.lastAddedPetName).toHaveValue("dogo");


});
