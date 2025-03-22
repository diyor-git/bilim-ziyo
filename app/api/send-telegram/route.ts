import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { chatId, message } = await request.json()

    // Проверка наличия обязательных параметров
    if (!chatId || !message) {
      return NextResponse.json({ error: "Отсутствуют обязательные параметры" }, { status: 400 })
    }

    // Получаем токен бота из переменных окружения
    // В реальном проекте нужно добавить TELEGRAM_BOT_TOKEN в .env файл
    const botToken = process.env.TELEGRAM_BOT_TOKEN

    if (!botToken) {
      return NextResponse.json({ error: "Отсутствует токен Telegram бота" }, { status: 500 })
    }

    // Отправляем сообщение через Telegram API
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })

    const telegramData = await telegramResponse.json()

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { error: "Ошибка отправки сообщения в Telegram", details: telegramData },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, data: telegramData })
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error)
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 })
  }
}

