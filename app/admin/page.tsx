import { isAuthed } from "@/lib/auth";
import { getJobs } from "@/lib/jobs";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

export const dynamic = "force-dynamic";
export const metadata = { title: "Studio", robots: { index: false } };

export default async function AdminPage() {
  if (!(await isAuthed())) {
    return <AdminLogin />;
  }
  const jobs = await getJobs();
  return <AdminDashboard jobs={jobs} />;
}
