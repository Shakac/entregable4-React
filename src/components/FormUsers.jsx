import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo }) => {

    const { register, reset, handleSubmit } = useForm();

    useEffect(() => {
        reset(updateInfo);
    }, [updateInfo]);

    const submit = data => {
        if (updateInfo) {
            //update
            updateUserById('./users', updateInfo.id, data );
            setUpdateInfo();
        } else {
            //crear
        createNewUser('/users', data);
        }
        reset({
            email: "",
            password: "",
            last_name: "",
            first_name: "",
            birthday: "",
        });
        setIsCloseForm(true)
    };

const handleExit = () => {
    reset({
        email: "",
        password: "",
        last_name: "",
        first_name: "",
        birthday: "",
    })
    setIsCloseForm(true)
    setUpdateInfo()
}

  return (
    <form className="form" onSubmit={handleSubmit(submit)}> 
            <h2 className="form___title">Form Users</h2>
            <div onClick={handleExit} className="form__x">X</div>
            <div className="form__section" >
                <label className="form__label" htmlFor="email">Email</label>
                <input className="form__input" {...register('email')} id="email" type="text" />
            </div>
            <div className="form__section">
                <label htmlFor="password">Password</label>
                <input className="form__input" {...register('password')} id="password" type="password" />
            </div>
            <div>
                <label className="form__label" htmlFor="first_name">First Name</label>
                <input className="form__input" {...register('first_name')} id="first nam" type="text" />
            </div>
             <div>
                <label className="form__label" htmlFor="last name">Last Name</label>
                <input className="form__input" {...register('last_name')} id="last name" type="text" />
            </div>
                <div>
                <label className="form__label" htmlFor="birthday">Birthday</label>
                <input className="form__input" {...register('birthday')} id="birthday" type="date" />
            </div>
            <button className="form__btn">{ updateInfo ? 'update' : 'Create' }</button>
        </form>
    );
};

export default FormUsers;
