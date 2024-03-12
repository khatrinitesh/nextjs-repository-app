"use client"
import Banner from "@/components/banner";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const btnBack = () => {
    router.push("/service")
  }
  
  return (
    <div className="mainContent">
      <Banner bannerStyle='text-[red]' title="Contact" desc="Anim commodo qui amet laboris nisi amet consectetur aliqua sit et dolore."/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}

export default Contact
