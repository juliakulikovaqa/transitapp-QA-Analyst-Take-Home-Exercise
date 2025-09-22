export class TripPage {
  constructor(page) {
    this.page = page;

    this.origin = page.getByRole("combobox", { name: "Origin search bar" });
    this.destination = page.getByRole("combobox", { name: "Destination search bar"});

    this.listbox = page.getByRole("listbox");
    this.firstOption = this.listbox.getByRole("option").first();

    this.tripItems = page.locator('[data-sentry-component="TripItem"]');
    this.tripItemsVisible = page.locator('[data-sentry-component="TripItem"]:visible');

    this.otherOptions = page.getByLabel("Other options").getByRole("option");

    this.optionsBtn = page.getByRole("button", { name: "Options" });
    this.timePickerBtn = page.getByRole("button", { name: "select departure/arrival time"});
    this.timeOption = (label) => page.getByRole("option", { name: label });
    this.saveBtn = page.getByRole("button", { name: "Save" });

    this.errorCardVisible = page.locator('[data-sentry-component="ErrorCard"]:visible');
  }

  async goto() {
    await this.page.goto("https://transitapp.com/en/trip");
  }

  async setOrigin(address) {
    await this.origin.fill(address);
    await this.pickFirstSuggestionFor(this.origin, 10000);
  }

  async setDestination(address) {
    await this.destination.fill(address);
    await this.pickFirstSuggestionFor(this.destination, 10000);
  }

  async pickFirstSuggestionFor(input, timeout = 10000) {
    const listbox = this.page.getByRole('listbox', { name: 'Suggestions' });
    await listbox.waitFor({ state: 'visible', timeout });

    const placesGroup = listbox.getByRole('group', { name: 'Places' });
    await placesGroup.waitFor({ state: 'visible', timeout });

    const firstPlace = placesGroup.locator('[role="option"]:not([aria-disabled="true"])').first();
    await firstPlace.click({ timeout });
  }

  async setDepartureTime(label) {
    await this.optionsBtn.click();
    await this.timePickerBtn.click();
    await this.timeOption(label).click();
    await this.saveBtn.click();
  }
}
