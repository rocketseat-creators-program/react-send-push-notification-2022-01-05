import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SendToMobile from '@material-ui/icons/SendOutlined';

type HeaderProps = {
    classname: string;
    title: string;
}

export function Header(props:HeaderProps){
    return(
        <>
        <Avatar className={props.classname}>
            <SendToMobile /> 
        </Avatar>
        <Typography component="h1" variant="h5">
            {props.title}
        </Typography>
    </>
)
}