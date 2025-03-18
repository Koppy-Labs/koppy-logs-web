import Image from 'next/image'
import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col gap-32 max-w-5xl mx-auto items-center justify-center min-h-screen">
      <div className="flex flex-col w-full items-center h-fit rounded-2xl px-12 py-4">
        <div className="flex flex-col items-center pt-40 gap-12 text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-8xl font-newake font-bold text-stone-900 tracking-wider">
              Modern logging for <br />
              FiveM servers
            </h1>
            <p className="mt-4 text-2xl text-gray-600">
              A powerful, lightweight logging system built specifically for
              FiveM servers with real-time monitoring and advanced analytics.
              Take control of your server's performance today.{' '}
            </p>
          </div>

          <div className="flex flex-row items-start justify-center gap-4">
            <Link href="/sign-up">
              <Button className="rounded-full h-11 w-52 z-50s">
                Get Started
              </Button>
            </Link>
            <Button className="rounded-full h-11 w-52 z-50" variant="secondary">
              <FaPlay className="size-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[600px]">
        <Image
          src="/preview.jpg"
          alt="Hero Image"
          fill
          className="object-cover rounded-2xl border-2 border-stone-300"
        />
      </div>

      <div className="flex flex-col w-full items-center h-fit rounded-2xl px-12 py-4">
        <div className="flex flex-col items-center pt-40 gap-12 text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-8xl font-newake font-bold text-stone-900 tracking-wider">
              From Developers <br />
              for Developers
            </h1>
            <p className="mt-4 text-2xl text-gray-600">
              We understand the challenges of server management because we've
              been there. Our tools are designed with real-world FiveM
              development experience in mind.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-newake font-bold text-stone-900 tracking-wider">
              Features
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center h-fit rounded-2xl px-12 py-4">
        <div className="flex flex-col items-center pt-40 gap-12 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-8xl font-newake font-bold text-stone-900 tracking-wider">
              Trusted by the Goats
            </h1>
            <div className="flex flex-col items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="size-12 rounded-full bg-muted border-2 border-background"
                  ></div>
                ))}
              </div>

              <p className="mt-4 text-2xl text-gray-600">+500 servers</p>
            </div>

            <Button className="rounded-full h-11 w-52">
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
