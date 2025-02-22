import { NextResponse } from "next/server"

const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID

if (!KLAVIYO_API_KEY) {
  throw new Error("Missing KLAVIYO_API_KEY environment variable")
}

if (!KLAVIYO_LIST_ID) {
  throw new Error("Missing KLAVIYO_LIST_ID environment variable")
}

export async function POST(request: Request) {
  try {
    const { email, name, company, phone, downloadType } = await request.json()

    // Add subscriber to Klaviyo list
    const response = await fetch(`https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Klaviyo-API-Key ${KLAVIYO_API_KEY}`
      },
      body: JSON.stringify({
        profiles: [{
          email,
          first_name: name.split(" ")[0],
          last_name: name.split(" ").slice(1).join(" "),
          company,
          properties: {
            "$source": "EHS Website",
            "Download Type": downloadType,
            "Phone Number": phone
          }
        }]
      })
    })

    if (!response.ok) {
      throw new Error("Failed to add subscriber to Klaviyo")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Klaviyo API Error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    )
  }
}
