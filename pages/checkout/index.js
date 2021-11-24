import { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  createTheme,
  ThemeProvider,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { CheckoutCtx, FormWrapper, Hero } from "./styled";
import Head from "components/head";
import theme from "theme";
import { currencyFormatter } from "utilities";
import { useDispatch, useSelector } from "react-redux";
import Button from "components/Button";
import CheckoutItem from "../../components/checkoutItem";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.orange[200],
    },
  },
});

const Checkout = () => {
  const { productsInCart, total } = useSelector((state) => ({
    productsInCart: state.cart.products,
    total: state.cart.total,
  }));

  let vat = Math.round(0.15 * total);
  const shipping = 50;
  let grandTotal = total + shipping + vat;

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = () => {
    if (total === 0) return;

    console.log(state);
  };

  return (
    <ThemeProvider theme={outerTheme}>
      <Head title="Audiophile Ecommerce Website | checkout" />
      <Hero />
      <CheckoutCtx>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <FormWrapper>
                <h3 className="checkout-heading">Checkout</h3>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      mt: "1rem",
                      mb: "1rem",
                    },
                    mb: "5rem",
                  }}
                >
                  <p className="checkout-subheading">billing details</p>
                  <TextField
                    id="name"
                    label="name"
                    sx={{ mr: ".5rem", width: "calc(50% - .5rem)" }}
                    value={state.name}
                    name="name"
                    onChange={onChangeHandler}
                  />
                  <TextField
                    id="email"
                    label="email"
                    sx={{ ml: ".5rem", width: "calc(50% - .5rem)" }}
                    value={state.email}
                    name="email"
                    onChange={onChangeHandler}
                  />
                  <FormControl
                    variant="outlined"
                    sx={{ m: "1rem 0 5rem 0" }}
                    fullWidth
                  >
                    <InputLabel htmlFor="tel">Phone Number</InputLabel>
                    <OutlinedInput
                      id="tel"
                      label="Phone Number"
                      value={state.phone}
                      name="phone"
                      onChange={onChangeHandler}
                    />
                  </FormControl>
                  <p className="checkout-subheading">shipping info</p>
                  <TextField
                    id="outlined-error"
                    label="Address"
                    fullWidth
                    value={state.address}
                    name="address"
                    onChange={onChangeHandler}
                  />
                  <FormControl
                    variant="outlined"
                    sx={{ m: "1rem .5rem 1rem 0", width: "calc(50% - .5rem)" }}
                  >
                    <InputLabel htmlFor="tel">ZIP code</InputLabel>
                    <OutlinedInput
                      id="zip"
                      label="ZIP Code"
                      type="tel"
                      value={state.zip}
                      name="zip"
                      onChange={onChangeHandler}
                    />
                  </FormControl>
                  <TextField
                    id="city"
                    label="City"
                    sx={{ ml: ".5rem", width: "calc(50% - .5rem)" }}
                    value={state.city}
                    name="city"
                    onChange={onChangeHandler}
                  />
                  <TextField
                    id="country"
                    label="Country"
                    sx={{
                      mr: ".5rem",
                      mb: "5rem !important",
                      width: "calc(50% - .5rem)",
                    }}
                    value={state.country}
                    name="country"
                    onChange={onChangeHandler}
                  />
                  <p className="checkout-subheading">Payment details</p>
                  <FormControl
                    component="fieldset"
                    fullWidth
                    sx={{ mb: "3.5rem" }}
                  >
                    <Grid container spacing={2}>
                      <Grid xs={4} item>
                        <FormLabel component="legend">Payment Method</FormLabel>
                      </Grid>
                      <Grid xs={8} item>
                        <RadioGroup
                          value={state.paymentMethod}
                          name="paymentMethod"
                          onChange={onChangeHandler}
                        >
                          <FormControlLabel
                            value="e-money"
                            control={<Radio />}
                            label="e-money"
                          />
                          <FormControlLabel
                            value="cash"
                            control={<Radio />}
                            label="cash"
                          />
                        </RadioGroup>
                      </Grid>
                    </Grid>
                  </FormControl>
                  <span>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </span>
                </Box>
              </FormWrapper>
            </Grid>
            <Grid item md={4} xs={12}>
              <FormWrapper>
                <div className="cart">
                  <div className="header">
                    <h3>summary</h3>
                  </div>
                  <div className="body">
                    {productsInCart.map((product) => (
                      <CheckoutItem
                        value={product.count}
                        src={product.image.mobile}
                        slug={product.slug}
                        price={product.price}
                        key={product.id}
                      />
                    ))}
                    <div style={{ margin: "3.5rem 0" }}>
                      <div className="totals">
                        <p>TOTAL</p>
                        <h6>$ {currencyFormatter(total)}</h6>
                      </div>
                      <div className="totals">
                        <p>SHIPPING</p>
                        <h6>$ {currencyFormatter(shipping)}</h6>
                      </div>
                      <div className="totals">
                        <p>VAT (INCLUDED)</p>
                        <h6>$ {vat}</h6>
                      </div>
                      <div className="totals">
                        <p>GRAND TOTAL</p>
                        <h6 className="totals-grand">
                          $ {currencyFormatter(grandTotal)}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="footer">
                    <Button
                      colorScheme="orange"
                      disabled={total === 0}
                      onClick={onSubmitHandler}
                    >
                      CONTINUE & PAY
                    </Button>
                  </div>
                </div>
              </FormWrapper>
            </Grid>
          </Grid>
        </Box>
      </CheckoutCtx>
    </ThemeProvider>
  );
};

export default Checkout;
