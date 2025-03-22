"use client"

import type React from "react"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  const { t } = useLanguage()

  // Sample reviews data - in a real app, this would come from an API or database
  const reviews = {
    instagram: [
      {
        id: 1,
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: t("instagramReview1"),
        date: "2023-12-10",
      },
      {
        id: 2,
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 4,
        text: t("instagramReview2"),
        date: "2023-11-25",
      },
      {
        id: 3,
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: t("instagramReview3"),
        date: "2023-11-15",
      },
    ],
    telegram: [
      {
        id: 1,
        name: "David Lee",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: t("telegramReview1"),
        date: "2023-12-05",
      },
      {
        id: 2,
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: t("telegramReview2"),
        date: "2023-11-20",
      },
      {
        id: 3,
        name: "James Taylor",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 4,
        text: t("telegramReview3"),
        date: "2023-11-10",
      },
    ],
    manual: [
      {
        id: 1,
        name: "Olivia Martinez",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: t("manualReview1"),
        date: "2023-12-01",
      },
      {
        id: 2,
        name: "Daniel Anderson",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 4,
        text: t("manualReview2"),
        date: "2023-11-18",
      },
      {
        id: 3,
        name: "Sophia Garcia",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: t("manualReview3"),
        date: "2023-11-05",
      },
    ],
  }

  // Format date to localized string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
      />
    ))
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{t("reviews")}</h1>
        <p className="mb-8 text-muted-foreground">{t("reviewsPageDescription")}</p>
      </div>

      <Tabs defaultValue="all" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">{t("allReviews")}</TabsTrigger>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="telegram">Telegram</TabsTrigger>
          <TabsTrigger value="manual">{t("otherReviews")}</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...reviews.instagram, ...reviews.telegram, ...reviews.manual].map((review) => (
              <ReviewCard
                key={`${review.id}-${review.name}`}
                review={review}
                formatDate={formatDate}
                renderStars={renderStars}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="instagram" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.instagram.map((review) => (
              <ReviewCard
                key={`instagram-${review.id}`}
                review={review}
                formatDate={formatDate}
                renderStars={renderStars}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="telegram" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.telegram.map((review) => (
              <ReviewCard
                key={`telegram-${review.id}`}
                review={review}
                formatDate={formatDate}
                renderStars={renderStars}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="manual" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.manual.map((review) => (
              <ReviewCard
                key={`manual-${review.id}`}
                review={review}
                formatDate={formatDate}
                renderStars={renderStars}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  text: string
  date: string
}

interface ReviewCardProps {
  review: Review
  formatDate: (date: string) => string
  renderStars: (rating: number) => React.ReactNode
}

function ReviewCard({ review, formatDate, renderStars }: ReviewCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={review.avatar || "/placeholder.svg"}
            alt={review.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <CardTitle className="text-base">{review.name}</CardTitle>
            <div className="mt-1 flex">{renderStars(review.rating)}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{review.text}</CardDescription>
        <div className="mt-4 text-xs text-muted-foreground">{formatDate(review.date)}</div>
      </CardContent>
    </Card>
  )
}

