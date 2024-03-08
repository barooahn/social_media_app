/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NNgMeoIz2YO
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    <div className="w-full max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Get in touch with us</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter the subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
          </div>
          <Button>Send message</Button>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Connect with us on social media</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Follow us for the latest updates and news.</p>
          </div>
          <div className="space-y-2">
            <h3 className="sr-only">Social media profiles</h3>
            <nav className="flex items-center gap-4">
              <Link className="rounded-full p-2 bg-gray-100 dark:bg-gray-800" href="#">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link className="rounded-full p-2 bg-gray-100 dark:bg-gray-800" href="#">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link className="rounded-full p-2 bg-gray-100 dark:bg-gray-800" href="#">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contact information</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Reach out to us directly.</p>
          </div>
          <div className="space-y-2">
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <div>Address</div>
              <div>Phone</div>
              <div>123 Street Rd, City, Country</div>
              <div>support@example.com</div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}