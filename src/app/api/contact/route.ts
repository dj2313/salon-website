import { NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400 }
      )
    }

    // Here you can integrate with email services like:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - Or your own email service

    // For now, we'll just log the data
    console.log("Contact form submission:", data)

    // TODO: Implement actual email sending
    // Example with environment variables:
    // const emailService = new EmailService(process.env.EMAIL_API_KEY)
    // await emailService.sendAppointmentRequest(data)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your request! We'll contact you soon.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    )
  }
}

// Enable CORS for the contact endpoint if needed
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 })
}
