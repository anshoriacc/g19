"use client";

import Link from "next/link";
import { Hourglass, KeySquare, LifeBuoy, Users } from "lucide-react";

import { Card, CardContent } from "../ui/card";
import { delimiterFormatter } from "@/lib/utils";
import { TCarter, TTour, TVehicle } from "@/data/product";

type Props = {
  type: "rental" | "tour" | "carter";
  vehicle?: TVehicle;
  tour?: TTour;
  carter?: TCarter;
};

export const ProductCard = ({ type, vehicle, tour, carter }: Props) => {
  return (
    <Link
      href={`/${type}/${vehicle?.id ?? tour?.id ?? carter?.id ?? ""}`}
      className="self-start">
      <Card className="group w-full max-w-[270px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5">
        <img
          src={
            vehicle?.vehicleImages[0]?.imageUrl ??
            tour?.tourImages[0]?.imageUrl ??
            carter?.carterImages[0]?.imageUrl ??
            "/assets/fallback.webp"
          }
          alt={`${vehicle?.name ?? tour?.name ?? carter?.name} image`}
          loading="lazy"
          className="aspect-[1] w-full animate-reveal bg-neutral-100 object-cover dark:bg-neutral-850"
          onError={e => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = "/assets/fallback.webp";
          }}
        />

        <CardContent className="space-y-2 p-4">
          <h3 className="line-clamp-2 text-ellipsis text-lg font-bold transition-all duration-300">
            {vehicle?.name ?? tour?.name ?? carter?.name}
          </h3>

          <ul className="uppercase text-neutral-500">
            <li className="flex items-center gap-1">
              <Users size={18} />
              {vehicle?.capacity ?? tour?.capacity ?? carter?.capacity} orang
            </li>

            {type === "rental" && (
              <>
                <li className="flex items-center gap-1">
                  <KeySquare size={18} />
                  {vehicle?.isDriverMandatory ? "WAJIB DRIVER" : "LEPAS KUNCI"}
                </li>

                <li className="flex items-center gap-1">
                  <LifeBuoy size={18} />
                  {vehicle?.transmission ? "WAJIB DRIVER" : "LEPAS KUNCI"}
                </li>
              </>
            )}

            {type === "tour" && (
              <>
                <li className="flex items-center gap-1">
                  <Hourglass size={18} />
                  {tour?.duration}
                  hari
                </li>
              </>
            )}
          </ul>

          <h4 className="line-clamp-1 text-ellipsis">
            <span className="text-xl font-bold text-accent-dark dark:text-accent-light">
              Rp.{" "}
              {delimiterFormatter(
                vehicle?.price ?? tour?.price ?? carter?.price ?? 0,
              )}
            </span>

            {type === "rental" && (
              <span className="text-neutral-500"> /hari</span>
            )}
          </h4>
        </CardContent>
      </Card>
    </Link>
  );
};
