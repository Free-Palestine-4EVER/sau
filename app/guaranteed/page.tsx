"use client"
import { Star, Calendar, Users, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BubbleButton from "@/components/bubble-button"
import Image from "next/image"

const guaranteedTours = [
  {
    id: "jewels-of-saudi-arabia",
    title: "Jewels of Saudi Arabia",
    slug: "jewels-of-saudi-arabia",
    description: "8 Days exploring UNESCO sites, ancient tombs, and modern Saudi Arabia.",
    image:
      "https://media.cntraveler.com/photos/642b28a95e21b50e5b47c370/master/pass/Banyan%20Tree%20AlUla%20_LEDE%20%20MND_7247(2).jpg",
    duration: 8,
    rating: 4.9,
    reviewCount: 245,
    category: ["Guaranteed", "Heritage"],
    destinations: ["Jeddah", "Medina", "Al Ula", "Tabuk", "Riyadh"],
    featured: true,
    departures: "Every two weeks starting from April 4. 2025.",
    startingPrice: "$1,670",
    keyHighlights: ["UNESCO Hegra", "Prophet's Mosque", "Ancient Dadan", "Riyadh Museums"],
  },
  {
    id: "discover-saudi-arabia",
    title: "Discover Saudi Arabia",
    slug: "discover-saudi-arabia",
    description: "10 Days comprehensive exploration with extended stays in each destination.",
    image:
      "https://res.cloudinary.com/enchanting/q_70,f_auto,w_870,h_580,c_lfill,g_auto/exodus-web/2022/07/hegra_alula_saudi_arabia_shutterstock.jpg",
    duration: 10,
    rating: 4.8,
    reviewCount: 189,
    category: ["Guaranteed", "Complete"],
    destinations: ["Jeddah", "Medina", "Al Ula", "Tabuk", "Riyadh"],
    featured: true,
    departures: "Every two weeks starting from April 4. 2025.",
    startingPrice: "$1,895",
    keyHighlights: ["Extended stays", "Free day in Riyadh", "Complete city tours", "Cultural experiences"],
  },
]

export default function GuaranteedToursPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://media.cntraveler.com/photos/642b28a95e21b50e5b47c370/master/pass/Banyan%20Tree%20AlUla%20_LEDE%20%20MND_7247(2).jpg"
            alt="Guaranteed Tours Saudi Arabia"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200 text-lg px-6 py-2">
            ✨ Fixed Departures
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Guaranteed Tours
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Book with confidence - fixed dates, confirmed itineraries, premium experiences
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">Choose Your Adventure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two incredible journeys, same destinations, different experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {guaranteedTours.map((tour) => (
              <Card
                key={tour.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 shadow-xl bg-white"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-green-500/90 text-white hover:bg-green-600 backdrop-blur-sm text-sm px-4 py-2">
                        Guaranteed
                      </Badge>
                      <div className="text-right text-white">
                        <div className="text-3xl font-bold">{tour.startingPrice}</div>
                        <div className="text-sm opacity-80">from per person</div>
                      </div>
                    </div>

                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-3">{tour.title}</h3>
                      <p className="text-lg mb-4 opacity-90">{tour.description}</p>

                      <div className="flex items-center gap-6 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          {tour.duration} Days
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          Max {tour.groupSize}
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          {tour.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {tour.keyHighlights.map((highlight, index) => (
                          <div key={index} className="text-sm text-muted-foreground bg-green-50 rounded-lg px-3 py-2">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Departures
                      </h4>
                      <p className="text-muted-foreground">{tour.departures}</p>
                    </div>

                    <div className="pt-4">
                      <BubbleButton asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                        <Link href={`/guaranteed/${tour.slug}`}>View Details & Book</Link>
                      </BubbleButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Guaranteed Tours?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fixed Departures</h3>
              <p className="text-green-100 text-lg">Tours run as scheduled, no cancellations</p>
            </div>

            <div className="text-center text-white">
              <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Small & Big groups</h3>
              <p className="text-green-100 text-lg">No minimum or maximum travelers for personal attention</p>
            </div>

            <div className="text-center text-white">
              <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-green-100 text-lg">Expert guides and exclusive experiences</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
