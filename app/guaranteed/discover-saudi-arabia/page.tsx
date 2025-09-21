"use client"
import { Star, Calendar, Users, Clock, CheckCircle, Utensils, Bed } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BubbleButton from "@/components/bubble-button"
import Image from "next/image"
import BookingForm from "@/components/booking-form"

const tourData = {
  id: "discover-saudi-arabia",
  title: "Discover Saudi Arabia",
  subtitle: "10 Days / 9 Nights",
  description:
    "Comprehensive exploration of Saudi Arabia with extended stays in each destination. Perfect for first-time visitors wanting the complete Saudi experience.",
  image:
    "https://res.cloudinary.com/enchanting/q_70,f_auto,w_870,h_580,c_lfill,g_auto/exodus-web/2022/07/hegra_alula_saudi_arabia_shutterstock.jpg",
  duration: 10,
  groupSize: 15,
  rating: 4.8,
  reviewCount: 189,
  departures: "Every two weeks starting April 2, 2026 (arrivals on Thursdays)",
  route: "Jeddah → Medina → Al Ula → Tabuk → Riyadh → Jeddah",

  itinerary: [
    {
      day: 1,
      title: "Arrival in Jeddah",
      location: "Jeddah",
      description: "Arrival at Jeddah Airport, transfer to hotel. Overnight stay.",
      accommodation: "Jeddah (B&B)",
      meals: ["Breakfast"],
    },
    {
      day: 2,
      title: "Jeddah Free Morning",
      location: "Jeddah",
      description: "Free morning. Evening walking tour of historic Al-Balad. Overnight stay.",
      accommodation: "Jeddah (B&B)",
      meals: ["Breakfast"],
    },
    {
      day: 3,
      title: "Jeddah City Tour",
      location: "Jeddah",
      description:
        "Full-day city tour: Corniche, King Fahd Fountain, Fish Market, Tayebat International City, Al Balad, Beit Matbouli, Floating Mosque, Marina.",
      accommodation: "Jeddah (B&B)",
      meals: ["Breakfast"],
    },
    {
      day: 4,
      title: "Jeddah to Medina",
      location: "Medina",
      description:
        "Scenic drive to Medina. Visit Prophet's Mosque, Uhud Hill, Quba Mosque, Garden & Well of Ethiq. Dinner included.",
      accommodation: "Medina (B&B)",
      meals: ["Breakfast", "Dinner"],
    },
    {
      day: 5,
      title: "Medina to Al Ula",
      location: "Al Ula",
      description: "Visit Dadan necropolis, Elephant Rock. Dinner included.",
      accommodation: "Al Ula (Half-board)",
      meals: ["Breakfast", "Dinner"],
    },
    {
      day: 6,
      title: "Al Ula to Tabuk",
      location: "Tabuk",
      description: "Visit UNESCO site Hegra, stroll in oasis, dinner included.",
      accommodation: "Tabuk (B&B)",
      meals: ["Breakfast", "Dinner"],
    },
    {
      day: 7,
      title: "Tabuk to Riyadh",
      location: "Riyadh",
      description: "Journey to Riyadh. Visit National Museum, Masmak Fortress, Al Rajhi Mosque, Riyadh Boulevard.",
      accommodation: "Riyadh (B&B)",
      meals: ["Breakfast"],
    },
    {
      day: 8,
      title: "Free Day in Riyadh",
      location: "Riyadh",
      description: "Free day in Riyadh (optional tours available). Overnight stay.",
      accommodation: "Riyadh (B&B)",
      meals: ["Breakfast"],
    },
    {
      day: 9,
      title: "Riyadh to Jeddah",
      location: "Jeddah",
      description: "Arrival in Jeddah, hotel overnight.",
      accommodation: "Jeddah (B&B)",
      meals: ["Breakfast"],
    },
    {
      day: 10,
      title: "Departure",
      location: "Jeddah",
      description: "Breakfast. Transfer to airport for departure. End of services.",
      accommodation: "N/A",
      meals: ["Breakfast"],
    },
  ],

  included: [
    "4 nights Jeddah (B&B)",
    "1 night Medina (B&B)",
    "1 night Al Ula (half-board)",
    "1 night Tabuk (B&B)",
    "2 nights Riyadh (B&B)",
    "All transfers between cities by road in air-conditioned vehicles",
    "Guided visits as per itinerary",
    "2 included dinners (Medina & Tabuk)",
    "VAT (15%) & hotel municipal tax",
  ],

  notIncluded: ["International flights", "Visa", "Drinks", "Tips", "Personal expenses", "Optional activities"],
}

export default function DiscoverSaudiArabiaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-green-900 via-emerald-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={tourData.image || "/placeholder.svg"}
            alt={tourData.title}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200">Guaranteed Departure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{tourData.title}</h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">{tourData.subtitle}</p>
            <p className="text-lg mb-8 max-w-3xl opacity-80">{tourData.description}</p>

            <div className="flex flex-wrap gap-4 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                {tourData.duration} Days
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-4 w-4" />
                Max {tourData.groupSize} People
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-4 w-4" />
                {tourData.rating} Rating
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="h-4 w-4" />
                Fixed Departures
              </div>
            </div>

            <BubbleButton asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
              <Link href="#booking">Get Quote & Book Now</Link>
            </BubbleButton>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="itinerary" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="included">Included</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
            </TabsList>

            <TabsContent value="itinerary" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Day by Day Itinerary</h2>
                <div className="space-y-6">
                  {tourData.itinerary.map((day) => (
                    <Card key={day.day} className="overflow-hidden border-green-200">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            {day.day}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold text-green-800">{day.title}</h3>
                              <Badge variant="outline" className="text-xs">
                                {day.location}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-4">{day.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Bed className="h-4 w-4 text-green-600" />
                                {day.accommodation}
                              </div>
                              <div className="flex items-center gap-1">
                                <Utensils className="h-4 w-4 text-green-600" />
                                {day.meals.join(", ")}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="included" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        What's Included
                      </h3>
                      <ul className="space-y-3">
                        {tourData.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-red-600 rounded-full flex items-center justify-center">
                          <span className="w-2 h-0.5 bg-red-600"></span>
                        </span>
                        Not Included
                      </h3>
                      <ul className="space-y-3">
                        {tourData.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-4 h-4 border border-red-400 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <span className="w-2 h-0.5 bg-red-400"></span>
                            </span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-green-800">Tour Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Duration:</span>
                          <span>
                            {tourData.duration} Days / {tourData.duration - 1} Nights
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Group Size:</span>
                          <span>Maximum {tourData.groupSize} people</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Departures:</span>
                          <span className="text-right text-sm">{tourData.departures}</span>
                        </div>
                        <div className="flex items-start justify-between">
                          <span className="font-medium">Route:</span>
                          <span className="text-right text-sm">{tourData.route}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-green-800">Pricing</h3>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <div className="font-medium text-sm text-muted-foreground mb-2">
                            Apr 2 – Dec 10, 2026 (except trade fairs)
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Per person in Double/Triple:</span>
                              <span className="font-bold text-green-700">$1,895</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Single Supplement:</span>
                              <span className="font-bold text-green-700">$825</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-sm text-muted-foreground mb-2">
                            Dec 24, 2026 – Mar 18, 2027 (except trade fairs)
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Per person in Double/Triple:</span>
                              <span className="font-bold text-green-700">$2,040</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Single Supplement:</span>
                              <span className="font-bold text-green-700">$905</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <Card className="border-green-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-green-800">Important Notes</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Minimum 2 persons required</li>
                        <li>• Some monuments may close without notice</li>
                        <li>• Supplements apply during trade fairs</li>
                        <li>• Ramadan may affect visiting hours</li>
                        <li>• Alcohol is strictly prohibited in Saudi Arabia</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="booking" className="mt-0">
              <div className="max-w-2xl mx-auto text-center">
                <Card className="border-green-200 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-green-800">Ready to Book?</h3>
                    <p className="text-muted-foreground mb-6">
                      Contact us for personalized pricing and to secure your spot on this guaranteed departure tour.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Guaranteed departure - tour runs as scheduled</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Small group experience (max 15 people)</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Expert local guides included</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <BubbleButton asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
                        <Link href="/contact?tour=discover-saudi-arabia">Get Quote & Book Now</Link>
                      </BubbleButton>

                      <BubbleButton
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      >
                        <Link href="/contact">Ask Questions</Link>
                      </BubbleButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Book Your Guaranteed Tour</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your spot on this guaranteed departure tour. Our team will contact you with personalized pricing
              and payment options.
            </p>
          </div>
          <BookingForm tourTitle={tourData.title} />
        </div>
      </section>
    </main>
  )
}
