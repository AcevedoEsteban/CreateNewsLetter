"use client"

import { useMyContext } from '@/lib/Context'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import UserHandleCard from './UserHandleCard'
import bannerImg from '../../../public/banner.png'
function TemplateOne() {

    const {
        setCrouLength,
        bgColor,
        setBgColor,
        primaryColor,
        setPrimaryColor,
        myImg,
        bg,
        count,
        setHaveImg, banner, setShowForm
    } = useMyContext()

const [templateData, setTemplateData] = useState ({
    crousal: [
        {
          className: "",
          Title: "Where did you come from?",
        subtitle: `Lorem Ipsum ,Dovember 99, 3024
        . 
         • Lorem Ipsum  
      • Lorem Ipsum is simply dummy text of the printing.
      • Lorem Ipsum  
      • Lorem Ipsum is simply dummy text of the printing.
      • Marriages`,
          description: null,
          banner: false,
          bannerUrl: '',
        },
        {
          className: "",
          Title: "Readings for the week of Dovembery 42, 3000",
          subtitle: `This Weeks Reading `,
          description: `It is a long established fact that a reader will be`,
          banner: true,
          bannerUrl: banner,
        },
        {
          className: "",
          Title: " Office Hours",
          subtitle: ``,
          description: `8:45AM - 5:00PM, Monday - Thursday
Closed Friday and Saturday
9:00AM – 2:00PM Sunday`,
          banner: true,
          bannerUrl: banner,
        },
        {
          className: "",
          Title: "Observances for the week ",
          subtitle: `Dovembery 42, 3000`,
          description: `Sunday:The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
`,
          banner: true,
          bannerUrl: banner,
        },
        {
          className: "",
    
          Title: " Times:",
          subtitle: `Dates and Times`,
          description: ` Dovembery 42, 3000 - 8:45AM - 5:00PM, Monday - Thursday`,
          banner: false,
          bannerUrl: null,
        },
      ],
      arrow: true,
      defaultBg: "#f2ffd5",
      primaryColor: "#000",
})

  useEffect(() => {
    if(count >= 1){
      const len = count - 1
      const handleShow = {
        title:templateData.crousal[len].Title !== null ? true : false, subtitle:templateData.crousal[len]?.subtitle !== null ? true : false, description: templateData.crousal[len]?.description !== null ? true : false
      }
      setShowForm(handleShow)
    }
  }, [count])

  // Function to update the bannerUrl for a specific item
  const updateBannerUrl = (index: number, newUrl: string) => {
   // Create a copy of the templateData
   const updatedTemplateData = { ...templateData };

   // Update the bannerUrl of the specified item
   updatedTemplateData.crousal[index] = {
     ...updatedTemplateData.crousal[index],
     bannerUrl: newUrl ,
   };

   // Update the state with the modified data
   setTemplateData(updatedTemplateData);
  };
// IT WILL RUN WHEN THE USER UPLOAD IMG FOR BANNER
  useEffect(() => {
    if(count !== null){

      const indx = count - 1;
      if (myImg !== templateData.crousal[indx]?.bannerUrl) {
        updateBannerUrl(indx, myImg);
    }
      } 

  }, [myImg]);

const onCrousalLoad = () => {
    setCrouLength(templateData.crousal.length)
    setBgColor(templateData.defaultBg);
    setPrimaryColor(templateData.primaryColor);
}

// OPENING USE-EFFECT 
useEffect(() => {
  setHaveImg(false)
    onCrousalLoad()
},[])

// CUSTOM INDX 
let indxCount = 0


  return (
    <>
    {templateData.crousal.map((val, indx) => {
        indxCount = indxCount + 1;

        return(
            <div
            key={indx}
              id={`slide${indxCount}`}
              className="h-[500px] p-4  block  min-w-[400px] "
              style={
                bg.length > 1
                  ? {
                      backgroundImage: "url(" + bg + ")",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : { backgroundColor: bgColor }
              }
            >
              <div
                className={`p-5 h-full   relative   border-2  rounded-sm flex flex-col items-center justify-between gap-4`}
                style={{ borderColor: primaryColor }}
              >
                <div
                  className="pb-2 border-b-2  w-full"
                  style={{ borderColor: primaryColor }}
                >
                  <UserHandleCard />
                </div>
                <div
                  className="h-full w-full flex justify-center items-center flex-col gap-4 "
                  style={{ color: primaryColor }}
                >
                  <span
                    id={`title${indxCount}`}
                    className={
                      val?.Title !== null
                        ? "text-base text-start font-bold w-full whitespace-pre-wrap"
                        : "hidden"
                    }
                  >
                    {val?.Title}
                  </span>

                  <span
                    id={`subtitle${indxCount}`}
                    className={
                      val.subtitle !== null
                        ? "text-lg text-start font-medium w-full whitespace-pre-wrap"
                        : "hidden"
                    }
                  >
                    {val.subtitle}
                  </span>

                  <span
                    id={`description${indxCount}`}
                    className={
                      val?.description !== null
                        ? "text-xs text-start  w-full whitespace-pre-wrap"
                        : "hidden"
                    }
                  >
                    {val?.description}
                  </span>

                  <div
                    id={`image${indxCount}`}
                    className={
                      val?.banner
                        ? "h-[124px] relative w-full flex justify-start  "
                        : "hidden"
                    }
                  >
                    <Image
                      src={val.bannerUrl || bannerImg}
                      alt="banners"
                      loading="eager"
                      priority
                      id={`slideImg${indxCount}`}
                      width={248}
                      height={124}
                    />
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 right-0 p-2  z-30 text-white`}
                  style={{ backgroundColor: primaryColor }}
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
        )
    })}
     
    </>
  )
}

export default TemplateOne