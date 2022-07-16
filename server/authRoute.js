const router = require("express").Router();
const passport = require("passport");


//  ****************  For Google

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));


router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/failed",
    successRedirect: "http://localhost:3000",
  })
);


//  ****************  For Github

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));


router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login/failed",
    successRedirect: "http://localhost:3000",
  })
);



//  ****************  For Facebook

router.get("/facebook", passport.authenticate("facebook", { scope: ["user:email"] }));


router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login/failed",
    successRedirect: "http://localhost:3000",
  })
);





router.get("/login/failed", (req, res) => {
  return res.status(401).json({ success: false, message: "failure" });
});


router.get("/login/success", (req, res) => {
  if (req.user) {
    return res
      .status(200)
      .json({ success: true, message: "seccessfull", user: req.user });
  }
});


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
});

module.exports = router;
