"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "John Doe",
      position: t("ceoPosition"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jane Smith",
      position: t("ctoPosition"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Alex Johnson",
      position: t("designerPosition"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Williams",
      position: t("marketingPosition"),
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{t("aboutUs")}</h1>
        <p className="mb-8 text-muted-foreground">{t("aboutUsLongDescription")}</p>
      </div>

      <Tabs defaultValue="history" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="history">{t("ourHistory")}</TabsTrigger>
          <TabsTrigger value="mission">{t("ourMission")}</TabsTrigger>
          <TabsTrigger value="achievements">{t("achievements")}</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">{t("ourHistory")}</h2>
              <p className="mb-4 text-muted-foreground">{t("historyParagraph1")}</p>
              <p className="text-muted-foreground">{t("historyParagraph2")}</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("historyImageAlt")}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="mission" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center md:order-last">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("missionImageAlt")}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">{t("ourMission")}</h2>
              <p className="mb-4 text-muted-foreground">{t("missionParagraph1")}</p>
              <p className="text-muted-foreground">{t("missionParagraph2")}</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="achievements" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">{t("achievements")}</h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>{t("achievement1")}</li>
                <li>{t("achievement2")}</li>
                <li>{t("achievement3")}</li>
                <li>{t("achievement4")}</li>
                <li>{t("achievement5")}</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("achievementsImageAlt")}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">{t("ourTeam")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="mx-auto mb-4 aspect-square rounded-full object-cover"
                />
                <h3 className="text-center text-lg font-medium">{member.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

