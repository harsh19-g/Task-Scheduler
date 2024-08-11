import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");
  
  //todo date and time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    //clean up function h useEffect by default deta h
    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time">{dateTime}</h2>;
};
