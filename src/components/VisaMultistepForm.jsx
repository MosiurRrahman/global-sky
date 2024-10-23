"use client"
import React, { useEffect, useState } from 'react'
import SelectComponent from './SelectComponent';
import ImageUploader, { FileObjectType as FileUploaderProps } from "react-image-upload";
import "react-image-upload/dist/index.css";
import axios from 'axios';
import { base_url } from '@/utils/const';
import { useRouter } from 'next/navigation';
const VisaMultistepForm = ({ data, selectedOfferId }) => {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        visa_id: data.data.visaDetails.id,
        visa_offer_id: selectedOfferId,
        name: '',
        mobile: '',
        email: "",
        visa_type: '',
        entry_type: "",
        departure_date: '',
        return_date: "",
        birthday: "",
        whatsapp_number: "",
        nationality: "",
        notes: "",
        destination_country: data.data.visaDetails.get_country.name,
        photo: "",
        passport: '',
        passport_back: '',
        nid_image: '',
        nid_image_back: '',
    });
    // Define required fields
    const requiredFields = [
        'name',
        'mobile',
        'email',
        'visa_type',
        'entry_type',
        'departure_date',
        'return_date',
        'birthday',
        'whatsapp_number',
        'nationality',
        'notes',
        'photo',
        'passport',
        'nid_image',
        'nid_image_back',
        // Add other required fields as needed

        // Add other required fields as needed
    ];
    const validateForm = () => {
        const missingFields = requiredFields.filter(field => !formData[field]);
        return missingFields;
    };
    useEffect(() => {
        if (selectedOfferId !== null) {
            setFormData((prevData) => ({
                ...prevData,
                visa_offer_id: selectedOfferId,
            }));
        }
    }, [selectedOfferId]);

    const totalSteps = 3; // Total number of steps
    const isNextStepOneEnabled = formData.departure_date && formData.return_date;
    const isNextStepTwoEnabled = formData.entry_type && formData.visa_type && formData.destination_country;

    const nextStep = () => {
        if (currentStep === 0 && isNextStepOneEnabled) {
            setCurrentStep(1); // Move to Step 2
        } else if (currentStep === 1 && isNextStepTwoEnabled) {
            setCurrentStep(2); // Move to Step 3
        } else if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1); // Default next step increment
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleImageUpload = (fieldName, file) => {
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: file,
        }));
    };

    const runAfterImageDelete = (fieldName) => {
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: null,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleVisaTypeSelect = (selectedVisaType) => {
        setFormData((prevData) => ({
            ...prevData,
            visa_type: selectedVisaType,
        }));
    };

    const handleEntryTypeSelect = (selectedEntryType) => {
        setFormData((prevData) => ({
            ...prevData,
            entry_type: selectedEntryType,
        }));
    };

    const handleNationalitySelect = (nationality) => {
        setFormData((prevData) => ({
            ...prevData,
            nationality: nationality,
        }));
    };

   // Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const missingFields = validateForm();
    if (missingFields.length > 0) {
        alert(`Missing fields: ${missingFields.join(', ')}`);
        return; // Stop submission if there are missing fields
    }

    // Create a new FormData object
    const formPayload = new FormData();
    // Append all the form fields to the FormData object
    Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
    });

    try {
        // Make the API request
        const response = await axios.post(`${base_url}api/visa/booking`, formPayload, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure multipart/form-data
            },
        });

        // Show success message
        alert(response.data.message);

        // Wait for 2-3 seconds before reloading the page
        setTimeout(() => {
            window.location.reload(); // Reload the current page
        }, 2000); // Adjust the timeout as needed (2000 ms = 2 seconds)

    } catch (error) {
        console.error(error);
        alert('An error occurred while submitting the form. Please try again.'); // Handle error appropriately
    }
};

    const renderButtons = () => {
        if (currentStep === 0) {
            return (
                <div className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-3">
                    <button
                        type="button"
                        className={`next primary-btn1 ${isNextStepOneEnabled ? '' : 'd-none'}`}
                        onClick={nextStep}
                    >
                        Next <i className="bi bi-arrow-right" />
                    </button>
                </div>
            );
        } else if (currentStep === 1) {
            return (
                <div className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-3">
                    <button
                        type="button"
                        className={`prev primary-btn1`}
                        onClick={prevStep}
                    >
                        <i className="bi bi-arrow-left" /> Previous
                    </button>
                    <button
                        type="button"
                        className={`next primary-btn1 ${isNextStepTwoEnabled ? '' : 'd-none'}`}
                        onClick={nextStep}
                    >
                        Next <i className="bi bi-arrow-right" />
                    </button>
                </div>
            );
        } else if (currentStep === 2) {
            return (
                <div className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-3">
                    <button
                        type="button"
                        className="prev primary-btn1"
                        onClick={prevStep}
                    >
                        <i className="bi bi-arrow-left" /> Previous
                    </button>
                    <button
                        className={`primary-btn1 ${isFormDataComplete() ? '' : 'd-none'}`}
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            );
        }
    };

    const isFormDataComplete = () => {
        const { name, mobile, email, nationality } = formData;
        return name && mobile && email && nationality; // Adjust this based on your required fields
    };

    const isStepProcessing = (index) => index === currentStep; // Current step
    const isStepActive = (index) => index < currentStep; // All previous steps

    return (
        <div
            className="modal fade visa-apply-modal"
            id="visa-apply-modal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="visa-apply-modalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content from-wrapper">
                    <button
                        type="button"
                        className="modal-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                        <i className="bi bi-x-circle" />
                    </button>
                    <div className="modal-header ">
                        <ul className="visa-form-step" id="progressbar">
                            <li className={isStepProcessing(0) ? "processing" : isStepActive(0) ? "active" : ""}>Step 1: Travel Date</li>
                            <li className={isStepProcessing(1) ? "processing" : isStepActive(1) ? "active" : ""}>Step 2: Visa Type</li>
                            <li className={isStepProcessing(2) ? "processing" : isStepActive(2) ? "active" : ""}>Step 3: Personal Info</li>
                        </ul>
                    </div>
                    <div className="modal-body ">
                        <form id="msform" className="visa-form" onSubmit={handleSubmit}>
                            {/* Step 1 */}
                            {currentStep === 0 && (
                                <fieldset className="postcode active">
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="step-title">
                                                <h4>Travel Details</h4>
                                                <p>Provide your travel details.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="from-wrapper">
                                                <div className="row">
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Departure Date</label>
                                                            <input
                                                                type="date"
                                                                value={formData.departure_date || ''}  // Ensure empty string as fallback if formData.departure_date is null
                                                                onChange={(e) => handleChange(e)} // Pass the event directly
                                                                name="departure_date"  // The name should match the state field (i.e., "departure_date")
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Return Date</label>
                                                            <input value={formData.return_date || ''}  // Ensure empty string as fallback if formData.departure_date is null
                                                                onChange={(e) => handleChange(e)} type="date" name="return_date" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {renderButtons()}
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            )}

                            {/* Step 2 */}
                            {currentStep === 1 && (
                                <fieldset className="postcode active">
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="step-title">
                                                <h4>Visa Details</h4>
                                                <p>Provide your visa details.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="from-wrapper">
                                                <div className="row">
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Entry Type</label>
                                                            <SelectComponent defaultValue={"Single"} onSelect={handleEntryTypeSelect} options={["Single", "Double", "Triple", "Multiple"]} placeholder={"Select Entry Type"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Type of Visa</label>
                                                            <SelectComponent defaultValue={data.data.visa_types.slice(0, 1).map((e) => e.name)} onSelect={handleVisaTypeSelect} options={data.data.visa_types.map((e) => e.name)} placeholder={"Select Type of Visa"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Country of Application</label>
                                                            <input readOnly value={formData.destination_country} onChange={handleChange} type="text" name='destination_country' placeholder="Country" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {renderButtons()}
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            )}

                            {/* Step 3 */}
                            {currentStep === 2 && (
                                <fieldset className="postcode active">
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="step-title">
                                                <h4>Personal Information &amp; Requirement Upload</h4>
                                                <p>Provide your personal information and upload necessary documents.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="from-wrapper">
                                                <div className="row">
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>Full name</label>
                                                            <input value={formData.name} onChange={handleChange} type="text" name='name' placeholder="Enter your full neme" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>Date of Birth</label>
                                                            <input value={formData.birthday} onChange={handleChange} name='birthday' type="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Nationality</label>
                                                            <SelectComponent required onSelect={handleNationalitySelect} options={data.data.countries.map((e) => e.nationality)} placeholder={"Select Nationality"} />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="image-drop-area mb-25">
                                                            <div className="dropzone dropzone-1 text-center dz-clickable">
                                                                <div className="icon">
                                                                    <ImageUploader
                                                                        style={{ height: 110, width: 200, background: "url(/assets/image/icon/image-upload.png) no-repeat center center" }}
                                                                        onFileAdded={(file) => handleImageUpload('photo', file.file)
                                                                        } // Handle passport back upload
                                                                        onFileRemoved={() => runAfterImageDelete('photo')}  // Handle main photo removal
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="image-drop-area mb-25">
                                                            <div className="dropzone dropzone-1 text-center dz-clickable">
                                                                <div className="icon">
                                                                    {/* <ImageUploader
                                                                        style={{ height: 110, width: 200, background: "url(/assets/image/icon/nid-font.png) no-repeat center center" }}
                                                                        onFileAdded={getImageFileObject} // function that runs to confirm that your image actually exists
                                                                        onFileRemoved={runAfterImageDelete} // function runs on once you delete your image
                                                                    /> */}
                                                                    {/* Separate Image Uploader for Passport Back */}
                                                                    <ImageUploader
                                                                        style={{ height: 110, width: 200, background: "url(/assets/image/icon/nid-back.png) no-repeat center center" }}
                                                                        onFileAdded={(file) => handleImageUpload('nid_image_back', file.file)
                                                                        } // Handle passport back upload
                                                                        onFileRemoved={() => runAfterImageDelete('nid_image_back')} // Handle passport back removal
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="image-drop-area mb-25">
                                                            <div className="dropzone dropzone-1 text-center dz-clickable">
                                                                <div className="icon">
                                                                    {/* <ImageUploader
                                                                        style={{ height: 110, width: 200, background: "url(/assets/image/icon/nid-font.png) no-repeat center center" }}
                                                                        onFileAdded={getImageFileObject} // function that runs to confirm that your image actually exists
                                                                        onFileRemoved={runAfterImageDelete} // function runs on once you delete your image
                                                                    /> */}
                                                                    {/* Separate Image Uploader for Passport Back */}
                                                                    <ImageUploader
                                                                        style={{ height: 110, width: 200, background: "url(/assets/image/icon/nid-font.png) no-repeat center center" }}
                                                                        onFileAdded={(file) => handleImageUpload('nid_image', file.file)
                                                                        } // Handle passport back upload
                                                                        onFileRemoved={() => runAfterImageDelete('nid_image')} // Handle passport back removal
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="image-drop-area mb-25">
                                                            <div className="dropzone dropzone-1 text-center dz-clickable">
                                                                <div className="icon">
                                                                    {/* Separate Image Uploader for Passport Back */}
                                                                    {/* <ImageUploader
                                                                        style={{ height: 110, width: 200, background: "url(/assets/image/icon/passport-copy.png) no-repeat center center" }}
                                                                        onFileAdded={(file) => handleImageUpload('passport', file)} // Handle passport back upload
                                                                        onFileRemoved={() => runAfterImageDelete('passport')} // Handle passport back removal
                                                                    /> */}

                                                                    <ImageUploader
                                                                        style={{ height: 110, width: 200, background: "url(/assets/image/icon/passport-copy.png) no-repeat center center" }}
                                                                        onFileAdded={(file) => handleImageUpload('passport', file.file)
                                                                        } // Handle passport back upload
                                                                        onFileRemoved={() => runAfterImageDelete('passport')} // function runs on once you delete your image
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8 mb-35">
                                                        <div className="form-inner">
                                                            <label>Notes</label>
                                                            <textarea value={formData.notes} onChange={handleChange} name='notes' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>Mobile Number</label>
                                                            <input required value={formData.mobile} onChange={handleChange} name='mobile' type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>WhatsApp Number</label>
                                                            <input required value={formData.whatsapp_number} onChange={handleChange} name='whatsapp_number' type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-20">
                                                        <div className="form-inner">
                                                            <label>Email Address</label>
                                                            <input required value={formData.email} onChange={handleChange} name='email' type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-50">
                                                        <div className="form-check">
                                                            <input required className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                                                            <label className="form-check-label" htmlFor="contactCheck">
                                                                I have read &amp; accepted Terms &amp; Conditions.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-35">
                                                        <div className="form-inner">
                                                            <h6>DISCLAIMER</h6>
                                                            <p>This is to confirm that Global Sky Visa Services EST. will not in
                                                                any manner be liable or responsible for any delay in the
                                                                processing or rejection of any Visa applications, once the
                                                                documents have been delivered to the respectful Consulate
                                                                General. Upon receiving your documents make every effort to
                                                                ensure that the Visa(s) you have requested are correct: Any
                                                                Visa(s) you have requested have been obtained The dates of the
                                                                Visa(s) cover your period of intended stay for each country with
                                                                the appropriate number of entries you have requested. Your
                                                                Passport is valid for the appropriate time you will be abroad.
                                                                By entering your email address, you agree to receive emails
                                                                (including the picture newsletter, as well as promotional offers
                                                                and announcements.)</p>
                                                        </div>
                                                    </div>
                                                    {renderButtons()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaMultistepForm