"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Star, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [courseSelect, setCourseSelect] = useState("");

  // Состояния для отзывов
  const textTestimonialExpanded = [
    useState(false),
    useState(false),
    useState(false),
    useState(false),
  ];

  // Функция для отправки данных формы в Telegram
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const course = formData.get("course") as string;

    try {
      // В реальном проекте здесь будет API-запрос для отправки данных в Telegram
      // Примерная реализация:
      /*
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: '1325172996',
          message: `Новая заявка на курс!\nИмя: ${name}\nТелефон: ${phone}\nКурс: ${course}`,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Ошибка отправки сообщения');
      }
      */

      // Имитация задержки запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: t("messageSent"),
        description: t("messageSentDescription"),
      });

      // Сброс формы
      event.currentTarget.reset();
      setCourseSelect("");
    } catch (error) {
      toast({
        title: t("messageError"),
        description: t("messageErrorDescription"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Данные для курсов
  const courses = [
    {
      id: 1,
      title: t("course1Title"),
      image: "/course.jpg?height=200&width=300",
      rating: 5,
      price: "500 000",
      lessons: 12,
    },
    {
      id: 2,
      title: t("course2Title"),
      image: "/course.jpg?height=200&width=300",
      rating: 5,
      price: "800 000",
      lessons: 16,
    },
    {
      id: 3,
      title: t("course3Title"),
      image: "/course.jpg?height=200&width=300",
      rating: 4,
      price: "600 000",
      lessons: 12,
    },
    {
      id: 4,
      title: t("course4Title"),
      image: "/course.jpg?height=200&width=300",
      rating: 5,
      price: "900 000",
      lessons: 12,
    },
    {
      id: 5,
      title: t("course5Title"),
      image: "/course.jpg?height=200&width=300",
      rating: 5,
      price: "450 000",
      lessons: 8,
    },
    {
      id: 6,
      title: t("course6Title"),
      image: "/course.jpg?height=200&width=300",
      rating: 4,
      price: "1 200 000",
      lessons: 20,
    },
  ];

  // Данные для достижений
  const achievements = [
    {
      id: "ielts-practicum",
      title: t("achievement1Title"),
      students: [
        {
          name: "Алексей Иванов",
          result: "IELTS 7.5",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 7.5",
        },
        {
          name: "Мария Смирнова",
          result: "IELTS 8.0",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 8.0",
        },
        {
          name: "Дмитрий Петров",
          result: "IELTS 7.0",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 7.0",
        },
        {
          name: "Анна Козлова",
          result: "IELTS 8.5",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 8.5",
        },
      ],
    },
    {
      id: "sunday-events",
      title: t("achievement2Title"),
      students: [
        {
          name: "Группа A2",
          result: "Разговорный клуб",
          image: "/ielts.jpg?height=300&width=400&text=Разговорный клуб",
        },
        {
          name: "Группа B1",
          result: "Дебаты на английском",
          image: "/ielts.jpg?height=300&width=400&text=Дебаты",
        },
        {
          name: "Группа B2",
          result: "Презентации",
          image: "/ielts.jpg?height=300&width=400&text=Презентации",
        },
        {
          name: "Группа C1",
          result: "Бизнес-кейсы",
          image: "/ielts.jpg?height=300&width=400&text=Бизнес-кейсы",
        },
      ],
    },
    {
      id: "ielts-results",
      title: t("achievement3Title"),
      students: [
        {
          name: "Екатерина Соколова",
          result: "IELTS 7.5",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 7.5",
        },
        {
          name: "Сергей Новиков",
          result: "IELTS 7.0",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 7.0",
        },
        {
          name: "Ольга Морозова",
          result: "IELTS 8.0",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 8.0",
        },
        {
          name: "Артем Кузнецов",
          result: "IELTS 7.5",
          image: "/ielts.jpg?height=300&width=400&text=IELTS 7.5",
        },
      ],
    },
    {
      id: "seminars",
      title: t("achievement4Title"),
      students: [
        {
          name: "Семинар по грамматике",
          result: "Группа B1",
          image: "/ielts.jpg?height=300&width=400&text=Грамматика",
        },
        {
          name: "Семинар по аудированию",
          result: "Группа B2",
          image: "/ielts.jpg?height=300&width=400&text=Грамматика",
        },
        {
          name: "Семинар по письму",
          result: "Группа C1",
          image: "/ielts.jpg?height=300&width=400&text=Письмо",
        },
        {
          name: "Семинар по чтению",
          result: "Группа A2",
          image: "/ielts.jpg?height=300&width=400&text=Чтение",
        },
      ],
    },
  ];

  // Данные для преимуществ
  const advantages = [
    {
      id: 1,
      title: t("advantage1Title"),
      description: t("advantage1Description"),
      image: "/teacher.jpg?height=150&width=250",
      details: t("advantage1Details"),
    },
    {
      id: 2,
      title: t("advantage2Title"),
      description: t("advantage2Description"),
      image: "/teacher.jpg?height=150&width=250",
      details: t("advantage2Details"),
    },
    {
      id: 3,
      title: t("advantage3Title"),
      description: t("advantage3Description"),
      image: "/teacher.jpg?height=150&width=250",
      details: t("advantage3Details"),
    },
    {
      id: 4,
      title: t("advantage4Title"),
      description: t("advantage4Description"),
      image: "/teacher.jpg?height=150&width=250",
      details: t("advantage4Details"),
    },
    {
      id: 5,
      title: t("advantage5Title"),
      description: t("advantage5Description"),
      image: "/teacher.jpg?height=150&width=250",
      details: t("advantage5Details"),
    },
  ];

  // Данные для отзывов
  const videoTestimonials = [
    {
      id: 1,
      name: "Алексей Иванов",
      video: "/teacher.jpg?height=200&width=350&text=Видео отзыв 1",
    },
    {
      id: 2,
      name: "Мария Смирнова",
      video: "/placeholder.svg?height=200&width=350&text=Видео отзыв 2",
    },
    {
      id: 3,
      name: "Дмитрий Петров",
      video: "/placeholder.svg?height=200&width=350&text=Видео отзыв 3",
    },
    {
      id: 4,
      name: "Анна Козлова",
      video: "/placeholder.svg?height=200&width=350&text=Видео отзыв 4",
    },
  ];

  const textTestimonials = [
    {
      id: 1,
      name: "Екатерина Соколова",
      photo: "/teacher.jpg?height=400&width=300",
      course: t("course2Title"),
      text: t("testimonial1Text"),
    },
    {
      id: 2,
      name: "Сергей Новиков",
      photo: "/teacher.jpg?height=400&width=300",
      course: t("course4Title"),
      text: t("testimonial2Text"),
    },
    {
      id: 3,
      name: "Ольга Морозова",
      photo: "/teacher.jpg?height=400&width=300",
      course: t("course3Title"),
      text: t("testimonial3Text"),
    },
    {
      id: 4,
      name: "Артем Кузнецов",
      photo: "/teacher.jpg?height=400&width=300",
      course: t("course6Title"),
      text: t("testimonial4Text"),
    },
  ];

  // Данные для преподавателей
  const teachers = [
    {
      id: 1,
      name: "Анна Владимировна",
      photo: "/teacher.jpg?height=400&width=300",
      experience: "10 " + t("years"),
      achievements: "CELTA, DELTA, IELTS 8.5",
      qualities: t("teacher1Qualities"),
      courses: t("teacher1Courses"),
      students: 500,
    },
    {
      id: 2,
      name: "Иван Петрович",
      photo: "/teacher.jpg?height=400&width=300",
      experience: "8 " + t("years"),
      achievements: "CELTA, TKT, IELTS 8.0",
      qualities: t("teacher2Qualities"),
      courses: t("teacher2Courses"),
      students: 450,
    },
    {
      id: 3,
      name: "Мария Сергеевна",
      photo: "/teacher.jpg?height=400&width=300",
      experience: "12 " + t("years"),
      achievements: "DELTA, IELTS 9.0",
      qualities: t("teacher3Qualities"),
      courses: t("teacher3Courses"),
      students: 600,
    },
    {
      id: 4,
      name: "Дмитрий Александрович",
      photo: "/teacher.jpg?height=400&width=300",
      experience: "7 " + t("years"),
      achievements: "CELTA, IELTS 8.0",
      qualities: t("teacher4Qualities"),
      courses: t("teacher4Courses"),
      students: 400,
    },
    {
      id: 5,
      name: "Елена Игоревна",
      photo: "/teacher.jpg?height=400&width=300",
      experience: "9 " + t("years"),
      achievements: "CELTA, TKT, IELTS 8.5",
      qualities: t("teacher5Qualities"),
      courses: t("teacher5Courses"),
      students: 550,
    },
    {
      id: 6,
      name: "Алексей Николаевич",
      photo: "/teacher.jpg?height=400&width=300",
      experience: "11 " + t("years"),
      achievements: "DELTA, IELTS 8.5",
      qualities: t("teacher6Qualities"),
      courses: t("teacher6Courses"),
      students: 520,
    },
  ];

  // Состояния для слайдеров
  const [advantageIndex, setAdvantageIndex] = useState(0);
  const [videoTestimonialIndex, setVideoTestimonialIndex] = useState(0);
  const [teacherIndex, setTeacherIndex] = useState(0);

  // Функции для управления слайдерами
  const nextAdvantage = () => {
    setAdvantageIndex(
      (prev) => (prev + 1) % Math.max(1, advantages.length - 3)
    );
  };

  const prevAdvantage = () => {
    setAdvantageIndex(
      (prev) =>
        (prev - 1 + Math.max(1, advantages.length - 3)) %
        Math.max(1, advantages.length - 3)
    );
  };

  const nextVideoTestimonial = () => {
    setVideoTestimonialIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideoTestimonial = () => {
    setVideoTestimonialIndex(
      (prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length
    );
  };

  const nextTeacher = () => {
    setTeacherIndex((prev) => (prev + 1) % Math.max(0, teachers.length - 3));
  };

  const prevTeacher = () => {
    setTeacherIndex(
      (prev) =>
        (prev - 1 + Math.max(0, teachers.length - 3)) %
        Math.max(1, teachers.length - 3)
    );
  };

  // Функция для отображения звездного рейтинга
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Главный экран */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {t("heroTitle")}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t("heroDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" style={{ background: "#0045b1" }}>
                  <Link href="#courses">{t("ourCourses")}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#about">{t("aboutUs")}</Link>
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                {t("registerForCourse")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("yourName")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("enterYourName")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("yourPhone")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+998 XX XXX XX XX"
                    required
                    pattern="^\+?[0-9\s\-()]+$"
                    title={t("phoneValidationMessage")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">{t("selectCourse")}</Label>
                  <Select
                    name="course"
                    value={courseSelect}
                    onValueChange={setCourseSelect}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("selectCourse")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">
                        {t("course1Title")}
                      </SelectItem>
                      <SelectItem value="ielts">{t("course2Title")}</SelectItem>
                      <SelectItem value="speaking">
                        {t("course3Title")}
                      </SelectItem>
                      <SelectItem value="business">
                        {t("course4Title")}
                      </SelectItem>
                      <SelectItem value="kids">{t("course5Title")}</SelectItem>
                      <SelectItem value="intensive">
                        {t("course6Title")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  style={{ background: "#0045b1" }}
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? t("sending") : t("send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Блок "О нас" */}
      <section id="about" className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("aboutUs")}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              {/* <p className="text-muted-foreground">{t("videoAboutCenter")}</p> */}
              <iframe
                width="1280"
                height="367"
                src="https://www.youtube.com/embed/ZMsTMuyH7w8"
                title="3-HOUR STUDY WITH ME | Hyper Efficient, Doctor, Focus Music, Deep Work, Pomodoro 50-10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            <div>
              <p className="text-lg mb-6">{t("aboutUsDescription")}</p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm">{t("branches")}</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">
                    1000+
                  </div>
                  <div className="text-sm">{t("students")}</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">
                    30+
                  </div>
                  <div className="text-sm">{t("teachers")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Блок "Наши курсы" */}
      <section id="courses" className="py-12 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("ourCourses")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <div className="flex mt-1">{renderStars(course.rating)}</div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between text-sm">
                    <span>{t("pricePerMonth")}:</span>
                    <span className="font-bold">
                      {course.price} {t("currency")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>{t("lessonsPerMonth")}:</span>
                    <span className="font-bold">{course.lessons}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    {t("moreDetails")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Галерея достижений */}
      <section id="achievements" className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("ourAchievements")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <Dialog key={achievement.id}>
                <DialogTrigger asChild>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group">
                    <Image
                      src={achievement.students[0].image || "/ielts.jpg"}
                      alt={achievement.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-full max-w-[90vw] h-[90vh] p-0 overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="absolute top-4 right-4 z-50">
                      <DialogClose className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70">
                        <X className="h-6 w-6" />
                        <span className="sr-only">{t("close")}</span>
                      </DialogClose>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-8 w-full h-full overflow-auto">
                      {achievement.students.map((student, index) => (
                        <div
                          key={index}
                          className="bg-card rounded-lg overflow-hidden shadow-lg"
                        >
                          <div className="relative aspect-video">
                            <Image
                              src={student.image || "/placeholder.svg"}
                              alt={`${student.name} - ${student.result}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-lg">
                              {student.name}
                            </h4>
                            <p className="text-muted-foreground">
                              {student.result}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Блок "Преимущества учебного центра" */}
      <section id="advantages" className="py-12 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("centerAdvantages")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <Dialog key={advantage.id}>
                <DialogTrigger asChild>
                  <Card className="h-full cursor-pointer hover:shadow-md transition-shadow">
                    <div className="aspect-[5/3] relative">
                      <Image
                        src={advantage.image || "/placeholder.svg"}
                        alt={advantage.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">
                        {advantage.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{advantage.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p>{advantage.details}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Блок "Мнение студентов" */}
      <section id="testimonials" className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("studentOpinions")}
          </h2>
{/* 
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              {t("videoTestimonials")}
            </h3>

            <div className="relative">
              <div className="flex overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${videoTestimonialIndex * 100}%)`,
                  }}
                >
                  {videoTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] p-4"
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer">
                            <Image
                              src={"/teacher.jpg"}
                              alt={`${t("testimonialFrom")} ${
                                testimonial.name
                              }`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <Button
                                variant="outline"
                                className="text-white border-white"
                              >
                                {t("watchTestimonial")}
                              </Button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                              <h4 className="text-white font-medium">
                                {testimonial.name}
                              </h4>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>
                              {t("testimonialFrom")} {testimonial.name}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="relative aspect-video mt-2">
                            <div className="absolute inset-0 bg-muted flex items-center justify-center">
                              <p className="text-muted-foreground">
                                {t("videoWillPlayHere")}
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full"
                onClick={prevVideoTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
                onClick={nextVideoTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
              {videoTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`text-center cursor-pointer ${
                    videoTestimonialIndex === index
                      ? "font-bold text-primary"
                      : ""
                  }`}
                  onClick={() => setVideoTestimonialIndex(index)}
                >
                  {testimonial.name}
                </div>
              ))}
            </div>
          </div> */}

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">
              {t("textTestimonials")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {textTestimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={testimonial.id === 4 ? "md:col-span-3" : ""}
                >
                  <CardContent className="p-6">
                    <div className="relative">
                      <p
                        className={`text-muted-foreground mb-4 ${
                          textTestimonialExpanded[index][0]
                            ? ""
                            : "line-clamp-3"
                        }`}
                      >
                        "{testimonial.text}"
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm"
                        onClick={() =>
                          textTestimonialExpanded[index][1](
                            !textTestimonialExpanded[index][0]
                          )
                        }
                      >
                        {textTestimonialExpanded[index][0]
                          ? t("less")
                          : t("more")}
                      </Button>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonial.photo || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.course}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Блок "Наши преподаватели" */}
      <section id="teachers" className="py-12 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("ourTeachers")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <Dialog key={teacher.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={teacher.photo || "/teacher.jpg"}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                        <div className="p-4 w-full">
                          <h3 className="text-white text-lg font-medium">
                            {teacher.name}
                          </h3>
                          <p className="text-white/80 text-sm mt-1">
                            {t("experience")}: {teacher.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          {t("studentsCount")}:{" "}
                          <span className="font-medium text-foreground">
                            {teacher.students}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          {t("moreDetails")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {teacher.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                      <Image
                        src={teacher.photo || "/placeholder.svg"}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-medium mb-1">{t("experience")}</h4>
                        <p>{teacher.experience}</p>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-medium mb-1">
                          {t("achievements")}
                        </h4>
                        <p>{teacher.achievements}</p>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-medium mb-1">{t("qualities")}</h4>
                        <p>{teacher.qualities}</p>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-medium mb-1">
                          {t("teachingDirections")}
                        </h4>
                        <p>{teacher.courses}</p>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-medium mb-1">
                          {t("studentsCount")}
                        </h4>
                        <p className="text-xl font-bold text-primary">
                          {teacher.students}
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Блок "Регистрация на курсы" */}
      <section id="registration" className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("registerForCourses")}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/location.webp?height=400&width=600&text=Администрация"
                alt={t("centerAdministration")}
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                {t("registerForCourse")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name-footer">{t("yourName")}</Label>
                  <Input
                    id="name-footer"
                    name="name"
                    placeholder={t("enterYourName")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone-footer">{t("yourPhone")}</Label>
                  <Input
                    id="phone-footer"
                    name="phone"
                    placeholder="+998 XX XXX XX XX"
                    required
                    pattern="^\+?[0-9\s\-()]+$"
                    title={t("phoneValidationMessage")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course-footer">{t("selectCourse")}</Label>
                  <Select
                    name="course"
                    value={courseSelect}
                    onValueChange={setCourseSelect}
                    required
                  >
                    <SelectTrigger id="course-footer">
                      <SelectValue placeholder={t("selectCourse")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">
                        {t("course1Title")}
                      </SelectItem>
                      <SelectItem value="ielts">{t("course2Title")}</SelectItem>
                      <SelectItem value="speaking">
                        {t("course3Title")}
                      </SelectItem>
                      <SelectItem value="business">
                        {t("course4Title")}
                      </SelectItem>
                      <SelectItem value="kids">{t("course5Title")}</SelectItem>
                      <SelectItem value="intensive">
                        {t("course6Title")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? t("sending") : t("send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
