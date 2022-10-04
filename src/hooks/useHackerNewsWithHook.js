import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsWithHook(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(initialUrl);
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setTimeout(() => {
        if (isMounted.current) {
          setData(response.data || []);
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happened: ${error}`);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return { data, loading, errorMessage, setUrl };
}
