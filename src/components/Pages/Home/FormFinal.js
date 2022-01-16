import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import HeaderBg from "../../../assets/img/HeaderBg.jpg";
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-number-input'
import PhoneNumberInput from "react-phone-number-input/modules/PhoneInputWithCountry";


function FormFinal() {

    //style
    const formoverlay = {
        backgroundColor: 'white', position: 'relative', padding: 50, margin: 'auto', zIndex: 999
    }
    const formbg = {
        backgroundSize: 'cover',
        padding: '50',
        textAlign: 'center',
        backgroundImage: `url(${HeaderBg})`,
        marginBottom: 0
    }
    const fbfield = {
        backgroundColor: '#E5EAF1',
        padding: '16px 40px',
        fontSize: 16,
        lineHeight: '24px',
        fontFamily: 'Segoi ui',
        margin: '0 auto 20px auto',
        width: '90%',
        color: '#212529',
    }
    //styleEnd

    const SignupSchema = Yup.object().shape({
        fullname: Yup.string()
            .min(2, 'Слишком мало символов')
            .max(50, 'Слишком много символов')
            .required('Обязательное поле'),

        city: Yup.string()
            .min(2, 'Слишком мало символов')
            .max(50, 'Слишком много символов')
            .required('Обязательное поле'),

        email: Yup.string().email('Некорректный адрес').required('Обязательное поле'),

        phone: Yup.string()
            .min(2, 'Слишком мало символов')
            .max(50, 'Слишком много символов')
            .required('Обязательное поле'),

    });

    const [value, setValue] = useState()

    return (

        <div className={'section'} style={formbg}>
            <Container style={{padding: 50}}>
                <div style={formoverlay} className={'w-50'}>
                    <h1>Откликнуться на вакансию</h1>
                    <p className={'formdescription'}>Расскажите о себе и мы обязательно напишем вам</p>
                    <Formik
                        initialValues={{
                            fullname: '', city: '', email: '', phone: '', position: '', expirions: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >


                        {({errors, touched}) => (<Form>
                                {errors.fullname && touched.fullname ? (
                                    <div className="formerror">{errors.fullname}</div>) : null}
                                <Field
                                    style={fbfield}
                                    name="fullname"
                                    placeholder="Фамилия и имя"
                                    className={'form-control fbfield'}
                                />


                                {errors.city && touched.city ? (<div className="formerror">{errors.city}</div>) : null}
                                <Field
                                    style={fbfield}
                                    name="city"
                                    placeholder="Город проживания"
                                    className={'form-control fbfield'}
                                />


                                {errors.email && touched.email ? (
                                    <div className="formerror">{errors.email}</div>) : null}
                                <Field
                                    style={fbfield}
                                    name="email"
                                    placeholder="Электронная почта"
                                    type="email"
                                    className={'form-control fbfield'}
                                />

                                <PhoneInput labels={'Контактный номер телефонв'}/>

                                {errors.email && touched.email ? (
                                    <div className="formerror">{errors.email}</div>) : null}
                                <Field
                                    className={'form-select'}
                                    style={fbfield}
                                    name="position"
                                    as="select">

                                    <option value="red">Дизайнер</option>
                                    <option value="red">Фотограф</option>
                                    <option value="red">Продавец</option>
                                    <option value="red">Администратор</option>

                                </Field>


                                {errors.position && touched.position ? (
                                    <div className="formerror">{errors.position}</div>) : null}


                                <Field
                                    className={'form-select'}
                                    style={fbfield} n ame="expirions" as="select">
                                    <option value="red">Red</option>
                                </Field>


                                {errors.expirions && touched.expirions ? (
                                    <div className="formerror">{errors.expirions}</div>) : null}
                                <button style={{
                                    padding: '20px',
                                    border: '3px solid #E84133',
                                    fontFamily: 'Segoi ui',
                                    fontSize: 21,
                                    fontWeight: 'Bold',
                                    color: 'black',
                                    marginTop: 65,
                                    width: '90%'
                                }} className={'btn btn-outline-danger'}> Отправить
                                </button>
                            </Form>)}
                    </Formik>
                </div>
            </Container>
        </div>)


}

export default FormFinal

/*<Files
    multiple={false} maxSize="2mb" multipleMaxSize="10mb"
    accept={["application/pdf", "image/jpg", "image/jpeg"]}
    onSuccess={handleSuccess()}
    onError={handleErrors()}
>
    {({browseFiles, getDropZoneProps}) => {
        return (
            <div>
                <label>Drag and drop files.</label>
                <div
                    {...getDropZoneProps({
                        style: {
                            width: 600,
                            minHeight: 200,
                            border: "2px lightgray dashed"
                        }
                    })}
                >
                    <ol>
                        {this.state.files.map(file => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                        {this.state.errors.map(error => (
                            <li key={error.id}>
                                {error.file ? (
                                    <span>
                {error.file.name} - {error.type}
            </span>
                                ) : (
                                    error.type
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    Dragging not convenient? Click{" "}
                    <button onClick={browseFiles}>here</button>
                    to select files.
                </div>
            </div>
        );
    }}
</Files>*/