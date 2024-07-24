import { Button } from "@/components/ui/button";
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
    <main className="flex-1 p-2 lg:p-4 bg-gradient-to-bl from-white to-neutral-300 pt-4">
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
      </div>
    </div>
  );
}
