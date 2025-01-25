import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { SejukinLogo } from "../icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-2">
        <SejukinLogo className="w-8 h-8" />
        <span className="font-serif text-[2rem]">Sejukin</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-700 font-sans">
          👋 Hey, John Doe!
        </span>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            J
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
