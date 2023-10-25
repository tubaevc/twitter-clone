import { Popover } from "@headlessui/react";
import { useAccount } from "../../../store/auth/hooks";
export default function Account() {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center text-left outline-none">
          <img src={account.avatar} className="w-10 h-10 rounded-full" />
          <div className="mx-3 text-[15px]">
            <div className="font-bold">{account.fullName}</div>
            <div className="text-[#71767b]">@{account.username}</div>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="text-[#e7e9ea] ml-auto"
            width={18.75}
          >
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>

        <Popover.Panel>açılacak yer</Popover.Panel>
      </Popover>
    </div>
  );
}
