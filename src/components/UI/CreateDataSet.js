import React from "react"
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Test from "./Test";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {useForm,Controller} from "react-hook-form";
import Divider from '@mui/material/Divider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:1,
    boxShadow: 24,
    p: 3,
};
export default function CreateDataSet() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {register, handleSubmit, formState:{errors},control}=useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors)



    return (
        <div>
            <Test handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3"  style={{textAlign:"center"}} >
                        Create DataSet
                    </Typography>
                    <Divider/>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField {...register("DataSetName",{required:"This Filed is required only once"})}  id="filled-basic" label="DataSetName" variant="filled" />
                        {errors.DataSetName && <Typography style={{color:"red"}}>This field is required</Typography>}

                        <TextField {...register("description")} id="filled-basic" label="Description" multiline rows={6} variant="filled" />
                        <Controller
                            control={control}
                            name="id"
                            defaultValue=""
                            render={({ field: { onChange, onBlur, value, ref }, fieldState:{error} }) => (
                                <TextField  onChange={onChange} onBlur={onBlur} value={value} error={!!error} id="filled-basic" label="ID"  variant="filled" helperText={error? `Can enter only ${error.maxLength}`:null} />

                            )}
                            rules={{maxLength:3}}
                        />


                    </Box>

                    <Stack spacing={5} direction="row" style={{display:"flex", justifyContent:"center",margin:15}}>

                        <Button onClick={handleClose}  ariant="contained">Cancel</Button>
                        <Button type="submit" variant="outlined">Create</Button>
                    </Stack>
                </Box>
                </form>

            </Modal>
        </div>
    );
}


