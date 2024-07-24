import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store PDF Documents",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero deserunt impedit asperiores corporis maiores iste ipsam delectus laborum dolorem minus at unde labore quam vel, provident aliquid ab accusantium.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing fast response",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero deserunt impedit asperiores corporis maiores iste ipsam delectus laborum dolorem minus at unde labore quam vel, provident aliquid ab accusantium.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero deserunt impedit asperiores corporis maiores iste ipsam delectus laborum dolorem minus at unde labore quam vel, provident aliquid ab accusantium.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero deserunt impedit asperiores corporis maiores iste ipsam delectus laborum dolorem minus at unde labore quam vel, provident aliquid ab accusantium.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero deserunt impedit asperiores corporis maiores iste ipsam delectus laborum dolorem minus at unde labore quam vel, provident aliquid ab accusantium.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero deserunt impedit asperiores corporis maiores iste ipsam delectus laborum dolorem minus at unde labore quam vel, provident aliquid ab accusantium.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-y-scroll p-2 lg:p-4 bg-gradient-to-bl from-white to-neutral-300 pt-4">
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <div className="px-4 bg-white rounded-md drop-shadow-xl py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-500">
            Your Interactive Document Companion
          </h2>
          <p className="mt-2 text-3xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Transform your PDFs into Interactive Conversations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing
            <span className="font-bold text-green-500 ml-2">Chat with PDF</span>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            cupiditate modi animi aliquam temporibus nesciunt similique nisi
            nam, perferendis velit iste debitis minus quia magnam minima odio
            accusantium sunt sit.
          </p>
          <Button asChild className="mt-10">
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-autp max-w-7xl px-6 lg:px-8">
            <Image src={"https://i.imgur.com/VciRSTI.jpeg"} alt="hero" width={2432} height={1442} className="mb-[-0%] rounded-lg shadow-2xl  ring-1 ring-gray-900/10" />
            <div aria-label="true" className="relative">
              <div className="bottom-0 absolute -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        <Features />
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="lg:mt-20 mt-14 mx-auto grid max-2-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
      {features.map((feature) => (
        <Card key={feature.name}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <feature.icon aria-label="trues" className="w-5 h-5 text-green-500" />
              {feature.name}
            </CardTitle>
            <CardDescription>
              {feature.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}