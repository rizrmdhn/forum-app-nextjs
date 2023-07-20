"use client"

import Tags from "./Tags";
import { useRouter } from "next/navigation";
import {
  MdThumbUp,
  MdThumbUpOffAlt,
  MdThumbDown,
  MdOutlineThumbDownOffAlt,
  MdOutlineShare,
} from "react-icons/md";

export default function MobileThreadCard() {
    const router = useRouter();

  return (
    <div className="mobile-thread-card flex flex-col items-start gap-2 px-7 py-3 bg-threadCard rounded-xl">
      <div className="mobile-thread-card__tags">
        <Tags tags="react" />
      </div>
      <div className="mobile-thread-card__title hover:cursor-pointer hover:underline" onClick={()=> router.push('/thread/123')}>
        <h3 className="text-2xl font-bold">Title</h3>
      </div>
      <div className="mobile-thread-card__content w-64 h-11 line-clamp-2 whitespace-normal text-left hyphens-auto">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptatem exercitationem
          quod voluptatibus quas doloribus quidem. Quisquam voluptatum,
          quibusdam, quia, quos voluptates voluptatem exercitationem quod
          voluptatibus quas doloribus quidem.
        </p>
      </div>
      <div className="mobile-thread-card__footer flex flex-col justify-between items-start content-start gap-y-2 flex-wrap w-64 h-auto">
        <div className="mobile-thread-card__footer__action__button flex justify-between items-center w-32">
          <button className="mobile-thread-card__footer__action__button__like flex items-center gap-2">
            <MdThumbUp className="w-6 h-6 text-black" />
            <p>1</p>
          </button>
          <button className="mobile-thread-card__footer__action__button__dislike flex items-center gap-2">
            <MdOutlineThumbDownOffAlt className="w-6 h-6 text-black" />
            <p>1</p>
          </button>
          <button className="mobile-thread-card__footer__action__button__share flex items-center gap-2">
            <MdOutlineShare className="w-6 h-6 text-black" />
            <p>2</p>
          </button>
        </div>
        <div className="mobile-thread-card__footer__description flex flex-row justify-between items-center gap-9">
          <p className="text-xs">116 hari lalu </p>
          <p className="text-xs">
            dibuat oleh <span className="font-bold">AzE</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
