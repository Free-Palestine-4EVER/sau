import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Hotel, Calendar, Users, CheckCircle2, XCircle, DollarSign } from "lucide-react"

export default function ItineraryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 text-balance drop-shadow-lg">
            Arabian Journey
          </h1>
          <p className="text-xl text-white/95 mb-2 drop-shadow">
            A Curated Experience Through Saudi Arabia, Oman & UAE
          </p>
          <p className="text-lg text-white/90 drop-shadow">Prepared for Catherine</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Overview */}
        <Card className="border-2 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Trip Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Group Size</p>
                <p className="text-2xl font-semibold text-blue-700 dark:text-blue-400">6 Travelers</p>
              </div>
              <div className="space-y-1 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-2xl font-semibold text-purple-700 dark:text-purple-400">15 Days</p>
              </div>
              <div className="space-y-1 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Travel Period</p>
                <p className="text-2xl font-semibold text-orange-700 dark:text-orange-400">November - December 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SAUDI ARABIA SECTION */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-white">Saudi Arabia</h2>
              <p className="text-white/90">December 2026 • 6 Nights</p>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle className="text-xl">Package Details</CardTitle>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400">$3,345</p>
                  <p className="text-sm text-muted-foreground">per person (twin sharing)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Itinerary */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Itinerary Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400">
                      Days 1-2
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">Riyadh</p>
                      <p className="text-sm text-muted-foreground">
                        Skybridge, Diriyah tours with English-speaking guide
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400">
                      Days 3-4
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">AlUla</p>
                      <p className="text-sm text-muted-foreground">
                        Hegra, Dadan & Ikmah, Old Town (sharing coach tours)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400">
                      Day 5
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">Jeddah</p>
                      <p className="text-sm text-muted-foreground">City exploration with local fish restaurant lunch</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400">
                      Day 6
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">Medina</p>
                      <p className="text-sm text-muted-foreground">Train from Jeddah, local restaurant lunch</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Accommodation */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Accommodation (4-Star Hotels)
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/40 dark:to-emerald-950/40 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="font-medium text-foreground">Riyadh: Radisson Blu Minhal</p>
                    <p className="text-sm text-muted-foreground">2 nights • Half board</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/40 dark:to-emerald-950/40 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="font-medium text-foreground">AlUla: Cloud7</p>
                    <p className="text-sm text-muted-foreground">2 nights • Half board</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/40 dark:to-emerald-950/40 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="font-medium text-foreground">Jeddah: Four Points by Sheraton</p>
                    <p className="text-sm text-muted-foreground">1 night • Half board</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/40 dark:to-emerald-950/40 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="font-medium text-foreground">Medina: Al Manakha Rotana</p>
                    <p className="text-sm text-muted-foreground">1 night • Breakfast only</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Included */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Included
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>AC minivan transportation (HiAce/Staria)</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>English-speaking guide (Days 1, 2, 5, 6)</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>All entrance fees to attractions</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>Lunches on Days 2, 4, 5, 6</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>Jeddah-Medina train (economy class)</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>Municipality tax & VAT</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-foreground">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Not Included
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Domestic flights (Riyadh-AlUla, AlUla-Jeddah)</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Entry visa to KSA</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Meals not mentioned above</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Personal expenses, portage, tips</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Escorting guide in AlUla (sharing tours)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-200">
                  <strong>Please Note:</strong> Rates are indicative based on December 2025 estimates, as many services
                  are not yet priced for December 2026. Subject to availability and reconfirmation at booking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* OMAN SECTION */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-white">Oman</h2>
              <p className="text-white/90">November 7-11, 2026 • 4 Nights</p>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle className="text-xl">Package Details</CardTitle>
                <div className="text-right">
                  <p className="text-3xl font-bold text-red-700 dark:text-red-400">$1,105</p>
                  <p className="text-sm text-muted-foreground">per person (twin sharing)</p>
                  <p className="text-xs text-muted-foreground mt-1">Total for 6 adults: $6,630</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Itinerary */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600 dark:text-red-400" />
                  Itinerary Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400">
                      Day 1
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">Arrival Muscat</p>
                      <p className="text-sm text-muted-foreground">Meet & greet at airport, transfer to hotel</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400">
                      Day 2
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">Muscat City Tour</p>
                      <p className="text-sm text-muted-foreground">
                        Private minivan with English-speaking driver/guide
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400">
                      Days 3-4
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">Desert & Mountain Adventures</p>
                      <p className="text-sm text-muted-foreground">
                        Two private 4WD vehicles with English-speaking driver-guides
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400">
                      Day 5
                    </Badge>
                    <div>
                      <p className="font-semibold text-foreground">Departure</p>
                      <p className="text-sm text-muted-foreground">Transfer to airport</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Services */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-red-600 dark:text-red-400" />
                  Services & Accommodation
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-950/40 dark:to-rose-950/40 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="font-medium text-foreground">Muscat Accommodation</p>
                    <p className="text-sm text-muted-foreground">4 nights with daily buffet breakfast</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-950/40 dark:to-rose-950/40 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="font-medium text-foreground">Private Transportation</p>
                    <p className="text-sm text-muted-foreground">Toyota HiAce minivan or similar</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-950/40 dark:to-rose-950/40 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="font-medium text-foreground">Water on Board</p>
                    <p className="text-sm text-muted-foreground">During all transfers and roundtrips</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Included/Excluded */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Included
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>Airport meet & greet service</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>All arrival & departure transfers</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>Daily buffet breakfast</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>All entrance fees to attractions</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-green-600 shrink-0">✓</span>
                      <span>Current taxes, VAT, service charges</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-foreground">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Not Included
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Oman entry visa</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Border fees (UAE exit $8, Oman entry $13)</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>International flights</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Tips & porterage</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-red-600 shrink-0">✗</span>
                      <span>Optional tours & personal expenses</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Visa Information */}
              <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200">Visa Options for Oman</h4>
                <div className="text-sm text-blue-900 dark:text-blue-200 space-y-2">
                  <p>
                    <strong>Free Entry:</strong> Select countries get 14-day free entry, or 103 countries with valid
                    USA/Canada/UK/EU/Japan visa
                  </p>
                  <p>
                    <strong>E-Visa:</strong> $53 for 30-day stay (apply online)
                  </p>
                  <p>
                    <strong>Pre-Arranged Visa:</strong> $37 (under 10 days) or $79 (over 10 days)
                  </p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Cancellation Policy</h4>
                <ul className="text-sm text-amber-900 dark:text-amber-200 space-y-1">
                  <li>• 36+ days before: No charges</li>
                  <li>• 35 days before: 50% cancellation fee</li>
                  <li>• 30 days before: 100% cancellation fee</li>
                </ul>
              </div>

              {/* Optional Service */}
              <div className="border-2 border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Optional: Fast Track Arrival Service</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  VIP greeting, buggy transfer, lounge access, fast-track immigration
                </p>
                <p className="text-sm font-semibold text-foreground">
                  $112 per adult • Children 2-12 years: 50% discount
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* UAE SECTION */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-white">United Arab Emirates</h2>
              <p className="text-white/90">November 11-15, 2026 • 4 Nights in Dubai</p>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
              <CardTitle className="text-xl">Hotel Options & Experiences</CardTitle>
              <CardDescription>Rates shown for 3 rooms (6 adults) for 4 nights with breakfast</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Hotel Options */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  Accommodation Options
                </h3>
                <div className="space-y-3">
                  <div className="p-4 border-2 border-cyan-200 dark:border-cyan-800 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <p className="font-semibold text-lg text-foreground">Four Points by Sheraton Sheikh Zayed Road</p>
                      <p className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">$4,200</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Classic King Room • 3 rooms • 4 nights with breakfast
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Free cancellation until November 3, 2026 • $700 per person
                    </p>
                  </div>

                  <div className="p-4 border-2 border-orange-300 dark:border-orange-700 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
                    <Badge className="mb-2 bg-orange-600 hover:bg-orange-700" variant="secondary">
                      Book Before Nov 30, 2025
                    </Badge>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <p className="font-semibold text-lg text-foreground">Paramount Hotel Dubai</p>
                      <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">$3,375</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      The Scene Room • 3 rooms • 4 nights with breakfast
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Free cancellation until November 1, 2026 • Promo rate subject to withdrawal • $562.50 per person
                    </p>
                  </div>

                  <div className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <p className="font-semibold text-lg text-foreground">JW Marriott Marquis Hotel Dubai</p>
                      <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">$5,850</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Deluxe Room • 3 rooms • 4 nights with breakfast
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Free cancellation until November 1, 2026 • $975 per person
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Tour Packages */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  Curated Experiences (Rates for 6 Pax)
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/40 dark:to-cyan-950/40 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-semibold text-foreground">Arrival Services</p>
                        <p className="text-sm text-muted-foreground">Meet & greet (Gold), airport transfer</p>
                      </div>
                      <p className="font-bold text-blue-700 dark:text-blue-400 shrink-0">$1,779</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ground handling + Gold meet & greet + Transfer for 6 people • $296.50 per person
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-950/40 dark:to-emerald-950/40 rounded-lg border border-teal-200 dark:border-teal-800">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-semibold text-foreground">Full Day Dubai City Tour</p>
                        <p className="text-sm text-muted-foreground">Private car & guide • 8 hours</p>
                      </div>
                      <p className="font-bold text-teal-700 dark:text-teal-400 shrink-0">$4,650</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">$775 per person</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                      <li>• Cultural lunch at SMCCU</li>
                      <li>• At the Top 148th Floor Burj Khalifa ticket</li>
                      <li>• Dubai Aquarium & Underwater Zoo - All Access Pass</li>
                      <li>• Dubai Marina, Jumeirah Beach Residence, Atlantis photo stop</li>
                      <li>• Souk Madinat Jumeirah visit</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/40 dark:to-pink-950/40 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-semibold text-foreground">Half Day Dubai Highlights</p>
                        <p className="text-sm text-muted-foreground">4 hours with driver</p>
                      </div>
                      <p className="font-bold text-purple-700 dark:text-purple-400 shrink-0">$1,830</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">$305 per person</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                      <li>• Museum of the Future tickets for 6 people</li>
                      <li>• Dubai Frame tickets for 6 people</li>
                      <li>• Car rental included</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-semibold text-foreground">Desert Safari with BBQ Dinner</p>
                        <p className="text-sm text-muted-foreground">Private car, sharing camp</p>
                      </div>
                      <p className="font-bold text-amber-700 dark:text-amber-400 shrink-0">$2,178</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">$363 per person</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                      <li>• 1 hour exhilarating dune bashing in 4x4 luxury vehicle</li>
                      <li>• Sunset photo opportunities in the golden desert</li>
                      <li>• Camel riding experience</li>
                      <li>• Sumptuous BBQ dinner buffet at authentic Bedouin camp</li>
                      <li>• Live cultural entertainment & henna tattoo painting</li>
                      <li>• Note: Not recommended for 65+ years, under 6 years, heart patients, pregnant women</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-950/40 dark:to-red-950/40 rounded-lg border border-rose-200 dark:border-rose-800">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-semibold text-foreground">Full Day Abu Dhabi Tour</p>
                        <p className="text-sm text-muted-foreground">Private standard car</p>
                      </div>
                      <p className="font-bold text-rose-700 dark:text-rose-400 shrink-0">$3,450</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">$575 per person</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                      <li>• Lunch at Emirates Palace (world-class royal cuisine)</li>
                      <li>• Qasr Al Watan palace ticket</li>
                      <li>• Photo stop at Ferrari World on Yas Island</li>
                      <li>• Abu Dhabi Corniche tour</li>
                      <li>• Heritage Village visit</li>
                      <li>• Sheikh Zayed Grand Mosque tour</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-950/40 dark:to-blue-950/40 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-semibold text-foreground">Departure Transfer</p>
                        <p className="text-sm text-muted-foreground">Hotel to Dubai Airport</p>
                      </div>
                      <p className="font-bold text-indigo-700 dark:text-indigo-400 shrink-0">$1,089</p>
                    </div>
                    <p className="text-xs text-muted-foreground">$181.50 per person</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  UAE Total Package Pricing Summary
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-white/80 mb-3">Example: Paramount Hotel + All Experiences</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Paramount Hotel (4 nights)</span>
                        <span className="font-semibold">$3,375</span>
                      </div>
                      <div className="flex justify-between">
                        <span>All Experiences (Arrival to Departure)</span>
                        <span className="font-semibold">$14,976</span>
                      </div>
                      <Separator className="bg-white/30 my-2" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total for 6 People</span>
                        <span>$18,351</span>
                      </div>
                      <div className="flex justify-between text-base">
                        <span>Per Person</span>
                        <span className="font-semibold">$3,058.50</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-white/70 space-y-1">
                    <p>• Hotel options range from $3,375 to $5,850 (choose one)</p>
                    <p>• Experiences total: $14,976 (includes all 6 activities)</p>
                    <p>• Mix and match experiences based on your preferences</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Important Notes */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">Important Information</h3>
                <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-700 rounded-lg p-4 space-y-2 text-sm text-amber-900 dark:text-amber-200">
                  <p>
                    <strong>Tourism Dirham Fee:</strong> AED 7-20 per room per night (depending on hotel category)
                    payable directly to hotel
                  </p>
                  <p>
                    <strong>Room Confirmation:</strong> This is an offer only. Rooms and services subject to
                    availability at time of booking
                  </p>
                  <p>
                    <strong>Special Requests:</strong> Twin beds, early check-in, or late check-out subject to hotel
                    availability
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4 text-sm text-blue-900 dark:text-blue-200">
                  <p className="font-semibold mb-2">Dubai Airport Terminal 3 Arrivals:</p>
                  <p>
                    Passenger names no longer permitted on display boards. Please approach representative holding{" "}
                    <strong>DESERT ADVENTURES LOGO</strong> at arrivals meeting area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Notes */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl">Important Booking Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Pricing:</strong> All rates are indicative and subject to availability
              and reconfirmation at time of booking. Rates may vary based on final travel dates and group size.
            </p>
            <p>
              <strong className="text-foreground">Payment:</strong> Deposit required to confirm booking. Full payment
              typically due 30 days prior to arrival. Payment accepted via bank transfer or credit card (service fees
              apply: 3% Visa/Mastercard, 4% AMEX).
            </p>
            <p>
              <strong className="text-foreground">Requirements:</strong> Valid passport, appropriate visas, confirmed
              flight details, and full guest names required for booking confirmation.
            </p>
            <p>
              <strong className="text-foreground">Check-in/Check-out:</strong> Standard hotel check-in is 15:00 hrs,
              check-out at 12:00 hrs unless otherwise specified.
            </p>
            <p className="text-xs">
              Terms and conditions, including detailed cancellation policies and payment schedules, will be provided
              upon booking confirmation. This itinerary is prepared for planning purposes and does not constitute a
              confirmed booking.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="bg-muted/30 py-8 px-4 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            This itinerary is prepared exclusively for Catherine. Please contact us for any questions or to proceed with
            booking.
          </p>
        </div>
      </div>
    </div>
  )
}
