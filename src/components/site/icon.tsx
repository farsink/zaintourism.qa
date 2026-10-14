import type { FC, ReactNode } from 'react'
import type { IconName } from '@/types'
import type { LucideIcon } from 'lucide-react'

import {
    Compass,
    Map,
    MapPin,
    Waves,
    Mountain,
    MountainSnow,
    Sun,
    Sunrise,
    Sunset,
    Moon,
    Tent,
    Utensils,
    Camera,
    Bike,
    Footprints,
    Bird,
    Sailboat,
    Flower2,
    Landmark,
    Leaf,
    Snowflake,
    Sparkles,
    Wind,
    Anchor,
    TreePine,
    Fish,
    Coffee,
    Music,
    Palette,
    BookOpen,
    Backpack,
    Luggage,
    Plane,
    Globe,
    Star,
    Heart,
    Clock,
    Users,
    Calendar,
    Wallet,
    ShieldCheck,
    Award,
    Route,
    Languages,
    Thermometer,
    Activity,
    MessageCircle
} from 'lucide-react'

const registry: Record<IconName, LucideIcon> = {
    compass: Compass,
    map: Map,
    pin: MapPin,
    waves: Waves,
    mountain: Mountain,
    peak: MountainSnow,
    sun: Sun,
    sunrise: Sunrise,
    sunset: Sunset,
    moon: Moon,
    tent: Tent,
    food: Utensils,
    camera: Camera,
    bike: Bike,
    walk: Footprints,
    bird: Bird,
    boat: Sailboat,
    flower: Flower2,
    landmark: Landmark,
    leaf: Leaf,
    snow: Snowflake,
    sparkles: Sparkles,
    wind: Wind,
    anchor: Anchor,
    forest: TreePine,
    fish: Fish,
    coffee: Coffee,
    music: Music,
    craft: Palette,
    book: BookOpen,
    backpack: Backpack,
    luggage: Luggage,
    plane: Plane,
    globe: Globe,
    star: Star,
    heart: Heart,
    clock: Clock,
    users: Users,
    calendar: Calendar,
    wallet: Wallet,
    shield: ShieldCheck,
    award: Award,
    route: Route,
    language: Languages,
    thermometer: Thermometer,
    activity: Activity,
    message: MessageCircle
}

interface IconProps {
    name: IconName
    className?: string
}

export const Icon: FC<IconProps> = ({ name, className = 'size-4' }): ReactNode => {
    const Component = registry[name] ?? Compass

    return <Component className={className} strokeWidth={1.6} aria-hidden='true' />
}
