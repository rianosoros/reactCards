import { useState } from "react";
import axios from "axios";

// AJAX requests using Axios w/ dynamic URLs
function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const fetchData = async (restUrl) => {
    try {
      const response = await axios.get(baseUrl + restUrl);
      setData(prevData => [...prevData, { ...response.data }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, fetchData];
}

// flipping cards
function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };

  return [isFacingUp, flipCard];
}

export { useAxios, useFlip }; 
