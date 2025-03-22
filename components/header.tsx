"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Используем контекст языка
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navigation = [
    { name: t("home"), href: "#" },
    { name: t("aboutUs"), href: "#about" },
    { name: t("ourCourses"), href: "#courses" },
    { name: t("ourAchievements"), href: "#achievements" },
    { name: t("centerAdvantages"), href: "#advantages" },
    { name: t("studentOpinions"), href: "#testimonials" },
    { name: t("ourTeachers"), href: "#teachers" },
    { name: t("contactUs"), href: "#registration" },
  ]

  // Функция для плавного скролла к разделу
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  const languageNames = {
    en: "English",
    ru: "Русский",
    uz: "O'zbek",
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, "#")}>
            <Image
              src="/logo.jpg?height=40&width=40"
              alt={t("companyName")}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <span className="font-bold text-xl">{t("companyName")}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2 font-medium">
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>{languageNames.en}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ru")}>{languageNames.ru}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("uz")}>{languageNames.uz}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Switcher */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={t("toggleTheme")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t("toggleTheme")}</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{t("menu")}</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

