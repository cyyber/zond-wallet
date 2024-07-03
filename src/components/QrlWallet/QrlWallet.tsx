import { useDevice } from "@/hooks/useDevice";
import { Body } from "@components/Body/Body";
import { Header } from "@components/Header/Header";
import { cva } from "class-variance-authority";

const themeClasses = cva(
  "bg-background relative flex min-h-[48rem] w-96 flex-col overflow-x-hidden",
  {
    variants: {
      isDarkMode: {
        true: ["dark"],
        false: ["light"],
      },
    },
    defaultVariants: {
      isDarkMode: false,
    },
  },
);

export const QRLWallet = () => {
  const { isDarkMode } = useDevice();

  return (
    <div className={themeClasses({ isDarkMode })}>
      <Header />
      <Body />
    </div>
  );
};
