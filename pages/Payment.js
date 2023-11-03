'use client'
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
function Payment() {
const {carts} = useSelector((state)=>(state.allCart));

  const Message=()=>{
      setTimeout(toast.success("payment sussesful"),1000)
  }
  
  const [payTotal, setPayTotal] = useState(0);
  const totalPay=()=>{
    let totalPayItem = 0;
    carts.map((ele)=>{
        totalPayItem = ele.qnty * ele.price + totalPayItem;
    })

    setPayTotal(totalPayItem);
}

  useEffect(()=>{
    totalPay();
  },[])

  return (
    <>
      <div class="container-payment">
     <div class="card-container">
    <div class="left">
      <h1 className="text-blue">Your Order</h1>
      <span></span>
       <div className="parent-slide">
        {
        carts.map((element)=>{
          return(
            <>
            <div class="order-items">
            <img src={element.MediaUrl} alt="error image loading"  />
            <div class="item">
            <span>{element.name}</span>
            <span>{element.qnty}</span>
            </div>
            <span class="item-price">{element.qnty*element.price}₹</span>
            </div>

            </>
          )
        })
      }
       </div>
      <div class="total">
        <h2>Total</h2>
        <span class="price">₹{payTotal}</span>
      </div>
    </div>
    <div class="right">
      <h1>Payment</h1>
      <span></span>
      <div class="form-container">
        <form action="https://formspree.io/f/mayzbopy" onsubmit="return false" method = "post">
          <div class="payment-section">
            <label for="payment">Payment Method</label>
            <input type="text" name="payment" id="payment" required />
          </div>
          <div class="input-items flex">
            <div class="marginright">
              <label for="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" required />
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>
          <div class="input-items">
            <label for="cardNumber">Card Number</label>
            <input type="text" name="cardNumber" id="cardNumber" required  />
          </div>
          <div class="input-items flex">
            <div>
              <label for="cardNumber">Expiration Date</label>
              <div class="flex marginright">
                <span class="marginright">
                  <input type="text" name="cardNumber" id="cardNumber" />
                </span>
                <input type="text" name="cardNumber" id="cardNumber" required/>
              </div>
            </div>
            <div>
              <label for="cardNumber">CVV</label>
              <input type="text" name="cardNumber" id="cardNumber" />
            </div>
            <div>
              <label for="cardNumber">Total</label>
              <input type="text" name="cardNumber" id="cardNumber"  />
            </div>
          </div>
          <div class="submit">
            <button onClick={()=>Message()}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Payment
