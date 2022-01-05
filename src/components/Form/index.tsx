import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import api from '../../service/api';
import {v4 as uuid} from 'uuid';

type SendNotificationProps = {
    classNameForm: string;
    classNameButton: string;
}

interface SendNotificationData {
    title: string;
    message: string;
}

export function Form(props:SendNotificationProps){

    const {register, handleSubmit} = useForm<SendNotificationData>();
    
    const onSubmit = handleSubmit(data => api.post('/send', {
        notification:{
            title:data.title,
            body:data.message
        },
        priority:'high',
        data: {
            id: uuid()
        },
        to:'INSIRA AQUI O TOKEN DE REGISTRO DO APP NO FIREBASE',
        direct_boot_ok:true
    })
        .then(res => window.location.reload())
    );

    return (
        <form 
        onSubmit={onSubmit}
        className={props.classNameForm} 
        >
        <Grid container spacing={2}>
            <Grid item xs={12} sm={false}>
                <TextField
                    id={'title'}
                    label={'Título'}
                    autoComplete={'title'}
                    type={'text'}
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                    {...register('title')}
                />
            </Grid>
            <Grid item xs={12} sm={false}>
                <TextField
                    id={'message'}
                    label={'Mensagem'}
                    autoComplete={'message'}
                    type={'text'}
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                    {...register('message')}
                />
            </Grid>
            </Grid>
        <br/>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={props.classNameButton}
        >
        Enviar
        </Button>
        
    </form>);
}