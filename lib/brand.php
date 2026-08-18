<?php
/* Everything that makes this installation Fungi rather than SPS, Equinix or Maziv.
 *
 * THIS IS THE ONLY PER-SITE PHP FILE. Every other .php file in this repository
 * is shared verbatim with the other three academies and is written here by
 * tools/sync-backend.php in the SPS repository, which overwrites without
 * asking. It refuses to touch this one.
 *
 * So: if you find yourself wanting to edit a page because "Fungi says X and SPS
 * says Y", the answer is a new key in here and brand('key') in the page — added
 * to SPS and synced back out. If you edit the page here instead, the next sync
 * silently reverts you.
 *
 * Nothing secret belongs here — this file is deployed into the web root along
 * with everything else. Credentials live in ~/private/fungiacademy-config.php.
 */

return [

  /* The academy, and the company whose academy it is.
     TO CONFIRM: the site currently uses two different names for the company.
     contact.html's footer said "Fungi Utilities (Pty) Ltd" and pm-progress.html's
     said "Fungi — Digital Utility" — two different entities claiming copyright
     on two pages of one site, which is what happens when a paragraph is copied
     and half-edited. The registered name is used below because a copyright line
     and a privacy notice both need the entity, not the tagline. If the registered
     name is something else, this is the one line to change. */
  'academy'       => 'Fungi Academy',
  'company'       => 'Fungi Utilities (Pty) Ltd',

  /* Used mid-sentence — "for Fungi employees", "Fully funded by Fungi". */
  'company_short' => 'Fungi',

  /* Relative to the site root. Fungi's logo lives in images/; SPS's is at the
     top level. Both are correct — do not "tidy" either to match the other, as
     the file is referenced from the static .html pages this application never
     touches, and moving it breaks those. */
  'logo'          => 'images/Fungi-logos-03.webp',
  'logo_alt'      => 'Fungi — Digital Utility',

  /* Registrations and reset notifications. Centenary runs the academy for all
     four companies, so this is Centenary's address, not Fungi's. */
  'academy_email'   => 'kgomotso@centenarynetworks.com',

  /* Fungi publishes a company-side address as well; SPS does not, and leaves
     this empty so the line is omitted rather than rendered blank. */
  'enquiries_email' => 'info@fungienergy.co.za',

  /* PLACEHOLDER — carried over from the static site, where it was also a
     placeholder. It needs Fungi's real switchboard before anyone is told the
     site is finished, or a learner will dial it. */
  'phone'         => '012 345 6789',
  'phone_href'    => '0123456789',
  'office_hours'  => 'Monday–Friday, 08:00–17:00 SAST',

  /* Placeholder text in the registration form. Each company numbers its staff
     and names its teams differently, and a form suggesting another company's
     conventions looks like it was not written for you. */
  'empno_example' => 'e.g. FU1234',
  'dept_example'  => 'e.g. Metering, Billing, Field Ops',

  /* Centenary Networks' accreditation, not Fungi's. Identical on all four sites
     because it is one accreditation held by one provider. */
  'accred_no'     => '07-QCTO/SDP180526182035',
  'accred_valid'  => '15 May 2026 – 14 May 2031',

  /* Bumped on any release that changes styles.css or a .js file.
     See asset() in lib/chrome.php for why this is not optional. */
  'asset_version' => '20260818',
];
