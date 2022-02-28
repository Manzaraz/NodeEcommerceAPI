const Stripe = require("stripe")(process.env.STRIPE_SECRET);
const router = require("express").Router();

router.post("/payment", (req, res) => {
  Stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) res.status(500).json(stripeErr);
      res.status(200).json(stripeRes);
    }
  );
});

module.exports = router;
