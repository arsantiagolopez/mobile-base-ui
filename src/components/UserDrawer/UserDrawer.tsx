import { Drawer } from "vaul";
import UserAvatar from "./UserAvatar";
import { IconX } from "@tabler/icons-react";

type UserDrawerProps = {};

const UserDrawer = ({}: UserDrawerProps) => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger>
        <UserAvatar className="w-8" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="z-40 fixed inset-0 bg-black/30" />
        <Drawer.Content className="z-50 bg-primary flex flex-col rounded-t-xl fixed bottom-0 left-0 right-0 h-[98dvh]">
          <div className="p-4 bg-primiary rounded-t-[10px] flex-1">
            <Drawer.Close>
              <IconX size={26} color="white" />
            </Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default UserDrawer;
