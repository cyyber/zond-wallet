import { useStore } from "@/stores/store";
import { utils } from "@theqrl/web3";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

type GasFeeNoticeProps = {
  from: string;
  to: string;
  value: number;
};

export const GasFeeNotice = ({ from, to, value }: GasFeeNoticeProps) => {
  const { zondStore } = useStore();
  const { zondInstance } = zondStore;

  const [gasFee, setGasFee] = useState<string>();

  const fetchGasFee = async () => {
    try {
      const calculatedGasFee = await zondInstance?.estimateGas({
        from,
        to,
        value: utils.toWei(value, "ether"),
      });
      setGasFee(calculatedGasFee?.toString());
    } catch (error) {
      setGasFee(`not available. ${error}`);
    }
  };

  useEffect(() => {
    fetchGasFee();
  }, [from, to, value]);

  return (
    <div className="m-1 flex justify-around rounded-lg border border-white px-4 py-2">
      {gasFee ? (
        <div className="w-full overflow-hidden">
          Estimated gas fee is {gasFee?.toString()}
        </div>
      ) : (
        <div className="flex gap-2">
          <Loader className="h-4 w-4 animate-spin" />
          Estimating gas fee
        </div>
      )}
    </div>
  );
};