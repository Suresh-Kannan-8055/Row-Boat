import React from "react";
import "./order.css";
import TablerCaller from "./TableCaller";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
function Order() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="order-container">
        <div className="order-right">
          <div className="order-center">
            <div className="order-title">Shopping Cart.</div>
            <div className="order-table">
              <TablerCaller></TablerCaller>
            </div>
            <div className="order-bill">
              <div className="order-continue">
                <ArrowBackIosIcon style={{ fontSize: "18px" }} />
                Continue Shopping
              </div>
              <div className="order-bill-generate">
                <div className="subtotal">
                  <div className="valuetitle">Sub Total</div>
                  <div className="value">0.00</div>
                </div>
                <div
                  className="subtotal"
                  style={{ borderBottom: "1px solid black" }}
                >
                  <div className="valuetitle">Shipping</div>
                  <div className="value">0.00</div>
                </div>
                <div className="Total">
                  {" "}
                  <div className="valuetitle" style={{  fontWeight: "600",
fontSize: "16px"}}>Total</div>
                  <div className="value">0.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-left">
          <div className="order-center" style={{ width: "95%" }}>
            <div className="order-title">Payment Info.</div>
            <div
              className="order-table"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="pay-type">
                <div className="paytitle">Payment method</div>
                <div className="payment">
                  <input type="radio" name="payment"></input><CreditCardIcon></CreditCardIcon>  Credit Card
                </div>
                <div className="payment">
                  <input type="radio" name="payment"></input><CurrencyBitcoinIcon></CurrencyBitcoinIcon>Debit card
                </div>
              </div>
              <div className="nameoncard">
                <div className="nametile">Name of the card</div>
                <div className="nametile" style={{fontWeight:"600"}}>John Carter</div>
              </div>
              <div className="cartnumber">
                <div className="nametile">Card Number</div>
                <div className="nametile" style={{fontWeight:"600"}}>**** ***** **** 8907</div>
              </div>
              <div className="expiratedate">
                <div className="expirydate">
                  <div>Expiration Date</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "50%",
                        paddingTop:"7px"
                      }}
                    >
                      05 <ExpandMoreIcon></ExpandMoreIcon>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "50%",
                        paddingTop:"7px"
                      }}
                    >
                      05 <ExpandMoreIcon></ExpandMoreIcon>
                    </div>
                  </div>
                </div>
                <div className="expirydate">
                  <div>CVV:</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop:"7px"
                    }}
                  >
                    05 <ExpandMoreIcon></ExpandMoreIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-bill">
              <div
                style={{
                  width: "60%",
                  height: "45%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  backgroundColor: "blue",
                  color:"white"
                }}
              >
                Check Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
