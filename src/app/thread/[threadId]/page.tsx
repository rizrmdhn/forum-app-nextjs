import Image from "next/image";
import Link from "next/link";
import {
  MdThumbUp,
  MdThumbUpOffAlt,
  MdThumbDown,
  MdOutlineThumbDownOffAlt,
  MdOutlineModeComment,
} from "react-icons/md";

export default function DetailThread() {
  return (
    <div className="detail-thread-page flex h-defaultMobileHeight w-screen flex-col items-start gap-3 bg-light px-7 py-3">
      <div className="detail-thread-tags__list">
        <div className="detail-thread-tags__item flex w-fit justify-start gap-3 rounded bg-white p-1">
          <p className="tags text-sm font-normal text-black"># react</p>
        </div>
      </div>
      <div className="detail-thread__content">
        <p className="text-sm font-normal text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, voluptates, quia voluptate quod quos
          voluptatibus quas quidem quibusdam, voluptates, quia voluptate quod
          quos voluptatibus quas quidem.
        </p>
      </div>
      <div className="detail-thread__action-button flex w-fit flex-row items-center justify-between">
        <button className="detail-thread__action-button__like flex w-fit items-center gap-2 rounded bg-light p-1">
          <MdThumbUpOffAlt className="h-5 w-5 text-black" />
          <p className="text-sm font-normal text-black">100</p>
        </button>
        <button className="detail-thread__action-button__dislike flex w-fit items-center gap-2 rounded bg-light p-1">
          <MdOutlineThumbDownOffAlt className="h-5 w-5 text-black" />
          <p className="text-sm font-normal text-black">100</p>
        </button>
        <button className="detail-thread__action-button__share flex w-fit items-center gap-2 rounded bg-light p-1">
          <MdOutlineModeComment className="h-5 w-5 text-black" />
          <p className="text-sm font-normal text-black">100</p>
        </button>
      </div>
      <div className="detail-thread_description flex items-center justify-end gap-8">
        <p className="text-sm font-normal text-black">116 Hari yang lalu</p>
        <p className="text-sm font-normal text-black">
          Dibuat Oleh <span className="font-bold">AzE</span>
        </p>
      </div>
      <div className="detail-thread__comment-container mt-4 w-full">
        <div className="detail-thread__comment-container__header flex items-center justify-between gap-8">
          <p className="text-sm font-bold">Beri komentar</p>
        </div>
        <div className="detail-thread__comment-container__input mt-3 flex items-center justify-between gap-8">
          <p className="text-xs text-black">
            <Link href={"/login"} className="underline hover:font-bold">
              Login
            </Link>{" "}
            untuk memberi komentar
          </p>
        </div>
        <div className="detail-thread__comment-container mt-5">
          <p className="text-sm font-bold">Komentar (1)</p>
        </div>
        <div className="detail-thread__comment-container__list mt-4 w-full">
          <div className="detail-thread__comment-container__list__item flex flex-col items-start gap-4">
            <div className="detail-thread__comment-container__list__item__user flex w-full items-center justify-between">
              <div
                className="detail-thread__comment-container__list__item__user__detail
              flex w-fit flex-row"
              >
                <div className="detail-thread__comment-container__list__item__user__avatar mr-5 flex items-center">
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="https://ui-avatars.com/api/?name=AzE&length=2&background=random&size=128"
                    alt="avatar"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="detail-thread__comment-container__list__item__user__name flex items-center">
                  <p className="text-sm font-bold">AzE</p>
                </div>
              </div>
              <div className="detail-thread__comment-container__list__item__user__posted flex items-center">
                <p className="text-xs font-normal text-black opacity-50">
                  116 Hari yang lalu
                </p>
              </div>
            </div>
            <div className="detail-thread__comment-container__list__item__content flex w-full items-center justify-between">
              <p className="text-sm font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, voluptates, quia voluptate quod
                quos voluptatibus quas quidem quibusdam, voluptates, quia
                voluptate quod quos voluptatibus quas quidem.
              </p>
            </div>
            <div className="detail-thread__comment-container__list__item__action flex items-center gap-4">
              <button className="detail-thread__comment-container__list__item__action__like flex w-fit items-center gap-2 rounded bg-light p-1">
                <MdThumbUp className="h-5 w-5 text-black" />
                <p className="text-sm font-normal text-black">100</p>
              </button>
              <button className="detail-thread__comment-container__list__item__action__dislike flex w-fit items-start gap-2 rounded bg-light p-1">
                <MdThumbDown className="h-5 w-5 text-black" />
                <p className="text-sm font-normal text-black">100</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
