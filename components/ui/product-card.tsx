"use client";

import { Product } from "@/types";
import Image from "next/image";
import { IconButton } from "./IconButton";
import { ExpandIcon, ShoppingCart } from "lucide-react";
import { Currency } from "./Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

export const ProductCard = ({ data }: ProductCardProps) => {
  const cart = useCart();
  const router = useRouter();
  const previewModal = usePreviewModal();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* images and actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          fill
          src={data?.images?.[0]?.url}
          alt="image"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<ExpandIcon size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
