import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Your Resources | EHS, Inc.",
  description: "Access your downloaded EHS resources and discover additional materials to enhance your safety program.",
  robots: "noindex"
}

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
