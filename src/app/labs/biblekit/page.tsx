import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Star, Book, Search, GraduationCap, Bookmark, FileText, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function BibleKitPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center">
              <Book className="w-6 h-6 text-accent-orange" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              BibleKit
            </h1>
          </div>

          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            An innovative iOS app designed to help people learn and engage with the Bible through
            interactive study tools, personalized reading plans, and powerful search capabilities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/1.png"
                  alt="BibleKit App"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Study Tools */}
                <div className="bg-zinc-900/60 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-accent-orange" />
                    </div>
                    <h2 className="text-2xl font-semibold">Study Tools</h2>
                  </div>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Interactive reading plans with progress tracking</li>
                    <li>Verse-by-verse commentary integration</li>
                    <li>Contextual historical and cultural insights</li>
                    <li>Topic-based study modules</li>
                  </ul>
                </div>

                {/* Reading Experience */}
                <div className="bg-zinc-900/60 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Book className="w-5 h-5 text-purple-500" />
                    </div>
                    <h2 className="text-2xl font-semibold">Reading Experience</h2>
                  </div>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Beautifully formatted text for comfortable reading</li>
                    <li>Multiple translations and parallel viewing</li>
                    <li>Customizable font size, style, and theme settings</li>
                    <li>Offline access to all content</li>
                  </ul>
                </div>

                {/* Bookmarking & Notes */}
                <div className="bg-zinc-900/60 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Bookmark className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-semibold">Bookmarking & Notes</h2>
                  </div>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Flexible highlighting with custom color coding</li>
                    <li>Detailed note-taking with verse attachments</li>
                    <li>Organized bookmark collections by topic</li>
                    <li>Cloud synchronization across devices</li>
                  </ul>
                </div>

                {/* Advanced Search */}
                <div className="bg-zinc-900/60 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                      <Search className="w-5 h-5 text-accent-yellow" />
                    </div>
                    <h2 className="text-2xl font-semibold">Advanced Search</h2>
                  </div>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Powerful semantic search capabilities</li>
                    <li>Cross-reference identification</li>
                    <li>Original language word study tools</li>
                    <li>Topic and theme exploration</li>
                  </ul>
                </div>
              </div>

              {/* Learning Features */}
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-amber-500" />
                  </div>
                  <h2 className="text-2xl font-semibold">Bible Learning Features</h2>
                </div>
                <div className="space-y-6 text-zinc-400 max-w-3xl">
                  <p>
                    BibleKit is specifically designed to help users deepen their understanding of
                    the Bible through a variety of learning-focused features:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Daily verse memorization with spaced repetition techniques</li>
                    <li>Interactive quizzes and knowledge checks</li>
                    <li>Guided devotional content for personal reflection</li>
                    <li>Timeline visualizations of biblical events</li>
                    <li>Maps and geographical context for biblical narratives</li>
                    <li>Character profiles and relationship networks</li>
                  </ul>
                </div>
              </div>

              {/* Development Status */}
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">AI Technology & Development</h2>
                <p className="text-zinc-400 mb-6">
                  BibleKit is an experimental project developed in our AI software playground, showcasing
                  the potential of natural language processing and machine learning in biblical studies.
                  The app leverages advanced AI algorithms for semantic search, content recommendation,
                  and contextual analysis of biblical texts. This project demonstrates our commitment to
                  staying at the forefront of digital technology applications in educational contexts.
                </p>
              </div>

              {/* Terms of Use Card */}
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Terms of Use</h2>
                <div className="prose prose-invert prose-zinc max-w-3xl">
                  <p className="text-sm text-zinc-500 mb-6">Last Updated: May 2025</p>
                  <p className="text-zinc-400 mb-6">
                    Welcome to BibleKit. Please read these Terms of Use ("Terms") carefully before using 
                    the BibleKit iOS application ("the App"). By downloading, installing, or using the App, 
                    you agree to be bound by these Terms.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">1. Acceptance of Terms</h3>
                      <p className="text-zinc-400">
                        By using BibleKit, you acknowledge that you have read, understood, and agree to be 
                        bound by these Terms. If you do not agree to these Terms, please do not use the App.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">2. Use of the App</h3>
                      <p className="text-zinc-400">
                        BibleKit grants you a limited, non-exclusive, non-transferable, revocable license 
                        to use the App for your personal, non-commercial use, subject to these Terms.
                      </p>
                      <p className="text-zinc-400 mt-4">You agree to:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Use the App in compliance with all applicable laws and regulations</li>
                        <li>Maintain the security of your account information</li>
                        <li>Use the App only for its intended purpose of Bible study and learning</li>
                        <li>Not modify, distribute, or create derivative works of the App</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">3. User Responsibilities</h3>
                      <p className="text-zinc-400">As a user of BibleKit, you are responsible for:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Maintaining the confidentiality of your account credentials</li>
                        <li>All activities that occur under your account</li>
                        <li>Ensuring your device meets the minimum requirements for the App</li>
                        <li>Managing your notification and synchronization settings</li>
                        <li>Backing up your study notes and highlights as needed</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">4. Privacy and Data Protection</h3>
                      <p className="text-zinc-400">
                        Your use of the App is also governed by our Privacy Policy. You agree to:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Provide accurate information when creating an account</li>
                        <li>Accept our standard data collection practices as outlined in the Privacy Policy</li>
                        <li>Protect access to your device to prevent unauthorized access to your account</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">5. Intellectual Property</h3>
                      <p className="text-zinc-400">
                        The App, including all content, features, and functionality, is owned by Zygur Technologies Corp. 
                        and is protected by copyright, trademark, and other intellectual property laws. You may not:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Copy, modify, or create derivative works of the App</li>
                        <li>Attempt to decompile or reverse engineer the App</li>
                        <li>Remove any copyright or proprietary notices from the App</li>
                      </ul>
                      <p className="text-zinc-400 mt-4">
                        Biblical content within the App may be subject to additional copyright notices
                        and terms from the respective translation copyright holders.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">6. Limitations of Liability</h3>
                      <p className="text-zinc-400">
                        The App is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>The App will always be available or error-free</li>
                        <li>All biblical content and translations will be free from errors</li>
                        <li>Study data will never be lost or corrupted</li>
                      </ul>
                      <p className="text-zinc-400 mt-4">
                        We shall not be liable for any indirect, incidental, special, consequential, or punitive 
                        damages resulting from your use of or inability to use the App.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">7. Data Backup</h3>
                      <p className="text-zinc-400">
                        While we provide backup functionality through iCloud, you are responsible for:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Maintaining your own backups of important study notes and highlights</li>
                        <li>Ensuring your iCloud settings are properly configured if using cloud backup</li>
                        <li>Verifying the success of any backup operations</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">8. Termination</h3>
                      <p className="text-zinc-400">
                        We reserve the right to terminate or suspend your access to the App at any time, 
                        without notice, for any reason, including if you violate these Terms.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">9. Changes to Terms</h3>
                      <p className="text-zinc-400">
                        We may modify these Terms at any time. We will notify you of any changes by posting 
                        the new Terms in the App and updating the "Last Updated" date. Your continued use 
                        of the App after such changes constitutes your acceptance of the new Terms.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">10. Governing Law</h3>
                      <p className="text-zinc-400">
                        These Terms shall be governed by and construed in accordance with the laws of the 
                        United States, without regard to its conflict of law provisions.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">11. Contact Information</h3>
                      <p className="text-zinc-400">
                        If you have any questions about these Terms, please contact us using the contact form on this page.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">12. Severability</h3>
                      <p className="text-zinc-400">
                        If any provision of these Terms is found to be unenforceable or invalid, that provision 
                        shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
                        otherwise remain in full force and effect and enforceable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Policy Card */}
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
                <div className="prose prose-invert prose-zinc max-w-3xl">
                  <p className="text-sm text-zinc-500 mb-6">Last Updated: May 2025</p>
                  <p className="text-zinc-400 mb-6">
                    At BibleKit, we take your privacy seriously. This Privacy Policy explains how we collect, 
                    use, and protect your information when you use our iOS application.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Information We Collect</h3>
                      <p className="text-zinc-400">BibleKit collects the following types of information:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Account Information: Optional account details for cloud synchronization</li>
                        <li>User Content: Notes, highlights, bookmarks, and study progress you create</li>
                        <li>App Preferences: Your reading settings, notification preferences, and app customizations</li>
                        <li>Device Information: Basic device information required for app functionality</li>
                        <li>Usage Data: Anonymous usage statistics to help improve the app experience</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">How We Use Your Information</h3>
                      <p className="text-zinc-400">We use the collected information for the following purposes:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>To provide personalized Bible study experiences</li>
                        <li>To sync your content across multiple devices when enabled</li>
                        <li>To improve the app's functionality and user experience</li>
                        <li>To provide technical support when needed</li>
                        <li>To send notifications based on your preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Data Storage and Security</h3>
                      <p className="text-zinc-400">BibleKit prioritizes the security of your data:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Your study data is stored locally on your device by default</li>
                        <li>Optional cloud synchronization is available through iCloud</li>
                        <li>We use industry-standard security measures for any data transmission</li>
                        <li>We never sell your personal data to third parties</li>
                        <li>Your study data is encrypted during transmission and storage</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Notifications</h3>
                      <p className="text-zinc-400">BibleKit sends notifications for:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Daily reading reminders based on your reading plans</li>
                        <li>Verse memorization practice prompts</li>
                        <li>Study goal achievements</li>
                      </ul>
                      <p className="text-zinc-400 mt-4">
                        You can modify or disable notifications at any time through the app settings
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Sharing Features</h3>
                      <p className="text-zinc-400">When you choose to share content from the app:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>We only share the specific content you explicitly choose to share</li>
                        <li>We request access to sharing services only when you initiate sharing</li>
                        <li>You control exactly what content is shared and with whom</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Your Rights</h3>
                      <p className="text-zinc-400">You have the right to:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Access all your data stored in the app</li>
                        <li>Export your study notes, highlights, and bookmarks</li>
                        <li>Delete your account and associated data</li>
                        <li>Modify notification and synchronization preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Children's Privacy</h3>
                      <p className="text-zinc-400">
                        BibleKit is not intended for use by children under 13. We do not knowingly collect 
                        personal information from children under 13. If you become aware that a child has 
                        provided us with personal information, please contact us.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Changes to This Policy</h3>
                      <p className="text-zinc-400">
                        We may update this Privacy Policy from time to time. We will notify you of any changes 
                        by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Contact Us</h3>
                      <p className="text-zinc-400">
                        If you have any questions about this Privacy Policy, please contact us using the 
                        contact form on this page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Support */}
            <div className="lg:col-span-1 space-y-8">
              {/* App Store Badge */}
              <div className="bg-zinc-900/60 rounded-lg p-8 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-6 text-center">Download the App</h2>
                <a 
                  href="https://apps.apple.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    priority
                  />
                </a>
              </div>
              
              {/* Support Card */}
              <div className="bg-zinc-900/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">BibleKit Support</h2>
                <p className="text-zinc-400 mb-6">
                  Need help with BibleKit? Our support team is here to assist you with any questions
                  or issues you may encounter. Fill out the form below for technical support,
                  feature requests, or general inquiries about the app.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
