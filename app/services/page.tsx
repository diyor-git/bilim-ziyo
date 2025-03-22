"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      id: "service1",
      title: t("service1Title"),
      description: t("service1LongDescription"),
      image: "/placeholder.svg?height=400&width=600",
      benefits: [t("service1Benefit1"), t("service1Benefit2"), t("service1Benefit3"), t("service1Benefit4")],
    },
    {
      id: "service2",
      title: t("service2Title"),
      description: t("service2LongDescription"),
      image: "/placeholder.svg?height=400&width=600",
      benefits: [t("service2Benefit1"), t("service2Benefit2"), t("service2Benefit3"), t("service2Benefit4")],
    },
    {
      id: "service3",
      title: t("service3Title"),
      description: t("service3LongDescription"),
      image: "/placeholder.svg?height=400&width=600",
      benefits: [t("service3Benefit1"), t("service3Benefit2"), t("service3Benefit3"), t("service3Benefit4")],
    },
  ]

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{t("ourServices")}</h1>
        <p className="mb-8 text-muted-foreground">{t("servicesLongDescription")}</p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue={services[0].id}>
          <TabsList className="grid w-full grid-cols-3">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id}>
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>
                  <h3 className="mb-2 text-lg font-medium">{t("benefits")}</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <section className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">{t("whyChooseUs")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>{t(`advantage${item}Title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t(`advantage${item}Description`)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

