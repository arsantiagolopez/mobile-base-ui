import Image from "next/image";

type UserAvatarProps = {
  className?: string;
};

const UserAvatar = ({ className }: UserAvatarProps) => {
  return (
    <div className={className}>
      <Image
        alt="user avatar"
        src="/assets/images/avatar.svg"
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
};

export default UserAvatar;
