import { CircularProgress } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { APP_PAGES } from "../../../constants/pages";
import { UserRole } from "../../../constants/roles";
import fire from "../../../firebase";
import { setLoginStatus, setUserData } from "../../App/actions";
import { LoginStatus } from "../../App/constants";
import { getUser, setDataInLocalStorage } from "../helper";
import useStyles from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";


const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(values: any) {
    setLoading(true);
    try {
      const createUser = await fire
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
      if (createUser.user) {
        const user = {
          uid: createUser.user.uid,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          role: UserRole.User,
        };
        await fire
          .firestore()
          .collection("user")
          .doc(createUser.user.uid)
          .set(user);
        // await fire.database().ref('user').child(createUser.user.uid).push(user);
        const userData = await fire
          .firestore()
          .collection("user")
          .doc(createUser.user.uid)
          .get();
        const formattedUser = getUser(userData.data());
        if (formattedUser) {
          dispatch(setUserData(formattedUser));
          dispatch(setLoginStatus(LoginStatus.loggedIn));
          setDataInLocalStorage(formattedUser);
          history.push(APP_PAGES.PET_HOME);
        }
      }
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialValues = {
    firstName,
    lastName,
    email,
    password,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required").min(6),
  });
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              <div className="error">
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              <div className="error">
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {!loading && "Sign Up"}
            {loading && "loading..."}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={APP_PAGES.SIGN_IN} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;
