"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const { t } = useLanguage()

  // Sample news data - in a real app, this would come from an API or database
  const newsItems = [
    {
      id: 1,
      title: t("newsTitle1"),
      excerpt: t("newsExcerpt1"),
      date: "2023-12-15",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: t("newsTitle2"),
      excerpt: t("newsExcerpt2"),
      date: "2023-11-28",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: t("newsTitle3"),
      excerpt: t("newsExcerpt3"),
      date: "2023-11-10",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: t("newsTitle4"),
      excerpt: t("newsExcerpt4"),
      date: "2023-10-25",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: t("newsTitle5"),
      excerpt: t("newsExcerpt5"),
      date: "2023-10-12",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: t("newsTitle6"),
      excerpt: t("newsExcerpt6"),
      date: "2023-09-30",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  // Format date to localized string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{t("news")}</h1>
        <p className="mb-8 text-muted-foreground">{t("newsPageDescription")}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </div>
              <CardTitle className="line-clamp-2">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <Link href={`/news/${item.id}`}>
                  {t("readMore")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

