import { NextRequest, NextResponse } from "next/server"

interface NewsletterSubscriber {
  email: string
}

export async function POST(request: NextRequest) {
  try {
    const data: NewsletterSubscriber = await request.json()

    // Validate email
    if (!data.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Here you can integrate with email services like:
    // - Mailchimp API
    // - Brevo (Sendinblue)
    // - ConvertKit
    // - Substack
    // - Or your own email list service

    // For now, we'll just log the subscription
    console.log("Newsletter subscription:", data.email)

    // TODO: Implement actual newsletter service integration
    // Example with Mailchimp:
    // const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY)
    // await mailchimp.subscribe({
    //   listId: process.env.MAILCHIMP_LIST_ID,
    //   email: data.email,
    //   status: 'subscribed'
    // })

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing! Check your email for beauty tips.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    )
  }
}

export async function OPTIONS(_request: NextRequest) {
  return NextResponse.json({}, { status: 200 })
}
