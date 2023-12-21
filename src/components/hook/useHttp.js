import { useCallback, useEffect, useState } from "react";

const sendHttRequest = async (url, config) => {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "something went wrong. please try again later"
    );
  }
  return resData;
};

const useHttp = (url, config, initialData) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const sendRequest = useCallback(async (data) => {
    setIsLoading(true);
    try {
      const resData = await sendHttRequest(url, {...config, body: data});
      setData(resData);
    } catch (error) {
      setError(error.message || "something went wrong");
    }
    setIsLoading(false); 
  }, [url, config]);
  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);
  return {
    error,
    isLoading,
    data,
    sendRequest
  };
};

export default useHttp;
