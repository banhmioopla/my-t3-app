import { authMiddleware  } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export default authMiddleware();

export const config = { matcher: ['/((?!.*\\.).*)'] };