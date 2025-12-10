import type { StaticImageData } from "next/image";
import { landing } from "@/assets";

export interface Service {
  id: number;
  title: string;
  category: string;
  image: string | StaticImageData;
  price: number;
  duration: string;
  revisions: string;
  inQueue: string;
  rate: number;
  reviewsCount: number;
  isActive: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    title: "برمجة و تصميم تطبيق جوال نيتيف",
    category: "برمجة تطبيقات",
    image: landing,
    price: 42000,
    duration: "50 دقيقة \\ يوم",
    revisions: "3 مراحل",
    inQueue: "داخل 3 أيام",
    rate: 4.8,
    reviewsCount: 751,
    isActive: true,
  },
  {
    id: 2,
    title: "برمجة و تصميم تطبيق جوال نيتيف",
    category: "برمجة تطبيقات",
    image: landing,
    price: 42000,
    duration: "50 دقيقة \\ يوم",
    revisions: "3 مراحل",
    inQueue: "داخل 3 أيام",
    rate: 4.8,
    reviewsCount: 751,
    isActive: true,
  },
  {
    id: 3,
    title: "برمجة و تصميم تطبيق جوال نيتيف",
    category: "برمجة تطبيقات",
    image: landing,
    price: 42000,
    duration: "50 دقيقة \\ يوم",
    revisions: "3 مراحل",
    inQueue: "داخل 3 أيام",
    rate: 4.8,
    reviewsCount: 751,
    isActive: true,
  },
  {
    id: 4,
    title: "برمجة و تصميم تطبيق جوال نيتيف",
    category: "برمجة تطبيقات",
    image: landing,
    price: 42000,
    duration: "50 دقيقة \\ يوم",
    revisions: "3 مراحل",
    inQueue: "داخل 3 أيام",
    rate: 4.8,
    reviewsCount: 751,
    isActive: true,
  },
  {
    id: 5,
    title: "برمجة و تصميم تطبيق جوال نيتيف",
    category: "برمجة تطبيقات",
    image: landing,
    price: 42000,
    duration: "50 دقيقة \\ يوم",
    revisions: "3 مراحل",
    inQueue: "داخل 3 أيام",
    rate: 4.8,
    reviewsCount: 751,
    isActive: true,
  },
];
