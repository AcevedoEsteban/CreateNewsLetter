'use client'
import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageCrop from '../HomeBoxComponent/ImageCrop';
import { useMyContext } from '@/lib/Context';

function UploadImgBtn() {
  const { userImg, setUserImg } = useMyContext();
  const portfolioLogo = '/portfolioLogo.png'; // URL relative to the public directory

  return (
    <div className="flex flex-row justify-around items-center w-full">
      <Avatar>
        <AvatarImage src={userImg} alt="@shadcn" />
        <AvatarFallback> {/* Your fallback content here */} </AvatarFallback>
      </Avatar>
      <div className="relative">
        <ImageCrop setFor='userImg' />
      </div>
      <div className="p-1 rounded-md hover:bg-gray-50">
    <Trash2 className="h-6 w-6 text-red-500 cursor-pointer" onClick={() => setUserImg(portfolioLogo)} />
      </div>
    </div>
  );
}

export default UploadImgBtn;
