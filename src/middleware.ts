import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
const protectedRoutes = ['/content']
const publicRoutes = ['/login', '/']
 
export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  const cookie: string | undefined = cookies().get('userDetail')?.value;
  const session  = cookie && JSON.parse(cookie);
  if (isProtectedRoute && !session?.userName && !session?.jobTitle) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    session &&
    !req.nextUrl.pathname.startsWith('/content')
  ) {
    return NextResponse.redirect(new URL('/content', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}