export async function GET() {
    return Response.json({
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "Not Loaded",
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || "Not Loaded",
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "Not Loaded",
    });
  }  