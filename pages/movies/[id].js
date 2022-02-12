import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log('router: ', router);
  return (
    <div className="content">
      <h4>{router.query.title || "Liading..."}</h4>
    </div>
  );
}  