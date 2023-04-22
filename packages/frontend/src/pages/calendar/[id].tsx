import { useRouter } from "next/router";

export default function Cal() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
}
