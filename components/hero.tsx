import { Separator } from "@radix-ui/react-dropdown-menu";
import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
    Landing Page
    <Separator/>
     - Join a league and register your team <br></br>
     - Register as a ref and get paid
    </div>
  );
}
