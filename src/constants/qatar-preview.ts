export interface QatarExperience {
    slug: string
    title: string
    category: string
    duration: string
    pickup: string
    image: string
    imageAlt: string
    summary: string
    overview: string
    highlights: string[]
    itinerary: { time: string, title: string, description: string }[]
    bestFor: string
}

export const qatarPreviewBasePath = ''

export const getQatarPreviewNavigation = (basePath = qatarPreviewBasePath) => [
    { label: 'Home', href: basePath || '/' },
    { label: 'Tours', href: `${basePath}/tours` },
    { label: 'Services', href: `${basePath}/services` },
    { label: 'About us', href: `${basePath}/about` },
    { label: 'Contact', href: `${basePath}/contact-us` }
]

export const qatarPreviewNavigation = getQatarPreviewNavigation()

export interface QatarToursMenuItem {
    label: string
    description?: string
    href: string
}

export const qatarToursMenu: QatarToursMenuItem[] = [
    { label: 'All tours', href: `${qatarPreviewBasePath}/tours` },
    { label: 'Desert Safari Qatar', description: 'Dune bashing, Inland Sea & sunset', href: `${qatarPreviewBasePath}/tours/desert-safari-qatar` },
    { label: 'Doha City Tour', description: 'Corniche, Souq Waqif & The Pearl', href: `${qatarPreviewBasePath}/tours/doha-city-tour` },
    { label: 'Museum of Islamic Art & Souq', description: 'Guided culture morning', href: `${qatarPreviewBasePath}/tours/museum-souq-waqif-tour` },
    { label: 'Sunset Dhow Cruise', description: 'Doha Bay on a wooden dhow', href: `${qatarPreviewBasePath}/tours/sunset-dhow-cruise` },
    { label: 'City + Desert Combo', description: 'The full Qatar day', href: `${qatarPreviewBasePath}/tours/doha-desert-combo` }
]

export const qatarExperiences: QatarExperience[] = [
    {
        slug: 'doha-city-discovery',
        title: 'Doha city discovery',
        category: 'City & culture',
        duration: '4–5 hours',
        pickup: 'Hotel or airport pickup',
        image: '/images/dest/kyoto.jpg',
        imageAlt: 'A city street used as a local preview image',
        summary: 'A private introduction to Doha that balances heritage markets, waterfront views and contemporary city landmarks.',
        overview: 'For travellers with one free morning or a full day in Doha, this flexible route brings together Souq Waqif, the Corniche, Katara and The Pearl. The order is shaped around your pickup point, pace and interests.',
        highlights: ['Souq Waqif and the Corniche', 'Katara Cultural Village', 'The Pearl waterfront', 'Flexible hotel or airport pickup'],
        itinerary: [
            { time: 'Start', title: 'Meet at your pickup point', description: 'Begin from your hotel, airport area or another confirmed point in Doha.' },
            { time: 'Stop 1', title: 'Heritage and market lanes', description: 'Walk the lanes around Souq Waqif and pause for the places that interest you.' },
            { time: 'Stop 2', title: 'Waterfront and city views', description: 'Follow the Corniche for a clear view of the bay and West Bay skyline.' },
            { time: 'Finish', title: 'Culture or marina time', description: 'Choose Katara, The Pearl, a museum stop or extra time at the market.' }
        ],
        bestFor: 'First-time visitors, families and short stays'
    },
    {
        slug: 'desert-and-inland-sea',
        title: 'Desert & Inland Sea escape',
        category: 'Desert adventure',
        duration: '4–6 hours',
        pickup: 'Doha hotel pickup',
        image: '/images/dest/sahara.jpg',
        imageAlt: 'Desert dunes used as a local preview image',
        summary: 'Trade the city for open dunes, desert viewpoints and the landscape around Khor Al Adaid.',
        overview: 'A desert outing can be calm, high-energy or somewhere in between. This preview service page explains the shape of a private 4×4 journey, with time for dune scenery, photo stops and the Inland Sea area.',
        highlights: ['Private 4×4 route', 'Dune viewpoints and photo stops', 'Inland Sea landscape', 'Pace matched to your group'],
        itinerary: [
            { time: 'Start', title: 'Leave Doha', description: 'Meet at your accommodation and travel south towards the desert entry point.' },
            { time: 'Stop 1', title: 'Dunes and open desert', description: 'Settle into the desert landscape with a route adapted to your comfort level.' },
            { time: 'Stop 2', title: 'Inland Sea viewpoint', description: 'Pause near the water and enjoy the contrast between sea, sand and horizon.' },
            { time: 'Finish', title: 'Return to Doha', description: 'Travel back with a drop-off at your original or an agreed central location.' }
        ],
        bestFor: 'Visitors who want a half-day contrast to central Doha'
    },
    {
        slug: 'layover-doha',
        title: 'Doha layover route',
        category: 'Layover',
        duration: '3–5 hours',
        pickup: 'Airport-area pickup',
        image: '/images/dest/atlas.jpg',
        imageAlt: 'A wide landscape used as a local preview image',
        summary: 'Make a long stopover feel purposeful with a clear, time-aware introduction to the city.',
        overview: 'The preview itinerary is designed around the time you actually have, with room for the journey back. Choose a heritage, waterfront or modern-Doha emphasis after confirming your arrival and onward departure times.',
        highlights: ['Built around your connection window', 'Airport-area collection', 'Short, flexible sightseeing stops', 'Return-time planning'],
        itinerary: [
            { time: 'Before arrival', title: 'Confirm the available window', description: 'Share your flight timings so the route can keep a comfortable return buffer.' },
            { time: 'Stop 1', title: 'Choose one city focus', description: 'Select the market, waterfront, culture or a combination that fits your time.' },
            { time: 'Stop 2', title: 'Pause for the essentials', description: 'Use a relaxed route with time for photos, refreshment or a short meal.' },
            { time: 'Finish', title: 'Return for your onward journey', description: 'Head back with the agreed arrival buffer before your next flight.' }
        ],
        bestFor: 'Transit passengers with a meaningful daytime connection'
    },
    {
        slug: 'culture-and-museums',
        title: 'Culture & museum day',
        category: 'Culture',
        duration: '4 hours',
        pickup: 'Hotel pickup',
        image: '/images/about-editorial.jpg',
        imageAlt: 'A calm travel scene used as a local preview image',
        summary: 'Build a slower day around Doha’s museums, design, heritage spaces and waterfront surroundings.',
        overview: 'This original preview route is for travellers who want context, not a checklist. Pair a museum visit with heritage architecture, the Corniche, Katara or time at Souq Waqif according to your interests.',
        highlights: ['Museum or heritage focus', 'Doha architecture and design', 'Waterfront time', 'Flexible stops for families or small groups'],
        itinerary: [
            { time: 'Start', title: 'Set the day’s theme', description: 'Choose a heritage, museum or architecture-led route before departure.' },
            { time: 'Stop 1', title: 'Museum or landmark visit', description: 'Spend unhurried time at one key place rather than rushing through many.' },
            { time: 'Stop 2', title: 'Culture beyond the gallery', description: 'Continue to Katara, Msheireb or a heritage area that complements the first stop.' },
            { time: 'Finish', title: 'Waterfront or market close', description: 'End with a Corniche view or free time in the market lanes.' }
        ],
        bestFor: 'Culture-led itineraries, families and returning visitors'
    },
    {
        slug: 'dhow-and-waterfront',
        title: 'Dhow & waterfront evening',
        category: 'Waterfront',
        duration: '2–3 hours',
        pickup: 'Central Doha pickup',
        image: '/images/dest/lofoten.jpg',
        imageAlt: 'Waterfront scenery used as a local preview image',
        summary: 'See the Doha waterfront at a slower pace, with a traditional dhow experience and time for the skyline after dark.',
        overview: 'This evening-focused experience is a softer counterpart to a busy day of sightseeing. It centres on the Corniche and waterfront views, with an optional route that can begin or end near Souq Waqif.',
        highlights: ['Evening waterfront atmosphere', 'Traditional dhow setting', 'Corniche and skyline views', 'Easy pairing with a city tour'],
        itinerary: [
            { time: 'Start', title: 'Meet by the waterfront', description: 'Begin from an agreed central Doha location before heading to the Corniche.' },
            { time: 'Stop 1', title: 'Settle into the waterfront', description: 'Take in the skyline and choose the best moment for photos before dusk.' },
            { time: 'Stop 2', title: 'Dhow experience', description: 'Spend time on the water and view the city from the bay.' },
            { time: 'Finish', title: 'Continue your evening', description: 'Return to your hotel or continue towards dinner and Souq Waqif.' }
        ],
        bestFor: 'Couples, families and evening arrivals'
    },
    {
        slug: 'private-transfers',
        title: 'Private transfers',
        category: 'Transportation',
        duration: 'By itinerary',
        pickup: 'Airport, hotel or address',
        image: '/images/contact-coast.jpg',
        imageAlt: 'A road scene used as a local preview image',
        summary: 'Plan point-to-point transport for arrivals, hotel changes, sightseeing days or a group schedule.',
        overview: 'Transport deserves its own planning rather than being an afterthought. Use this preview service to describe the journey, guest count, luggage and any timing constraints so the right vehicle category can be discussed.',
        highlights: ['Airport and hotel journeys', 'Point-to-point private transport', 'Sightseeing-day transport', 'Group schedule planning'],
        itinerary: [
            { time: 'Step 1', title: 'Share the journey details', description: 'Provide pickup, destination, travel date, guest count and luggage needs.' },
            { time: 'Step 2', title: 'Match the vehicle category', description: 'Discuss a suitable option for the journey rather than choosing by guesswork.' },
            { time: 'Step 3', title: 'Confirm the pickup plan', description: 'Set the exact address, time and practical arrival instructions.' },
            { time: 'Step 4', title: 'Travel with the day covered', description: 'Use the same planning flow for one journey or a full day of movements.' }
        ],
        bestFor: 'Arrivals, hotel transfers, families and small groups'
    }
]

export const qatarServicePillars = [
    {
        title: 'Private experiences',
        description: 'Shape a Doha or desert outing around the pace, pickup point and interests of your group.',
        icon: 'compass' as const
    },
    {
        title: 'Layovers made useful',
        description: 'Plan a compact route that respects flight timing instead of treating your connection as wasted time.',
        icon: 'clock' as const
    },
    {
        title: 'Journeys coordinated',
        description: 'Make private transfers and multi-stop days a first-class part of the itinerary.',
        icon: 'route' as const
    },
    {
        title: 'Clear next steps',
        description: 'Start with your date, pickup point and group size, then discuss the right service before booking.',
        icon: 'heart' as const
    }
]

export const qatarTrustPillars = [
    {
        title: '5-Star Rated',
        description: '88+ five-star Google reviews',
        icon: 'award' as const
    },
    {
        title: 'Expert Local Guides',
        description: 'Professional English speaking guides',
        icon: 'language' as const
    },
    {
        title: 'Free Hotel Pickup',
        description: 'From any hotel in Doha',
        icon: 'pin' as const
    },
    {
        title: 'Instant WhatsApp Booking',
        description: 'Confirm your tour within 1 hour',
        icon: 'message' as const
    }
]

export const getQatarExperience = (slug: string): QatarExperience | undefined => {
    return qatarExperiences.find((experience) => experience.slug === slug)
}

export interface QatarSampleReview {
    name: string
    country: string
    month: string
    title: string
    text: string
}

export interface QatarTourDetail extends QatarExperience {
    rating?: number
    reviews?: number
    stats?: { value: string, label: string }[]
    gallery?: { image: string, imageAlt: string }[]
    included?: string[]
    excluded?: string[]
    notes?: string[]
    faqs?: QatarFaq[]
    sampleReviews?: QatarSampleReview[]
    relatedSlugs?: string[]
}

export const qatarTourPages: QatarTourDetail[] = [

    {
        slug: 'desert-safari-qatar',
        title: 'Desert Safari Qatar',
        category: 'Desert Safari',
        duration: '4 hours',
        pickup: 'Hotel, airport or cruise terminal',
        image: '/images/experiences/desert-safari.jpg',
        imageAlt: 'Dune bashing with a view of the desert and camels near Sealine, Qatar',
        summary: 'The classic Qatar desert day — dune driving, camels and the Inland Sea at golden hour, door to door in about four hours.',
        overview: 'Leave Doha behind for the southern sand sea in a 4×4 with an experienced desert driver. Cross the dunes near Sealine, stop for photographs and a camel encounter, then follow the sand down to Khor Al Adaid, the Inland Sea where dunes meet the Gulf. Choose the pace yourself — a calm scenic drive or the full spirited ride — and let the departure time chase the light you want, from early desert calm to a proper sunset finish.',
        highlights: ['Dune driving with an experienced desert driver', 'Khor Al Adaid — the Inland Sea where dunes meet the Gulf', 'Camel stop, sandboarding and photo time', 'Private or shared 4×4 with door-to-door pickup'],
        stats: [
            { value: '4 hours', label: 'Door to door' },
            { value: 'Private or shared', label: '4×4 with desert driver' },
            { value: 'Khor Al Adaid', label: 'The Inland Sea' },
            { value: 'Included', label: 'Hotel, airport or cruise pickup' }
        ],
        gallery: [
            { image: '/images/experiences/desert-safari/inland-sea.jpg', imageAlt: 'Dunes running down to the tidal water of the Inland Sea at Khor Al Adaid' },
            { image: '/images/experiences/desert-safari/dune-sunset.jpg', imageAlt: 'Evening light across the southern Qatar dunes' },
            { image: '/images/experiences/desert-safari/camel-ride.jpg', imageAlt: 'A rider on a camel crossing the desert near the dune belt' },
            { image: '/images/experiences/desert-safari/desert-meets-sea.jpg', imageAlt: 'Sand dunes meeting the shallow sea on the southern Qatar coast' }
        ],
        itinerary: [
            { time: 'Start', title: 'Pickup from your location', description: 'Your driver collects you from your hotel, Hamad International Airport or the cruise terminal for the drive south to Sealine.' },
            { time: 'Stop 1', title: 'Sealine preparation stop', description: 'A short pause to prepare the vehicle for the sand before entering the dune belt.' },
            { time: 'Stop 2', title: 'Dune driving', description: 'Cross the southern sand sea with a driver who reads the terrain — calm and scenic, or the full spirited ride.' },
            { time: 'Stop 3', title: 'Camels, sandboarding and photos', description: 'Time for a camel encounter, the sandboard and unhurried photographs in the open desert.' },
            { time: 'Stop 4', title: 'Inland Sea', description: 'Reach Khor Al Adaid, the protected reserve where the dunes run into the Gulf.' },
            { time: 'Finish', title: 'Return to Doha', description: 'Watch the light change on the drive back and finish at your original pickup point.' }
        ],
        bestFor: 'First-time visitors, families and thrill seekers',
        included: [
            'Hotel, airport or cruise-terminal pickup and drop-off',
            '4×4 with air conditioning and desert driver',
            'Camel stop and short camel ride',
            'Sandboarding',
            'Bottled drinking water',
            'All permits for the protected reserve'
        ],
        excluded: [
            'Meals and drinks beyond water',
            'Quad biking and dune buggy rides (available at extra cost)',
            'Personal purchases and gratuities',
            'Anything not listed as included'
        ],
        notes: [
            'Plan for roughly four hours door to door, a little more with heavy traffic or a long photo stop.',
            'Dune driving involves sudden movement. It is not advised during pregnancy, or for guests with serious back, neck or heart conditions — ask us for a calmer scenic route instead.',
            'The stop order can shift with tides, weather and desert conditions; the Inland Sea visit always stays in the plan.',
            'Wear comfortable clothing and closed footwear, and bring sun protection from May to September when departures stay early or late.',
            'Sunset departure times follow the season — we confirm your exact slot when you book.'
        ],
        faqs: [
            {
                question: 'How long does the desert safari take?',
                answer: 'Around four hours door to door, including both pickups, the drive to Sealine, dune time and the Inland Sea stop. Leave a little extra margin in peak traffic or on the dates closest to national holidays.'
            },
            {
                question: 'Is the tour private or shared?',
                answer: 'Both are available. Shared safaris join other travellers in the 4×4 at the group rates in the price table, while a private booking reserves the vehicle and driver for your group only.'
            },
            {
                question: 'Can you pick us up from the airport or cruise terminal?',
                answer: 'Yes, when your schedule allows the full four hours. Share your flight or ship details and we will confirm the pickup window before you book.'
            },
            {
                question: 'Who should skip the dune driving?',
                answer: 'It is not advised during pregnancy, or for guests with serious back, neck or heart conditions. We can shape a calmer scenic route through the same reserve instead.'
            },
            {
                question: 'When is the best season for a desert safari?',
                answer: 'November to March brings the most comfortable temperatures for dunes and open drives. In summer, departures shift to early morning or late afternoon so the hottest hours stay off the route.'
            }
        ],
        sampleReviews: [
            {
                name: 'Hana K.',
                country: 'Germany',
                month: 'March',
                title: 'The Inland Sea at dusk',
                text: 'Our driver kept the ride fun without ever feeling careless, and the Inland Sea at sunset was worth every bump. Pickup from our hotel was right on time.'
            },
            {
                name: 'Marcus D.',
                country: 'United Kingdom',
                month: 'February',
                title: 'Perfect for a short stay',
                text: 'We booked as a family of five. A proper 4×4, an on-time pickup and a photo stop the children still talk about weeks later.'
            },
            {
                name: 'Priya S.',
                country: 'India',
                month: 'January',
                title: 'Calm drive, big views',
                text: 'We asked for the gentler version of the dune route. Tea at the camel stop and the quiet at the Inland Sea were the best part of our trip.'
            }
        ],
        relatedSlugs: ['doha-city-tour', 'doha-desert-combo', 'sunset-dhow-cruise'],
        rating: 5.0,
        reviews: 187
    },

    {
        slug: 'doha-city-tour',
        title: 'Doha City Tour with Hotel Pickup',
        category: 'City Tours',
        duration: '4 hours',
        pickup: 'Hotel or airport pickup',
        image: '/images/experiences/doha-city-tour.jpg',
        imageAlt: 'The Doha Corniche waterfront with the West Bay skyline across the water',
        summary: "Doha's essentials in four hours — the Corniche, Souq Waqif, The Pearl and the West Bay skyline with a local guide.",
        overview: 'A private introduction to Doha that balances heritage markets, waterfront views and contemporary city landmarks. The order is shaped around your pickup point, pace and interests, so four hours cover more than any group bus itinerary.',
        highlights: ['Souq Waqif and the Corniche', 'Katara Cultural Village', 'The Pearl waterfront', 'Flexible hotel or airport pickup'],
        itinerary: [
            { time: 'Start', title: 'Meet at your pickup point', description: 'Begin from your hotel, airport area or another confirmed point in Doha.' },
            { time: 'Stop 1', title: 'Heritage and market lanes', description: 'Walk the lanes around Souq Waqif and pause for the places that interest you.' },
            { time: 'Stop 2', title: 'Waterfront and city views', description: 'Follow the Corniche for a clear view of the bay and West Bay skyline.' },
            { time: 'Finish', title: 'The Pearl or Katara', description: 'Choose The Pearl marina, Katara or a museum stop to close the route.' }
        ],
        bestFor: 'First-time visitors, families and short stays',
        rating: 5.0,
        reviews: 75,
        stats: [
            { value: '4 hours', label: 'Door to door' },
            { value: 'Private or shared', label: 'Vehicle and guide style' },
            { value: 'Souq Waqif', label: 'Signature stop' },
            { value: 'Included', label: 'Hotel, airport or cruise pickup' },
        ],
        gallery: [
            { image: '/images/experiences/doha-city-tour.jpg', imageAlt: 'The Doha Corniche waterfront with the West Bay skyline across the water' },
            { image: '/images/tours/doha-city-tour/doha-corniche-skyline.jpg', imageAlt: 'View across the Doha Corniche waterfront toward the West Bay skyline, Doha, Qatar' },
            { image: '/images/tours/doha-city-tour/souq-waqif-market-alley.jpg', imageAlt: 'A restored marketplace lane in Souq Waqif, Doha, with traditional mud-walled arcade architecture' },
            { image: '/images/tours/doha-city-tour/katara-mosque.jpg', imageAlt: 'The Katara Mosque facade and minaret at Katara Cultural Village, Doha, Qatar' },
        ],
        included: [
            'Hotel or airport pickup with drop-off at your preferred location',
            'Licensed English-speaking guide',
            'Air-conditioned vehicle throughout',
            'Guided walking visits at Souq Waqif, Katara and The Pearl',
            'Bottled drinking water',
        ],
        excluded: [
            'Meals and drinks beyond bottled water',
            'Personal purchases in the souq or marina',
            'Gratuities',
            'Anything not listed as included',
        ],
        notes: [
            'Runs as a shared or private half-day; the vehicle and guide stay with your group on a private booking.',
            'In the hottest months the tour runs early morning or late afternoon so the walking stops avoid the midday heat.',
            "Souq Waqif's lanes and the Katara amphitheatre involve easy but steady walking \u2014 comfortable shoes and sun cover are worthwhile year-round.",
            'The stop order flexes with traffic, your pickup point and the light; the guide re-sequences on the day so nothing important is missed.',
            'Infants under three travel free; mention them when booking so seating is arranged.',
        ],
        faqs: [
            {
                question: 'Is the tour private or shared?',
                answer: 'Yes — shared departures join a small group in the vehicle, while a private booking reserves the guide and vehicle for your party only. Tell us your preference when you book.',
            },
            {
                question: 'Can we be picked up from the airport?',
                answer: 'Yes. Pickup from the arrivals hall at Hamad International Airport is included, and drop-off can be back at the airport or anywhere else you choose, such as your hotel or the cruise terminal.',
            },
            {
                question: 'How much walking is involved?',
                answer: "About four hours door to door. Single-step-free access isn't available at every stop, so let us know about wheelchairs, strollers or reduced mobility and we'll shape the stops around it.",
            },
            {
                question: 'Will we still get all the stops in summer?',
                answer: 'Yes. The guide sequences stops around traffic, weather and your interests, so the order may change, but Katara, The Pearl and the Corniche are all part of the plan.',
            },
            {
                question: 'Are any museum entries or extras included?',
                answer: "Nothing beyond spending time at the places you've seen \u2014 no ticketed entries are required on this route. Bottled water is provided, and any snacks or souvenirs are your own to choose in the souq.",
            },
            {
                question: 'Can we cancel or reschedule?',
                answer: 'Yes — plans can be cancelled or moved up to 24 hours before departure at no cost. Just let us know as early as you can so we can adjust.',
            },
        ],
        sampleReviews: [
            {
                name: 'Sandra M.',
                country: 'United Kingdom',
                month: 'October',
                title: 'Four hours, zero rushing',
                text: 'Our guide re-ordered the stops around the light and the crowds, which made a short visit feel generous. The falcon market inside Souq Waqif was something we would never have found alone.',
            },
            {
                name: 'Daniel K.',
                country: 'Australia',
                month: 'February',
                title: 'Great shape for a first day',
                text: 'We only had a layover window and the airport pickup made it work smoothly. Katara and The Pearl back to back was a good pairing, and the van was a welcome cool-down between every stop.',
            },
        ],
        relatedSlugs: ['museum-souq-waqif-tour', 'sunset-dhow-cruise', 'doha-desert-combo']
    },

    {
        slug: 'museum-souq-waqif-tour',
        title: 'Museum of Islamic Art & Souq Waqif Guided Tour',
        category: 'Museums & Culture',
        duration: '3–4 hours',
        pickup: 'Hotel pickup',
        image: '/images/experiences/museum-souq-waqif.jpg',
        imageAlt: 'The Museum of Islamic Art on the Doha Corniche',
        summary: "I. M. Pei's masterpiece and the old souq — Doha's two great cultural landmarks in one guided morning.",
        overview: 'Pair the Museum of Islamic Art with the lanes of Souq Waqif in a single unhurried morning. A guided route through the galleries gives the collection context, before the souq brings spices, falcons and coffee back out into the street.',
        highlights: ['Museum of Islamic Art galleries', 'Guided walk through Souq Waqif', 'Corniche views of the skyline', 'Coffee or karak stop in the souq'],
        itinerary: [
            { time: 'Start', title: 'Hotel pickup', description: 'Collected from your hotel for the short drive to the museum on the Corniche.' },
            { time: 'Stop 1', title: 'Museum of Islamic Art', description: 'A guided visit through the galleries with time for the courtyard and bay views.' },
            { time: 'Stop 2', title: 'Souq Waqif', description: 'Walk the restored market lanes with a guide, from the spice alley to the falcon souq.' },
            { time: 'Finish', title: 'Karak and goodbyes', description: 'Close with a karak or Arabic coffee in the souq before returning to your hotel.' }
        ],
        bestFor: 'Culture-led visits, first-time visitors and photographers',
        stats: [
            { value: '3–4 hours', label: 'Morning tour' },
            { value: 'Private', label: 'Group style' },
            { value: 'Souq Waqif', label: 'Signature stop' },
            { value: 'A/C pickup', label: 'Vehicle & service' },
        ],
        gallery: [
            { image: '/images/experiences/museum-souq-waqif.jpg', imageAlt: 'The Museum of Islamic Art on the Doha Corniche' },
            { image: '/images/tours/museum-souq-waqif-tour/museum-doha-corniche-dusk.jpg', imageAlt: 'The Museum of Islamic Art seen across Doha Bay at dusk' },
            { image: '/images/tours/museum-souq-waqif-tour/museum-of-islamic-art-courtyard-skyline.jpg', imageAlt: "The museum's arched loggia at night with the lit West Bay skyline behind" },
            { image: '/images/tours/museum-souq-waqif-tour/souq-waqif-umbrella-street.jpg', imageAlt: 'Colourful umbrellas suspended over a walkway at Souq Waqif' },
        ],
        included: [
            'Hotel pickup and drop-off in Doha (hotel, airport or cruise terminal), in an air-conditioned vehicle',
            'Private tour — your party only',
            'Licensed guide in English, Arabic or French',
            'Museum of Islamic Art entry ticket',
            'Karak tea at a traditional souq café',
            'Bottled water',
        ],
        excluded: [
            'Meals',
            'Purchases in the souq',
            'Anything not listed as included',
        ],
        notes: [
            'The exact pickup time shifts with the season — departures start earlier in the summer months to stay ahead of the midday heat.',
            'Wear comfortable footwear: the museum walk and the souq circuit together put you on your feet for around two hours over flat, paved ground.',
            'Dress modestly inside the souq (covered shoulders and knees); a light layer helps when moving between the heat outside and strong air-conditioning indoors.',
            'Souq opening patterns and café seating follow seasonal hours and change around Ramadan, so the order of stops may be adjusted on the day.',
            'Individual museum galleries are occasionally rotated or rehung, so your guide adapts which rooms you see without shortening the visit.',
        ],
        faqs: [
            {
                question: 'Is the tour private or shared with other travellers?',
                answer: 'Yes. This is a private tour for your party only, with a licensed guide and an air-conditioned vehicle throughout.',
            },
            {
                question: 'Can I be picked up from the airport or the cruise terminal?',
                answer: 'Yes. Pickup is offered from Doha hotels, the airport and the cruise terminal, and you are dropped off afterwards wherever suits you best — your hotel, the souq or the Corniche.',
            },
            {
                question: 'How much walking is involved?',
                answer: 'Comfortable shoes are recommended. The museum visit runs about ninety minutes, and the souq portion is walked on foot over flat, paved ground, so expect roughly two hours of easy walking in total.',
            },
            {
                question: 'What languages does the guide speak?',
                answer: 'Your guide is licensed and can lead the tour in English, Arabic or French — let us know your preference when booking.',
            },
            {
                question: 'Is museum entry included?',
                answer: 'Yes. Museum admission is covered by the tour and the entry ticket is included, so there is nothing to arrange at the door.',
            },
            {
                question: 'What time does the tour start?',
                answer: 'The tour runs in the morning, and the exact pickup time shifts with the season — earlier in the summer months to stay ahead of the midday heat, and a little later in the cooler season.',
            },
        ],
        sampleReviews: [
            {
                name: 'Amara K.',
                country: 'United Kingdom',
                month: 'October',
                title: 'The guide made the museum come alive',
                text: 'The time in the museum was brilliantly paced — ninety minutes flew by because our guide knew exactly which pieces to stop at. Finishing with karak tea inside the souq was the perfect closing note.',
            },
            {
                name: 'Rashid A.',
                country: 'Pakistan',
                month: 'December',
                title: 'A calm morning before the heat arrived',
                text: "We did the museum and the souq in one relaxed morning and never once felt rushed. Our guide's stories about the falcon market ended up being the part of Doha we told everyone about at home.",
            },
        ],
        relatedSlugs: ['doha-city-tour', 'sunset-dhow-cruise', 'doha-desert-combo']
    },

    {
        slug: 'sunset-dhow-cruise',
        title: 'Sunset Dhow Cruise Doha',
        category: 'Dhow Cruises',
        duration: '2 hours',
        pickup: 'Central Doha meeting point',
        image: '/images/experiences/sunset-dhow.png',
        imageAlt: 'A traditional dhow on the water in front of the Doha skyline at sunset',
        summary: 'A traditional wooden dhow, the skyline turning gold and the call to prayer over the water — Doha Bay at dusk.',
        overview: 'This evening cruise is a softer counterpart to a busy day of sightseeing. Board a traditional wooden dhow beside the Corniche and watch the West Bay skyline change colour, with an easy walk to Souq Waqif afterwards.',
        highlights: ['Traditional wooden dhow', 'Corniche and West Bay skyline views', 'Golden-hour and after-dark photo moments', 'Easy pairing with Souq Waqif'],
        itinerary: [
            { time: 'Start', title: 'Meet by the waterfront', description: 'Arrive at the dhow harbour beside the Corniche before departure.' },
            { time: 'Stop 1', title: 'Sail Doha Bay', description: 'Settle on deck as the dhow pulls away from the harbour and the skyline opens up.' },
            { time: 'Stop 2', title: 'Skyline at dusk', description: 'Watch the lights come on across West Bay from the water.' },
            { time: 'Finish', title: 'Back at the harbour', description: 'Return to the Corniche, with Souq Waqif a short walk away for dinner.' }
        ],
        bestFor: 'Couples, families and evening arrivals',
        stats: [
            { value: '2 hours', label: 'On the water' },
            { value: 'Shared or private', label: 'Booking style' },
            { value: 'Sunset over West Bay', label: 'Signature moment' },
            { value: 'Dhow harbour, Corniche', label: 'Meeting point' },
        ],
        gallery: [
            { image: '/images/experiences/sunset-dhow.png', imageAlt: 'A traditional dhow on the water in front of the Doha skyline at sunset' },
            { image: '/images/tours/sunset-dhow-cruise/dhow-doha-skyline-dusk.jpg', imageAlt: 'A wooden dhow floating on calm water at dusk with the West Bay skyline of Doha behind it' },
            { image: '/images/tours/sunset-dhow-cruise/dhow-harbour-fleet.jpg', imageAlt: 'A row of traditional wooden dhows moored at the Doha dhow harbour with the Doha skyline in the background' },
            { image: '/images/tours/sunset-dhow-cruise/dhow-harbour-moored.jpg', imageAlt: "Traditional dhows docked side by side in Doha's dhow harbour with West Bay towers beyond" },
        ],
        included: [
            'Traditional wooden dhow cruise on Doha Bay',
            'Sunset viewing from the upper deck',
            'Tea, Arabic coffee and dates served on board',
            'Onboard host throughout the trip',
            'Life jackets and bottled drinking water',
            'Choice of shared or private departure',
        ],
        excluded: [
            'Hotel pickup and drop-off (available as an add-on on request)',
            'Dinner, unless you choose the optional buffet upgrade',
            'Alcoholic drinks',
            'Personal expenses and gratuities',
        ],
        notes: [
            'Departure times follow the season, since they are timed to sunset — we confirm your exact slot when you book.',
            'Time actually on the water can vary with the season and departure slot; we confirm the planned cruise length for your date before you head to the harbour.',
            'Boarding is from the harbour jetty, so mention any mobility needs in advance and we will advise on the easiest access.',
            'Evenings on the water cool quickly from November to March — a light layer makes the upper deck much more comfortable.',
            'The sailing route adjusts with weather and harbour traffic, but watching the skyline light up from the water always stays the plan.',
        ],
        faqs: [
            {
                question: 'How long is the cruise?',
                answer: "Plan for about two hours in total, matching today's page. Cruise time on the water can vary between departures and seasons, so we confirm the exact planned length for your date when you book.",
            },
            {
                question: 'Where do we board and leave from?',
                answer: 'At the Dhow Harbour on the Doha Corniche, opposite the Museum of Islamic Art park. Boarding and return are both at the same jetty.',
            },
            {
                question: 'Can you pick us up from our hotel?',
                answer: 'Hotel pickup is not part of the standard cruise, but it can be arranged as an add-on. Tell us where you are staying and we will confirm what is possible for your date.',
            },
            {
                question: 'Is the cruise shared or private?',
                answer: 'Both run. A shared cruise joins other guests on the same dhow, while the private option reserves the whole boat for your group.',
            },
            {
                question: 'Is there food on board?',
                answer: 'Tea, Arabic coffee, dates and bottled water are served during the trip. Dinner is only on board if you opt for the buffet-dinner upgrade at booking.',
            },
            {
                question: 'Is it suitable for children?',
                answer: 'Yes — the cruise is calm with no open-water sailing, life jackets are provided, and there is plenty of seating on the upper deck to watch the skyline together.',
            },
        ],
        sampleReviews: [
            {
                name: 'L. Haddad',
                country: 'Lebanon',
                month: 'March',
                title: 'Golden hour done right',
                text: 'We settled on the upper deck with Arabic coffee and dates while the West Bay towers turned gold one by one. A calm, unhurried evening and easily the best view of our whole trip.',
            },
            {
                name: 'M. Vergara',
                country: 'Canada',
                month: 'February',
                title: 'A lovely way to end the day',
                text: 'Boarding was easy to find and the host kept everyone well looked after throughout. The dhow felt genuinely traditional, and watching the skyline light up after sunset was the highlight of our stay in Doha.',
            },
        ],
        relatedSlugs: ['doha-city-tour', 'museum-souq-waqif-tour', 'doha-desert-combo']
    },

    {
        slug: 'doha-desert-combo',
        title: 'Doha City Tour & Desert Safari Combo',
        category: 'Packages',
        duration: '10 hours',
        pickup: 'Hotel pickup',
        image: '/images/experiences/doha-desert-combo.jpg',
        imageAlt: 'The Inland Sea at Khor Al Adaid where dunes meet the Gulf',
        summary: 'The complete Qatar day — skyline and souq before lunch, dunes and the Inland Sea by sunset.',
        overview: 'One private vehicle, one driver and the two sides of Qatar in a single day. Take in the Corniche, Souq Waqif and The Pearl in the morning, pause for lunch, then head south for dune driving and the sunset at the Inland Sea. Built for short stays that want everything.',
        highlights: ['City tour and desert safari in one day', 'Private vehicle and driver throughout', 'Doha skyline, souq and The Pearl', 'Dune bashing and Inland Sea sunset'],
        itinerary: [
            { time: 'Start', title: 'Morning pickup', description: 'Collected from your hotel for the city half of the day.' },
            { time: 'Stop 1', title: 'City landmarks', description: 'Souq Waqif, the Corniche, Katara and The Pearl with a local guide.' },
            { time: 'Stop 2', title: 'Lunch break', description: 'A pause for lunch in Doha before the drive south to Sealine.' },
            { time: 'Stop 3', title: 'Desert and Inland Sea', description: 'Dune bashing, a camel stop and sunset over Khor Al Adaid.' },
            { time: 'Finish', title: 'Return to Doha', description: 'Back at your hotel in the evening with the full Qatar day behind you.' }
        ],
        bestFor: 'Short stays, first-time visitors and best-value planning',
        stats: [
            { value: '10 hours', label: 'Total day, pickup to drop-off' },
            { value: 'Your group', label: 'Shared or private 4x4' },
            { value: 'Inland Sea', label: 'Signature stop at Khor Al Adaid' },
            { value: 'Pickup', label: 'From any Doha hotel, free' },
        ],
        gallery: [
            { image: '/images/experiences/doha-desert-combo.jpg', imageAlt: 'The Inland Sea at Khor Al Adaid where dunes meet the Gulf' },
            { image: '/images/tours/doha-desert-combo/doha-corniche-skyline.jpg', imageAlt: 'Doha city skyline seen from the Corniche waterfront promenade' },
            { image: '/images/tours/doha-desert-combo/khor-al-adaid-inland-sea-dunes.jpg', imageAlt: 'White sand dunes of the Khor Al Adaid inland sea meeting the tidal flats in southern Qatar' },
            { image: '/images/tours/doha-desert-combo/camel-qatar-desert-falcon.jpg', imageAlt: "Camels resting in Qatar's southern desert" },
        ],
        included: [
            'Hotel pickup and drop-off anywhere in Doha',
            'English or Arabic-speaking guide',
            '4x4 desert safari vehicle with an experienced desert driver',
            'Short camel ride',
            'Bottled drinking water',
        ],
        excluded: [
            'Lunch — taken as a set menu stop and paid separately on the day',
            'Quad biking, available as an optional add-on in the desert',
            'Drinks other than bottled water',
            'Personal expenses and gratuities',
        ],
        notes: [
            'Shared-tour pickup times are confirmed to guests by WhatsApp before the day; private tours set their own start time.',
            'Families with children under 6 are usually advised to split the city and desert halves across two separate days, which can be arranged at no extra cost.',
            'Dune driving involves sudden movement and is not advised during pregnancy or for guests with back, neck or heart conditions.',
            'Sunset timing follows the season, so departure times shift through the year; summer departures start later to avoid the hottest hours.',
            'The desert route can change with tides and weather, but the Inland Sea stop always stays in the plan.',
        ],
        faqs: [
            {
                question: 'Is the combo a shared or private tour?',
                answer: 'Both run. Shared departures join other travellers in the 4x4, and a private booking reserves the vehicle and guide for your group alone.',
            },
            {
                question: 'Is lunch included in the day?',
                answer: 'No. Lunch is a midday stop at a restaurant serving Qatari or Lebanese set menus, and you order and settle it there directly.',
            },
            {
                question: 'How long is the whole day, door to door?',
                answer: 'The full day from pickup to drop-off is about ten hours, with the city half in the morning and the desert half from mid-afternoon to sunset.',
            },
            {
                question: 'Is this suitable for young children?',
                answer: 'It can be a long day for very young children. Families with children under 6 are usually advised to split the two halves across separate days, which we can arrange at no extra cost, and infants under 3 travel free.',
            },
            {
                question: 'Can we do the city tour and the safari on different days?',
                answer: 'Yes — the two halves can run on consecutive days instead of one long day. Tell us when you book and we will schedule the split for you.',
            },
            {
                question: 'What happens if our plans change?',
                answer: 'Cancellations are free up to 24 hours before departure. Pickups from any Doha hotel carry no charge, and your shared-tour pickup time is confirmed by WhatsApp before the day.',
            },
        ],
        sampleReviews: [
            {
                name: 'Omar A.',
                country: 'Jordan',
                month: 'November',
                title: 'Both halves of Qatar in a day',
                text: 'We had one free day in Doha and this covered everything we wanted to see. The souq in the morning and the Inland Sea at sunset felt like two different trips.',
            },
            {
                name: 'Wei L.',
                country: 'Singapore',
                month: 'February',
                title: 'Worth the full day',
                text: 'Long day, but the lunch break broke it up well and the driver was careful on the dunes. The sunset over the water where the dunes end was the highlight of our whole visit.',
            },
        ],
        relatedSlugs: ['desert-safari-qatar', 'doha-city-tour', 'sunset-dhow-cruise']
    },

    {
        slug: 'overnight-desert-safari',
        title: 'Overnight Desert Safari Qatar',
        category: 'Desert Safari',
        duration: 'Around 18 hours',
        pickup: 'Free pickup from any hotel in Doha',
        image: '/images/experiences/overnight-desert.jpg',
        imageAlt: 'A desert camp glowing at dusk among the dunes',
        summary: 'Trade one night of your trip for the desert — a sunset dune drive, barbecue dinner and a tent in the dunes, then sunrise over the Inland Sea before breakfast.',
        overview: 'This is the desert with the clock turned all the way around. You leave your Doha hotel in the mid-afternoon and drive south to the sand sea near Khor Al Adaid, where an experienced desert driver takes the 4×4 over the dune belt while the light is still high. By sunset you are settled at camp: a barbecue cooked on a live grill, a short camel ride, sandboarding on the nearby slopes and a night in your own private tent, with proper washrooms and showers open all evening. Dawn is the reward most day-trippers never see — sunrise over the Inland Sea, where the dunes run down to the Gulf. After breakfast at the dunes you ride back and are dropped in Doha by around 09:00 the next morning.',
        highlights: ['Sunset from the crest of the dunes', 'Barbecue dinner cooked on a live grill', 'A night in your own tent, with real showers at camp', 'Sunrise over Khor Al Adaid, the Inland Sea', 'Camel ride and sandboarding included'],
        stats: [
            { value: 'Around 18 hours', label: 'Afternoon to next morning' },
            { value: 'Shared or private', label: '4×4 with a desert driver' },
            { value: 'Khor Al Adaid', label: 'Sunrise over the Inland Sea' },
            { value: 'Any Doha hotel', label: 'Free pickup and drop-off' },
        ],
        gallery: [
            { image: '/images/experiences/overnight-desert.jpg', imageAlt: 'A desert camp at dusk among dunes' },
            { image: '/images/tours/overnight-desert-safari/desert-camp-mesaieed.jpg', imageAlt: 'Tents and vehicles set up at a desert camp in the dunes near Mesaieed' },
            { image: '/images/tours/overnight-desert-safari/camel-falcon-qatar-desert.jpg', imageAlt: 'A camel standing in the Qatar desert with a falcon perched beside it' },
            { image: '/images/tours/overnight-desert-safari/desert-road-al-utouriya.jpg', imageAlt: 'Open desert landscape with a sandy track along the road to Al Jumailiyah' },
        ],
        itinerary: [
            { time: 'Start', title: 'Pickup from your Doha hotel', description: 'Your driver collects you from your hotel in Doha in the mid-afternoon for the drive south towards the dunes.' },
            { time: 'Stop 1', title: 'Dune drive and arrival at camp', description: 'Head into the southern sand sea with a desert driver and arrive at the camp as the afternoon cools. There is time to settle in before the light drops.' },
            { time: 'Stop 2', title: 'Sunset and barbecue dinner', description: 'Climb a dune for the sunset, then settle in at camp for a barbecue dinner cooked on a live grill. A short camel ride and sandboarding fill the hours around it.' },
            { time: 'Stop 3', title: 'A night under the desert stars', description: "Spend the evening around the fire and sleep in a private tent with bedding, while the camp's washrooms and showers are open through the night." },
            { time: 'Stop 4', title: 'Sunrise over the Inland Sea', description: 'Wake early and walk out to watch the sun come up over the Inland Sea, where the dunes run down to the water at Khor Al Adaid.' },
            { time: 'Finish', title: 'Breakfast and the road back', description: 'Breakfast is served at the dunes before the drive north, dropping you back in Doha by roughly 09:00 the next morning.' },
        ],
        bestFor: 'Travellers who want more than a sunset — a full desert night',
        included: [
            'Pickup and drop-off at any hotel in Doha',
            'Dune drive with an experienced desert driver',
            'Barbecue dinner with live grill and sunrise breakfast',
            'Private tent for the night, with bedding',
            'Camp washrooms and showers',
            'Camel ride and sandboarding',
        ],
        excluded: [
            'Lunch on day one',
            'Quad biking (optional extra)',
            'Alcoholic drinks',
            'Personal expenses and gratuities',
        ],
        notes: [
            'The exact pickup time shifts with the seasons so the vehicle reaches the dunes before sunset; departure and return can also run later around national holidays or busy weekends.',
            'Desert nights get cold even after hot afternoons — bring an extra layer, and closed shoes are easier on the sand than sandals.',
            'The camp is simple but well set up: private tents with mattresses, pillows and blankets, plus proper washrooms and showers.',
            'The dune route and camp layout change from night to night, so the order of stops can vary — the key moments of sunset, dinner and sunrise stay fixed.',
            'Runs afternoon to morning; you return to Doha by around 09:00. Book the day before a relaxed morning rather than an early flight.',
        ],
        faqs: [
            {
                question: 'How long is the overnight safari, and when do we get back to Doha?',
                answer: 'Around 18 hours door to door. Pickup is in the mid-afternoon, and you are normally back at your Doha hotel by about 09:00 the next morning.',
            },
            {
                question: 'What is the tent like?',
                answer: 'Each group gets a private tent with mattresses, pillows and bedding. The camp has proper washrooms and showers, so it is camping with real facilities rather than mats on open sand.',
            },
            {
                question: 'Are dinner and breakfast included?',
                answer: 'Yes — dinner is a barbecue with a live grill in the evening, and breakfast is served at the camp after sunrise. Lunch earlier in the day is not part of the programme.',
            },
            {
                question: 'Can I book this as a shared tour, or only private?',
                answer: 'Both are possible, and the programme is the same either way. Families are welcome, and infants under three travel free.',
            },
            {
                question: 'Is dune bashing required, or can it be gentler?',
                answer: 'Tell your driver how energetic you want the ride — the route through the sand can be calm and scenic for nervous riders and young children.',
            },
            {
                question: 'What should I pack for the night?',
                answer: 'Something warm for the night, since desert evenings turn cold even after a hot day, plus closed shoes and your personal items. Tents and bedding cover the rest for sleeping.',
            },
        ],
        sampleReviews: [
            {
                name: 'L. Moreau',
                country: 'France',
                month: 'November',
                title: 'A night to remember',
                text: 'We watched the sun go down behind the dunes, ate far too much straight off the grill, and then woke to a completely empty horizon over the water. The tent was warmer and cleaner than we expected for sand-and-sky camping.',
            },
            {
                name: 'A. Rahman',
                country: 'Malaysia',
                month: 'February',
                title: 'Sunset, stars and sunrise in one trip',
                text: 'The mix of afternoon dune driving, a camel ride at dusk and sleeping in the desert worked perfectly for our family. Sunrise over the Inland Sea was genuinely the highlight of our whole Qatar trip.',
            },
        ],
        relatedSlugs: ['desert-safari-qatar', 'doha-desert-combo', 'sunset-dhow-cruise']
    },
    {
        slug: 'doha-layover-tour',
        title: 'Doha Layover Tour',
        category: 'Layover',
        duration: '4 hours',
        pickup: 'Hotel, airport or cruise terminal',
        image: '/images/experiences/doha-layover.jpg',
        imageAlt: 'A traveller with a sunhat looking over the Doha skyline',
        summary: 'Turn a long stopover into a real visit with a private, time-aware city route that gets you from airport arrivals to Souq Waqif and back with buffer to spare.',
        overview: 'If your connection through Hamad International Airport gives you six hours or more, this private four-hour route turns the stopover into a proper first look at Doha. You meet your driver-guide at arrivals, leave your luggage locked in the car, and head out on a route built backwards from your departure time. The plan stays time-aware from the first minute: a guided walk through Souq Waqif, a photo stop at the Museum of Islamic Art, a drive along the Corniche, then Katara, The Pearl and Lusail Marina. Your flight is monitored the whole time, and the return is guaranteed before your departure, so you can enjoy the city without watching the clock — that part is our job.',
        highlights: ['Built around your flight window', 'Souq Waqif guided walk', 'MIA, Corniche and skyline views', 'Guaranteed return before departure', 'Luggage stays locked in the car'],
        stats: [
            { value: '4 hours', label: 'Built around your flight window' },
            { value: 'Private car', label: 'Private tour — your party only' },
            { value: 'Souq Waqif', label: 'The guided heart of the route' },
            { value: 'Arrivals pickup', label: 'Airport, hotel or cruise terminal' },
        ],
        gallery: [
            { image: '/images/experiences/doha-layover.jpg', imageAlt: 'A traveller with a sunhat looking over the Doha skyline' },
            { image: '/images/tours/doha-layover-tour/souq-waqif-alley.jpg', imageAlt: 'A covered market alley in Souq Waqif, Doha' },
            { image: '/images/tours/doha-layover-tour/doha-corniche-skyline.jpg', imageAlt: 'Doha Corniche waterfront promenade with the towers of the West Bay skyline across the bay' },
            { image: '/images/tours/doha-layover-tour/museum-of-islamic-art.jpg', imageAlt: 'Museum of Islamic Art in Doha seen through palms on the park grounds beside the bay' },
        ],
        itinerary: [
            { time: 'Start', title: 'Arrivals hall, Hamad International Airport', description: 'Meet your driver-guide in the arrivals hall of Hamad International Airport, or from your hotel or the Cruise Terminal. Your luggage stays locked in the air-conditioned car.' },
            { time: 'Stop 1', title: 'Souq Waqif guided walk', description: 'A guided walk through the restored market lanes — spices, textiles, coffee and the atmosphere Doha does best. The stop adapts to the pace of your layover.' },
            { time: 'Stop 2', title: 'MIA photo stop and Corniche drive', description: 'A photo stop at the Museum of Islamic Art, then a drive along the Corniche with skyline views across the bay.' },
            { time: 'Stop 3', title: 'Katara Cultural Village', description: 'A short guided walk through the galleries, plazas and waterfront of Katara Cultural Village.' },
            { time: 'Stop 4', title: 'The Pearl and Lusail Marina', description: 'Photo stops at the marinas of The Pearl and Lusail, with the modern side of Doha alongside.' },
            { time: 'Finish', title: 'Back at the airport', description: 'The drive back is timed against your flight, monitored as departure approaches, so you clear security with the buffer you need.' },
        ],
        bestFor: 'Transit passengers turning a long Doha connection into a real visit',
        included: [
            'Pickup and drop-off at Hamad International Airport, a Doha hotel or the Cruise Terminal',
            'Private car with driver-guide for your party only',
            'Air-conditioned vehicle throughout',
            'Flight monitoring and guaranteed return before departure',
            'Guided walking at Souq Waqif and Katara',
            'Bottled water',
        ],
        excluded: [
            'Meals and snacks during the tour',
            'Personal purchases and gratuities',
            'Anything not listed as included',
        ],
        notes: [
            'Six hours or more between flights is recommended for a four-hour city tour, allowing time for immigration on arrival and security on the way out.',
            'With eight hours or more between flights, the desert or the National Museum of Qatar can be added to the layover plan.',
            'From late spring to early autumn, walking stops are kept short and shaded, and the route favours early-morning or evening pickups.',
            'The stop order can shift with traffic and your exact flight window; the return time always takes priority over everything else.',
            'The route is planned fresh for each booking around arrival and departure times, so no two layover tours follow exactly the same schedule.',
        ],
        faqs: [
            {
                question: 'How much time do I need between flights for this tour?',
                answer: 'The tour itself runs about four hours, but you should clear immigration on arrival and clear security for your next flight, so we ask for at least six hours between flights. If you share your flight details we will confirm whether your window works.',
            },
            {
                question: 'Will I be back in time for my connecting flight?',
                answer: 'Yes. Your driver-guide monitors your flight and the tour is planned to return you to departures with a comfortable buffer. Getting you back on time is built into the route, not an afterthought.',
            },
            {
                question: 'Where do we meet the driver?',
                answer: 'We meet you in the arrivals hall of Hamad International Airport, normally at Exit/Gate 4, and confirm the exact meeting point with you beforehand. Pickup from a hotel in Doha city or from Doha Cruise Terminal is also possible.',
            },
            {
                question: 'What should I do with my luggage?',
                answer: 'Leave it — your luggage stays locked in the private car for the whole route, so there is no need to use airport storage between flights.',
            },
            {
                question: 'What happens if my flight arrives late?',
                answer: 'Tell us in advance and the route is adjusted around your new timing wherever the remaining window allows. With eight hours or more between flights, the desert or the National Museum can be added to the plan.',
            },
            {
                question: 'Is the tour available in other languages?',
                answer: 'English is standard, and another language can be arranged on request when you share your flight details.',
            },
        ],
        sampleReviews: [
            {
                name: 'Sarah M.',
                country: 'United Kingdom',
                month: 'November',
                title: 'Layover turned into a real visit',
                text: 'We had just under seven hours between flights and used four of them well. The driver tracked our flight, kept our bags safe in the car and had us back at departures with time to relax.',
            },
            {
                name: 'Wei L.',
                country: 'Singapore',
                month: 'February',
                title: 'Best stopover I have had',
                text: 'Fifteen-hour stops are hard, but this made the middle of ours brilliant. A quick walk around the souq, skyline photos and a very calm, well-timed return to the airport.',
            },
        ],
        relatedSlugs: ['doha-city-tour', 'museum-souq-waqif-tour', 'desert-safari-qatar']
    },
    {
        slug: 'snow-dunes-qatar',
        title: 'Snow Dunes Qatar Tickets with Private Transfer',
        category: 'Packages',
        duration: '2.5–4 hours',
        pickup: 'Hotel, airport or cruise terminal',
        image: '/images/experiences/snow-dunes.webp',
        imageAlt: 'Snow Dunes indoor snow park in Doha',
        summary: 'Real snow kept at about minus four indoors — tubing runs, thrill slides and a skating rink at Doha Festival City, with private door-to-door return transfer.',
        overview: 'Real snow in the middle of the desert sounds like a trick, but Snow Dunes at Doha Festival City keeps its slopes at about minus four degrees all year. Its Arabian-themed halls hold tubing runs, thrill slides, a skating rink and snow-play corners for the smallest visitors — all under one roof, whichever season it is outside. This package pairs your chosen pass with private door-to-door transfer: your driver picks you up at the hotel lobby, airport arrivals or the cruise terminal, waits at the mall for as long as you play, and takes you straight back afterwards. Passes are arranged before you arrive, so you skip the ticket queue entirely.',
        highlights: ['Real indoor snow at about -4°C', 'Snow tubing inspired by dune bashing', "Thrill slides, ice-skating rink and kids' snow zones", 'Private car and driver who waits at the mall'],
        stats: [
            { value: '2.5–4 hours', label: 'Door to door' },
            { value: 'Private car', label: 'Own vehicle and driver' },
            { value: 'Snow tubing', label: 'The signature run' },
            { value: 'Included', label: 'Hotel, airport or cruise pickup' },
        ],
        gallery: [
            { image: '/images/experiences/snow-dunes.webp', imageAlt: 'Snow-covered slopes inside the Snow Dunes park at Doha Festival City' },
            { image: '/images/tours/snow-dunes-qatar/snow-tubing-run.jpg', imageAlt: 'A guest riding an inflatable tube down an indoor snow tubing slope' },
            { image: '/images/tours/snow-dunes-qatar/indoor-snow-slope.jpg', imageAlt: 'Indoor snow-covered runs inside a themed park building' },
            { image: '/images/tours/snow-dunes-qatar/qatar-dune-sunset.jpg', imageAlt: 'Sunset over a sand dune in the Qatari desert' },
        ],
        itinerary: [
            { time: 'Start', title: 'Pickup at your door', description: 'Your driver meets you at your hotel lobby, airport arrivals or the cruise terminal and your group has the whole vehicle to yourselves for the cross-town drive.' },
            { time: 'Stop 1', title: 'Arrive at Doha Festival City', description: "Step out of the desert heat and straight into the snow park's entrance level. Your driver stays with the vehicle at the mall while you are inside." },
            { time: 'Stop 2', title: 'Gear up and take the tubing runs', description: "With your day pass sorted in advance, walk past the ticket queue, kit up in warm layers and head for the White Dunes tubing slope \u2014 Qatar's indoor answer to dune bashing." },
            { time: 'Stop 3', title: 'Thrill slides and the ice rink', description: 'Trade tube time for the Dune Dash and Snow Storm slides or lace up for a few laps of the Snow Ring skating rink.' },
            { time: 'Stop 4', title: "Kids' snow play and a hot drink", description: 'Younger visitors get their own snow play zones, and the Sanbouk café corner is the spot for a hot chocolate before you thaw out.' },
            { time: 'Finish', title: 'Drop-off on time', description: 'Your driver is waiting when you are, and the air-conditioned ride back to your hotel, ship or terminal takes the sting out of the temperature swing.' },
        ],
        bestFor: 'Families, layover travellers and cruise passengers',
        included: [
            'Regular Day Pass entry ticket, with Unlimited or VIP upgrades arranged in advance if you prefer',
            'Private round-trip air-conditioned transfer from your hotel, the airport or the cruise port',
            'English-speaking professional driver',
            'Passes arranged ahead of time so you skip the ticket queue',
            'No waiting around — the vehicle leaves as soon as you are ready',
            'Bottled water in the vehicle',
        ],
        excluded: [
            'Food and drinks inside the park',
            'Upgrades or add-ons beyond the pass included in your booking',
            'Personal expenses and shopping at the mall',
            'Anything not listed as included',
        ],
        notes: [
            'Time in the snow runs about two to three hours; a full door-to-door outing lands closer to four with the cross-city drive.',
            'The park sits at roughly minus four degrees, so bring a base layer and wrap up children well — you can always peel a layer off once inside.',
            "School holidays and weekend afternoons draw the biggest crowds, and the mall's opening pattern can shift around Eid dates.",
            "Snow floors and slope run-outs stay icy and slippery, so keep small children within arm's reach.",
            'Your driver waits on site for the whole visit, so anything left in the vehicle — spare clothes, shopping bags — stays with the car.',
        ],
        faqs: [
            {
                question: 'How cold is it inside, and what should we wear?',
                answer: 'The park holds a steady indoor climate of about minus four degrees, so you will notice the change the moment you step in from Doha. Plan your clothing around it, especially for younger children.',
            },
            {
                question: 'How long should we allow for the whole outing?',
                answer: 'Plan for two and a half to four hours from pickup to drop-off, of which roughly two to three hours are spent in the snow.',
            },
            {
                question: 'Can you collect us from the airport or cruise port?',
                answer: 'Yes, as long as your schedule allows the full visit with a comfortable margin. Share your flight or ship details when booking and we confirm the pickup window before the day.',
            },
            {
                question: 'Is the snow park itself private?',
                answer: 'The transfer is fully private — your own air-conditioned vehicle and driver for your group only. Inside the park you join other guests in the snow halls, as it is a public attraction.',
            },
            {
                question: 'Do we book the day pass in advance, and can we upgrade it?',
                answer: 'Your passes are arranged in advance, so you walk in rather than lining up at the ticket desk. If you decide on the Unlimited or VIP tier, tell us when booking and it is set up beforehand.',
            },
            {
                question: 'Is it suitable for toddlers and grandparents?',
                answer: 'Yes, for young children the gentle slides and snow play zones work well, and grandparents can enjoy the café and quiet corners. Slippery floors and the cold mean small children do best with an adult close by.',
            },
        ],
        sampleReviews: [
            {
                name: 'Leila A.',
                country: 'Saudi Arabia',
                month: 'August',
                title: 'Snow in forty-degree weather',
                text: 'The children spent most of the time on the tubing slope and never once mentioned the heat outside. The driver waited at the mall the whole afternoon and we were back at the hotel before dinner.',
            },
            {
                name: 'Dan R.',
                country: 'United Kingdom',
                month: 'November',
                title: 'Made the stopover worth it',
                text: 'A five-hour layover turned into the best part of our trip. Passes were ready when we arrived so we walked straight in, and the skating rink was a proper surprise.',
            },
        ],
        relatedSlugs: ['desert-safari-qatar', 'doha-city-tour', 'sunset-dhow-cruise']
    },
    {
        slug: 'villaggio-gondola-tour',
        title: 'Doha City Tour with Villaggio Mall & Gondola Ride',
        category: 'City Tours',
        duration: '4–5 hours',
        pickup: 'Hotel, airport or cruise terminal',
        image: '/images/experiences/villaggio-gondola.jpg',
        imageAlt: 'Gondola ride through the Venetian canals of Villaggio Mall',
        summary: 'Souq Waqif, the Corniche, The Pearl and Lusail in one half-day loop, ending with a gondola glide through the painted indoor canals of Villaggio Mall.',
        overview: "Half a day is enough to meet every side of Doha when someone else drives. Picked up from your hotel lobby, the airport arrivals gate or the cruise terminal, you ride in an air-conditioned vehicle with an English-speaking guide, shared or private. The loop moves through the city's contrasts: the restored lanes of Souq Waqif, a Corniche photo stop under the West Bay towers, The Pearl's yacht marinas and Venice-style lanes, and Lusail's waterfront skyline. The finish is the tour's namesake \u2014 inside Villaggio Mall, where Italian facades line an indoor canal beneath a painted sky, and the gondola ride covered by the tour carries you along the water before drop-off at the hotel, airport or port.",
        highlights: ['Gondola ride on the Villaggio Mall canal — ticket included', 'Souq Waqif spice stalls, handicrafts and the falcon souq', 'Corniche photo stop beneath the West Bay skyline', 'The Pearl marinas and the Lusail waterfront', 'Hotel, airport or cruise-terminal pickup and drop-off'],
        stats: [
            { value: '4–5 hours', label: 'Door-to-door duration' },
            { value: 'Shared or private', label: 'Air-conditioned vehicle with guide' },
            { value: 'Villaggio gondola', label: 'Signature final stop' },
            { value: 'Hotel, airport or port', label: 'Pickup and drop-off' },
        ],
        gallery: [
            { image: '/images/experiences/villaggio-gondola.jpg', imageAlt: 'Gondola gliding along the indoor Venetian-style canal at Villaggio Mall, Doha' },
            { image: '/images/tours/villaggio-gondola-tour/doha-corniche-skyline.jpg', imageAlt: 'West Bay skyscrapers seen across Doha Bay from the Corniche waterfront, with the marina in the foreground' },
            { image: '/images/tours/villaggio-gondola-tour/villaggio-mall-canal.jpg', imageAlt: 'Indoor canal and footbridge at Villaggio Mall in Doha, lined with Venetian-style buildings under a painted sky ceiling' },
            { image: '/images/tours/villaggio-gondola-tour/villaggio-mall-interior.jpg', imageAlt: 'Venetian-style shopping arcade with a central fountain and painted sky ceiling inside Villaggio Mall, Doha' },
        ],
        itinerary: [
            { time: 'Start', title: 'Pickup at your door', description: 'Collected from your Doha hotel lobby, Hamad International Airport arrivals gate 4 or Doha Cruise Terminal 1, then out into the city in an air-conditioned vehicle with your English-speaking guide.' },
            { time: 'Stop 1', title: 'Souq Waqif', description: 'Around 45 minutes in the restored market lanes — spice stalls, perfume counters, handicrafts and the falcon souq, all set in traditional Qatari architecture.' },
            { time: 'Stop 2', title: 'Doha Corniche', description: 'A 20-minute photo break along the waterfront for the sweep of the Arabian Gulf, moored dhows and the West Bay skyline across the bay.' },
            { time: 'Stop 3', title: 'The Pearl-Qatar', description: 'Roughly 40 minutes among the yacht marinas, with time to wander the Venice-style lanes of the Qanat Quartier.' },
            { time: 'Stop 4', title: 'Lusail', description: 'About 50 minutes for the Katara Towers, the waterfront promenades and a photo stop in the Lusail Stadium area.' },
            { time: 'Finish', title: 'Villaggio Mall gondola ride', description: 'Inside the mall, an Italian-style indoor street runs beneath a painted sky — your included gondola ticket covers the drift along the Venetian canal before your drop-off at the hotel, airport or port.' },
        ],
        bestFor: 'Layover travellers, cruise passengers, families and first-time visitors to Doha',
        included: [
            'Pickup and drop-off from your Doha hotel, Hamad International Airport arrivals gate 4 or Doha Cruise Terminal 1',
            'Air-conditioned vehicle',
            'English-speaking guide',
            'Villaggio Mall gondola ride ticket',
            'Bottled water',
        ],
        excluded: [
            'Meals and drinks',
            'Shopping and personal expenses',
        ],
        notes: [
            'Allow four to five hours door to door; the stop order can shift with traffic, weather and opening hours, though the gondola ride always closes the route.',
            'Souq Waqif, The Pearl and Lusail are outdoor walking stops, so comfortable shoes and sun protection matter most between May and September.',
            'Morning departures are unaffected by mall opening hours; on afternoon tours the gondola may pause briefly until shops open.',
            'Well suited to layover, transit and cruise-traveller schedules when you share your arrival or connection time with us.',
            'Cancellation is free up to 24 hours before departure.',
        ],
        faqs: [
            {
                question: 'How long does the tour take from pickup to drop-off?',
                answer: 'Plan on four to five hours door to door, including all five stops on the loop. Your exact pickup time is confirmed when you enquire, based on your location and the season.',
            },
            {
                question: 'Can you collect me from the airport or a cruise ship?',
                answer: 'Yes. Pickup and drop-off are offered at your Doha hotel lobby, Hamad International Airport arrivals gate 4 or Doha Cruise Terminal 1, so the same tour works whatever direction your day is heading.',
            },
            {
                question: 'Is the gondola ride included, or do I pay at the mall?',
                answer: "Yes \u2014 the ticket for the gondola ride along Villaggio Mall's indoor canal is part of the tour, and the ride is the final stop before drop-off.",
            },
            {
                question: 'Is this a private tour or a shared group?',
                answer: 'Both formats run. Shared departures put you in a small group in one vehicle, while a private booking keeps the air-conditioned vehicle and guide exclusively for your party.',
            },
            {
                question: 'Is this tour a good fit for a Doha layover?',
                answer: 'Yes — four to five hours is exactly what a transit or cruise day allows, and ending back at the airport or the port keeps your onward plans intact. Tell us your connection time when you enquire so the route is paced around it.',
            },
            {
                question: 'How much walking is involved?',
                answer: 'Souq Waqif, The Pearl and Lusail involve walking, always taken at a pace your group is happy with. The Corniche is a brief photo stop, and Villaggio Mall is level and fully air-conditioned, so comfortable shoes are all you need.',
            },
        ],
        sampleReviews: [
            {
                name: 'M. Reyes',
                country: 'Philippines',
                month: 'October',
                title: 'A city tour with a plot twist',
                text: 'From bargaining for saffron in the souq to drifting beneath a painted sky, the day kept surprising us. The children voted the gondola the highlight; the adults voted The Pearl.',
            },
            {
                name: 'J. Whitfield',
                country: 'Canada',
                month: 'March',
                title: 'Ideal for a tight port day',
                text: 'We had one afternoon off a cruise ship and saw far more of Doha than we expected. Pickup at the terminal was punctual, and the indoor canal was a genuinely fun way to wind down before heading back to the port.',
            },
        ],
        relatedSlugs: ['doha-city-tour', 'doha-desert-combo', 'sunset-dhow-cruise']
    },
    {
        slug: 'national-museum-katara-lusail',
        title: 'National Museum of Qatar, Katara & Lusail Tour',
        category: 'Museums & Culture',
        duration: '5 hours',
        pickup: 'Free pickup from any Doha hotel',
        image: '/images/experiences/national-museum-katara.jpg',
        imageAlt: 'The National Museum of Qatar beside the Corniche',
        summary: "Trace Qatar from pearl-diving past to tomorrow-city: the desert-rose National Museum, Katara's cultural quarter and the marina skyline of Lusail in one five-hour guided morning.",
        overview: 'Five hours that tell one story: how a pearl-diving peninsula grew into a skyline nobody drew a decade ago. You start inside the National Museum of Qatar, whose interlocking discs rise like a desert rose around the old palace, and your guide walks you from the natural history of the Gulf straight through to the World Cup era. Then you cross to Katara Cultural Village for its amphitheatre, tiled mosques and quiet waterfront, before finishing in Lusail — the boulevard, the marina and the towers built for photographs. Run the route in English or Arabic, shared with other travellers or private to your group, and get picked up and dropped back at your own door.',
        highlights: ['National Museum of Qatar visit with entry included', 'Katara Cultural Village walk — amphitheatre, mosques and waterfront', 'Lusail Boulevard, marina and Lusail Stadium photo stops', 'Free hotel pickup and drop-off anywhere in Doha'],
        stats: [
            { value: '5 hours', label: 'Door to door' },
            { value: 'Shared or private', label: 'With a licensed guide' },
            { value: 'National Museum of Qatar', label: 'Entry included' },
            { value: 'Included', label: 'Hotel pickup in Doha' },
        ],
        gallery: [
            { image: '/images/experiences/national-museum-katara.jpg', imageAlt: 'The National Museum of Qatar beside the Corniche' },
            { image: '/images/tours/national-museum-katara-lusail/national-museum-of-qatar.jpg', imageAlt: 'The interlocking desert-rose discs of the National Museum of Qatar under a clear sky in Doha' },
            { image: '/images/tours/national-museum-katara-lusail/katara-mosque.jpg', imageAlt: 'Ornate domed exterior of the Katara Mosque at Katara Cultural Village in Doha' },
            { image: '/images/tours/national-museum-katara-lusail/lusail-marina-skyline.jpg', imageAlt: 'High-rise skyline of Lusail seen across the marina district of Lusail City, Qatar' },
        ],
        itinerary: [
            { time: 'Start', title: 'Hotel pickup in Doha', description: 'Your driver and guide collect you from your hotel around 09:00 and set off along the Corniche for the museum on the bay.' },
            { time: 'Stop 1', title: 'National Museum of Qatar', description: 'A guided visit of about two hours through the desert-rose galleries, from pearling years to the oil era and beyond. Entry is included on non-resident rates.' },
            { time: 'Stop 2', title: 'Katara Cultural Village', description: "Walk the amphitheatre, the mosques and the waterfront of Katara at your group's pace." },
            { time: 'Stop 3', title: 'Lusail skyline stops', description: 'Photo stops along the Lusail Boulevard and marina, with the Katara Towers and Lusail Stadium in view.' },
            { time: 'Stop 4', title: 'Optional observation deck', description: 'If you fancy the view from above, an observation-deck ticket in Lusail Tower can be added on request.' },
            { time: 'Finish', title: 'Drop-off at your hotel', description: 'Your guide returns you to your Doha hotel with the whole Qatar story, old and new, behind you.' },
        ],
        bestFor: 'Culture-led visits, first-time visitors and design lovers',
        included: [
            'Free hotel pickup and drop-off anywhere in Doha',
            'Knowledgeable guide in English or Arabic',
            'National Museum of Qatar entry ticket',
            'Bottled drinking water',
        ],
        excluded: [
            'Meals and drinks beyond bottled water',
            'Optional Lusail Tower observation-deck ticket',
            'Personal expenses and gratuities',
        ],
        notes: [
            'Departure is around 09:00 and the whole route takes about five hours door to door, a little longer with midday traffic.',
            'The National Museum visit covers several floors of walking over roughly two hours; expect standing time and use the lifts when you prefer.',
            'Katara and the Lusail boulevard involve outdoor walking — sun protection matters most between May and September.',
            'Museum entry for non-residents is charged by the venue and is already covered by this tour.',
            'The stopping order shifts a little with traffic, prayer times and opening hours; the museum visit always stays anchored in the morning.',
        ],
        faqs: [
            {
                question: 'How long is the tour and when does it start?',
                answer: 'Plan for about five hours door to door, starting with pickup around 09:00 so the museum visit sits in the coolest part of the morning.',
            },
            {
                question: 'Is the museum ticket really included?',
                answer: 'Yes. The National Museum of Qatar charges entry for non-resident visitors and that ticket is part of the tour. The optional observation-deck ticket in Lusail is the only extra on the whole route.',
            },
            {
                question: 'Is this a shared tour or private?',
                answer: 'Both formats run. A shared booking joins other travellers in the vehicle, while the private option keeps the car and guide exclusively for your group for the entire five hours.',
            },
            {
                question: 'Can infants come along?',
                answer: 'Yes. Infants under three travel free, and the route is fully urban, so pushchairs are no problem at the museum or Katara.',
            },
            {
                question: 'Do I get picked up at my hotel?',
                answer: 'Yes, pickup from any hotel in Doha is free, and drop-off is back at the same door. Airport and cruise-terminal pickups can be arranged on request.',
            },
            {
                question: 'What languages does the guide speak?',
                answer: 'The tour runs in English or Arabic — tell us which you prefer when you book, or mention it in your enquiry and we will match the guide.',
            },
        ],
        sampleReviews: [
            {
                name: 'A. Fontaine',
                country: 'France',
                month: 'November',
                title: 'Three worlds in five hours',
                text: 'The museum alone would have been worth the morning, but seeing Katara and then Lusail straight after made the whole story click. Our guide knew exactly which gallery scenes to slow down for.',
            },
            {
                name: 'R. Al-Mansoori',
                country: 'Saudi Arabia',
                month: 'January',
                title: 'Great with both parents and kids',
                text: 'We did it as a private tour with two generations in the car and everyone stayed engaged. The boulevard photo stop at the end was a calm way to finish.',
            },
        ],
        relatedSlugs: ['museum-souq-waqif-tour', 'doha-city-tour', 'doha-desert-combo']
    },
    {
        slug: 'west-coast-camel-race-track',
        title: 'West Coast & Camel Race Track Private Tour',
        category: 'Day Trips',
        duration: '4 hours',
        pickup: 'Hotel, airport or cruise terminal',
        image: '/images/experiences/west-coast-camels.jpg',
        imageAlt: 'Camels training at the Al Shahaniya race track',
        summary: "Trade Doha's skyline for west Qatar's quiet side on a private four-hour drive to the training camels of Al Shahaniya, the limestone Zekreet coast and Richard Serra's towering steel installation.",
        overview: "Skip the usual city circuit and point west instead. This private four-hour outing pairs Qatar's favourite sport with its strangest landscape: first the Al Shahaniya racetrack, where training camels thunder past the stands; then the limestone outcrops, fort ruins and quiet shoreline of Zekreet; and finally East-West/West-East, Richard Serra's steel plates rising from open desert. Your guide handles the driving while you set the pace at each stop, because the vehicle and the day belong to your group alone. Races happen only on scheduled season days, so most visits catch training sessions \u2014 still well worth the drive. Pickup comes to your hotel, the airport or the cruise terminal.",
        highlights: ['Watch camels train at the Al Shahaniya racetrack', 'Limestone formations and a quiet shoreline at Zekreet', "Stand beneath Richard Serra's steel East-West/West-East", 'Private vehicle and English-speaking guide', 'Pickup from hotel, airport or cruise terminal'],
        stats: [
            { value: '4 hours', label: 'Duration' },
            { value: 'Private vehicle, your group only', label: 'Group style' },
            { value: 'Zekreet & Serra installation', label: 'Signature stop' },
            { value: 'Hotel, airport or cruise terminal', label: 'Pickup' },
        ],
        gallery: [
            { image: '/images/experiences/west-coast-camels.jpg', imageAlt: "Camels on Qatar's west coast" },
            { image: '/images/tours/west-coast-camel-race-track/camels-racing-al-shahaniya.jpg', imageAlt: 'Camels racing along the dirt track at the Al Shahaniya camel racetrack in Qatar' },
            { image: '/images/tours/west-coast-camel-race-track/al-shahaniya-racetrack-tracks.jpg', imageAlt: 'Racing tracks running through the desert at the Al Shahaniya camel racetrack' },
            { image: '/images/tours/west-coast-camel-race-track/al-zubarah-fort-interior.jpg', imageAlt: "Exterior of Al Zubarah Fort, a restored desert fort on Qatar's northwest coast" },
        ],
        itinerary: [
            { time: 'Start', title: 'Pickup in Doha', description: 'Your driver and guide meet you at your Doha hotel lobby, Hamad International Airport arrivals gate 4 or Doha Cruise Terminal 1. From there the route heads west out of the city.' },
            { time: 'Stop 1', title: 'Al Shahaniya Camel Racetrack', description: "Walk the grounds of Qatar's camel-racing home and watch training runs on the track. Racing happens only on scheduled season days, so most visits see the camels in training." },
            { time: 'Stop 2', title: 'Zekreet fort ruins and limestone formations', description: "Explore the old fort ruins and the wind-carved limestone formations that make this peninsula one of Qatar's oddest landscapes. The area sits within a UNESCO-recognised biosphere reserve." },
            { time: 'Stop 3', title: 'Zekreet shoreline', description: "Follow the shoreline for a stretch of quiet coast well away from Doha's beaches. There is time to walk, photograph the rock formations from the water's edge or simply stand still." },
            { time: 'Stop 4', title: 'East-West/West-East, the Richard Serra installation', description: "Stand among the four steel plates of Richard Serra's land-art work, each over 14 metres tall, set across open desert. Your guide explains how the piece relates to the landscape around it." },
            { time: 'Finish', title: 'Return to Doha', description: 'The drive returns east with the afternoon behind you and drops you at your hotel, the airport or the cruise terminal. Departure times flex with the season so the desert heat stays manageable.' },
        ],
        bestFor: 'Culture and coast in one short private drive',
        included: [
            'Pickup and drop-off at your hotel, Hamad International Airport or Doha Cruise Terminal',
            'Private air-conditioned vehicle for your group only',
            'English-speaking guide for the full outing',
            'Bottled water on board',
            'Flexible time at each stop on a private itinerary',
        ],
        excluded: [
            'Meals and snacks',
            'Personal expenses',
        ],
        notes: [
            'Camel races take place only on set days during the racing season, so most visits see training runs; the team can confirm race days at the time of booking.',
            'A large part of the four hours is driving across west Qatar, so keep motion-sickness remedies handy if long car rides affect you.',
            'Zekreet and the Serra site involve uneven gravel and rock underfoot — wear closed walking shoes rather than sandals.',
            'Departure timing shifts with the season so the desert stretches avoid the worst midday heat, and stop order or routes can change with weather and road conditions.',
            'Groups larger than six travel in additional vehicles, and the day still runs as one private itinerary.',
        ],
        faqs: [
            {
                question: 'Will we see an actual camel race?',
                answer: 'Racing only happens on scheduled days during the racing season, so most visits catch camels in training instead. The team can check whether a race falls on your date at the time of booking.',
            },
            {
                question: 'Where does the tour start and end?',
                answer: 'Your driver meets you at your hotel lobby, at Hamad International Airport arrivals gate 4, or at Doha Cruise Terminal 1 — and drops you back at whichever of the three you prefer.',
            },
            {
                question: 'Is there anything to pay at the stops?',
                answer: 'Both the racetrack and the Zekreet area are open to visitors without an entry charge, so there is nothing to arrange at the gates.',
            },
            {
                question: 'How much of the four hours is driving?',
                answer: 'Quite a lot — the day covers Doha to Al Shahaniya and on to the west coast, so expect long highway stretches between stops. The stops themselves are unhurried, and the vehicle is yours alone.',
            },
            {
                question: 'What is the ground like at the Serra installation and Zekreet?',
                answer: 'It stands in open desert off the Zekreet road, reached by a short walk over gravel and sand from where the vehicle parks. Comfortable, closed shoes are the best choice for it.',
            },
            {
                question: 'Is this tour suitable for children?',
                answer: 'Yes — it is a private vehicle with an English-speaking guide, so the pacing can follow your group. Just keep in mind the uneven ground at Zekreet and the distance between stops when travelling with small children.',
            },
        ],
        sampleReviews: [
            {
                name: 'Markus T.',
                country: 'Germany',
                month: 'February',
                title: 'Two Qatars in one afternoon',
                text: 'The drive west felt like a completely different Qatar. Watching the training camels fly past at Al Shahaniya and then standing alone in the desert at the Serra plates was an afternoon we keep talking about.',
            },
            {
                name: 'Sarah L.',
                country: 'United Kingdom',
                month: 'November',
                title: 'Private and unhurried',
                text: 'Our guide knew exactly when to be at the track and let us linger at the Zekreet shoreline as long as we liked. Having the car to ourselves made the whole trip feel relaxed rather than rushed.',
            },
        ],
        relatedSlugs: ['desert-safari-qatar', 'doha-city-tour', 'doha-desert-combo']
    },
    {
        slug: 'north-qatar-half-day',
        title: 'North Qatar Half-Day Private Tour',
        category: 'Day Trips',
        duration: '5 hours',
        pickup: 'Hotel, airport or cruise terminal',
        image: '/images/experiences/north-qatar-zubarah.jpg',
        imageAlt: 'Al Zubarah Fort in north Qatar',
        summary: "A private half-day run up Qatar's quiet northern coast: the UNESCO-listed Al Zubarah Fort, the mangrove boardwalk at Purple Island and the fishing harbour at Al Khor, all arranged from your door.",
        overview: "Head north from Doha and Qatar opens into coastline, mangroves and an old UNESCO World Heritage trading town most visitors never reach. This private half-day devotes itself to it, with an air-conditioned vehicle, Wi-Fi on board and a guide for your group only, so each stop lasts as long as you like. The drive takes about an hour and a half before the whitewashed walls of Al Zubarah Fort, a restored garrison beside the ruins of the old pearling town. From there a wooden walkway leads out among the mangroves of Purple Island, and Al Khor's corniche makes a final picture beside a harbour of working dhows.",
        highlights: ['Al Zubarah Fort and its UNESCO World Heritage site', 'Mangrove boardwalk at Purple Island', 'Al Khor harbour and seaside corniche', 'Private air-conditioned vehicle with Wi-Fi'],
        stats: [
            { value: '5 hours', label: 'Door-to-door including the drive' },
            { value: 'Private, your group only', label: 'Flexible time at each stop' },
            { value: 'Al Zubarah Fort', label: 'UNESCO-listed signature stop' },
            { value: 'Hotel, airport or port', label: 'Pickup and drop-off' },
        ],
        gallery: [
            { image: '/images/experiences/north-qatar-zubarah.jpg', imageAlt: 'Al Zubarah Fort, a restored white fortification in northern Qatar, under a clear sky' },
            { image: '/images/tours/north-qatar-half-day/al-zubarah-fort-courtyard.jpg', imageAlt: 'Interior courtyard of Al Zubarah Fort in north Qatar with its circular corner tower' },
            { image: '/images/tours/north-qatar-half-day/al-zubarah-archaeological-ruins.jpg', imageAlt: "Stone ruins of the Al Zubarah archaeological site on Qatar's north coast" },
            { image: '/images/tours/north-qatar-half-day/al-zubarah-fort-exterior.jpg', imageAlt: 'Outer walls of Al Zubarah Fort in northern Qatar on a clear day' },
        ],
        itinerary: [
            { time: 'Start', title: 'Pickup in Doha', description: 'Your guide and driver collect you from your hotel lobby, the arrivals gate at Hamad International Airport or Doha Cruise Terminal 1, and settle you into an air-conditioned vehicle with Wi-Fi on board. The drive north takes about an hour and a half across desert and coastal plain.' },
            { time: 'Stop 1', title: 'Al Zubarah Fort', description: 'Step inside the restored fort with its circular corner towers and small museum, standing beside the UNESCO-listed archaeological site of the old trading town of Al Zubarah. Your guide shares the pearling-port story while you explore at your own pace.' },
            { time: 'Stop 2', title: 'Purple Island mangroves', description: 'A wooden walkway leads through mangroves and shallow lagoons rich with birdlife at Jazirat Bin Ghanim. There is time to wander the boardwalk, watch for herons and take in the quiet water before moving on.' },
            { time: 'Stop 3', title: 'Al Khor fishing harbour', description: 'Pause by the water at this old pearling town, where fishing dhows bob at their moorings along a seaside corniche. It is a short, easy stop suited to photographs and a last look at the coast.' },
            { time: 'Stop 4', title: 'Coastal drive back', description: 'Board the vehicle for the return leg toward Doha, with a rest break along the way if you need one. Flexible timing keeps it relaxed whichever stops ran long.' },
            { time: 'Finish', title: 'Drop-off wherever suits you', description: 'Return to your hotel, the airport or the cruise terminal about five hours after pickup. Mornings beat the heat and late afternoons catch the coast in softer light — pick whichever departure fits your day.' },
        ],
        bestFor: 'History seekers, nature lovers and photographers',
        included: [
            'Pickup and drop-off at your hotel, Hamad International Airport or Doha Cruise Terminal',
            'Private air-conditioned vehicle, your party only',
            'English-speaking guide',
            'Wi-Fi on board',
            'Flexible time at every stop — the vehicle waits while you explore',
        ],
        excluded: [
            'Meals',
            'Personal expenses and souvenirs',
            'Anything not listed as included',
        ],
        notes: [
            'Plan for about five hours door to door; the stop order and exact departure time shift with the season to make the most of daylight and cooler hours.',
            'Purple Island involves a walk along a boardwalk with little shade, so wear comfortable shoes and bring sun protection.',
            'High tides or occasional maintenance can change the Purple Island walk; the guide adjusts the route and keeps you on safe footing when it does.',
            'Groups larger than six travel in additional vehicles rather than being mixed with other parties.',
            'Infants under 3 ride along at no charge, and cancellations are accepted up to 24 hours before departure.',
        ],
        faqs: [
            {
                question: 'Where does the tour pick me up and drop me off?',
                answer: 'From your hotel lobby in Doha, directly from arrivals gate 4 at Hamad International Airport, or from Doha Cruise Terminal 1. At the end we return you to whichever of those three suits you best.',
            },
            {
                question: 'Is this a private tour or shared with other travellers?',
                answer: 'Fully private — the vehicle and guide are for your group only. Parties larger than six simply travel in additional vehicles so everyone stays together.',
            },
            {
                question: 'How long do we spend at each stop?',
                answer: 'Roughly an hour and a half at the fort, two hours at Purple Island and about half an hour at Al Khor, plus the drives in between. Because it is private, the timing flexes to how long you want to linger.',
            },
            {
                question: 'Is there much walking involved?',
                answer: 'Most of the walking is on Purple Island, where a wooden boardwalk carries you through the mangroves. The fort and the Al Khor corniche are short, flat walks, so the day suits most fitness levels.',
            },
            {
                question: 'When is the best time of year for this route?',
                answer: 'October to April is ideal, with mild weather that makes time outdoors at the fort and the island comfortable. In the hotter months we start earlier so you see the sights before midday.',
            },
            {
                question: 'What happens if the weather turns?',
                answer: 'If high tide, strong winds or extreme heat make an outdoor stop unwise, the guide adjusts the route and the order of stops and talks you through the alternatives before setting out.',
            },
        ],
        sampleReviews: [
            {
                name: 'Hannah W.',
                country: 'Germany',
                month: 'March',
                title: 'The quiet half of Qatar',
                text: 'Al Zubarah Fort felt like discovering a place all to ourselves, and the mangrove boardwalk at Purple Island was the surprise of our trip. Our guide kept everything flexible so we could linger where we liked.',
            },
            {
                name: 'Rakesh P.',
                country: 'India',
                month: 'December',
                title: 'A great break from the city',
                text: 'Five hours flew by in a comfortable car with Wi-Fi and a guide who knew the story of the old pearling ports. The Al Khor harbour stop was worth the drive alone.',
            },
        ],
        relatedSlugs: ['doha-city-tour', 'museum-souq-waqif-tour', 'doha-desert-combo']
    }


]

export const getQatarTourPage = (slug: string): QatarTourDetail | undefined => {
    return qatarTourPages.find((tour) => tour.slug === slug)
}

export interface QatarTour {
    slug: string
    category: string
    badge?: string
    title: string
    duration: string
    pickupIncluded?: boolean
    rating?: number
    reviews?: number
    description: string
    image: string
    imageAlt: string
    href: string
}

export const featuredQatarTours: QatarTour[] = [
    {
        slug: 'desert-safari-qatar',
        category: 'Desert Safari',
        badge: 'Bestseller',
        title: 'Desert Safari Qatar',
        duration: '4 hours',
        pickupIncluded: true,
        rating: 5.0,
        reviews: 187,
        description: 'The #1 experience in Qatar — dunes, camels and the Inland Sea at golden hour.',
        image: '/images/experiences/desert-safari.jpg',
        imageAlt: 'Dune bashing with a view of the desert and camels near Sealine, Qatar',
        href: 'desert-safari-qatar'
    },
    {
        slug: 'doha-city-tour',
        category: 'City Tours',
        badge: 'Top rated',
        title: 'Doha City Tour with Hotel Pickup',
        duration: '4 hours',
        pickupIncluded: true,
        rating: 5.0,
        reviews: 75,
        description: "Doha's essentials in four hours — skyline, souq, Pearl and Corniche with a local guide.",
        image: '/images/experiences/doha-city-tour.jpg',
        imageAlt: 'The Doha Corniche waterfront with the West Bay skyline across the water',
        href: 'doha-city-tour'
    },
    {
        slug: 'doha-desert-combo',
        category: 'Packages',
        badge: 'Best value',
        title: 'Doha City Tour & Desert Safari Combo',
        duration: '10 hours',
        pickupIncluded: true,
        description: 'The complete Qatar day — skyline and souq before lunch, dunes and Inland Sea by sunset.',
        image: '/images/experiences/doha-desert-combo.jpg',
        imageAlt: 'The Inland Sea at Khor Al Adaid where dunes meet the Gulf',
        href: 'doha-desert-combo'
    },
    {
        slug: 'overnight-desert-safari',
        category: 'Desert Safari',
        title: 'Overnight Desert Safari Qatar',
        duration: '18 hours',
        pickupIncluded: true,
        description: 'Sunset, a BBQ under the stars, and sunrise over the Inland Sea from your own tent.',
        image: '/images/experiences/overnight-desert.jpg',
        imageAlt: 'A desert camp at dusk among dunes',
        href: 'overnight-desert-safari'
    },
    {
        slug: 'sunset-dhow-cruise',
        category: 'Dhow Cruises',
        title: 'Sunset Dhow Cruise Doha',
        duration: '2 hours',
        description: 'A traditional wooden dhow, the skyline turning gold, and the call to prayer over the water.',
        image: '/images/experiences/sunset-dhow.png',
        imageAlt: 'A traditional dhow on the water in front of the Doha skyline at sunset',
        href: 'sunset-dhow-cruise'
    },
    {
        slug: 'doha-layover-tour',
        category: 'Layover',
        title: 'Doha Layover Tour',
        duration: '4 hours',
        pickupIncluded: true,
        rating: 5.0,
        reviews: 10,
        description: 'Turn a Qatar Airways stopover into a real visit — private car, pickup from Airport, back with time to spare.',
        image: '/images/experiences/doha-layover.jpg',
        imageAlt: 'A traveller with a sunhat looking over the Doha skyline',
        href: 'doha-layover-tour'
    }
]

export const remainingQatarTours: QatarTour[] = [
    {
        slug: 'museum-souq-waqif-tour',
        category: 'Museums & Culture',
        title: 'Museum of Islamic Art & Souq Waqif Guided Tour',
        duration: '3–4 hours',
        pickupIncluded: true,
        description: "I. M. Pei's masterpiece and the old souq — Doha's two great cultural landmarks in one morning.",
        image: '/images/experiences/museum-souq-waqif.jpg',
        imageAlt: 'The Museum of Islamic Art on the Doha Corniche',
        href: 'museum-souq-waqif-tour'
    },
    {
        slug: 'snow-dunes-qatar',
        category: 'Packages',
        badge: 'Private only',
        title: 'Snow Dunes Qatar Tickets with Private Transfer',
        duration: '2.5–4 hours',
        pickupIncluded: true,
        description: 'Real snow in Qatar at -4°C – Snow Dunes tickets with a private car from your hotel, the airport or Doha cruise port.',
        image: '/images/experiences/snow-dunes.webp',
        imageAlt: 'Snow Dunes indoor snow park in Doha',
        href: 'snow-dunes-qatar'
    },
    {
        slug: 'villaggio-gondola-tour',
        category: 'City Tours',
        title: 'Doha City Tour with Villaggio Mall & Gondola Ride',
        duration: '4–5 hours',
        pickupIncluded: true,
        rating: 5.0,
        reviews: 6,
        description: "See Souq Waqif, the Corniche, The Pearl and Lusail, then glide through Villaggio's Venetian canals on a gondola, all in your own private car.",
        image: '/images/experiences/villaggio-gondola.jpg',
        imageAlt: 'Gondola ride through the Venetian canals of Villaggio Mall',
        href: 'villaggio-gondola-tour'
    },
    {
        slug: 'national-museum-katara-lusail',
        category: 'Museums & Culture',
        title: 'National Museum of Qatar, Katara & Lusail Tour',
        duration: '5 hours',
        pickupIncluded: true,
        description: "Explore Qatar's transformation — the desert-rose National Museum, Katara Cultural Village and Lusail's boulevard and Katara Towers in one tour.",
        image: '/images/experiences/national-museum-katara.jpg',
        imageAlt: 'The National Museum of Qatar beside the Corniche',
        href: 'national-museum-katara-lusail'
    },
    {
        slug: 'west-coast-camel-race-track',
        category: 'Museums & Culture',
        title: 'West Coast & Camel Race Track Private Tour',
        duration: '4 hours',
        pickupIncluded: true,
        description: "Leave the skyline behind for Qatar's wild west: camels in training at Al Shahaniya, the limestone coast of Zekreet and Richard Serra's giant steel plates in the desert.",
        image: '/images/experiences/west-coast-camels.jpg',
        imageAlt: 'Camels training at the Al Shahaniya race track',
        href: 'west-coast-camel-race-track'
    },
    {
        slug: 'north-qatar-half-day',
        category: 'Museums & Culture',
        title: 'North Qatar Half-Day Private Tour',
        duration: '5 hours',
        pickupIncluded: true,
        rating: 5.0,
        reviews: 9,
        description: "Trade the skyline for Qatar's old north: the UNESCO-listed Al Zubarah Fort, the mangroves of Purple Island and the fishing harbour of Al Khor, in your own private vehicle.",
        image: '/images/experiences/north-qatar-zubarah.jpg',
        imageAlt: 'Al Zubarah Fort in north Qatar',
        href: 'north-qatar-half-day'
    }
]

export interface QatarVehicle {
    label: string
    title: string
    description: string
    image: string
    imageAlt: string
}

export interface QatarFaq {
    question: string
    answer: string
}

export const qatarFaqs: QatarFaq[] = [
    {
        question: 'Is Qatar safe for travellers?',
        answer: 'Yes. Qatar is regularly listed among the world\'s safest destinations and street crime is very low. Visitors travelling alone — including women travelling solo — often say they feel at ease exploring Doha\'s Corniche and the souq after dark.'
    },
    {
        question: 'When is the best time to visit Qatar?',
        answer: 'The comfortable season runs from November to March, when daytime temperatures look at 20–28°C — ideal for desert trips and walking tours. From June to September the heat is intense, so we schedule early-morning and evening departures during those months.'
    },
    {
        question: 'Do I need a visa for Qatar?',
        answer: 'Nationals of more than 95 countries can enter visa-free on arrival and stay between 30 and 90 days. Passengers from other countries can apply for a Hayya visa online, and some transit travellers flying Qatar Airways qualify for a free transit visa.'
    },
    {
        question: 'What should I wear in Qatar?',
        answer: 'Light and modest clothing works best — cover shoulders and knees when visiting souqs, mosques and government buildings. Swimwear is perfectly acceptable at hotel pools and private beaches, and a light layer is handy for cool desert evenings in winter.'
    },
    {
        question: 'Can I leave the airport during a layover?',
        answer: 'Yes, if you have at least six hours between flights. Most nationalities can enter without a visa for a short stay. Our layover route meets you at arrivals and gets you back to departures two hours before your flight.'
    }
]

export const qatarServiceFaqs: QatarFaq[] = [
    {
        question: 'What transportation services does Zain Tourism provide?',
        answer: 'Private airport transfers between Hamad International Airport and any hotel, residence or office, point-to-point journeys inside Doha, hourly chauffeur hire, group transportation from vans to 50-seat coaches, coordinated event movements and selected GCC road transfers, which we review before confirming.'
    },
    {
        question: 'What happens when my flight is delayed?',
        answer: 'For arrival transfers we monitor the flight, so the driver works from the actual landing time rather than the schedule. Waiting time at arrivals is included in the arrangement — if the flight lands late, the plan adjusts instead of the booking collapsing.'
    },
    {
        question: 'Where does the driver meet me?',
        answer: 'At Hamad International Airport, arrival pickups are a meet and greet inside the terminal: your driver waits past customs with a name board and walks you to the vehicle. Departure and hotel transfers start from whichever point we confirm with you before the day.'
    },
    {
        question: 'What about luggage and child seats?',
        answer: 'We size the vehicle for both passengers and luggage, so the car is chosen after we know the group and the bags. Child seats can be arranged on request — mention the ages of travelling children when you enquire.'
    },
    {
        question: 'How does hourly chauffeur hire work?',
        answer: 'The vehicle and driver stay with you across a set of movements — meetings, shopping, errands or a self-paced route around Doha. Hourly bookings are quoted individually at enquiry, and most guests find a practical minimum of four hours for the day.'
    },
    {
        question: 'Can you move a large group or a conference delegation?',
        answer: 'Yes. Group transportation runs from vans and minibuses to touring coaches, and event movements are planned around your programme — airport runs, hotel shuttles and venue transfers, as a single or multi-vehicle operation.'
    },
    {
        question: 'Do you drive people out of Doha or across the GCC?',
        answer: 'Point-to-point routes across Qatar can be arranged, such as runs toward Sealine, Al Wakrah or the northern coast. Cross-border road transfers into the GCC are reviewed individually — route, date, border requirements and vehicle availability are confirmed before booking.'
    }
]

export const qatarVehicles: QatarVehicle[] = [
    {
        label: 'Executive',
        title: 'Sedans',
        description: 'Airport, chauffeur and business journeys.',
        image: '/images/fleet/sedan.png',
        imageAlt: 'A black executive sedan photographed at a three-quarter angle'
    },
    {
        label: 'Versatile',
        title: 'SUVs',
        description: 'Private journeys, tours and family travel.',
        image: '/images/fleet/suv.png',
        imageAlt: 'A black luxury SUV photographed at a three-quarter angle'
    },
    {
        label: 'Families & groups',
        title: 'Vans & MPVs',
        description: 'Comfortable transportation for smaller groups.',
        image: '/images/fleet/van.png',
        imageAlt: 'A luxury passenger van photographed at a three-quarter angle'
    },
    {
        label: 'Group transport',
        title: 'Minibuses & Coaches',
        description: 'Event, delegation and larger group transport.',
        image: '/images/fleet/coach.png',
        imageAlt: 'A white touring coach photographed at a three-quarter angle'
    }
]
