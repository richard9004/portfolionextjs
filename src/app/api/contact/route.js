import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConn();

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
         console.error("Error:", e); // Print the error message to the consolep
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}