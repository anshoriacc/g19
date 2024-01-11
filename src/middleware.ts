// export { auth as middleware } from "./auth";

import { auth } from "./auth";

const authRoutes = ["/login"];
const protectedRoutes = ["/dashboard"];
const apiAuthPrefix = "/api/auth";

export default auth(req => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.some(prefix =>
    req.nextUrl.pathname.startsWith(prefix),
  );
  const isProtectedRoute = protectedRoutes.some(prefix =>
    req.nextUrl.pathname.startsWith(prefix),
  );

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return null;
  }

  if (isProtectedRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/login", nextUrl));
    }
    return null;
  }

  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};
