/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/jaxU15rkpyw
 */
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <>
      <div className="bg-gray-50/90 py-6 w-full">
        <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are a social media company dedicated to connecting people around the world. Our mission is to foster
              meaningful relationships, spark conversations, and inspire creativity. We believe in the power of
              community and are committed to creating a safe and inclusive space for everyone.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-6 lg:max-w-5xl lg:grid-cols-3">
            <div className="flex flex-col gap-1">
              <img
                alt="Team member"
                className="mx-auto rounded-full overflow-hidden object-cover object-center"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Alice Johnson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <img
                alt="Team member"
                className="mx-auto rounded-full overflow-hidden object-cover object-center"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Bob Smith</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <img
                alt="Team member"
                className="mx-auto rounded-full overflow-hidden object-cover object-center"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Ella Parker</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Community Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Achievements</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We've reached over 10 million users worldwide and are continuously growing. Our platform has been
              recognized for its innovative features, winning the "Best Social Media App" award at the 2023 Innovation
              Summit.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have questions or feedback? Reach out to our team. We are here to help.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-6 lg:max-w-5xl lg:grid-cols-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">General Inquiries</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email: info@example.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Support</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email: support@example.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Partnerships</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email: partnerships@example.com</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-4 sm:max-w-4xl md:gap-6">
            <div className="space-y-2">
              <Label className="text-base" htmlFor="message">
                Message
              </Label>
              <Textarea className="min-h-[150px] text-sm" id="message" placeholder="Enter your message" />
            </div>
            <div className="space-y-2">
              <Label className="text-base" htmlFor="email">
                Email
              </Label>
              <Input className="text-sm" id="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <Label className="text-base" htmlFor="name">
                Name
              </Label>
              <Input className="text-sm" id="name" placeholder="Name" />
            </div>
            <Button className="w-full max-w-[200px] justify-center text-sm">Submit</Button>
          </div>
        </div>
      </section>
    </>
  )
}