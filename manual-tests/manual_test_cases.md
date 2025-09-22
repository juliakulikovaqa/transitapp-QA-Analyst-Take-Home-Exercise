**General Preconditions:** The app has been launched at least once
before (returning user). On launch, it opens directly to the main
screen.

---

**ID:** 01

**Description:** Verify that the app suggests adding a "Work" location
when "Home" and "Work" locations are not configured and current time is
within 6 AM -- 2 PM.

**Preconditions:**

- "Home" and "Work" locations are not configured

- Current time is set to 10:00 AM

**Steps:**

1.  Launch the app

**Expected Result:** The app suggests adding a "Work" location. The
"Work" icon is displayed to the right of the "Where to go" field.

---

**ID:** 02

**Description:** Verify that the app suggests adding a "Home" location
at the boundary value (2:00 PM) when "Home" and "Work" locations are not
configured.

**Preconditions:**

- "Home" and "Work" locations are not configured

- Current time is set to 2:00 PM

**Steps:**

1.  Launch the app

**Expected Result:** The app suggests adding a "Home" location. The
"Home" icon is displayed to the right of the "Where to go" field.

---

**ID:** 03

**Description:** Verify that a "Work" suggestion is not shown when user
has a "Home" location configured and the current geolocation does not
match the saved "Home" location.

**Preconditions:**

- "Home" location is configured

- "Work" location is not configured

- Current geolocation does not match the "Home" location

**Steps:**

1.  Launch the app

**Expected Result:** The app does not suggest adding a "Work" location.
The "Work" icon is not displayed to the right of the "Where to go"
field.
