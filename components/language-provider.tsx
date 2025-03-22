"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

export type Language = "uz" | "en" | "ru"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Загрузка переводов
    const loadTranslations = async () => {
      try {
        const translations = {
          en: await import("@/translations/en.json").then((m) => m.default),
          uz: await import("@/translations/uz.json").then((m) => m.default),
          ru: await import("@/translations/ru.json").then((m) => m.default),
        }
        setTranslations(translations)
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to load translations:", error)
      }
    }

    loadTranslations()

    // Проверка сохраненного языка
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && ["en", "ru", "uz"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage)
    }
  }

  const t = (key: string) => {
    if (!isLoaded || !translations[language]) return key
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

