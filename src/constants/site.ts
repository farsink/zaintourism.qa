import type { SiteConfig, NavItem } from '@/types'

import { getOrigin } from '@/lib/window'

export const siteConfig: SiteConfig = {
    name: 'Wayfare Travels',
    description: 'A small travel studio planning slow, well-considered journeys. Curated destinations, honest guides and stays worth waking up in.',
    placeholder: 'Meaningful journeys for curious people.',
    url: getOrigin()
}

export const siteTagline = 'Meaningful journeys for curious people.'

export const navigation: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Packages', href: '/packages' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
]

export const footerNavigation: { title: string, items: NavItem[] }[] = [
    {
        title: 'Quick Links',
        items: [
            { label: 'Home', href: '/' },
            { label: 'Destinations', href: '/destinations' },
            { label: 'Packages', href: '/packages' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' }
        ]
    },
    {
        title: 'Help',
        items: [
            { label: 'FAQs', href: '/contact#faq' },
            { label: 'Booking info', href: '/contact#faq' },
            { label: 'Travel tips', href: '/about#approach' },
            { label: 'Our promise', href: '/about#values' },
            { label: 'Get in touch', href: '/contact' }
        ]
    },
    {
        title: 'Follow Us',
        items: [
            { label: 'Instagram', href: 'https://instagram.com' },
            { label: 'YouTube', href: 'https://youtube.com' },
            { label: 'Facebook', href: 'https://facebook.com' },
            { label: 'Pinterest', href: 'https://pinterest.com' }
        ]
    }
]

export const contactDetails = {
    email: 'hello@wayfaretravels.com',
    phone: '+1 (415) 555 0182',
    address: '24 Harbour Lane, Studio 3',
    city: 'Lisbon, Portugal',
    hours: 'Monday to Friday, 9am to 6pm WET',
    response: 'We reply to every enquiry within one working day.'
}
