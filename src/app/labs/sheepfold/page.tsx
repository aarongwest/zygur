import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, Filter, MessageCircle, Tags, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function SheepfoldPage() {
  return (
    <PageLayout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-amber-500" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Sheepfold
            </h1>
          </div>

          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            A comprehensive iOS group management solution designed for faith-based organizations.
            Sheepfold streamlines communication and organization through innovative features
            and intuitive design.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/1.png"
                  alt="Sheepfold Project"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Communication Features */}
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent-orange" />
                </div>
                <h2 className="text-2xl font-semibold">Communication Features</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Group messaging and announcements</li>
                <li>Event coordination and RSVPs</li>
                <li>Private and group chat channels</li>
                <li>Media sharing capabilities</li>
              </ul>
            </div>

            {/* Group Management */}
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <h2 className="text-2xl font-semibold">Group Management</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Hierarchical group structures</li>
                <li>Role-based access control</li>
                <li>Member profiles and directories</li>
                <li>Attendance tracking</li>
              </ul>
            </div>

            {/* Tagging System */}
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Tags className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-semibold">Advanced Tagging</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Custom tag creation and management</li>
                <li>Multi-level tag hierarchies</li>
                <li>Automated tag assignments</li>
                <li>Tag-based notifications</li>
              </ul>
            </div>

            {/* Filtering & Search */}
            <div className="bg-dark-green/60 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <Filter className="w-5 h-5 text-accent-yellow" />
                </div>
                <h2 className="text-2xl font-semibold">Smart Filtering</h2>
              </div>
              <ul className="space-y-3 text-zinc-400">
                <li>Advanced search capabilities</li>
                <li>Multi-criteria filtering</li>
                <li>Saved filter presets</li>
                <li>Dynamic group generation</li>
              </ul>
            </div>
              </div>

              {/* Organization Features */}
              <div className="bg-dark-green/60 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Faith-Based Organization Tools</h2>
            </div>
            <div className="space-y-6 text-zinc-400 max-w-3xl">
              <p>
                Sheepfold is specifically designed to meet the unique needs of faith-based organizations,
                offering features that support community building, ministry management, and spiritual growth:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Small group and ministry team coordination</li>
                <li>Event planning and volunteer management</li>
                <li>Resource sharing and distribution</li>
                <li>Prayer request management and tracking</li>
                <li>Customizable notification preferences</li>
                <li>Integration with common calendar systems</li>
              </ul>
            </div>
              </div>

              {/* Development Status */}
              <div className="bg-dark-green/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Project Status</h2>
                <p className="text-zinc-400 mb-6">
                  Originally developed as a partner project, Sheepfold has been acquired and enhanced 
                  through our young entrepreneur and partner program. We continue to evolve and improve 
                  the platform based on user feedback and emerging needs in faith-based community management.
                </p>
              </div>

              {/* Terms of Use Card */}
              <div className="bg-dark-green/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Terms of Use</h2>
                <div className="prose prose-invert prose-zinc max-w-3xl">
                  <p className="text-sm text-zinc-500 mb-6">Last Updated: January 2024</p>
                  <p className="text-zinc-400 mb-6">
                    Welcome to Sheepfold. Please read these Terms of Use ("Terms") carefully before using 
                    the Sheepfold iOS application ("the App"). By downloading, installing, or using the App, 
                    you agree to be bound by these Terms.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">1. Acceptance of Terms</h3>
                      <p className="text-zinc-400">
                        By using Sheepfold, you acknowledge that you have read, understood, and agree to be 
                        bound by these Terms. If you do not agree to these Terms, please do not use the App.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">2. Use of the App</h3>
                      <p className="text-zinc-400">
                        Sheepfold grants you a limited, non-exclusive, non-transferable, revocable license 
                        to use the App for your personal, non-commercial use, subject to these Terms.
                      </p>
                      <p className="text-zinc-400 mt-4">You agree to:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Use the App in compliance with all applicable laws and regulations</li>
                        <li>Maintain the confidentiality of any member information you store in the App</li>
                        <li>Use the App only for its intended purpose of member management</li>
                        <li>Not modify, distribute, or create derivative works of the App</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">3. User Responsibilities</h3>
                      <p className="text-zinc-400">As a user of Sheepfold, you are responsible for:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Maintaining the confidentiality of member information</li>
                        <li>Obtaining necessary permissions before storing anyone's personal information</li>
                        <li>Ensuring the accuracy of information you enter into the App</li>
                        <li>Managing your notification settings appropriately</li>
                        <li>Backing up your data as needed</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">4. Privacy and Data Protection</h3>
                      <p className="text-zinc-400">
                        Your use of the App is also governed by our Privacy Policy. You agree to:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Only store information for which you have proper authorization</li>
                        <li>Handle all stored information in accordance with applicable privacy laws</li>
                        <li>Protect access to your device to prevent unauthorized access to member information</li>
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
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">6. Limitations of Liability</h3>
                      <p className="text-zinc-400">
                        The App is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that:
                      </p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>The App will always be available or error-free</li>
                        <li>Notifications will always be delivered on time</li>
                        <li>Data will never be lost or corrupted</li>
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
                        <li>Maintaining your own backups of important information</li>
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
              <div className="bg-dark-green/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Privacy Policy</h2>
                <div className="prose prose-invert prose-zinc max-w-3xl">
                  <p className="text-sm text-zinc-500 mb-6">Last Updated: January 2024</p>
                  <p className="text-zinc-400 mb-6">
                    At Sheepfold, we take your privacy seriously. This Privacy Policy explains how we collect, 
                    use, and protect your information when you use our iOS application.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Information We Collect</h3>
                      <p className="text-zinc-400">Sheepfold collects the following types of information:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Member Information: Names, contact details, and status information for congregation members you add to the app</li>
                        <li>Tags and Notes: Custom tags and notes you create to organize member information</li>
                        <li>Notification Preferences: Your preferences for birthday and status reminder notifications</li>
                        <li>Device Information: Basic device information required for app functionality and notifications</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">How We Use Your Information</h3>
                      <p className="text-zinc-400">We use the collected information for the following purposes:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>To provide member management functionality within the app</li>
                        <li>To send notifications based on your preferences</li>
                        <li>To improve the app's functionality and user experience</li>
                        <li>To provide technical support when needed</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Data Storage and Security</h3>
                      <p className="text-zinc-400">Sheepfold prioritizes the security of your data:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>All member data is stored locally on your device by default</li>
                        <li>Optional cloud backup is available through iCloud using Apple's secure infrastructure</li>
                        <li>We use industry-standard security measures to protect any data transmitted through the app</li>
                        <li>We never sell or share your data with third parties</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Notifications</h3>
                      <p className="text-zinc-400">Sheepfold sends local notifications for:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Birthday reminders for members</li>
                        <li>Status check-in reminders based on your preferences</li>
                      </ul>
                      <p className="text-zinc-400 mt-4">
                        You can modify or disable notifications at any time through the app settings
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Contact Information Access</h3>
                      <p className="text-zinc-400">When you choose to import contacts:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>We request access to your device's contacts only when you initiate an import</li>
                        <li>Contact information is only stored locally within the app</li>
                        <li>You can revoke contact access at any time through your device settings</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Your Rights</h3>
                      <p className="text-zinc-400">You have the right to:</p>
                      <ul className="list-disc pl-6 text-zinc-400">
                        <li>Access all your data stored in the app</li>
                        <li>Export your data in a readable format</li>
                        <li>Delete all your data from the app</li>
                        <li>Modify notification preferences at any time</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-200">Children's Privacy</h3>
                      <p className="text-zinc-400">
                        Sheepfold is not intended for use by children under 13. We do not knowingly collect 
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
              <div className="bg-dark-green/60 rounded-lg p-8 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-6 text-center">Download the App</h2>
                <a 
                  href="https://apps.apple.com/us/app/sheepfold-ministering-app/id6741027545" 
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
              <div className="bg-dark-green/60 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Sheepfold Support</h2>
                <p className="text-zinc-400 mb-6">
                  Need help with Sheepfold? Our support team is here to assist you with any questions
                  or issues you may encounter. Fill out the form below or contact us for technical support,
                  feature requests, or general inquiries about the platform.
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
