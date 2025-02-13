import { useEffect, useState } from "react";

const useDoctorDetails = () => {
  const [docInfos, setDocInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://doctor-village-client.vercel.app//doctorsDetails")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDocInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return [docInfos, loading];
};

export default useDoctorDetails;
