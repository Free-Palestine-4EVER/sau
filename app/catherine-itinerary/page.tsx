import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Hotel, Calendar, Users, CheckCircle2, XCircle, DollarSign, Plane } from "lucide-react"

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
            A 15-Day Curated Experience Through Saudi Arabia, Oman & UAE
          </p>
          <p className="text-lg text-white/90 drop-shadow">Prepared for Catherine</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Overview & Total Pricing */}
        <Card className="border-2 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Trip Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Group Size</p>
                <p className="text-2xl font-semibold text-blue-700 dark:text-blue-400">6 Travelers</p>
              </div>
              <div className="space-y-1 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-2xl font-semibold text-purple-700 dark:text-purple-400">15 Days / 14 Nights</p>
              </div>
              <div className="space-y-1 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Travel Period</p>
                <p className="text-2xl font-semibold text-orange-700 dark:text-orange-400">November - December 2026</p>
              </div>
            </div>

            <Separator />

            {/* Total Pricing Summary */}
            <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-semibold text-2xl mb-4 flex items-center gap-2">
                <DollarSign className="h-7 w-7" />
                Complete Package Pricing
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Saudi Arabia (6 nights)
                      </span>
                      <span className="font-semibold">$3,470 pp</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Oman (4 nights)
                      </span>
                      <span className="font-semibold">$1,180 pp</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        UAE - Dubai (4 nights)
                      </span>
                      <span className="font-semibold">$3,175 pp</span>
                    </div>
                    <Separator className="bg-white/30 my-3" />
                    <div className="flex justify-between text-2xl font-bold pt-2">
                      <span>Total Per Person</span>
                      <span>$7,825</span>
                    </div>
                    <div className="text-center pt-2 text-white/80">
                      <p className="text-lg">
                        Total for 6 Travelers: <span className="font-bold">$46,950</span>
                      </p>
                      <p className="text-xs mt-2">Based on twin sharing accommodation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* COMPLETE DAY-BY-DAY ITINERARY */}
        <Card className="border-2 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              Complete Day-by-Day Itinerary
            </CardTitle>
            <CardDescription>Your journey from Saudi Arabia through Oman to UAE</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            {/* SAUDI ARABIA DAYS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                <MapPin className="h-5 w-5 text-white" />
                <h3 className="text-xl font-serif font-bold text-white">Saudi Arabia</h3>
              </div>

              {/* Day 1 */}
              <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-600">
                <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400 h-fit">
                  Day 1
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Arrival in Riyadh</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Arrive at Riyadh Airport, meet your guide, and transfer to Radisson Blu Minhal Hotel. Check-in and
                    rest after your journey. Evening at leisure to explore the hotel facilities.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Radisson Blu Minhal (Half Board)</span>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-600">
                <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400 h-fit">
                  Day 2
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Riyadh City Tour</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Full day exploring Riyadh with English-speaking guide. Visit the iconic Skybridge for panoramic city
                    views, explore the historic Diriyah UNESCO World Heritage Site, and discover the birthplace of the
                    Saudi Kingdom. Lunch included.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Radisson Blu Minhal (Half Board)</span>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-600">
                <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400 h-fit">
                  Day 3
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Riyadh to AlUla</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Morning domestic flight to AlUla (not included). Arrive in this ancient oasis and transfer to Cloud7
                    Hotel. Afternoon at leisure or optional exploration of AlUla Old Town. Evening relaxation at your
                    hotel.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Cloud7 AlUla (Half Board)</span>
                  </div>
                </div>
              </div>

              {/* Day 4 */}
              <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-600">
                <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400 h-fit">
                  Day 4
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">AlUla Heritage Discovery</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Full day sharing coach tours exploring AlUla's archaeological wonders. Visit Hegra (Saudi Arabia's
                    first UNESCO World Heritage Site) with its spectacular Nabataean tombs, ancient Dadan and Ikmah
                    sites, and wander through AlUla Old Town. Lunch included.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Cloud7 AlUla (Half Board)</span>
                  </div>
                </div>
              </div>

              {/* Day 5 */}
              <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-600">
                <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400 h-fit">
                  Day 5
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">AlUla to Jeddah</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Morning domestic flight to Jeddah (not included). Upon arrival, meet your English-speaking guide for
                    a Jeddah city tour. Explore the historic Al-Balad district, visit the beautiful Corniche, and enjoy
                    lunch at a traditional local fish restaurant. Transfer to Four Points by Sheraton.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Four Points by Sheraton Jeddah (Half Board)</span>
                  </div>
                </div>
              </div>

              {/* Day 6 */}
              <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-600">
                <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400 h-fit">
                  Day 6
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Jeddah to Medina</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Morning train journey from Jeddah to Medina (economy class included). Arrive in this sacred city and
                    meet your English-speaking guide. City orientation tour with lunch at a local restaurant. Check-in
                    at Al Manakha Rotana Hotel. Evening at leisure.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Al Manakha Rotana Medina (Breakfast Only)</span>
                  </div>
                </div>
              </div>

              {/* Day 7 */}
              <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-600">
                <Badge variant="outline" className="shrink-0 border-green-600 text-green-700 dark:text-green-400 h-fit">
                  Day 7
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Departure from Saudi Arabia to Oman</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Morning departure from Medina. Transfer to airport for your international flight to Muscat, Oman
                    (flight not included). Begin your Omani adventure!
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Plane className="h-3 w-3" />
                    <span>Travel day - International flight to Oman</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* OMAN DAYS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                <MapPin className="h-5 w-5 text-white" />
                <h3 className="text-xl font-serif font-bold text-white">Oman</h3>
              </div>

              {/* Day 8 */}
              <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-600">
                <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400 h-fit">
                  Day 8
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Arrival in Muscat</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Arrive at Muscat International Airport. Meet & greet service at arrivals, then private transfer to
                    your Muscat hotel. Check-in and rest. Evening at leisure to explore the hotel or take a sunset
                    stroll along the waterfront.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-red-700 dark:text-red-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Muscat Hotel (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 9 */}
              <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-600">
                <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400 h-fit">
                  Day 9
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Muscat City Discovery</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Full day Muscat city tour with private minivan and English-speaking driver/guide. Visit the
                    magnificent Sultan Qaboos Grand Mosque, explore the Royal Opera House area, stroll through Mutrah
                    Souq, and discover the historic Al Alam Palace and forts overlooking the harbor. Experience the
                    blend of ancient and modern Oman.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-red-700 dark:text-red-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Muscat Hotel (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 10 */}
              <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-600">
                <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400 h-fit">
                  Day 10
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Desert & Mountain Adventure</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Exciting day exploring Oman's diverse landscapes in two private 4WD vehicles with English-speaking
                    driver-guides. Journey through the dramatic Hajar Mountains, visit traditional villages, explore
                    Wadi Bani Khalid oasis with its crystal-clear pools, and experience the vast Wahiba Sands desert.
                    Opportunity for dune driving and sunset in the desert.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-red-700 dark:text-red-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Muscat Hotel (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 11 */}
              <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-600">
                <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400 h-fit">
                  Day 11
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Mountain Villages & Wadis</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Continue your exploration with private 4WD vehicles. Visit ancient mountain villages with their
                    traditional falaj irrigation systems, explore stunning Wadi Shab or Wadi Tiwi, and discover terraced
                    plantations. Return to Muscat in the late afternoon.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-red-700 dark:text-red-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Muscat Hotel (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 12 */}
              <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-600">
                <Badge variant="outline" className="shrink-0 border-red-600 text-red-700 dark:text-red-400 h-fit">
                  Day 12
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Departure from Oman to UAE</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Morning at leisure. Check-out and private transfer to Muscat Airport for your flight to Dubai, UAE
                    (flight not included). The final leg of your Arabian journey awaits!
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Plane className="h-3 w-3" />
                    <span>Travel day - International flight to UAE</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* UAE DAYS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <MapPin className="h-5 w-5 text-white" />
                <h3 className="text-xl font-serif font-bold text-white">United Arab Emirates - Dubai</h3>
              </div>

              {/* Day 12/13 */}
              <div className="flex gap-4 p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border-l-4 border-cyan-600">
                <Badge variant="outline" className="shrink-0 border-cyan-600 text-cyan-700 dark:text-cyan-400 h-fit">
                  Day 12
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Arrival in Dubai</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Arrive at Dubai International Airport. VIP meet & greet service with Gold package - buggy transfer
                    to immigration, fast-track processing. Private transfer to Paramount Hotel Dubai. Check-in and
                    evening at leisure to enjoy the hotel's facilities or explore Downtown Dubai.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-cyan-700 dark:text-cyan-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Paramount Hotel Dubai (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 13 */}
              <div className="flex gap-4 p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border-l-4 border-cyan-600">
                <Badge variant="outline" className="shrink-0 border-cyan-600 text-cyan-700 dark:text-cyan-400 h-fit">
                  Day 13
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Dubai City Full Day Experience</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Comprehensive 8-hour Dubai exploration with private car and guide. Visit Burj Khalifa's 148th floor
                    for breathtaking views, explore Dubai Aquarium & Underwater Zoo with All Access Pass, enjoy cultural
                    lunch at Sheikh Mohammed Centre for Cultural Understanding (SMCCU), cruise Dubai Marina and JBR,
                    photo stop at Atlantis The Palm, and stroll through Souk Madinat Jumeirah.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-cyan-700 dark:text-cyan-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Paramount Hotel Dubai (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 14 */}
              <div className="flex gap-4 p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border-l-4 border-cyan-600">
                <Badge variant="outline" className="shrink-0 border-cyan-600 text-cyan-700 dark:text-cyan-400 h-fit">
                  Day 14
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Dubai Highlights & Desert Safari</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Morning:</strong> Half-day Dubai highlights tour (4 hours) with driver. Experience the
                    futuristic Museum of the Future and visit Dubai Frame for panoramic old/new Dubai views.
                    <br />
                    <strong>Evening:</strong> Thrilling desert safari adventure! Private 4x4 vehicles for 1-hour dune
                    bashing, sunset photography, camel riding, sumptuous BBQ dinner at authentic Bedouin camp, live
                    entertainment, and henna painting.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-cyan-700 dark:text-cyan-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Paramount Hotel Dubai (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 15 */}
              <div className="flex gap-4 p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border-l-4 border-cyan-600">
                <Badge variant="outline" className="shrink-0 border-cyan-600 text-cyan-700 dark:text-cyan-400 h-fit">
                  Day 15
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Abu Dhabi Full Day Tour</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Full day excursion to UAE's capital with private car. Visit the magnificent Sheikh Zayed Grand
                    Mosque, explore Heritage Village, tour Qasr Al Watan presidential palace, enjoy royal lunch at
                    Emirates Palace, photo stop at Ferrari World on Yas Island, and cruise along Abu Dhabi Corniche.
                    Return to Dubai evening.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-cyan-700 dark:text-cyan-400">
                    <Hotel className="h-3 w-3" />
                    <span>Overnight: Paramount Hotel Dubai (Breakfast Included)</span>
                  </div>
                </div>
              </div>

              {/* Day 16 */}
              <div className="flex gap-4 p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border-l-4 border-cyan-600">
                <Badge variant="outline" className="shrink-0 border-cyan-600 text-cyan-700 dark:text-cyan-400 h-fit">
                  Day 16
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Departure from Dubai</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Check-out from hotel. Private transfer to Dubai International Airport for your departure flight. End
                    of your unforgettable 15-day Arabian journey through three incredible countries!
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Plane className="h-3 w-3" />
                    <span>Safe travels home!</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SAUDI ARABIA DETAILS */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <CardTitle className="text-xl">Saudi Arabia - Detailed Information</CardTitle>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
              <CardDescription>6 nights • Riyadh, AlUla, Jeddah, Medina</CardDescription>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">$3,470</p>
                <p className="text-sm text-muted-foreground">per person (twin sharing)</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
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

        {/* OMAN DETAILS */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-red-600" />
              <CardTitle className="text-xl">Oman - Detailed Information</CardTitle>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
              <CardDescription>4 nights • Muscat base with desert & mountain adventures</CardDescription>
              <div className="text-right">
                <p className="text-3xl font-bold text-red-700 dark:text-red-400">$1,180</p>
                <p className="text-sm text-muted-foreground">per person (twin sharing)</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
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

        {/* UAE DETAILS */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-cyan-600" />
              <CardTitle className="text-xl">UAE - Dubai - Detailed Information</CardTitle>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
              <CardDescription>4 nights • Complete Dubai experience package</CardDescription>
              <div className="text-right">
                <p className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">$3,175</p>
                <p className="text-sm text-muted-foreground">per person (all-inclusive)</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* Hotel */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Hotel className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                Accommodation
              </h3>
              <div className="p-4 border-2 border-cyan-200 dark:border-cyan-800 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <p className="font-semibold text-lg text-foreground">Paramount Hotel Dubai</p>
                  <p className="text-xl font-bold text-cyan-700 dark:text-cyan-400">$710 pp</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">The Scene Room • 4 nights with breakfast</p>
                <p className="text-xs text-muted-foreground">Free cancellation until November 1, 2026</p>
              </div>
            </div>

            <Separator />

            {/* All Experiences */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                Complete Experience Package
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/40 dark:to-cyan-950/40 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Arrival VIP Services</p>
                      <p className="text-sm text-muted-foreground">Gold meet & greet + airport transfer</p>
                    </div>
                    <p className="font-bold text-blue-700 dark:text-blue-400 shrink-0">$318 pp</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Ground handling, Gold service, private transfer for 6 people
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-950/40 dark:to-emerald-950/40 rounded-lg border border-teal-200 dark:border-teal-800">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Full Day Dubai City Tour</p>
                      <p className="text-sm text-muted-foreground">Private car & guide • 8 hours</p>
                    </div>
                    <p className="font-bold text-teal-700 dark:text-teal-400 shrink-0">$827 pp</p>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                    <li>• Burj Khalifa 148th Floor • Dubai Aquarium All Access</li>
                    <li>• Cultural lunch at SMCCU • Dubai Marina & JBR cruise</li>
                    <li>• Atlantis photo stop • Souk Madinat Jumeirah</li>
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/40 dark:to-pink-950/40 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Half Day Dubai Highlights</p>
                      <p className="text-sm text-muted-foreground">Museum of the Future + Dubai Frame</p>
                    </div>
                    <p className="font-bold text-purple-700 dark:text-purple-400 shrink-0">$328 pp</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    4 hours with driver, tickets for all attractions included
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Desert Safari with BBQ Dinner</p>
                      <p className="text-sm text-muted-foreground">Private car, sharing camp</p>
                    </div>
                    <p className="font-bold text-amber-700 dark:text-amber-400 shrink-0">$388 pp</p>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                    <li>• Dune bashing • Sunset photos • Camel riding</li>
                    <li>• BBQ dinner buffet • Live entertainment • Henna tattoo</li>
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-950/40 dark:to-red-950/40 rounded-lg border border-rose-200 dark:border-rose-800">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Full Day Abu Dhabi Tour</p>
                      <p className="text-sm text-muted-foreground">Private standard car</p>
                    </div>
                    <p className="font-bold text-rose-700 dark:text-rose-400 shrink-0">$613 pp</p>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                    <li>• Emirates Palace lunch • Qasr Al Watan palace ticket</li>
                    <li>• Ferrari World photo stop • Abu Dhabi Corniche</li>
                    <li>• Heritage Village • Sheikh Zayed Grand Mosque</li>
                  </ul>
                </div>

                <div className="p-4 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-950/40 dark:to-blue-950/40 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Departure Transfer</p>
                      <p className="text-sm text-muted-foreground">Hotel to Dubai Airport</p>
                    </div>
                    <p className="font-bold text-indigo-700 dark:text-indigo-400 shrink-0">$191 pp</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Private transfer for 6 people</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                UAE Complete Package Summary
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Paramount Hotel (4 nights)</span>
                      <span className="font-semibold">$710 pp</span>
                    </div>
                    <div className="flex justify-between">
                      <span>All Experiences (6 activities)</span>
                      <span className="font-semibold">$2,465 pp</span>
                    </div>
                    <Separator className="bg-white/30 my-2" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Per Person</span>
                      <span>$3,175</span>
                    </div>
                    <div className="flex justify-between text-base pt-2">
                      <span>Total for 6 People</span>
                      <span className="font-semibold">$19,050</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Important Notes */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">Important Information</h3>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-700 rounded-lg p-4 space-y-2 text-sm text-amber-900 dark:text-amber-200">
                <p>
                  <strong>Tourism Dirham Fee:</strong> AED 7-20 per room per night (depending on hotel category) payable
                  directly to hotel
                </p>
                <p>
                  <strong>Room Confirmation:</strong> This is an offer only. Rooms and services subject to availability
                  at time of booking
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
            This comprehensive 15-day Arabian journey itinerary is prepared exclusively for Catherine. Please contact us
            for any questions or to proceed with booking.
          </p>
        </div>
      </div>
    </div>
  )
}
