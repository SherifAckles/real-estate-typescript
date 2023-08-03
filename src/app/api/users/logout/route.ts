//to clear the token we have

import { NextResponse } from "next/server";

export async function GET() {
  try {
    //create a response for removing the token
    const res = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    //empty the token to '', and set the expire date to immediately
    //httpOnly:mitigate the risk of client side script accessing the protected cookie
    res.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
      return res
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
