import type { ReactNode } from 'react'

export type SiteConfig = {
    name: string
    description: string
    placeholder: string
    url: string
    ogImage?: string
    links?: {
        twitter?: string
        github?: string
    }
}

export type HeaderVariant = 'overlay' | 'solid'

export type LayoutProps = {
    children: ReactNode
    headerVariant?: HeaderVariant
}

export type SeoProps = {
    title?: string
    description?: string
    ogImage?: string
    siteName?: string
}

export type NavItem = {
    label: string
    href: string
}

export type IconName =
    | 'compass'
    | 'map'
    | 'pin'
    | 'waves'
    | 'mountain'
    | 'peak'
    | 'sun'
    | 'sunrise'
    | 'sunset'
    | 'moon'
    | 'tent'
    | 'food'
    | 'camera'
    | 'bike'
    | 'walk'
    | 'bird'
    | 'boat'
    | 'flower'
    | 'landmark'
    | 'leaf'
    | 'snow'
    | 'sparkles'
    | 'wind'
    | 'anchor'
    | 'forest'
    | 'fish'
    | 'coffee'
    | 'music'
    | 'craft'
    | 'book'
    | 'backpack'
    | 'luggage'
    | 'plane'
    | 'globe'
    | 'star'
    | 'heart'
    | 'clock'
    | 'users'
    | 'calendar'
    | 'wallet'
    | 'shield'
    | 'award'
    | 'route'
    | 'language'
    | 'thermometer'
    | 'activity'
    | 'message'

export type Experience = {
    title: string
    description: string
    icon: IconName
}

export type ItineraryDay = {
    day: string
    title: string
    description: string
}

export type Stay = {
    name: string
    type: string
    description: string
    price: string
    image: string
}

export type KeyFact = {
    label: string
    value: string
    icon: IconName
}

export type Destination = {
    slug: string
    name: string
    country: string
    region: string
    category: string
    tagline: string
    summary: string
    story: string
    storyQuote: string
    image: string
    gallery: string[]
    rating: number
    reviews: number
    tags: string[]
    priceFrom: number
    duration: string
    bestSeason: string
    seasons: string[]
    keyFacts: KeyFact[]
    experiences: Experience[]
    itinerary: ItineraryDay[]
    stays: Stay[]
    featured: boolean
}

export type TravelPackage = {
    slug: string
    name: string
    destinationSlug: string
    destinationLabel: string
    category: string
    duration: string
    nights: number
    priceFrom: number
    description: string
    image: string
    activities: string[]
    includes: string[]
    groupSize: string
    rating: number
    reviews: number
    featured: boolean
}

export type ValueCard = {
    title: string
    location: string
    caption: string
    image: string
}

export type Step = {
    number: string
    title: string
    description: string
    icon: IconName
}

export type Stat = {
    value: string
    label: string
}

export type TeamMember = {
    name: string
    role: string
    bio: string
    image: string
}

export type Faq = {
    question: string
    answer: string
}

export type FilterOption = {
    label: string
    value: string
}
