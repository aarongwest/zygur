import { Metadata } from "next"

export const metadata: Metadata = {
  title: "EHS Solutions | EHS, Inc.",
  description: "Expert insights and guidance on environmental health and safety management.",
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
