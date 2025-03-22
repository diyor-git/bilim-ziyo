"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { FaTelegram } from "react-icons/fa"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const [selectedBranch, setSelectedBranch] = useState("branch1")

  const branches = [
    { id: "branch1", name: t("branch1Name"), address: t("branch1Address"), coordinates: [41.311081, 69.240562] },
    { id: "branch2", name: t("branch2Name"), address: t("branch2Address"), coordinates: [41.286667, 69.204444] },
    { id: "branch3", name: t("branch3Name"), address: t("branch3Address"), coordinates: [41.328889, 69.267778] },
    { id: "branch4", name: t("branch4Name"), address: t("branch4Address"), coordinates: [41.239722, 69.200833] },
    { id: "branch5", name: t("branch5Name"), address: t("branch5Address"), coordinates: [41.325556, 69.286944] },
  ]

  const selectedBranchData = branches.find((branch) => branch.id === selectedBranch)

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacts" className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <h2 className="text-3xl font-bold text-center mb-8">{t("ourContacts")}</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("ourBranches")}</h3>
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder={t("selectBranch")} />
              </SelectTrigger>
              <SelectContent>
                {branches.map((branch) => (
                  <SelectItem key={branch.id} value={branch.id}>
                    {branch.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedBranchData && (
              <div className="p-4 border rounded-md mb-4">
                <h4 className="font-medium">{selectedBranchData.name}</h4>
                <p className="text-sm text-muted-foreground">{selectedBranchData.address}</p>
              </div>
            )}

            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg flex flex-col items-center text-center">
                  <Phone className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-medium text-sm mb-1">{t("phone")}</h4>
                  <p className="text-sm">+998 XX XXX XX XX</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg flex flex-col items-center text-center">
                  <Mail className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-medium text-sm mb-1">{t("email")}</h4>
                  <p className="text-sm">info@educenter.uz</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg flex flex-col items-center text-center">
                  <MapPin className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-medium text-sm mb-1">{t("address")}</h4>
                  <p className="text-sm">{t("companyAddress")}</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://t.me/educenter" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="h-5 w-5 text-primary" />
                    <span className="sr-only">Telegram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://instagram.com/educenter" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 text-primary" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://facebook.com/educenter" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 text-primary" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] bg-muted rounded-md overflow-hidden">
            {selectedBranchData && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 bg-white/90 dark:bg-black/90 rounded-lg shadow-lg z-10">
                  <h4 className="font-bold">{selectedBranchData.name}</h4>
                  <p className="text-sm">{selectedBranchData.address}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t("coordinates")}: {selectedBranchData.coordinates[0]}, {selectedBranchData.coordinates[1]}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">{t("interactiveMap")}</p>
                  {/* В реальном проекте здесь будет интеграция с Google Maps или Яндекс.Картами */}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {t("companyName")}. {t("allRightsReserved")}.
          </p>
        </div>
      </div>
    </footer>
  )
}

