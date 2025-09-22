import { test, expect } from "@playwright/test";
import { TripPage } from "../pages/TripPage.js";

test("Trip search shows results including 'Walk' option", async ({ page }) => {
  const trip = new TripPage(page);
  await trip.goto();

  await trip.setOrigin("5333 Casgrain Avenue, Montréal");
  await trip.setDestination("1321 Rue Ste-Catherine O, Montréal");

  await expect(trip.tripItemsVisible.first()).toBeVisible();
  await expect(trip.otherOptions).toContainText('Walk');

  console.log('final URL:', page.url());});
