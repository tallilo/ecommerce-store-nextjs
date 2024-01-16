import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
export const revalidate = 0;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { cache: "no-cache" });
  return res.json();
};

export default getColors;
