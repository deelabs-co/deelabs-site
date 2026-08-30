import Link from "next/link";
import { en } from "@/content/en";

export default function NotFound() {
  return (
    <div className="wrap band" style={{ textAlign: "center" }}>
      <span className="eyebrow">404</span>
      <h1>{en.notFound.title}</h1>
      <p className="dek" style={{ margin: "0 auto 24px" }}>
        {en.notFound.body}
      </p>
      <Link href="/en" className="btn btn-primary">
        {en.notFound.home}
      </Link>
    </div>
  );
}
