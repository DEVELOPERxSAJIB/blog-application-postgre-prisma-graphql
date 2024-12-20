import { UploadImage } from "@/lib/upload-image";
import { NextResponse } from "next/server";


export const POST = async (req:NextResponse) => {
    const formData = await req.formData();

    const image = formData.get("image") as unknown as File

    UploadImage(image, "nextjsImageGallery")

    return NextResponse.json({ msg : image }, {
        status : 200,

    })
}