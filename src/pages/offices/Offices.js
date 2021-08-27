import OfficeItem from "../../components/office-item/OfficeItem";
import { getProducts } from "../../firebase/firebase.utils";
import { useEffect, useState } from "react";

const Offices = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    const fetchOffices = async () => {
      const data = await getProducts();
      setOffices(...offices, data);
    };
    fetchOffices();
  }, []);

  if (offices.length === 0) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {offices
        .filter((el, index) => index < 2)
        .map((office) => (
          <OfficeItem key={office.name} office={office} />
        ))}
    </div>
  );
};

export default Offices;


