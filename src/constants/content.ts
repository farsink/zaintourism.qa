import type {
    ValueCard,
    Step,
    Stat,
    TeamMember,
    Faq,
    FilterOption
} from '@/types'

export const heroSlides = [
    { label: 'More Than a Trip' },
    { label: 'A Brighter You' }
]

export const activityOptions: FilterOption[] = [
    { label: 'Surf, hike or rest', value: 'all' },
    { label: 'Surf and coast', value: 'Coast' },
    { label: 'Hiking and trekking', value: 'Mountains' },
    { label: 'Culture and craft', value: 'Culture' },
    { label: 'Wildlife watching', value: 'Wildlife' },
    { label: 'Desert and dunes', value: 'Desert' },
    { label: 'Rest and thermal', value: 'Wellness' }
]

export const durationOptions: FilterOption[] = [
    { label: 'Anytime, 3+ days', value: 'all' },
    { label: 'Spring', value: 'Spring' },
    { label: 'Summer', value: 'Summer' },
    { label: 'Autumn', value: 'Autumn' },
    { label: 'Winter', value: 'Winter' }
]

export const trustItems = [
    { value: '5K+', label: 'Happy travellers' },
    { value: '48', label: 'Countries planned' },
    { value: '4.9/5', label: 'Average rating' }
]

export const travellerAvatars = [
    '/images/people/avatar-1.jpg',
    '/images/people/avatar-2.jpg',
    '/images/people/avatar-3.jpg',
    '/images/people/avatar-4.jpg'
]

export const valueCards: ValueCard[] = [
    {
        title: 'Suusamyr Plains',
        location: 'Kyrgyzstan',
        caption: 'Horseback days with the families who herd here',
        image: '/images/value-horse-mountains.jpg'
    },
    {
        title: 'Song-Kül',
        location: 'Kyrgyzstan',
        caption: 'Nomadic summer camps at three thousand metres',
        image: '/images/value-yurt-camp.jpg'
    },
    {
        title: 'Sebatu Valley',
        location: 'Bali, Indonesia',
        caption: 'Forest walks with guides who farmed these terraces',
        image: '/images/value-jungle.jpg'
    },
    {
        title: 'Uluwatu',
        location: 'Bali, Indonesia',
        caption: 'Cliff breaks read by someone who has surfed them since nine',
        image: '/images/gallery/bali-3.jpg'
    },
    {
        title: 'Reine',
        location: 'Lofoten, Norway',
        caption: 'Red cabins on stilts, above the Arctic Circle',
        image: '/images/dest/lofoten.jpg'
    },
    {
        title: 'Erg Chebbi',
        location: 'Merzouga, Morocco',
        caption: 'Two nights in the dunes, never the usual rushed one',
        image: '/images/dest/sahara.jpg'
    },
    {
        title: 'Higashiyama',
        location: 'Kyoto, Japan',
        caption: 'Temple lanes at six, an hour before the first bus',
        image: '/images/dest/kyoto.jpg'
    }
]

export const processSteps: Step[] = [
    {
        number: '1',
        title: 'Explore',
        description: "Browse destinations that fit how you actually like to travel.",
        icon: 'compass'
    },
    {
        number: '2',
        title: 'Plan',
        description: "We shape the route with you, in plain language, no hard sell.",
        icon: 'map'
    },
    {
        number: '3',
        title: 'Book',
        description: "One invoice, clear terms, and a deposit you can move if plans change.",
        icon: 'shield'
    },
    {
        number: '4',
        title: 'Go',
        description: "Pack your bag. Guides, stays and transfers are already handled.",
        icon: 'backpack'
    }
]

export const featuredTestimonial = {
    quote: "Wayfare turned our bucket list into an actual route. Every detail was handled, nobody tried to upsell us, and the guide in Kyrgyzstan is now a friend we write to.",
    name: 'Elíra K.',
    detail: 'Travelled to Song-Kül',
    image: '/images/testimonial-ridge.jpg',
    avatar: '/images/people/traveler-quote.jpg'
}

export const testimonials = [
    {
        quote: "We asked for quiet and we got it. Two weeks in the Faroes without once feeling like a tourist.",
        name: 'Marcus D.',
        detail: 'Faroe Islands',
        avatar: '/images/people/avatar-2.jpg'
    },
    {
        quote: "The Kyoto week was the first trip where I came home feeling like I had met people, not just seen things.",
        name: 'Priya N.',
        detail: 'Kyoto, Japan',
        avatar: '/images/people/avatar-3.jpg'
    },
    {
        quote: "They moved our Patagonia route three times around the weather. We stood under the towers on the one clear morning.",
        name: 'Tomas R.',
        detail: 'Torres del Paine',
        avatar: '/images/people/avatar-4.jpg'
    }
]

export const polaroids = [
    '/images/polaroid-1.jpg',
    '/images/polaroid-2.jpg',
    '/images/polaroid-3.jpg'
]

export const aboutStats: Stat[] = [
    { value: '2014', label: 'Studio founded in Lisbon' },
    { value: '48', label: 'Countries we plan in' },
    { value: '5,200', label: 'Travellers sent out' },
    { value: '91%', label: 'Who book with us again' }
]

export const aboutValues = [
    {
        title: 'Fewer places, longer stays',
        description: "We would rather you saw one valley properly than five countries from a coach window. Almost every itinerary we write is shorter than the one people ask for.",
        icon: 'clock' as const
    },
    {
        title: 'Local guides, paid properly',
        description: "Every guide on our trips lives in the region they work in, is employed directly, and is paid above the local market rate. We publish that policy because too few agencies do.",
        icon: 'users' as const
    },
    {
        title: 'Small groups, always',
        description: "Six to ten travellers, never more. It is the difference between being welcomed into a village and arriving in one.",
        icon: 'heart' as const
    },
    {
        title: 'Honest about the hard parts',
        description: "If a walk is long, we say so. If the weather is likely to ruin a day, we build in a spare one. Nobody has ever enjoyed a surprise at altitude.",
        icon: 'shield' as const
    }
]

export const approachSteps: Step[] = [
    {
        number: '01',
        title: 'We ask better questions',
        description: "Not where do you want to go, but what do you want a day to feel like. The route comes out of the answer.",
        icon: 'compass'
    },
    {
        number: '02',
        title: 'We go there first',
        description: "Nothing goes on this site until somebody from the studio has walked it, slept in it and eaten there. That is why the list is short.",
        icon: 'route'
    },
    {
        number: '03',
        title: 'We build in slack',
        description: "A spare day in every week, a second route for every forecast, and a guide with the authority to change the plan at breakfast.",
        icon: 'calendar'
    },
    {
        number: '04',
        title: 'We stay reachable',
        description: "One person owns your trip from the first email to the day you land home, and you have their direct number the whole way.",
        icon: 'heart'
    }
]

export const teamMembers: TeamMember[] = [
    {
        name: 'Ana Ferreira',
        role: 'Founder and route planner',
        bio: "Spent nine years as a mountain guide before deciding the planning was the part she loved most.",
        image: '/images/people/team-1.jpg'
    },
    {
        name: 'Idris Bakri',
        role: 'North Africa and Middle East',
        bio: "Grew up in Tinghir, knows every guesthouse between Marrakech and the dunes, and will argue about tea.",
        image: '/images/people/team-2.jpg'
    },
    {
        name: 'Mei Tanaka',
        role: 'Asia and craft programmes',
        bio: "A documentary photographer who built our workshop network across Kyoto, Bali and Kyrgyzstan.",
        image: '/images/people/team-3.jpg'
    },
    {
        name: 'Johan Lind',
        role: 'Northern Europe and expeditions',
        bio: "Eleven Patagonia seasons and more Lofoten winters than he will admit to on a form.",
        image: '/images/people/team-4.jpg'
    }
]

export const contactTopics: FilterOption[] = [
    { label: 'Planning a trip', value: 'planning' },
    { label: 'Question about a package', value: 'package' },
    { label: 'Private or group booking', value: 'private' },
    { label: 'Working with us', value: 'partnership' },
    { label: 'Something else', value: 'other' }
]

export const travellerCountOptions: FilterOption[] = [
    { label: '1 traveller', value: '1' },
    { label: '2 travellers', value: '2' },
    { label: '3 to 5 travellers', value: '3-5' },
    { label: '6 to 10 travellers', value: '6-10' },
    { label: 'More than 10', value: '10+' }
]

export const budgetRanges: FilterOption[] = [
    { label: 'Under $2,000 per person', value: 'under-2000' },
    { label: '$2,000 to $3,500 per person', value: '2000-3500' },
    { label: '$3,500 to $6,000 per person', value: '3500-6000' },
    { label: 'Over $6,000 per person', value: 'over-6000' },
    { label: 'Not sure yet', value: 'unsure' }
]

export const faqs: Faq[] = [
    {
        question: 'How far ahead should I get in touch?',
        answer: "Three to six months is comfortable for most trips. Patagonia in high season and Lofoten in February book up further out, closer to nine months. If you are working to a shorter timeline, write to us anyway, we hold some space on every departure."
    },
    {
        question: 'Can you change an itinerary that is already published?',
        answer: "Yes, and most people do. Every trip on this site is a starting point. Add days, drop a region, upgrade the stays, or travel privately on any date you like. The price moves with it and we show you exactly how."
    },
    {
        question: 'What is actually included in the price?',
        answer: "Accommodation, guiding, listed meals, permits, local transport and transfers. International flights are not included, because we have never been able to beat what you can book yourself. Every trip page lists its inclusions in full."
    },
    {
        question: 'How fit do I need to be?',
        answer: "It depends entirely on the trip. Bali and Pamukkale ask almost nothing of you. The Dolomites involve six-hour days with real ascent, and Patagonia can be twenty-two kilometres in serious wind. Each destination page states the daily distances so you can judge honestly."
    },
    {
        question: 'What happens if the weather ruins a day?',
        answer: "We plan for it. There is a spare day built into every week, and guides hold a second route for each day, chosen at breakfast against the forecast. It is the single biggest reason our groups get the views that day tours miss."
    },
    {
        question: 'Do you take single travellers?',
        answer: "About a third of our travellers come alone. There is no forced sharing and no single supplement on small group departures, which is a policy we have kept even when it costs us."
    },
    {
        question: 'What are your deposit and cancellation terms?',
        answer: "A 20% deposit holds your place and is transferable to another departure up to 60 days before you travel. The balance is due eight weeks out. Full terms come with your quote, in plain language, on one page."
    }
]

export const inclusionHighlights = [
    { title: 'Local guides', description: "Employed directly, living where they work, paid above market rate.", icon: 'users' as const },
    { title: 'Stays with character', description: "Family guesthouses, yurts, refuges and restored houses. No chains.", icon: 'tent' as const },
    { title: 'Every permit handled', description: "Park fees, ferries, transfers and entry tickets, all in the price.", icon: 'shield' as const },
    { title: 'One person on call', description: "The same planner from first email to the day you land home.", icon: 'heart' as const }
]
