import { test, expect, Page } from '@playwright/test';

export class HeaderNavPage{
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // locators
    homeButton = () => this.page.locator("//nav[@role='navigation']//span[contains(text(),'Home')]");
    ownersButton = () => this.page.locator("//nav[@role='navigation']//span[contains(text(),'Owners')]");
    ownersSearchButton = () => this.page.locator("//nav[@role='navigation']//span[contains(text(),'Search')]");
    ownersAddNewButton = () => this.page.locator("//nav[@role='navigation']//a[@routerlink='/owners/add']/span[contains(text(),'Add New')]");
    veterinariansButton = () => this.page.locator("//nav[@role='navigation']//span[contains(text(),'Veterinarians')]");
    veterinariansAllButton = () => this.page.locator("//nav[@role='navigation']//span[contains(text(),'All')]");
    veterinariansAddNewButton = () => this.page.locator("//nav[@role='navigation']//a[@routerlink='/vets/add']/span[contains(text(),'Add New')]");
    petTypesButton = () => this.page.locator("//nav[@role='navigation']//span[contains(text(),'Pet Types')]");
    specialtiesButton = () => this.page.locator("//nav[@role='navigation']//span[contains(text(),' Specialties')]");

    // actions
    public async clickHomeButton() {
        await this.homeButton().click();
    }

    public async clickOwnersButton() {
        await this.ownersButton().click();
    }

    public async clickOwnersSearchButton() {
        await this.ownersButton().click();
    }

    public async clickOwnersAddNewButton() {
        await this.ownersButton().click();
    }

    public async clickVeterinariansButton() {
        await this.veterinariansButton().click();
    }

    public async clickVeterinariansAllButton() {
        await this.veterinariansButton().click();
    }

    public async clickVeterinariansAddNewButton() {
        await this.veterinariansButton().click();
    }

    public async clickPetTypesButton() {
        await this.petTypesButton().click();
    }

    public async clickSpecialtiesButton() {
        await this.specialtiesButton().click();
    }
}

