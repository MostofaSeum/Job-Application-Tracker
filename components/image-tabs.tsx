"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function ImageTabs() {
      const [activeTab, setActiveTab] = useState("organize");
      return(
    <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/*Tabs*/}
              <div className="flex gap-2 justify-center mb-8">
                <Button
                  onClick={() => setActiveTab("organize")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors 
                    ${activeTab === "organize" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
                  variant={"default"}
                >
                  Organize Applications
                </Button>
                <Button
                  onClick={() => setActiveTab("get-hired")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors 
                    ${activeTab === "get-hired" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
                  variant={"default"}
                >
                  Get Hired
                </Button>
                <Button
                  onClick={() => setActiveTab("manage-boards")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors 
                    ${activeTab === "manage-boards" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
                  variant={"default"}
                >
                  Manage Boards
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && (
                  <Image
                    src="/hero-images/hero1.png"
                    alt={"hero-image"}
                    width={1200}
                    height={800}
                  ></Image>
                )}
                {activeTab === "get-hired" && (
                  <Image
                    src="/hero-images/hero2.png"
                    alt={"hero-image"}
                    width={1200}
                    height={800}
                  ></Image>
                )}
                {activeTab === "manage-boards" && (
                  <Image
                    src="/hero-images/hero3.png"
                    alt={"hero-image"}
                    width={1200}
                    height={800}
                  ></Image>
                )}
              </div>
            </div>
          </div>
        </section>
      )
}