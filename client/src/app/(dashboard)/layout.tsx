"use client";

import AppSidebar from "@/components/AppSidebar";
import Loading from "@/components/Loading";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ChaptersSidebar from "./user/courses/[courseId]/ChaptersSidebar";
import NavBar from "@/components/ui/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [coursId, setCourseId] = useState<string | null>(null);
  const { user, isLoaded } = useUser();

  if (isLoaded) return <Loading />;
  if (!user) return <div>Please sign in to access this page.</div>;

  const isCoursePage = /^\/user\/courses\/[^\/]+(?:\/chapters\/[^\/]+)?$/.test(
    pathname
  );

  useEffect(() => {
    if (isCoursePage) {
      const match = pathname.match(/\/user\/courses\/([^\/]+)/);
      setCourseId(match ? match[1] : null);
    } else {
      setCourseId(null);
    }
  }, [isCoursePage, pathname]);

  return (
    <SidebarProvider>
      <div className="dashboard">
        <AppSidebar />
        {/* sidebar will go here */}
        <div className="dashboard__content">
          {coursId && <ChaptersSidebar />}
          <div
            className={cn(
              "dashboard__main",
              isCoursePage && "dashboard__main--not-course"
            )}
            style={{ height: "100vh" }}
          >
            <NavBar isCoursePage={isCoursePage} />
            <main className="dashboard__body">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
