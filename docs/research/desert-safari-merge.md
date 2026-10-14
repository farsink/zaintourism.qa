# Research: Desert Safari page merge (authored locally, no copied content)

## Sources observed (authorized as design/content reference)

1. `https://www.dohatransittours.com/tours/desert-safari-qatar`
   - Full-page captures: `docs/design-references/doha-transit/desert-safari-desktop-full.png` (1440px), `desert-safari-mobile-full.png` (390px)
2. `https://nobletourismqatar.com/desert-safari-qatar/`
   - Cloudflare-blocked for direct/browser fetch; text evidence obtained via Jina reader fallback. No screen capture possible.

## Gate confirmations (user, confirmed via questionnaire)

- All copy rewritten originally; only non-copyrightable facts carried over (durations, pickup points, price figures, geographic facts).
- Third-party photos NOT copied. User requested "similar images" — sourced from Wikimedia Commons under CC licenses instead.
- Merged into existing route `/tours/desert-safari-qatar` (Next.js Pages Router path `src/pages/tours/[slug].tsx`).
- Local-only: no deploys, no external form activation, no analytics. Preview on loopback only.

## Source → local route map

| Source section (Doha Transit) | Source section (Noble) | Local decision |
| --- | --- | --- |
| Breadcrumb + photo gallery header | — | Skip (hero already carries the imagery); 4-image gallery section added lower |
| Title, rating, meta chips, badges | Quick facts band 01–04 | `QatarTourStatsStrip` (4 stat chips) after hero |
| Sticky booking card (date pickers, steppers, cart) | Booking form + add-on pricing | Skipped — no live booking flow locally; booking CTAs route to contact page |
| About this tour + bullets | Route overview | Covered by existing Overview section (01) |
| — | Numbered feature cards 01–06 | Covered by existing Highligts/overview content; not duplicated |
| Itinerary (6 steps, red dots) | Itinerary 01–06 | Existing numbered itinerary section (02), extended to 6 tour-specific steps |
| What's included / Not included chips | Included / Optional / Important notes | `included`/`excluded` chip lists + `notes` list |
| Prices per person (group tiers, save %) | Transparent pricing narrative, 2-guest rate | Static price table (`priceTiers`, `childPrice`, `privateNote`) — no dynamic calculator |
| FAQ accordion | FAQ (8 questions) | Existing `QatarFaqAccordion` fed with tour-specific FAQs (rewritten) |
| Guest reviews (their guests' text) | — | NOT copied. Original sample reviews, each labeled "Sample review (preview)" |
| You might also like (4 cards) | Package comparison cards | Related-tours row: 3 cards reusing `QatarTourCard` |
| — | "About Khor Al Adaid" factual note | Fact folded into stats/FAQ wording ("protected natural reserve", tentative-list accurate) |

## Asset provenance (all Wikimedia Commons, downloaded locally 1920px)

| Local file | Source file | Author | License |
| --- | --- | --- | --- |
| `public/images/experiences/desert-safari/inland-sea.jpg` | Khor Al Adaid Inland Sea and desert in Katar.jpg | FLASHPACKER TRAVELGUIDE | CC BY-SA 2.0 |
| `public/images/experiences/desert-safari/dune-sunset.jpg` | Sunset on a Qatari dune.JPG | Nmvriend | CC BY-SA 4.0 |
| `public/images/experiences/desert-safari/camel-ride.jpg` | Camel rider in Qatar (3204838350).jpg | Peter Dowley | CC BY 2.0 |
| `public/images/experiences/desert-safari/desert-meets-sea.jpg` | Desert Meets Sea (6996853845).jpg | Steven Byles | CC BY-SA 2.0 |

Commons page URL per file: `https://commons.wikimedia.org/wiki/<File name>`. Attribution present above; license grants adaptation/module reuse with attribution — if the site ever ships publicly, credit must surface in an image-credits section.

## Facts carried over (non-copyrightable)

Duratiom ≈ 4 h door-to-door; pickup from hotel/airport/cruise terminal; shared rates $70 (1 pax) / $49 (2–3) / $45 (4–6); child 3–11 $35; private 4×4 from ~$300/vehicle; vehicles: Land Cruiser-class 4×4; Khor Al Adaid is a protected reserve on Qatar's UNESCO tentative list (not an inscribed site); dune bashing not advised during pregnancy or with serious back/neck/heart conditions.

## Not copied / substituted

- All prose (headings, descriptions, itineraries, FAQs, review texts) rewritten.
- Their photography, logos, badges and review content excluded entirely.
- Booking/cart/checkout widgets replaced with contact-page CTAs (stays local-only).

---

# Update 2: All-tours listing page merge

## Sources observed

1. `https://www.dohatransittours.com/tours` — full-page captures saved to `docs/design-references/doha-transit/tours-listing-desktop-full.png` (1440px) and `tours-listing-mobile-full.png` (390px). Structure: dark hero, category filter chips with counts, 12-card grid (image, category + duration chips, badge, rating, description, price, View).
2. `https://nobletourismqatar.com/doha-tours/` — text evidence via Jina reader. Structure: hero with 3 stats (24 experiences / 7 categories / local support), numbered "Tour Finder" category cards, category-band sections (01–24 numbered tour cards), "Which Doha Tour Is Right for You?" chooser (6 situation→tour cards), "Popular Places Featured Across Our Tours" (8 place cards), contact-commitment trio.

## Local decision map (route: `/tours`, file `src/pages/tours.tsx` — rewritten)

| Source section | Adapted locally |
| --- | --- |
| Doha Transit chip filters + grid | Replaced by Noble's category sections (anchored `#desert-safaris` etc.) — static site, section anchors beat JS filtering |
| Noble hero stats | `QatarTourStatsStrip`: 12 tours / private or shared / Doha-based / door-to-door pickup |
| Noble "Tour Finder" | 6 numbered finder cards linking to section anchors |
| Noble category bands 01–24 | 6 numbered category sections holding all 12 QatarTour entries (`featured` + `remaining`), linked via existing `QatarTourCard` |
| Noble chooser | "Which route suits your stay?" — 6 rewritten situation→route cards |
| Noble places grid | "Popular places across our tours" — 8 rewritten place cards linked to matching tour pages |
| Both sources' prices | Excluded entirely — site-wide policy (no payment displays) |
| Closing CTA | Unified home CTA band per standing instruction |

No source images, logos, review content or prose copied; all captions and headings are original. No new assets downloaded.

## Preview/verification

`tsc --noEmit` ✓, `next build` ✓, loopback `next start` on :4173 ✓. Note: the project uses `output: 'standalone'`, so `next start` serves stale hashed assets after repeated rebuilds — restart the server after every build for accurate previews. Anchor navigation (`/tours#culture` etc.) verified with scroll-mt for the fixed header; no horizontal overflow at 1440/390.

## Update 3: Places section image cards (`/tours`)

Reused local assets for 5 of 8 cards (museum-souq-waqif, national-museum-katara, doha-city-tour, desert-safari/inland-sea, north-qatar-zubarah). 3 new images from Wikimedia Commons → `public/images/places/`:

| Local file | Source file | Author | License |
| --- | --- | --- | --- |
| souq-waqif.jpg | Souq Waqif, Doha, Catar, 2013-08-05, DD 09.JPG | Diego Delso | CC BY-SA 3.0 |
| katara-village.jpg | Doha Katara Cultural Village Katara Square 5.jpg | Zairon | CC BY 4.0 |
| pearl-marina.jpg | Reflective waters at The Pearl Marina.jpg | km2bp (Mapillary) | CC BY-SA 4.0 |

Pinterest was requested as a source but rejected: pinned photos are copyrighted material. Commons images are CC-licensed with attribution above; standard NC/SA terms apply if the site publishes.

## Update 4: /tours hero image swap

Replaced the desert-safari hero image (kept for /tours/desert-safari-qatar) with a Doha night-skyline panorama:

| Local file | Source file | Author | License |
| --- | --- | --- | --- |
| public/images/hero/doha-tours-hero.jpg | Doha West Bay skyline by night (cropped).jpg | Nmnogueira | CC BY-SA 4.0 |

Used for hero background + og:image; alt: "The illuminated West Bay skyline across Doha Bay by night".

## Update 5: all 12 tour pages built from 2-source merge (workflow `qatar-tours-merge`)

Facts swept from dohatransittours.com (sitemap + detail pages) and nobletourismqatar.com (via r.jina.ai reader). All copy authored originally by drafting agents; every page carries stats strip, gallery, 6-step itinerary, included/excluded, honest notes, FAQ, labeled sample reviews and related links — and ZERO payment content. Wikimedia Commons images downloaded:

- `images/tours/doha-layover-tour/souq-waqif-market-alley.jpg` ← File:Souq Waqif, Doha, Catar, 2013-08-05, DD 09.JPG · Diego Delso · CC BY-SA 3.0 · https://commons.wikimedia.org/wiki/File:Souq_Waqif,_Doha,_Catar,_2013-08-05,_DD_09.JPG
- `images/tours/doha-layover-tour/doha-corniche-skyline.jpg` ← File:Doha Corniche Skyline View 1.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Corniche_Skyline_View_1.jpg
- `images/tours/doha-layover-tour/museum-of-islamic-art.jpg` ← File:Museum of Islamic Art, Doha 00 (54).JPG · لا روسا · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Museum_of_Islamic_Art,_Doha_00_(54).JPG
- `images/tours/doha-desert-combo/khor-al-adaid-inland-sea-dunes.jpg` ← Khor Al Adaid Inland Sea and desert in Katar.jpg · FLASHPACKER TRAVELGUIDE · CC BY-SA 2.0 · https://commons.wikimedia.org/wiki/File:Khor_Al_Adaid_Inland_Sea_and_desert_in_Katar.jpg
- `images/tours/doha-desert-combo/camel-qatar-desert-falcon.jpg` ← Camel and falcon in Qatar's desert (32703499761).jpg · Ralf Steinberger · CC BY 2.0 · https://commons.wikimedia.org/wiki/File:Camel_and_falcon_in_Qatar%27s_desert_(32703499761).jpg
- `images/tours/doha-desert-combo/doha-corniche-skyline.jpg` ← Doha Corniche Skyline View 1.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Corniche_Skyline_View_1.jpg
- `images/tours/doha-city-tour/doha-corniche-skyline.jpg` ← File:Doha Corniche Skyline View 1.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Corniche_Skyline_View_1.jpg
- `images/tours/doha-city-tour/souq-waqif-market-alley.jpg` ← File:Souq Waqif, Doha, Catar, 2013-08-05, DD 09.JPG · Diego Delso · CC BY-SA 3.0 · https://commons.wikimedia.org/wiki/File:Souq_Waqif,_Doha,_Catar,_2013-08-05,_DD_09.JPG
- `images/tours/doha-city-tour/katara-mosque.jpg` ← File:Doha Katara Cultural Village Katara Mosque Exterior 13.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Katara_Cultural_Village_Katara_Mosque_Exterior_13.jpg
- `images/tours/west-coast-camel-race-track/camels-racing-al-shahaniya.jpg` ← File:Camels racing down the Al Shahaniya Camel Racetrack in Qatar.jpg · Lawrence Wang @ Flickr · CC BY-SA 2.0 · https://commons.wikimedia.org/wiki/File:Camels_racing_down_the_Al_Shahaniya_Camel_Racetrack_in_Qatar.jpg
- `images/tours/west-coast-camel-race-track/al-shahaniya-racetrack-tracks.jpg` ← File:The tracks at Al Shahaniya Camel Racetrack.jpg · Lawrence Wang @ Flickr · CC BY-SA 2.0 · https://commons.wikimedia.org/wiki/File:The_tracks_at_Al_Shahaniya_Camel_Racetrack.jpg
- `images/tours/west-coast-camel-race-track/al-zubarah-fort-interior.jpg` ← File:Qatar - Al Zubarah Fort 03.jpg · P. Hughes · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Qatar_-_Al_Zubarah_Fort_03.jpg
- `images/tours/national-museum-katara-lusail/national-museum-of-qatar.jpg` ← File:National Museum of Qatar.jpg · CallMeBarcode · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:National_Museum_of_Qatar.jpg
- `images/tours/national-museum-katara-lusail/katara-mosque.jpg` ← File:Doha Katara Cultural Village Katara Mosque Exterior 10.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Katara_Cultural_Village_Katara_Mosque_Exterior_10.jpg
- `images/tours/national-museum-katara-lusail/lusail-marina-skyline.jpg` ← File:Lusail skyline with the Lusail Marina Iconic Development in the center.jpg · km2bp @ Mapillary.com · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Lusail_skyline_with_the_Lusail_Marina_Iconic_Development_in_the_center.jpg
- `images/tours/snow-dunes-qatar/snow-tubing-run.jpg` ← File:Z MrSnow Tubing MariaAlm xs.jpg · Seemannsheide · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Z_MrSnow_Tubing_MariaAlm_xs.jpg
- `images/tours/snow-dunes-qatar/indoor-snow-slope.jpg` ← File:2015-08-22 Indoor ski slope at the Little Ding-Dong Science Theme Park.jpg · 曾成訓 (Zeng Chengxun) · CC BY 2.0 · https://commons.wikimedia.org/wiki/File:2015-08-22_Indoor_ski_slope_at_the_Little_Ding-Dong_Science_Theme_Park.jpg
- `images/tours/snow-dunes-qatar/qatar-dune-sunset.jpg` ← File:Sunset on a Qatari dune.JPG · Nmvriend · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Sunset_on_a_Qatari_dune.JPG
- `images/tours/sunset-dhow-cruise/dhow-doha-skyline-dusk.jpg` ← File:Lone dhow with Doha skyline in background.jpg · Alex Sergeev · CC BY-SA 3.0 · https://commons.wikimedia.org/wiki/File:Lone_dhow_with_Doha_skyline_in_background.jpg
- `images/tours/sunset-dhow-cruise/dhow-harbour-fleet.jpg` ← File:Doha Dhow Harbour 25.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Dhow_Harbour_25.jpg
- `images/tours/sunset-dhow-cruise/dhow-harbour-moored.jpg` ← File:Doha Dhow Harbour 24.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Dhow_Harbour_24.jpg
- `images/tours/museum-souq-waqif-tour/museum-doha-corniche-dusk.jpg` ← File:View of the Persian Gulf and the Museum of Islamic Art in Qatar at dusk.jpg · Alex Sergeev (www.asergeev.com) · CC BY-SA 3.0 · https://commons.wikimedia.org/wiki/File:View_of_the_Persian_Gulf_and_the_Museum_of_Islamic_Art_in_Qatar_at_dusk.jpg
- `images/tours/museum-souq-waqif-tour/museum-of-islamic-art-courtyard-skyline.jpg` ← File:Doha - Museum of Islamic Art.jpg · Marek Śliwecki (Slimark) · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Doha_-_Museum_of_Islamic_Art.jpg
- `images/tours/museum-souq-waqif-tour/souq-waqif-umbrella-street.jpg` ← File:Souq Waqif, Doha, Catar, 2013-08-05, DD 09.JPG · Diego Delso · CC BY-SA 3.0 · https://commons.wikimedia.org/wiki/File:Souq_Waqif,_Doha,_Catar,_2013-08-05,_DD_09.JPG
- `images/tours/overnight-desert-safari/desert-camp-mesaieed.jpg` ← File:Desert camp in Mesaieed.jpg · Christine und Hagen Graf @ Flickr.com · CC BY 2.0 · https://commons.wikimedia.org/wiki/File:Desert_camp_in_Mesaieed.jpg
- `images/tours/overnight-desert-safari/camel-falcon-qatar-desert.jpg` ← File:Camel and falcon in Qatar's desert (32703499761).jpg · Ralf Steinberger from Milan, Berlin + Munich, Italy + Germany · CC BY 2.0 · https://commons.wikimedia.org/wiki/File:Camel_and_falcon_in_Qatar's_desert_(32703499761).jpg
- `images/tours/overnight-desert-safari/desert-road-al-utouriya.jpg` ← File:Qatar, Al Utouriya (5), road to Al Jumailiyah.JPG · Vincent van Zeijst · CC BY-SA 3.0 · https://commons.wikimedia.org/wiki/File:Qatar,_Al_Utouriya_(5),_road_to_Al_Jumailiyah.JPG
- `images/tours/villaggio-gondola-tour/doha-corniche-skyline.jpg` ← File:Doha Corniche Skyline View 1.jpg · Zairon · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Doha_Corniche_Skyline_View_1.jpg
- `images/tours/villaggio-gondola-tour/villaggio-mall-canal.jpg` ← File:Villagio Mall, Aspire Park, Doha - panoramio (3).jpg · Jaseem Hamza · CC BY 3.0 · https://commons.wikimedia.org/wiki/File:Villagio_Mall,_Aspire_Park,_Doha_-_panoramio_(3).jpg
- `images/tours/villaggio-gondola-tour/villaggio-mall-interior.jpg` ← File:Villaggio mall (4).jpg · Preacher lad · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Villaggio_mall_(4).jpg
- `images/tours/north-qatar-half-day/al-zubarah-fort-exterior.jpg` ← File:Qatar - Al Zubarah Fort 01.jpg · P. Hughes · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Qatar_-_Al_Zubarah_Fort_01.jpg
- `images/tours/north-qatar-half-day/al-zubarah-fort-courtyard.jpg` ← File:Qatar - Al Zubarah Fort 04.jpg · P. Hughes · CC BY 4.0 · https://commons.wikimedia.org/wiki/File:Qatar_-_Al_Zubarah_Fort_04.jpg
- `images/tours/north-qatar-half-day/al-zubarah-archaeological-ruins.jpg` ← File:Archaelogical site of Al Zubarah 01.jpg · Davide Mauro · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Archaelogical_site_of_Al_Zubarah_01.jpg

## Update 6: /services transfer page rebuilt (sources: nobletourismqatar.com/doha-transfer-services + dohatransittours.com/transfers)

Structure follows Noble (service grid, chooser, vehicle options, airport-transfers feature, how-it-works, FAQ); transfer mechanics (meet & greet with name board, flight monitoring, generous arrivals waiting window, vehicle planned for passengers+luggage, vans→coaches) carried as facts and rewritten in brand voice. No pricing content. Images from Wikimedia Commons:
- `public/images/services/hamad-arrivals.jpg` ← File:Inside Hamad International Airport-Doha,Qatar.jpg · Iash16 · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Inside_Hamad_International_Airport-Doha,Qatar.jpg
- `public/images/services/hamad-concourse.jpg` ← File:Concourse A at Hamad International Airport-Doha,Qatar.jpg · Iash16 · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:Concourse_A_at_Hamad_International_Airport-Doha,Qatar.jpg
- `public/images/services/chauffeur-maybach-v-class.jpg` ← File:Mercedes-Benz "Maybach" V-Class in Black, front left.jpg · Mr.choppers · CC BY-SA 3.0 · https://commons.wikimedia.org/wiki/File:Mercedes-Benz_%22Maybach%22_V-Class_in_Black,_front_left.jpg
- `public/images/services/hia-passenger-bus.jpg` ← File:HIA passenger bus.jpg · Sam Wilson · CC BY-SA 4.0 · https://commons.wikimedia.org/wiki/File:HIA_passenger_bus.jpg
