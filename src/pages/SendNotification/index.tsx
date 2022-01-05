import Container from '@material-ui/core/Container';
import {useStyles} from './style'
import {Header} from '../../components/Header';
import {Form} from '../../components/Form';

export function SendNotification(){

    const classes = useStyles();

    return (
        <Container 
            component="main" 
            maxWidth="xs" 
            className={classes.paper}
        >
        <Header 
          classname={classes.avatar}
          title="Send Notification"
        />
        <Form 
          classNameForm={classes.form}
          classNameButton={classes.submit}
        />
    </Container>
    );
}