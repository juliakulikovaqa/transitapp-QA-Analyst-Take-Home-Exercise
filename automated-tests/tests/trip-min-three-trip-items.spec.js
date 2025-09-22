import { test, expect } from "@playwright/test";
import { TripPage } from "../pages/TripPage.js";

test("At least 3 TripItems after setting special data", async ({ page }) => {
  const trip = new TripPage(page);
  await trip.goto();

  await trip.setOrigin("5333 Casgrain Avenue, Montréal");
  await trip.setDestination("1321 Rue Ste-Catherine O, Montréal");

  await trip.setDepartureTime("12:00 PM");

  await expect(trip.tripItemsVisible.nth(2)).toBeVisible({ timeout: 15000 });

  console.log('final URL:', page.url());
});
