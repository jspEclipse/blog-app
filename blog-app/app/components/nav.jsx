import Link from "next/link";

export default function Navigation() {
    return(
      <nav className="space-x-5 bg-white p-5">
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
        <Link href="/view">View</Link>
      </nav>
    );
  }