import { useEffect, useRef } from "react";
import DateFormatter from "../utils/DateFormatter";

export default function Clock() {
  const timeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRef.current) {
        timeRef.current.textContent = `${today} ${new Date().toLocaleTimeString()}`;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const today = DateFormatter(new Date(), true);

  return (
    <span
      className="text-xl font-semibold"
      ref={timeRef}
    >{`${today} ${new Date().toLocaleTimeString()}`}</span>
  );
}
