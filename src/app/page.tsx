"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import banner1 from "@/assets/image/banner1.png";
import banner2 from "@/assets/image/banner2.png";
import formbg from "@/assets/image/como2.png";
import washingmachine from "@/assets/image/WashingMachine.png";
import modelshop from "@/assets/image/modelshop.png";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import machince from "../../public/washer.png";
import { TableComponent } from "@/components/Table";
import { useHomeContext } from "@/context/homecontext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Head from "next/head";
import ComoLaundryScreen from "@/components/FranchiseCard";

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const {
    comoVision,
    tableData1,
    tableData3,
    WashingDrumData,
    Rotation_speedData,
    diameterData,
    faqData,
    franchiseData,
  } = useHomeContext();

  const images = [banner1, banner2];

  return (
    <>
      <Head>
        <title>Como Laundry</title>
      </Head>
      <div className="w-full">
        <div className="w-full mb-20">
          <Carousel className="w-full relative" plugins={[plugin.current]}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full md:h-96 lg:h-screen">
                    <Image
                      src={image}
                      alt="Como"
                      fill
                      className="object-fill"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white/30 hover:bg-white/50" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white/30 hover:bg-white/50" />
          </Carousel>
        </div>

        <section className="w-full">
          <div className="flex flex-col items-center justify-center h-96 gap-y-6 px-4 md:px-8 lg:px-16 mb-20">
            <div className="flex items-center">
              <div className="w-1/2">
                <h1 className="text-3xl font-semibold text-center text-[#052968]">
                  MAKE TO BETTER
                </h1>
                <h1 className="text-5xl font-bold text-center text-[#052968] my-5">
                  FUTURE
                </h1>
                <span className="flex text-center text-base md:text-xl lg:text-2xl text-[#052968]">
                  โคโม่ (COMO) มีทั้งหมด 15 สาขา และกำลังขยายเพิ่มเติมอีก 6
                  สาขาทั่วประเทศไทย ทุกสาขาใช้เครื่องซักผ้าจาก Yamamoto
                  แบรนด์เครื่องซักผ้า ซัก-อบ ในเครื่องเดียวที่ดีที่สุดจากญี่ปุ่น
                  โดย COMO เป็นผู้นำเข้าเป็นเจ้าแรกของประเทศไทย
                  เพื่อมุ่งเน้นให้ลูกค้าใช้งานได้อย่างสะดวก สบาย
                  พร้อมทั้งยังการันตีคุณภาพความคงทนที่ช่วยสร้างรายได้ที่มั่นคงให้กับเจ้าของเฟรนไชส์
                </span>
              </div>
              <div className="flex w-1/2 justify-center">
                <Image src={modelshop} alt="Image" width={500} height={500} />
              </div>
            </div>
          </div>
        </section>

        {/* Franchise */}
        <div className="bg-stone-100">
          <div className="w-full flex justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-blue-900 mt-20 mb-10">
              สาขาต่างๆของ Como Laundry
            </h1>
          </div>
          <div className="w-full pt-10 py-32 px-40">
            <Carousel
              className="w-full relative"
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <div className="max-w-full mx-12">
                {" "}
                {/* Add margin space for the arrows */}
                <CarouselContent className="w-full -ml-2">
                  {franchiseData.map((franchise, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/3 flex-shrink-0"
                    >
                      <ComoLaundryScreen machines={[franchise]} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>

              {/* Position arrows outside but still within Carousel component */}
              <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-[5] h-10 w-10" />
              <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-[5] h-10 w-10" />
            </Carousel>
          </div>
        </div>
        {/* Franchise */}

        {/* Washing Machine */}
        <div className="bg-stone-100 flex justify-center items-center">
          <Image
            src={washingmachine}
            alt={`washing machine`}
            className="rounded-t-2xl w-[1300px] pb-20"
          />
        </div>
        {/* Washing Machine */}

        {/* Video */}
        <div className="w-full flex justify-center">
          <video className="w-full" autoPlay loop muted>
            <source src="/video/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video */}

        {/* ComoVision */}
        <div className="bg-como3 w-full h-screen bg-cover bg-center flex items-end">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white backdrop-blur-sm bg-opacity-20 w-full md:h-1/4 items-center">
            {comoVision.map((vision, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-2">
                  {vision.title}
                </h1>
                <span className="text-lg md:text-base lg:text-lg">
                  {vision.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* ComoVision */}

        {/* Table */}
        <section className="w-full py-10">
          <div className="flex flex-col items-center justify-center gap-y-6 px-4 md:px-8 lg:px-16">
            <Image src={machince} alt="machine" width={500} height={500} />
            <h1 className="text-3xl font-bold text-center my-8">
              Washer Model XYZ Specifications
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
            <Accordion type="single" collapsible className="flex flex-col gap-y-4">
              <AccordionItem value="specifications">
                <AccordionTrigger className="rounded-xl border-blue-200 text-blue-900 border-2 p-4 w-full">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center w-full">
                    ดูข้อมูลเครื่องซักผ้า
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                  <TableComponent
                    tableData1={tableData1}
                    tableData3={tableData3}
                    WashingDrumData={WashingDrumData}
                    Rotation_speedData={Rotation_speedData}
                    diameterData={diameterData}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        {/* Table */}

        {/* Form */}
        <section className="w-full py-10 relative">
          <div className="w-full" style={{ height: "800px" }}>
            <Image 
              src={formbg} 
              alt="Form background" 
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl mx-auto w-full px-4"> {/* Reduced max-width from 3xl to 2xl */}
              <div className="flex flex-col gap-y-4 bg-white items-start px-4 md:px-6 lg:px-8 py-8 rounded-xl shadow-lg"> {/* Reduced padding and gap */}
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-900"> {/* Reduced font sizes */}
                  สนใจลงทุนแฟรนไชส์
                </h1>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-900"> {/* Reduced font sizes */}
                  กรอกแบบฟอร์มให้เจ้าหน้าที่ติดต่อกลับ
                </h1>
                
                {/* Form Fields */}
                <div className="w-full space-y-3"> {/* Reduced spacing */}
                  <div>
                    <label className="block text-sm font-medium mb-1">ชื่อผู้ติดต่อ <span className="text-red-600">*</span></label>
                    <input
                      id="contactName"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">หัวข้อในการติดต่อ</label>
                    <input
                      id="topic"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">ช่องทางที่สะดวกให้ติดต่อกลับ</label>
                    <div className="relative">
                      <select 
                        id="contactMethod"
                        className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-8"
                      >
                        <option disabled selected>- เลือก -</option>
                        <option value="phone">โทรศัพท์</option>
                        <option value="email">อีเมล</option>
                        <option value="line">Line</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> {/* Reduced gap */}
                    <div>
                      <label className="block text-sm font-medium mb-1">อีเมล <span className="text-red-600">*</span></label>
                      <input
                        id="email"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">เบอร์โทรศัพท์ <span className="text-red-600">*</span></label>
                      <input
                        id="phoneNumber"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">จังหวัด</label>
                    <input
                      id="province"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Line ID</label>
                    <input
                      id="lineId"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <button 
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-3xl text-base font-medium mt-2"
                  onClick={() => {
                    const formData = {
                      contactName: (document.getElementById('contactName') as HTMLInputElement)?.value,
                      topic: (document.getElementById('topic') as HTMLInputElement)?.value,
                      contactMethod: (document.getElementById('contactMethod') as HTMLSelectElement)?.value,
                      email: (document.getElementById('email') as HTMLInputElement)?.value,
                      phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement)?.value,
                      province: (document.getElementById('province') as HTMLInputElement)?.value,
                      lineId: (document.getElementById('lineId') as HTMLInputElement)?.value
                    };
                    
                    console.log('Form Data:', formData);
                    // Here you would normally send this data to your API
                  }}
                >
                  ส่งข้อความ
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Form */}

        {/* FAQ */}
        <section className="w-full py-10">
          <div className="flex flex-col gap-y-6 justify-center w-full items-center px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-blue-900">
              FAQ
            </h1>
            <div className="w-full md:w-3/4 lg:w-2/4">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-y-4"
              >
                {faqData?.map((faq, index) => (
                  <AccordionItem key={index} value={index.toString()}>
                    <AccordionTrigger className="rounded-xl border-blue-200 text-blue-900 border-2 p-4 w-full">
                      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        {faq.question}
                      </h1>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl md:py-4 lg:py-8">
                      <h1 className="text-blue-900 mb-2 font-semibold w-full">
                        คำตอบ:{" "}
                        <span className="text-black font-medium">
                          {faq.answer}
                        </span>
                      </h1>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        {/* FAQ */}

        <section className="w-full py-10">
          <div className="w-full flex justify-center">
            <Link
              href="/franchise"
              className="rounded-full bg-[#1677ff] text-white p-6 text-2xl md:text-3xl lg:text-4xl"
            >
              สนใจแฟรนไชส์
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
