import React from "react";
import { Formik, Form, useField } from "formik";
import { Col, Button } from "reactstrap";
import * as Yup from "yup";
import styled from '@emotion/styled';
import './AddForm.css';
import "./styles-custom.css";


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    );
};

// Styled components ....
const StyledSelect = null;
styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
//   &:before {
//     content: "❌ ";
//     font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const AddForm = () => {
    return (
        <React.Fragment>
            <h2 className="text-center" id="font">Add an interview question</h2>
            <hr />

            <Formik
                initialValues={{
                    topic: "",// added for topic
                    level: "", //added for question level
                    time: "", // added for time needed
                    question: "", // added for question
                    answer: "", //added for our answer
                    questionCode: "" //added for question code          
                }}
                validationSchema={Yup.object({
                    topic: Yup.string().oneOf(
                        ["Frontend Fundamentals", "Javascript Fundamentals", "Repository Fundamentals", "Database Fundamentals", "JS Server Fundamentals", "Framework Fundamentals", "Mixed Topics"
                        ], "Invalid Job Type").required("Required"),
                    level: Yup.string()
                        .oneOf(["Entry", "Junior", "Mid-Level"], "Invalid Level").required("Required"),
                    time: Yup.string()
                        .oneOf(["1 Minute", "2 Minute", "3 Minute", "4 Minute", "5 Minute"], "Invalid Level").required("Required"),
                    question: Yup.string().required("Required"),
                    answer: Yup.string().required("Required")
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>

                <Form id="font2">
                    <Form.Row>
                        <Col>
                            <MySelect label="Topic" name="topic">
                                <option value="">Select a Full Stack Topic</option>
                                <option value="1">Frontend Fundamentals</option>
                                <option value="2">Javascript Fundamentals</option>
                                <option value="3">Repository Fundamentals</option>
                                <option value="4">Database Fundamentals</option>
                                <option value="5">JS Server Fundamentals</option>
                                <option value="6">Framework Fundamentals</option>
                                <option value="7">Mixed Topics</option>
                            </MySelect></Col>
                        <Col>
                            <MySelect label="Level" name="level">
                                <option value="">Select a Question Difficulty</option>
                                <option value="1" id="yellow">Entry</option>
                                <option value="2" id="orange">Junior</option>
                                <option value="3" id="red">Mid-Level</option>
                            </MySelect></Col>
                        <Col>
                            <MySelect label="Time" name="time">
                                <option value="">Time to Answer</option>
                                <option value="1">1 Minute</option>
                                <option value="2">2 Minute</option>
                                <option value="3">3 Minute</option>
                                <option value="4">4 Minute</option>
                                <option value="5">5 Minute</option>
                            </MySelect>
                        </Col>
                    </Form.Row>

                    <Form.Row id="place">
                        <Col>
                            <MyTextInput
                                label="Enter the Question you want to add."
                                name="question"
                                type="text"
                                placeholder="Enter Question Here"
                            />
                        </Col>
                        <Col>
                            <MyTextInput
                                label="Add the Answer to the Question"
                                name="firstName"
                                type="text"
                                placeholder="Jane"
                            /></Col>
                        <Col>
                            <MyTextInput
                                label="If your Question has any code, Enter it here"
                                name="code"
                                type="text"
                                placeholder="(Seperate with the Enter Key)"
                            />
                        </Col>
                    </Form.Row>
                    <Button id="btn" variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button id="btn2" variant="primary" type="Cancel">
                        Cancel
                    </Button>
                </Form>
            </Formik>
        </React.Fragment>
    );
};

export default AddForm;