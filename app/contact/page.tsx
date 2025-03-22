"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    try {
      // In a real app, this would send data to a server endpoint
      // that would forward the message to Telegram
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      toast({
        title: t("messageSent"),
        description: t("messageSentDescription"),
      })

      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: t("messageError"),
        description: t("messageErrorDescription"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{t("contactUs")}</h1>
        <p className="mb-8 text-muted-foreground">{t("contactPageDescription")}</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("getInTouch")}</CardTitle>
            <CardDescription>{t("contactFormDescription")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t("yourName")}</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("yourEmail")}</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t("yourPhone")}</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("yourMessage")}</Label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    {t("sending")}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {t("sendMessage")}
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("contactInfo")}</CardTitle>
            <CardDescription>{t("contactInfoDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t("phone")}</h3>
                <p className="text-sm text-muted-foreground">+998 XX XXX XX XX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t("email")}</h3>
                <p className="text-sm text-muted-foreground">info@company.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t("address")}</h3>
                <p className="text-sm text-muted-foreground">{t("companyAddress")}</p>
              </div>
            </div>

            <div className="mt-6 h-64 overflow-hidden rounded-lg">
              {/* Placeholder for map - in a real app, this would be a Google Maps or similar embed */}
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <p className="text-muted-foreground">{t("mapPlaceholder")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

