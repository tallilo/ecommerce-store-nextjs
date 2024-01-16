import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
export const revalidate = 0;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-cache" });
  return res.json();
};

export default getBillboard;
