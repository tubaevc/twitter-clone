import Button from "~/components/button";
import { useState } from "react";

export default function UserCard({ user }) {
  const [following, setFollowing] = useState(false);

  return (
    <button className="py-3 px-4 flex gap-3 transition-colors hover:bg-white/[0.03]">
      <img
        src={user.avatar}
        className="w-10 h-10 rounded-full object-cover"
        alt=""
      />
      <div className="flex-1 max-w-full flex flex-col text-left">
        <div className="text-[15px] text-[color:var(--color-base-secondary)] leading-5 font-bold flex items-center">
          {user.fullName}
        </div>
        <div className="text-[15px] text-[#71767b]">@{user.username}</div>
      </div>
      <div>
        {following ? (
          <Button
            variant="white-outline"
            size="small"
            onClick={() => setFollowing(false)}
            className="whitespace-nowrap group"
          >
            <div className="flex group-hover:hidden">Following</div>
            <div className="hidden group-hover:flex">Unfollow</div>
          </Button>
        ) : (
          <Button
            variant="white"
            size="small"
            onClick={() => setFollowing(true)}
          >
            Follow
          </Button>
        )}
      </div>
    </button>
  );
}
