import { Button } from "@/components/UI/Button";
import { Card } from "@/components/UI/Card";
import { Label } from "@/components/UI/Label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/Tooltip";
import { ROUTES } from "@/router/router";
import { getRandomTailwindTextColor } from "@/utilities/stylingUtil";
import { Send, TextSelect } from "lucide-react";
import { Link } from "react-router-dom";

type TokenListItemProps = {
  icon?: string;
  balance: string;
  name: string;
  symbol: string;
};

const TokenListItem = ({ icon, balance, name, symbol }: TokenListItemProps) => {
  return (
    <Card className="flex h-min w-full animate-appear-in items-center justify-between gap-4 p-4 text-foreground hover:bg-accent">
      <div className="flex items-center gap-4">
        {!!icon ? (
          <img className="h-8 w-8" src={icon} />
        ) : (
          <span className={getRandomTailwindTextColor()}>
            <TextSelect size={32} />
          </span>
        )}
        <div className="flex w-full flex-col gap-1">
          <div className="text-base font-bold">{balance}</div>
          <div className="text-xs">{name}</div>
        </div>
      </div>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link to={ROUTES.ACCOUNT_DETAILS}>
              <Button
                className="hover:text-secondary"
                variant="outline"
                type="button"
                size="icon"
              >
                <Send size="18" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <Label>Send {symbol}</Label>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
};

export default TokenListItem;
