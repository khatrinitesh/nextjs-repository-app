"use client";
import Banner from "@/components/banner";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  const btnBack = () => {
    router.push('/')
  }
  return (
    <div className="mainContent">
      <Banner bannerStyle='text-[red]' title="ErrorPage" desc="Anim commodo qui amet laboris nisi amet consectetur aliqua sit et dolore."/>
      <button onClick={btnBack}>GoBack</button>
    </div>
  )
}

export default ErrorPage
