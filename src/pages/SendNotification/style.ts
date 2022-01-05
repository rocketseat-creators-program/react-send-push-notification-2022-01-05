import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(2),
      backgroundColor: theme.palette.success.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(5),
    },
    submit: {
      margin: theme.spacing(2, 0, 1),
    },
    table: {
      minWidth: 900,
    },
    title: {
      marginBottom: 20
    }
  }));