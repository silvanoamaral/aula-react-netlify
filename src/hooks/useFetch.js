import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(response => {
      setTimeout(() => {
        setLoading(false);
        setData(response)
      }, 1000)
    })
    .catch(error => {
      console.log('Error:.', error)
      setError(true);
    })
  }, [url]);

  return [
    loading,
    data,
    error
  ]
}

