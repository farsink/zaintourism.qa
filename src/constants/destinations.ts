import type { Destination, FilterOption } from '@/types'

export const destinations: Destination[] = [
    {
        slug: 'bali-indonesia',
        name: 'Bali',
        country: 'Indonesia',
        region: 'Asia',
        category: 'Coast',
        tagline: "Temple mornings, long afternoons in the water.",
        summary: "Bali rewards the people who slow down. We keep you away from the coach parks and closer to the villages, the surf breaks that locals actually paddle out to, and the quiet hours between four and six when the island turns gold.",
        story: "Most people arrive in Bali with a list. We would rather you arrived with a week. The island works on its own rhythm: offerings at dawn, a long flat middle of the day when nobody sensible is outside, and then the light drops and everything begins again. Our guides are Balinese, they live in the villages we visit, and they will tell you when a ceremony matters more than a schedule. You will eat at warungs with four tables. You will surf a break that takes twenty minutes to reach on a motorbike. You will sit through an afternoon rainstorm with a coffee and decide it was the best part of the day.",
        storyQuote: "The island does not need to be conquered. It needs to be listened to.",
        image: '/images/dest/bali.jpg',
        gallery: [
            '/images/gallery/bali-1.jpg',
            '/images/gallery/bali-3.jpg',
            '/images/gallery/toba-3.jpg'
        ],
        rating: 4.9,
        reviews: 120,
        tags: ['Beach', 'Surf', 'Culture'],
        priceFrom: 1890,
        duration: '9 days',
        bestSeason: 'April to October',
        seasons: ['Spring', 'Summer', 'Autumn'],
        keyFacts: [
            { label: 'Best time', value: 'April to October', icon: 'sun' },
            { label: 'Trip length', value: '7 to 12 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 8 travellers', icon: 'users' },
            { label: 'Pace', value: 'Relaxed, one or two stops a day', icon: 'activity' },
            { label: 'Language', value: 'Indonesian, Balinese, English', icon: 'language' },
            { label: 'Currency', value: 'Indonesian rupiah', icon: 'wallet' }
        ],
        experiences: [
            {
                title: 'Dawn at a working temple',
                description: "Not the one on the postcards. A village temple where the morning offerings are being laid out and nobody is selling anything.",
                icon: 'landmark'
            },
            {
                title: 'Learn to read a reef break',
                description: "A half day with a Uluwatu surfer who has been reading this water since he was nine. Beginners welcome, egos optional.",
                icon: 'waves'
            },
            {
                title: 'Walk the Sebatu valley',
                description: "Three hours through terraces and forest with a guide who grew up farming them, ending at a waterfall you will have mostly to yourself.",
                icon: 'walk'
            },
            {
                title: 'Cook what you bought',
                description: "Market at seven, kitchen by ten. You pick the ingredients, a local family shows you what to do with them.",
                icon: 'food'
            }
        ],
        itinerary: [
            { day: 'Day 1', title: 'Arrive in Sanur', description: "An easy first night on the quiet east coast. Dinner on the beach, an early night, no plans." },
            { day: 'Day 2 to 3', title: 'Uluwatu and the south', description: "Cliff walks at first light, two surf sessions, and an afternoon that belongs to you." },
            { day: 'Day 4 to 5', title: 'Inland to Sidemen', description: "Rice terraces, a village ceremony if the calendar allows, and the best food of the trip." },
            { day: 'Day 6 to 7', title: 'Sebatu and the north', description: "Waterfalls, forest walking and a long, slow soak in a hot spring under the trees." },
            { day: 'Day 8 to 9', title: 'Back to the water', description: "Two final days on the coast, then a late flight out with sand still in your bag." }
        ],
        stays: [
            {
                name: 'Karang House',
                type: 'Cliffside villa',
                description: "Six rooms above a break in Bingin. Open-air showers, a pool cut into the rock, and coffee from four in the morning for surfers.",
                price: 'from $185 per night',
                image: '/images/gallery/bali-2.jpg'
            },
            {
                name: 'Sidemen Family Homestay',
                type: 'Village homestay',
                description: "Three rooms on a working farm. You eat what the family eats, which is the entire point of staying here.",
                price: 'from $48 per night',
                image: '/images/gallery/toba-2.jpg'
            },
            {
                name: 'Puri Sebatu',
                type: 'Garden retreat',
                description: "A restored compound in the forest above Tegallalang. No television, no lobby, a lot of birds at six in the morning.",
                price: 'from $120 per night',
                image: '/images/gallery/bali-1.jpg'
            }
        ],
        featured: true
    },
    {
        slug: 'song-kul-kyrgyzstan',
        name: 'Song-Kül',
        country: 'Kyrgyzstan',
        region: 'Asia',
        category: 'Mountains',
        tagline: "Three thousand metres up, and nobody is in a hurry.",
        summary: "A high alpine lake that families have been driving their herds to every summer for centuries. You sleep in a yurt, you ride when the herders ride, and the night sky is the closest thing to overwhelming we can offer.",
        story: "There is no hotel at Song-Kül. There is a lake, a ring of pasture, and between June and September there are families who bring their horses and sheep up from the valleys and live here until the weather turns. We have worked with three of those families for years. You stay with them. You eat what comes out of the same pot as everyone else. In the afternoon, somebody will offer you a horse, and the correct answer is yes even if you have never ridden one. The trip is not comfortable in the way a resort is comfortable. It is comfortable in the way a good fire is.",
        storyQuote: "You stop checking your phone by the second day, and not because there is no signal.",
        image: '/images/dest/song-kul.jpg',
        gallery: [
            '/images/gallery/songkul-1.jpg',
            '/images/gallery/songkul-3.jpg',
            '/images/value-horse-mountains.jpg'
        ],
        rating: 4.8,
        reviews: 64,
        tags: ['Trekking', 'Wildlife', 'Unique stays'],
        priceFrom: 2240,
        duration: '10 days',
        bestSeason: 'June to September',
        seasons: ['Summer'],
        keyFacts: [
            { label: 'Best time', value: 'June to September', icon: 'sun' },
            { label: 'Trip length', value: '8 to 12 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 6 travellers', icon: 'users' },
            { label: 'Altitude', value: 'Lake sits at 3,016 metres', icon: 'peak' },
            { label: 'Language', value: 'Kyrgyz, Russian, some English', icon: 'language' },
            { label: 'Nights', value: 'Cold, even in July', icon: 'thermometer' }
        ],
        experiences: [
            {
                title: 'Ride with the herders',
                description: "Out at seven with the family who keeps the horses, back when the work is done. No arena, no helmets on poles, just open pasture.",
                icon: 'compass'
            },
            {
                title: 'A night with no light pollution',
                description: "The nearest town is four hours away. On a clear night you can read by starlight, and we are not exaggerating.",
                icon: 'moon'
            },
            {
                title: 'Learn to make boorsok',
                description: "Fried dough, endless tea, and an hour in a yurt kitchen that will teach you more about the place than any museum.",
                icon: 'food'
            },
            {
                title: 'Cross the Kalmak-Ashuu pass',
                description: "Thirty-three switchbacks down the north side, with the lake behind you and the whole valley opening up ahead.",
                icon: 'route'
            }
        ],
        itinerary: [
            { day: 'Day 1 to 2', title: 'Bishkek and the road south', description: "A night in the city, then out through Kochkor with a stop to meet the family you will stay with." },
            { day: 'Day 3 to 5', title: 'Song-Kül', description: "Three nights at the lake. Riding, walking, helping with the animals if you want to, doing nothing if you do not." },
            { day: 'Day 6 to 7', title: 'Down to Naryn', description: "Over the pass, into the gorges, and a night in a guesthouse with a very welcome hot shower." },
            { day: 'Day 8 to 9', title: 'Tash Rabat', description: "A stone caravanserai from the fifteenth century, still standing on the old Silk Road route to China." },
            { day: 'Day 10', title: 'Return to Bishkek', description: "A long drive back with a stop at Burana tower, then a last dinner in the city." }
        ],
        stays: [
            {
                name: 'Jailoo Yurt Camp',
                type: 'Family yurt',
                description: "Felt walls, thick bedding, a wood stove somebody else gets up to feed at four in the morning. Shared washing facilities.",
                price: 'from $42 per night',
                image: '/images/gallery/songkul-2.jpg'
            },
            {
                name: 'Kyzart Pasture Camp',
                type: 'Summer camp',
                description: "The lower camp, an hour below the lake, used when the weather closes in. Horses are kept right outside.",
                price: 'from $38 per night',
                image: '/images/value-yurt-camp.jpg'
            },
            {
                name: 'Naryn Guesthouse',
                type: 'Town guesthouse',
                description: "Four rooms above a family kitchen. Hot water, a washing machine, and the best plov in the region.",
                price: 'from $55 per night',
                image: '/images/gallery/songkul-1.jpg'
            }
        ],
        featured: true
    },
    {
        slug: 'torres-del-paine-chile',
        name: 'Torres del Paine',
        country: 'Chile',
        region: 'South America',
        category: 'Wildlife',
        tagline: "Granite, wind, and a horizon that keeps moving.",
        summary: "Patagonia at the pace it deserves. We build the route around the weather rather than fighting it, which is why our travellers see the towers clear and most day-trippers do not.",
        story: "Patagonia has a reputation for being difficult, and it earns it. The wind can take you off your feet. The forecast is a rumour. What we have learned over eleven seasons here is that the trick is flexibility: we hold two possible routes every day and choose at breakfast. That is why our groups tend to be standing under the towers on the one clear morning of the week. Between the walking there are guanaco herds on the steppe, condors riding the thermals above Ascencio, and if you are very lucky, a puma at distance. Our guides count pumas the way other people count birds.",
        storyQuote: "We do not promise you the towers. We promise you the best chance anyone can give you.",
        image: '/images/dest/lake-toba.jpg',
        gallery: [
            '/images/gallery/patagonia-1.jpg',
            '/images/gallery/patagonia-2.jpg',
            '/images/gallery/patagonia-3.jpg'
        ],
        rating: 4.9,
        reviews: 87,
        tags: ['Hiking', 'Wildlife', 'Nature'],
        priceFrom: 3980,
        duration: '11 days',
        bestSeason: 'November to March',
        seasons: ['Summer', 'Autumn'],
        keyFacts: [
            { label: 'Best time', value: 'November to March', icon: 'sun' },
            { label: 'Trip length', value: '9 to 14 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 8 travellers', icon: 'users' },
            { label: 'Walking', value: '12 to 22 km on active days', icon: 'walk' },
            { label: 'Fitness', value: 'Good. Long days, real weather', icon: 'activity' },
            { label: 'Currency', value: 'Chilean peso', icon: 'wallet' }
        ],
        experiences: [
            {
                title: 'The base of the towers',
                description: "Nine hours return, the last of it up a boulder field, and then the view that put this park on every list worth being on.",
                icon: 'peak'
            },
            {
                title: 'Tracking on the steppe',
                description: "Out before dawn with a wildlife guide who worked with the puma research programme. Binoculars provided, patience required.",
                icon: 'bird'
            },
            {
                title: 'Grey Glacier by water',
                description: "A boat across the lake to the glacier face, close enough to hear it work. Layers, and then more layers.",
                icon: 'snow'
            },
            {
                title: 'Asado at the estancia',
                description: "Lamb over an open fire, a long table, Chilean red, and a sheepdog who will sit on your foot until you feed it.",
                icon: 'food'
            }
        ],
        itinerary: [
            { day: 'Day 1 to 2', title: 'Santiago to Puerto Natales', description: "Fly south, overnight in town, kit check and a briefing over dinner." },
            { day: 'Day 3 to 4', title: 'Into the park', description: "Settle at the eastern lodge, an easy first walk to find your legs, and the first look at the towers." },
            { day: 'Day 5', title: 'Base of the towers', description: "The big one. Early start, long day, the reason most people come here." },
            { day: 'Day 6 to 8', title: 'French Valley and Grey', description: "The middle of the W route, with a boat crossing and a night close to the glacier." },
            { day: 'Day 9 to 11', title: 'Steppe and home', description: "Two wildlife mornings on the estancia, then back to Santiago via Punta Arenas." }
        ],
        stays: [
            {
                name: 'Estancia Cerro Azul',
                type: 'Working ranch',
                description: "Eight rooms on a sheep station on the park boundary. Wood fires, huge breakfasts, horses in the yard.",
                price: 'from $240 per night',
                image: '/images/gallery/patagonia-3.jpg'
            },
            {
                name: 'Refugio Chileno',
                type: 'Mountain refuge',
                description: "Bunk accommodation in the Ascencio valley. Basic, warm, and the only way to be at the towers for sunrise.",
                price: 'from $95 per night',
                image: '/images/gallery/lofoten-3.jpg'
            },
            {
                name: 'Lago Grey Lodge',
                type: 'Glacier lodge',
                description: "Big windows facing the ice, a drying room that actually works, and a bar that stays open for late walkers.",
                price: 'from $310 per night',
                image: '/images/gallery/patagonia-1.jpg'
            }
        ],
        featured: false
    },
    {
        slug: 'faroe-islands-denmark',
        name: 'Faroe Islands',
        country: 'Denmark',
        region: 'Europe',
        category: 'Coast',
        tagline: "Eighteen islands, one very reliable supply of weather.",
        summary: "Sea cliffs, grass roofs and villages of forty people. The Faroes are small enough to cross in a day and strange enough to stay a week, and the fog is part of the deal rather than a problem with it.",
        story: "You will hear the Faroes described as dramatic, which is true, but it undersells how domestic they are. Between the thousand-foot cliffs there are villages with a church, a football pitch and a tunnel to the next fjord. Everyone is somebody's cousin. We stay in those villages rather than in Tórshavn, which means dinner is often in a family's dining room and the walk to the cliff edge starts at your front door. The weather does what it wants. We build in slack days, and the ones that come in low and grey are frequently the best ones.",
        storyQuote: "If you wait twenty minutes, it becomes a different country.",
        image: '/images/dest/faroe.jpg',
        gallery: [
            '/images/gallery/faroe-1.jpg',
            '/images/gallery/faroe-2.jpg',
            '/images/gallery/faroe-3.jpg'
        ],
        rating: 4.7,
        reviews: 52,
        tags: ['Hiking', 'Coast', 'Local life'],
        priceFrom: 2650,
        duration: '7 days',
        bestSeason: 'May to September',
        seasons: ['Spring', 'Summer', 'Autumn'],
        keyFacts: [
            { label: 'Best time', value: 'May to September', icon: 'sun' },
            { label: 'Trip length', value: '5 to 9 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 8 travellers', icon: 'users' },
            { label: 'Getting around', value: 'Ferries, tunnels and one helicopter', icon: 'boat' },
            { label: 'Language', value: 'Faroese, Danish, English', icon: 'language' },
            { label: 'Weather', value: "Four seasons, most days", icon: 'wind' }
        ],
        experiences: [
            {
                title: 'The Kallur lighthouse walk',
                description: "Ninety minutes up a ridge on Kalsoy with a drop on both sides and, on a clear day, six islands in view.",
                icon: 'walk'
            },
            {
                title: 'Seabird colonies at Vestmanna',
                description: "By boat, under the cliffs, in the middle of a very loud and very busy guillemot city.",
                icon: 'bird'
            },
            {
                title: 'Heimablídni supper',
                description: "Home hospitality, the Faroese institution. You eat in somebody's house, at their table, with their family.",
                icon: 'food'
            },
            {
                title: 'The Saksun tidal lagoon',
                description: "A turf-roofed farm, a black sand lagoon, and a walk out to the sea that you can only do at low tide.",
                icon: 'waves'
            }
        ],
        itinerary: [
            { day: 'Day 1', title: 'Arrive in Vágar', description: "Land, collect the car, and a first short walk to Trælanípa before dinner." },
            { day: 'Day 2 to 3', title: 'Streymoy and Saksun', description: "Waterfalls, the tidal lagoon, and two nights in a village of fourteen houses." },
            { day: 'Day 4', title: 'Kalsoy', description: "The ferry north, the Kallur ridge walk, and the lighthouse at the end of the world." },
            { day: 'Day 5 to 6', title: 'Suðuroy', description: "The southern island, two hours by ferry and almost entirely to yourself." },
            { day: 'Day 7', title: 'Tórshavn and out', description: "The old turf-roofed quarter, a last coffee on the harbour, and the afternoon flight." }
        ],
        stays: [
            {
                name: 'Múli Cottage',
                type: 'Turf-roof cottage',
                description: "A restored two-bedroom house in an almost abandoned village on Borðoy. Wood burner, no neighbours, enormous silence.",
                price: 'from $165 per night',
                image: '/images/gallery/faroe-1.jpg'
            },
            {
                name: 'Saksun Farmhouse',
                type: 'Working farm',
                description: "Three rooms on a sheep farm above the lagoon. Breakfast is whatever came in that week.",
                price: 'from $140 per night',
                image: '/images/gallery/patagonia-3.jpg'
            },
            {
                name: 'Gjógv Guesthouse',
                type: 'Village guesthouse',
                description: "Above the sea gorge on the north coast. Six rooms, one very good cook, and a drying room for the inevitable.",
                price: 'from $120 per night',
                image: '/images/gallery/faroe-3.jpg'
            }
        ],
        featured: false
    },
    {
        slug: 'kyoto-japan',
        name: 'Kyoto',
        country: 'Japan',
        region: 'Asia',
        category: 'Culture',
        tagline: "A thousand temples, and the trick is choosing four.",
        summary: "We plan Kyoto backwards: early mornings and late evenings in the places everyone visits, and the middle of the day in the workshops, gardens and neighbourhoods that almost nobody does.",
        story: "Kyoto is not a difficult city to visit badly. Arrive at eleven, join the queue, photograph the same corner as four hundred other people, leave disappointed. The city is at its best between six and eight in the morning, when the gravel gardens have just been raked and the light comes in sideways, and again after seven in the evening when the lanterns go on in Gion and the day visitors have gone back to Osaka. In between, we take you to the people who make things: an indigo dyer in Fushimi, a knife sharpener whose family has worked the same corner since 1861, a tea house that seats six.",
        storyQuote: "The famous places are famous for a reason. Go at six, not at eleven.",
        image: '/images/dest/kyoto.jpg',
        gallery: [
            '/images/gallery/kyoto-1.jpg',
            '/images/gallery/kyoto-4.jpg',
            '/images/gallery/kyoto-2.jpg'
        ],
        rating: 4.9,
        reviews: 143,
        tags: ['Culture', 'Food', 'Slow travel'],
        priceFrom: 3150,
        duration: '8 days',
        bestSeason: 'March to May, October to November',
        seasons: ['Spring', 'Autumn'],
        keyFacts: [
            { label: 'Best time', value: 'Late March, or all of November', icon: 'sun' },
            { label: 'Trip length', value: '6 to 10 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 6 travellers', icon: 'users' },
            { label: 'Getting around', value: 'Trains, buses and a lot of walking', icon: 'route' },
            { label: 'Language', value: 'Japanese, English in the city', icon: 'language' },
            { label: 'Currency', value: 'Japanese yen', icon: 'wallet' }
        ],
        experiences: [
            {
                title: 'Six in the morning at Fushimi Inari',
                description: "The gates, the hillside and the fog, an hour before the first tour bus. This is the whole reason we start early.",
                icon: 'landmark'
            },
            {
                title: 'An afternoon with an indigo dyer',
                description: "Fourth-generation workshop, vats that have been alive for decades, and you go home with something you made badly and love.",
                icon: 'craft'
            },
            {
                title: 'Nishiki market, properly',
                description: "Two hours with a chef who shops here, tasting the things you would never have pointed at.",
                icon: 'food'
            },
            {
                title: 'Tea in a six-seat room',
                description: "A full tea preparation with an instructor who will explain why the bowl is turned, and why it matters.",
                icon: 'coffee'
            }
        ],
        itinerary: [
            { day: 'Day 1', title: 'Arrive in Kyoto', description: "The train in from Kansai, an evening walk through Gion, and dinner at a counter with eight seats." },
            { day: 'Day 2 to 3', title: 'East and south', description: "Early Fushimi Inari, the Higashiyama temples, and an afternoon in the craft workshops." },
            { day: 'Day 4', title: 'Arashiyama and the west', description: "Bamboo before seven, then the moss gardens and a riverside lunch." },
            { day: 'Day 5 to 6', title: 'Nara and the hills', description: "A day trip to the old capital, then a night in a ryokan north of the city with an outdoor bath." },
            { day: 'Day 7 to 8', title: 'Markets and home', description: "Nishiki, one last garden, and a slow final morning before the train back." }
        ],
        stays: [
            {
                name: 'Machiya Kuromon',
                type: 'Restored townhouse',
                description: "A two-hundred-year-old wooden machiya on a lane in Nakagyo. Tatami, a courtyard garden, and a bath you will not want to leave.",
                price: 'from $215 per night',
                image: '/images/gallery/kyoto-3.jpg'
            },
            {
                name: 'Ryokan Hoshi',
                type: 'Traditional inn',
                description: "Eight rooms in the hills north of the city. Kaiseki dinner, outdoor onsen, and absolute quiet after nine.",
                price: 'from $390 per night',
                image: '/images/gallery/kyoto-2.jpg'
            },
            {
                name: 'Kamo Riverside Rooms',
                type: 'Small hotel',
                description: "Twelve rooms facing the river in Pontocho. Central, calm, and a five-minute walk from everywhere you want to eat.",
                price: 'from $170 per night',
                image: '/images/gallery/kyoto-1.jpg'
            }
        ],
        featured: true
    },
    {
        slug: 'merzouga-morocco',
        name: 'Merzouga',
        country: 'Morocco',
        region: 'Africa',
        category: 'Desert',
        tagline: "Where the road stops and the dunes start.",
        summary: "The last village before the Erg Chebbi dunes. We take the long way there through the Atlas and the gorges, and we stay two nights in the sand rather than the usual rushed one.",
        story: "Everybody does Merzouga in a hurry. Marrakech at dawn, nine hours in a minibus, one night in a camp, straight back. It is a waste of a remarkable place. We give the drive three days, stopping in the Dades gorge and the Todra, eating where the drivers eat, and arriving with enough time to watch the dunes change colour for two evenings instead of one. The second night is the one that gets you: the group has thinned out, the camp is quiet, somebody starts drumming, and the temperature drops about fifteen degrees in an hour.",
        storyQuote: "One night in the desert is a photograph. Two nights is a memory.",
        image: '/images/dest/sahara.jpg',
        gallery: [
            '/images/gallery/sahara-1.jpg',
            '/images/gallery/sahara-3.jpg',
            '/images/dest/atlas.jpg'
        ],
        rating: 4.8,
        reviews: 96,
        tags: ['Desert', 'Culture', 'Unique stays'],
        priceFrom: 1740,
        duration: '8 days',
        bestSeason: 'October to April',
        seasons: ['Autumn', 'Winter', 'Spring'],
        keyFacts: [
            { label: 'Best time', value: 'October to April', icon: 'sun' },
            { label: 'Trip length', value: '6 to 10 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 10 travellers', icon: 'users' },
            { label: 'Getting there', value: 'Three days overland from Marrakech', icon: 'route' },
            { label: 'Language', value: 'Arabic, Amazigh, French', icon: 'language' },
            { label: 'Nights', value: 'Cold in the desert, bring layers', icon: 'thermometer' }
        ],
        experiences: [
            {
                title: 'Two nights at Erg Chebbi',
                description: "A camp at the base of the big dune, reached on foot or by camel depending on how your knees feel.",
                icon: 'tent'
            },
            {
                title: 'Sunrise from the ridge',
                description: "Forty minutes uphill in soft sand, in the dark, for the best twenty minutes of the entire trip.",
                icon: 'sunrise'
            },
            {
                title: 'The Todra gorge',
                description: "Three-hundred-metre walls a few metres apart, and a river you can walk in when the day gets hot.",
                icon: 'mountain'
            },
            {
                title: 'Gnawa music after dinner',
                description: "Not a performance for tourists. The camp crew play because that is what you do when the fire is lit.",
                icon: 'music'
            }
        ],
        itinerary: [
            { day: 'Day 1', title: 'Marrakech', description: "A night in a riad in the medina and an evening in the food stalls of Jemaa el-Fnaa." },
            { day: 'Day 2', title: 'Over the Tizi n Tichka', description: "The High Atlas pass, a stop at Aït Benhaddou, and a night in the Dades valley." },
            { day: 'Day 3', title: 'Todra and Tinghir', description: "The gorge in the morning, palm groves in the afternoon, then east towards the sand." },
            { day: 'Day 4 to 5', title: 'Erg Chebbi', description: "Two nights in the dunes. Sunrise, sunset, and a very long afternoon of doing nothing." },
            { day: 'Day 6 to 8', title: 'Back through the south', description: "The rose valley, a night in Skoura, and a final evening back in Marrakech." }
        ],
        stays: [
            {
                name: 'Riad Zitoun',
                type: 'Medina riad',
                description: "Eight rooms around a courtyard in Marrakech. Cool tiled floors, a roof terrace, and breakfast under the orange tree.",
                price: 'from $95 per night',
                image: '/images/gallery/sahara-2.jpg'
            },
            {
                name: 'Erg Chebbi Camp',
                type: 'Desert camp',
                description: "Ten tents with proper beds and a hot shower. Rugs, a fire pit, and nothing at all for thirty kilometres.",
                price: 'from $135 per night',
                image: '/images/gallery/cappadocia-2.jpg'
            },
            {
                name: 'Dar Skoura',
                type: 'Palm grove guesthouse',
                description: "A mudbrick house in the palmeraie with six rooms, a cold pool, and dinner cooked by the owner's mother.",
                price: 'from $78 per night',
                image: '/images/gallery/sahara-1.jpg'
            }
        ],
        featured: false
    },
    {
        slug: 'lofoten-norway',
        name: 'Lofoten',
        country: 'Norway',
        region: 'Europe',
        category: 'Mountains',
        tagline: "Peaks straight out of the sea, above the Arctic Circle.",
        summary: "Fishing villages, white beaches that look tropical until you touch the water, and mountains that go from sea level to a thousand metres in under two kilometres. Winter for the lights, summer for the sun that never sets.",
        story: "Lofoten is a geological accident that happens to be inhabited. The mountains rise out of the Norwegian Sea with no foothills, and the villages are squeezed into whatever flat ground is left over. We run this trip twice a year for two very different reasons. In February the sun barely clears the ridge, the sea is green-black, and there is a real chance of the aurora on any clear night. In June there is no night at all, and you can be on a summit at one in the morning in full daylight. Both are worth doing. Neither is warm.",
        storyQuote: "In February you chase the light. In June you cannot get away from it.",
        image: '/images/dest/lofoten.jpg',
        gallery: [
            '/images/gallery/lofoten-1.jpg',
            '/images/gallery/lofoten-2.jpg',
            '/images/polaroid-1.jpg'
        ],
        rating: 4.8,
        reviews: 78,
        tags: ['Hiking', 'Northern lights', 'Coast'],
        priceFrom: 2980,
        duration: '7 days',
        bestSeason: 'February to March, June to August',
        seasons: ['Winter', 'Summer'],
        keyFacts: [
            { label: 'Best time', value: 'February for lights, June for sun', icon: 'moon' },
            { label: 'Trip length', value: '6 to 9 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 8 travellers', icon: 'users' },
            { label: 'Walking', value: '8 to 16 km on active days', icon: 'walk' },
            { label: 'Getting around', value: 'One road, several ferries', icon: 'boat' },
            { label: 'Currency', value: 'Norwegian krone', icon: 'wallet' }
        ],
        experiences: [
            {
                title: 'Reinebringen at first light',
                description: "Fifteen hundred stone steps up, and then the view that is on the cover of every book about this coast.",
                icon: 'peak'
            },
            {
                title: 'Aurora on the north shore',
                description: "February trips only. We drive to whichever beach has the clearest sky and wait with a flask of something hot.",
                icon: 'sparkles'
            },
            {
                title: 'Out with the cod boats',
                description: "A morning on a working skrei boat in Henningsvær during the winter season, which is not a comfortable morning.",
                icon: 'fish'
            },
            {
                title: 'Kvalvika beach overnight',
                description: "An hour over the pass with everything on your back, a night in a tent on white sand, and no way to call anybody.",
                icon: 'tent'
            }
        ],
        itinerary: [
            { day: 'Day 1', title: 'Fly to Svolvær', description: "In over the islands, which is worth a window seat, then east to the first rorbu." },
            { day: 'Day 2 to 3', title: 'Henningsvær and Austvågøy', description: "The fishing village, the harbour, and two walks depending entirely on the forecast." },
            { day: 'Day 4 to 5', title: 'Reine and Moskenesøy', description: "The postcard end of the island chain. Reinebringen if it is clear, Kvalvika if it is not." },
            { day: 'Day 6', title: 'Å and the far south', description: "The last village on the road, the stockfish museum, and a long afternoon of nothing at all." },
            { day: 'Day 7', title: 'Back north', description: "The drive back up the chain with stops for every beach, then the evening flight." }
        ],
        stays: [
            {
                name: 'Reine Rorbu',
                type: 'Fisherman cabin',
                description: "A red cabin on stilts over the water, converted from a cod station. Two bedrooms, a wood stove and a very short walk to the sea.",
                price: 'from $205 per night',
                image: '/images/gallery/lofoten-3.jpg'
            },
            {
                name: 'Hattvika Lodge',
                type: 'Harbour lodge',
                description: "Restored cabins in Ballstad with a sauna on the dock and a kitchen that smokes its own fish.",
                price: 'from $260 per night',
                image: '/images/gallery/lofoten-1.jpg'
            },
            {
                name: 'Henningsvær Guesthouse',
                type: 'Village rooms',
                description: "Six rooms above a gallery on the harbour. Simple, warm, and you can hear the boats leave at four.",
                price: 'from $145 per night',
                image: '/images/polaroid-1.jpg'
            }
        ],
        featured: false
    },
    {
        slug: 'dolomites-italy',
        name: 'Dolomites',
        country: 'Italy',
        region: 'Europe',
        category: 'Mountains',
        tagline: "Limestone towers, and lunch at two thousand metres.",
        summary: "Hut-to-hut walking in the Alta Badia and Sesto valleys, where the trails are well kept, the refuges serve proper food, and you can spend a week above the treeline without carrying a tent.",
        story: "The Dolomites solved a problem that most mountain ranges have not: you can walk for a week at altitude and sleep in a bed every night, with a cook, a shower and often a wine list. The rifugio system has been running since the nineteenth century and it means the walking can be serious while the evenings are not. This is a German-speaking, Italian-cooking, Ladin-speaking corner of Europe where the menu is dumplings and espresso, and the towers turn pink for about eleven minutes at sunset in a way that never stops being ridiculous.",
        storyQuote: "You climb for six hours and then somebody hands you a plate of pasta at two thousand metres.",
        image: '/images/dest/patagonia.jpg',
        gallery: [
            '/images/polaroid-2.jpg',
            '/images/gallery/patagonia-3.jpg',
            '/images/gallery/toba-1.jpg'
        ],
        rating: 4.7,
        reviews: 61,
        tags: ['Hiking', 'Food', 'Nature'],
        priceFrom: 2480,
        duration: '8 days',
        bestSeason: 'June to September',
        seasons: ['Summer', 'Autumn'],
        keyFacts: [
            { label: 'Best time', value: 'Late June to mid September', icon: 'sun' },
            { label: 'Trip length', value: '6 to 10 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 10 travellers', icon: 'users' },
            { label: 'Walking', value: '10 to 18 km, 700 m ascent', icon: 'walk' },
            { label: 'Luggage', value: 'Main bags moved between valleys', icon: 'luggage' },
            { label: 'Language', value: 'Italian, German and Ladin', icon: 'language' }
        ],
        experiences: [
            {
                title: 'Tre Cime circuit',
                description: "The three peaks loop, ten kilometres of it, with a refuge at the halfway point that does an excellent apple strudel.",
                icon: 'peak'
            },
            {
                title: 'Sunset on the Sella',
                description: "Up by cable car late in the day, when everyone else is going down, for the alpenglow on the Marmolada.",
                icon: 'sunset'
            },
            {
                title: 'A via ferrata morning',
                description: "Clipped to a steel cable up a rock face with a guide. No experience needed, a decent head for heights helps.",
                icon: 'route'
            },
            {
                title: 'Malga lunch',
                description: "A working dairy hut above Badia. Cheese made that morning, speck, dark bread and a jug of something cloudy.",
                icon: 'food'
            }
        ],
        itinerary: [
            { day: 'Day 1', title: 'Arrive in Bolzano', description: "The train up the valley, a night in town, and a briefing over dinner in the old arcades." },
            { day: 'Day 2 to 3', title: 'Alta Badia', description: "Two valley days to get the legs working, with a malga lunch and an easy ridge walk." },
            { day: 'Day 4 to 5', title: 'Above the treeline', description: "Two nights in refuges, walking between them, with everything you need on your back." },
            { day: 'Day 6', title: 'Tre Cime', description: "The circuit, from the north side, ideally starting before the car park fills." },
            { day: 'Day 7 to 8', title: 'Sesto and out', description: "A last valley walk, a long lunch, and the train back down to Bolzano." }
        ],
        stays: [
            {
                name: 'Rifugio Lavaredo',
                type: 'Mountain refuge',
                description: "Bunk rooms and a handful of doubles under the three peaks. Dinner at seven, lights out at ten, sunrise at your window.",
                price: 'from $85 per night',
                image: '/images/gallery/patagonia-3.jpg'
            },
            {
                name: 'Maso Corto',
                type: 'Restored farmhouse',
                description: "A larch-clad maso above La Villa with five rooms, a sauna and a breakfast that could feed a walking group twice.",
                price: 'from $190 per night',
                image: '/images/gallery/lofoten-3.jpg'
            },
            {
                name: 'Albergo Sesto',
                type: 'Valley inn',
                description: "A family-run inn since 1934. Thick duvets, a drying room, and a kitchen that still does the old Ladin dishes.",
                price: 'from $130 per night',
                image: '/images/gallery/toba-1.jpg'
            }
        ],
        featured: false
    },
    {
        slug: 'pamukkale-turkiye',
        name: 'Pamukkale',
        country: 'Türkiye',
        region: 'Europe',
        category: 'Wellness',
        tagline: "White terraces, warm water, and a ruined city on top.",
        summary: "Thermal pools that have been drawing people here since the second century BC, and a Roman spa town built directly above them. We go in the shoulder season, early, and stay in the village rather than bussing in.",
        story: "Pamukkale is two things stacked on top of each other. At the bottom, white travertine terraces formed by calcium-rich water running down the hillside for thousands of years. At the top, Hierapolis, a Roman city that existed because of that water, with a theatre, a necropolis and a bathing pool full of fallen marble columns you are allowed to swim among. Almost everyone sees it in three hours between two coaches. We stay two nights in Karahayıt, walk up barefoot at seven when the terraces are empty and the water is steaming, and spend the afternoon in the vineyards and villages nobody stops in.",
        storyQuote: "Barefoot, at seven in the morning, with steam coming off the terraces and nobody else on them.",
        image: '/images/dest/sapa.jpg',
        gallery: [
            '/images/gallery/cappadocia-2.jpg',
            '/images/gallery/cappadocia-3.jpg',
            '/images/gallery/toba-4.jpg'
        ],
        rating: 4.6,
        reviews: 58,
        tags: ['Wellness', 'History', 'Slow travel'],
        priceFrom: 1590,
        duration: '6 days',
        bestSeason: 'April to June, September to October',
        seasons: ['Spring', 'Autumn'],
        keyFacts: [
            { label: 'Best time', value: 'April to June, or September', icon: 'sun' },
            { label: 'Trip length', value: '5 to 8 days', icon: 'clock' },
            { label: 'Group size', value: 'Up to 10 travellers', icon: 'users' },
            { label: 'Water', value: 'Terrace pools sit around 35°C', icon: 'thermometer' },
            { label: 'Access', value: 'Barefoot only on the travertines', icon: 'walk' },
            { label: 'Currency', value: 'Turkish lira', icon: 'wallet' }
        ],
        experiences: [
            {
                title: 'The terraces before opening rush',
                description: "Up the hill barefoot at seven, when the water is steaming and the white is almost too bright to look at.",
                icon: 'waves'
            },
            {
                title: 'Swim in the antique pool',
                description: "Warm mineral water over a floor of fallen Roman columns, which is exactly as strange as it sounds.",
                icon: 'sparkles'
            },
            {
                title: 'Hierapolis at closing time',
                description: "The theatre and the necropolis in the last hour of light, with the valley going gold below.",
                icon: 'landmark'
            },
            {
                title: 'A village pottery afternoon',
                description: "Two hours at a wheel in Kınıklı with a potter who supplies half the region, and a very forgiving teacher.",
                icon: 'craft'
            }
        ],
        itinerary: [
            { day: 'Day 1', title: 'İzmir to the valley', description: "A three-hour drive inland, arriving in time for a first evening look at the terraces from below." },
            { day: 'Day 2', title: 'Terraces and Hierapolis', description: "Barefoot at seven, the antique pool late morning, and the ruins again at dusk." },
            { day: 'Day 3', title: 'Laodicea and the vineyards', description: "A much quieter ancient city, then an afternoon of tasting in the Çal highlands." },
            { day: 'Day 4', title: 'Aphrodisias', description: "The best-preserved stadium in the ancient world, and a sculpture museum almost nobody visits." },
            { day: 'Day 5 to 6', title: 'Back to the coast', description: "West through the olive country, a last night in Alaçatı, and the flight out." }
        ],
        stays: [
            {
                name: 'Karahayıt Terrace House',
                type: 'Village guesthouse',
                description: "Eight rooms with a thermal pool in the garden, ten minutes below the travertines and a world away from the coach park.",
                price: 'from $88 per night',
                image: '/images/gallery/cappadocia-2.jpg'
            },
            {
                name: 'Bağ Evi',
                type: 'Vineyard house',
                description: "A stone house among the vines in the Çal highlands. Four rooms, one long table, and dinner from the garden.",
                price: 'from $110 per night',
                image: '/images/gallery/sahara-2.jpg'
            },
            {
                name: 'Alaçatı Stone Rooms',
                type: 'Coastal townhouse',
                description: "A restored Greek stone house on the Çeşme peninsula with a courtyard, five rooms and very good coffee.",
                price: 'from $150 per night',
                image: '/images/gallery/cappadocia-3.jpg'
            }
        ],
        featured: false
    }
]

export const getDestinationBySlug = (slug: string): Destination | undefined => {
    return destinations.find((destination) => destination.slug === slug)
}

export const getRelatedDestinations = (slug: string, limit = 3): Destination[] => {
    const current = destinations.find((destination) => destination.slug === slug)

    if (!current) return destinations.slice(0, limit)

    const sameRegion = destinations.filter((destination) => {
        return destination.slug !== slug && destination.region === current.region
    })

    const rest = destinations.filter((destination) => {
        return destination.slug !== slug && destination.region !== current.region
    })

    return [...sameRegion, ...rest].slice(0, limit)
}

export const regionOptions: FilterOption[] = [
    { label: 'Anywhere', value: 'all' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Africa', value: 'Africa' },
    { label: 'South America', value: 'South America' }
]

export const categoryOptions: FilterOption[] = [
    { label: 'Any type', value: 'all' },
    { label: 'Coast', value: 'Coast' },
    { label: 'Mountains', value: 'Mountains' },
    { label: 'Culture', value: 'Culture' },
    { label: 'Desert', value: 'Desert' },
    { label: 'Wildlife', value: 'Wildlife' },
    { label: 'Wellness', value: 'Wellness' }
]

export const budgetOptions: FilterOption[] = [
    { label: 'Any budget', value: 'all' },
    { label: 'Under $2,000', value: 'under-2000' },
    { label: '$2,000 to $3,000', value: '2000-3000' },
    { label: 'Over $3,000', value: 'over-3000' }
]

export const seasonOptions: FilterOption[] = [
    { label: 'Any time', value: 'all' },
    { label: 'Spring', value: 'Spring' },
    { label: 'Summer', value: 'Summer' },
    { label: 'Autumn', value: 'Autumn' },
    { label: 'Winter', value: 'Winter' }
]

export const matchesBudget = (priceFrom: number, bucket: string): boolean => {
    if (bucket === 'under-2000') return priceFrom < 2000
    if (bucket === '2000-3000') return priceFrom >= 2000 && priceFrom <= 3000
    if (bucket === 'over-3000') return priceFrom > 3000

    return true
}
