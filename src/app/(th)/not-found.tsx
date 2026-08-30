import Link from "next/link";
import { th } from "@/content/th";

export default function NotFound() {
  return (
    <div className="wrap band" style={{ textAlign: "center" }}>
      <span className="eyebrow">404</span>
      <h1>{th.notFound.title}</h1>
      <p className="dek" style={{ margin: "0 auto 24px" }}>
        {th.notFound.body}
      </p>
      <Link href="/" className="btn btn-primary">
        {th.notFound.home}
      </Link>
    </div>
  );
}
