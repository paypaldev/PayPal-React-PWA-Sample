import React, { useEffect, useState } from 'react';
import './Items.css';
import Item from './Item';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Items = () => {
    const [shoes, setShoes] = useState([]);
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);

    useEffect(() => {
        const apiURL= "https://store-api-a7c49-default-rtdb.firebaseio.com/shoes.json"

        // fetch fresh data
        fetch(apiURL).then((response)=> {
            return response.json();
        }).then((data)=> {
            setShoes(data);
        });
    }, []);

    const onCurrencyChange = ({ target: { value } }) => {
      setCurrency(value);
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: value,
          },
      });
  }

  const onCreateOrder = (data,actions) => {
      return actions.order.create({
          purchase_units: [
              {
                  amount: {
                      value: "8.99",
                  },
              },
          ],
      });
  }

  const onApproveOrder = (data,actions) => {
      return actions.order.capture().then((details) => {
          const name = details.payer.name.given_name;
          alert(`Transaction completed by ${name}`);
      });
  }

  if(shoes) {
    return (
        <div className="grid-items">
            {shoes.map(shoe=><Item key={shoe.name} {...shoe} />)}
            <PayPalButtons 
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
        </div>
      );
  } else {
    return (<p>LOADING...</p>)
  }
  
}

export default Items;
