import {NextResponse,NextRequest} from "next/server";
import prisma from "@/lib/prisma";
import {createClient} from "@/lib/client"
const supabase=createClient();
export async function POST(req:NextRequest){
    try{
        const supabase=await createClient();
        const{
            data:{user},
            error,
        }=await supabase.auth.getUser();
        if(error || !user){
            return NextResponse.json(
                {error:"unauthorized"},
                {status:411}
            )
        }
        const body=await req.json();
        const {name,meta,url}=body;
        const platform=await prisma.platform.create({
            data:{
                userId:user.id,
                meta,
                Pname:name,
                Purl:url,
                isConnected:true
            }
        })
        return NextResponse.json({
            message:"success"
        },
        {status:201}
    );
} catch(error){
    return NextResponse.json({
        error:"Failed to create platform"
    },{
        status:500
    }
)
} }