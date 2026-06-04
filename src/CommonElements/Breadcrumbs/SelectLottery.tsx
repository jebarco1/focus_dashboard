import { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../ReaduxToolkit/Hooks";
import { setSelectedlotterySelect } from "../../ReaduxToolkit/Reducer/lotterySelectSlice";
import { fetchLatestNews } from "../../ReaduxToolkit/Reducer/getLastestNew";
import { dynamicImage } from "../../Service";

// Card Props
interface LotteryProps {
  name: string;
  imagePath: string;
  lastNumbers: string;
  jackpot: string;
  nextDraw: string;
  setName: string;
  onSelect: (lotteryName: string) => void;
  isSelected: boolean;
}

const LotteryCard = ({
  name,
  setName,
  imagePath,
  lastNumbers,
  jackpot,
  nextDraw,
  onSelect,
  isSelected,
}: LotteryProps) => {
  return (
    <Card
      className="lottery-card"
      onClick={() => onSelect(setName)}
      style={{
        backgroundColor: isSelected ? "#f0f0f0" : "#333333",
        color: isSelected ? "#000" : "#fff",
        cursor: "pointer",
      }}
    >
      <CardBody className="text-center">
        <img
          src={dynamicImage(imagePath)}
          alt={name}
          style={{ width: "220px", height: "auto", margin: "20px auto", display: "block" }}
        />
        <p className="last-numbers">Last Numbers: {lastNumbers}</p>
        <p className="jackpot">Jackpot: {jackpot}</p>
        <p className="next-draw">Next Draw: {nextDraw}</p>
      </CardBody>
    </Card>
  );
};

const SelectLottery = () => {
  const dispatch = useAppDispatch();
  const selectedLottery = useAppSelector((state) => state.lotterySelect.value);
  const { mega, powerball } = useAppSelector((state) => state.lastDrawings);
  const [loading, setLoading] = useState(false);

  console.log(useAppSelector((state) => state.lastDrawings));

  const handleSelect = (target: string) => {
    dispatch(setSelectedlotterySelect(target));
  };

  const handleLoad = async () => {
    if (!selectedLottery) return;

    setLoading(true);
    try {
      await dispatch(setSelectedlotterySelect(selectedLottery));
      await dispatch(fetchLatestNews());
      window.location.reload();
    } catch (error) {
      console.error("Error selecting lottery:", error);
    } finally {
      setLoading(false);
    }
  };

  const lotteries = [];

  if (powerball) {
    lotteries.push({
      name: "Powerball",
      imagePath: "logo/powerball-logo.png",
      lastNumbers: powerball.numbers.replace(/,/g, " - "),
      jackpot: `$${Number(powerball.jackpot).toLocaleString()}`,
      nextDraw: new Date(`${powerball.nextdrawing}T00:00:00`).toLocaleDateString(),
      setName: "Powerball",
    });
  }

  if (mega) {
    lotteries.push({
      name: "Mega Millions",
      imagePath: "logo/megamillions-logo.png",
      lastNumbers: mega.numbers.replace(/,/g, " - "),
      jackpot: `$${Number(mega.jackpot).toLocaleString()}`,
      nextDraw: new Date(`${mega.nextdrawing}T00:00:00`).toLocaleDateString(),
      setName: "mega",
    });

  }

  return (
    <div className="lottery-selection text-center">
      {lotteries.map((lotteryItem, index) => (
        <LotteryCard
          key={index}
          {...lotteryItem}
          onSelect={handleSelect}
          isSelected={selectedLottery === lotteryItem.setName}
        />
      ))}

      {selectedLottery && (
        <Button
          color="warning"
          className="mt-4"
          onClick={handleLoad}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load"}
        </Button>
      )}
    </div>
  );
};

export default SelectLottery;
