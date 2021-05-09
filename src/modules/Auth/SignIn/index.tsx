import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { APP_PAGES } from '../../../constants/pages';
import fire from '../../../firebase';
import { setLoginStatus, setUserData } from '../../App/actions';
import { LoginStatus } from '../../App/constants';
import { getUser, setDataInLocalStorage } from '../helper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserRole } from 'src/constants/roles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(values: any) {
    console.log(values);
    try {
      setLoading(true);
      const loginInfo = await fire
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);
      if (loginInfo && loginInfo.user) {
        const userData = await fire
          .firestore()
          .collection('user')
          .doc(loginInfo.user.uid)
          .get();
        const formattedUser = getUser(userData.data());
        if (formattedUser) {
          dispatch(setUserData(formattedUser));
          dispatch(setLoginStatus(LoginStatus.loggedIn));
          setDataInLocalStorage(formattedUser);
          switch (formattedUser.role) {
            case UserRole.Employee:
              history.push(APP_PAGES.BOOKING_HOME);
              break;
            case UserRole.User:
              history.push(APP_PAGES.PET_HOME);
              break;
            default:
              history.push(APP_PAGES.PET_HOME);
          }
        }
      }
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const initialValues = {
    email,
    password,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required').min(6),
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
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <TextField
            variant="outlined"
            margin="normal"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {!loading && 'Sign In'}
            {loading && 'loading...'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={APP_PAGES.SIGN_UP} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
