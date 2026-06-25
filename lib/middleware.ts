import {createSupabaseClient} from "./clientD"
import {NextResponse,NextRequest} from "next/server"
import prisma from "./prisma";
export async function middleware(req:NextRequest){
    const client=createSupabaseClient();

    const tokenn=req.headers.get("authorization");
    if (!tokenn) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }
   const token = tokenn.startsWith("Bearer ")
    ? tokenn.split(" ")[1]
    : tokenn;
  const { data, error } = await client.auth.getUser(token);

  if(error || ! data.user){
    return NextResponse.json({
        error:"Incrrect Inputs"
    },{
        status:403
    })
  }
  const existingUser=await prisma.user.findUnique({
    where:{
      supabaseId:data.user.id,
    }
  })
  if(!existingUser){
    try{
      await prisma.user.create({
        data:{
            id:data.user?.id,
            supabaseId:data.user?.id,
            email:data.user.email ?? "",
            provider:data.user?.app_metadata.provider === "google" ? "Google" ,
            name:data.user?.user_metadata.full_name
        }
    })
    } catch(e){
    }
  }
  return NextResponse.next();
}