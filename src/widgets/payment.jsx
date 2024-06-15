import "./about.css";
import {useRef} from "react";


function handlePayment(amount) {
    const method = document.querySelector('md-radio[name="payment"][checked]').value;

    // This code must be on the server.

    // Demo token
    const token_key = "bcb6682d738f27868c8188a7053065e14e6c67fae68bde3528f113cd05ec1781";
    // const url = process.env.REACT_APP_API_URL;
    const url = import.meta.env.VITE_API_URL;

    let payload = {
        amount: amount,
        token_key: token_key,
        method: method
    }
    console.log(payload);

    fetch(`${url}/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.open(`${url}/payments/${data.id}`, '_blank');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}



function Payment({amount}) {
    const dialogRef = useRef(null);

    return (
      <div id="paymentDialog">
          <md-dialog ref={dialogRef}>
              <div slot="headline">
                  Выберите способ оплаты
              </div>
              <form slot="content" id="form-id" method="dialog">
                  <p>Оплата через:</p>
                  <md-radio id="cardRadio" name="payment" value="Card"></md-radio>
                  <label htmlFor="cardRadio">Карта</label>
                    <br/><br/>
                  <md-radio id="qrRadio" name="payment" value="QrCode" checked></md-radio>
                    <label htmlFor="qrRadio">QR</label>
              </form>
              <div slot="actions">
              <md-text-button form="form-id" value="ok" onClick={() => {
                      dialogRef.current.open = false;
                      handlePayment(amount, dialogRef.current.returnValue)
                  }}>Оплатить
                  </md-text-button>
                  <md-text-button form="form-id" value="cancel" onClick={() => dialogRef.current.open = false}>Отмена
                  </md-text-button>
              </div>
          </md-dialog>
      </div>
    );
}

export default Payment;