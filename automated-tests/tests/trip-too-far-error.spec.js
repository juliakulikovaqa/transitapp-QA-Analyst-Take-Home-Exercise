import { test, expect } from "@playwright/test";
import { TripPage } from "../pages/TripPage.js";

test("Too long trip shows ErrorCard", async ({ page }) => {
  const trip = new TripPage(page);
  await trip.goto();

  await trip.setOrigin("5333 Casgrain Avenue, Montréal");
  await trip.setDestination("Toronto");

  await expect(trip.errorCardVisible).toContainText(
    "You're going too far!Sorry! We can't calculate super-long trip plans."
  );

  console.log('final URL:', page.url());});
