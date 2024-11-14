import { expect, type Locator, type Page } from '@playwright/test';

export class PetTypesPage{
    readonly page: Page;
    readonly homeButton: Locator;
    readonly addButton: Locator;
    readonly editPetButton: Locator;
    readonly deletePetButton: Locator;
    readonly newPetNameInput: Locator;
    readonly newPetNameSaveButton: Locator;
    readonly lastAddedPetName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator("//div[@class='content-wrapper']//button[contains(text(),'Home')]");
        this.addButton = page.locator("//div[@class='content-wrapper']//button[contains(text(),'Add')]");
        this.editPetButton = page.locator("//table[@id='pettypes']//tr/td/input[@ng-reflect-model='cat']/parent::td/following-sibling::td/button[contains(text(),'Edit')]");
        this.deletePetButton = page.locator("//table[@id='pettypes']//tr/td/input[@ng-reflect-model='cat']/parent::td/following-sibling::td/button[contains(text(),'Delete')]");
        this.newPetNameInput = page.locator("//input[@name='name']");
        this.newPetNameSaveButton = page.locator("//button[@type='submit']");
        this.lastAddedPetName = page.locator("//table[@id='pettypes']//tr[last()]//input[@name='pettype_name']");
        this.lastAddedPetName = page.locator("//input[@name='pettype_name']").last();
    }

    // locators
    
    // parametrization required
    // add new pet type
    
    // actions
    async clickAddNewPet() {
        await this.addButton.click();
    }

    public async inputNewPetName(name: string) {
        await this.newPetNameInput.fill(name);
    }

    public async clickSaveNewPetButton() {
        await this.newPetNameSaveButton.click();
    }

}