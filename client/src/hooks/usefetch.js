import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Initialize as null

  let isMounted = true; // To handle potential race conditions

  useEffect(() => {
    if (isMounted) {
      const fetchData = async () => {
        try {
          await axios
            .get("/api/hotels/countByCity?cities=berlin,madrid,london")
            .then((res) => {
              setData(res.data);
            })
            .catch((err) => console.log(err));

          if (isMounted) {
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
    }

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
