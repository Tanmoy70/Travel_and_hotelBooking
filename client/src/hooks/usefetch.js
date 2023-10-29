import { useEffect, useState } from "react";
// import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]); // Initialize as null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Initialize as null

  useEffect(() => {
    let isMounted = true; // To handle potential race conditions

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london",
          { method: "GET", mode: "cors", "Content-Type": "application/json" }
        )
          .then((res) => res.json())
          .then((resdata) => setData(resdata))
          .catch((err) => console.log(err));
        if (isMounted) {
          setData(res.data);
          setError(null); // Reset error state on success
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to handle unmounting
    return () => {
      isMounted = false;
    };
  }, []);

  const reFetch = () => {
    fetchData(); // Reuse the fetchData function defined in useEffect
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
